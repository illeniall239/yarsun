# YarSun

YarSun is an Android wellness and self-help companion for adults in Pakistan. The AI
runs entirely on the phone (LiteRT-LM); conversations never leave the device. The plan,
its decisions and its threat model are in [`docs/plans/ai-therapist/`](docs/plans/ai-therapist/).

## Prerequisites

| Tool | Version | Notes |
|------|---------|-------|
| JDK | 25 | Android Studio's bundled JetBrains Runtime works: `export JAVA_HOME=~/android-studio/jbr` (macOS: `"/Applications/Android Studio.app/Contents/jbr/Contents/Home"`). Gradle itself comes from the wrapper. |
| Android SDK | see below | `export ANDROID_HOME=~/Android/Sdk`, or put `sdk.dir=...` in `local.properties` (git-ignored). |
| gitleaks | 8.30.1 | Secret scan. From [its releases](https://github.com/gitleaks/gitleaks/releases/tag/v8.30.1); check the archive against `gitleaks_8.30.1_checksums.txt`. |
| osv-scanner | 2.7.0 | Dependency advisories. From [its releases](https://github.com/google/osv-scanner/releases/tag/v2.7.0); check the binary against `osv-scanner_SHA256SUMS`. |
| Semgrep | 1.182.1 | Static analysis. `python3 -m venv ~/.local/share/semgrep-venv && ~/.local/share/semgrep-venv/bin/pip install semgrep==1.182.1`, or the Docker image pinned in `.github/workflows/ci.yml`. |

SDK packages (install with Android Studio's SDK Manager or `sdkmanager`, after accepting
the licences with `sdkmanager --licenses`):

```sh
sdkmanager "platforms;android-37.0" "build-tools;36.0.0" "platform-tools" \
  "emulator" "system-images;android-36;google_apis;x86_64"
```

`compileSdk` is 37 because Compose UI 1.12 requires it; `targetSdk` is 36 and `minSdk` 31
(plan decision D12). The emulator and system image are needed only for emulator tests.

## Setup and test

One command builds the app and runs the unit tests (JUnit 4 + Robolectric + Compose UI
test), Android Lint with warnings as errors, and detekt (2.0.0-alpha.6, the first line that
runs on JDK 25):

```sh
./gradlew check
```

The first run downloads Gradle 9.8.2 (checked against the SHA-256 in
`gradle/wrapper/gradle-wrapper.properties`) and every dependency. Each dependency is
checked against `gradle/verification-metadata.xml` and the versions in the committed
`gradle.lockfile`s; a mismatch fails the build.

Single checks: `./gradlew testDebugUnitTest`, `./gradlew lintDebug`, `./gradlew detekt`.

## Emulator tests

Create an emulator once (any name; CI uses API 36, `google_apis`, x86_64), start it, then
run the instrumented tests:

```sh
avdmanager create avd -n yarsun_api36 -k "system-images;android-36;google_apis;x86_64" -d pixel_6
emulator -avd yarsun_api36 -no-window -no-audio -no-snapshot &
adb wait-for-device
./gradlew connectedDebugAndroidTest
```

Tests in `app/src/sharedTest/` run both on the JVM (Robolectric) and on the emulator.

## Security scanners

Run these from the repository root; CI runs the same commands on every push.

```sh
semgrep scan --config p/kotlin --config p/mobsfscan --error --metrics=off
gitleaks git --redact
osv-scanner scan source -r .
```

The Semgrep rulesets are `p/kotlin` (Kotlin security rules) and `p/mobsfscan` (MobSF's
Android rules for Kotlin and Java). Release builds are also scanned with MobSF, image
`opensecurity/mobile-security-framework-mobsf:v4.5.3@sha256:5113fbad0727445dda01afdccafea5e107bfa8632ead8a169492f5caa8aa1b7c`.

## Changing a dependency

Only dependencies the plan lists may be added. After changing `gradle/libs.versions.toml`,
regenerate the lockfiles and checksums, then audit:

```sh
rm gradle/verification-metadata.xml
export GRADLE_USER_HOME="$(mktemp -d)"   # empty cache: every file is downloaded and recorded
./gradlew resolveAndLockAll --write-locks --write-verification-metadata sha256
export GRADLE_USER_HOME="$(mktemp -d)"   # a second empty cache, now with the new locks in force
./gradlew clean build connectedDebugAndroidTest --write-verification-metadata sha256   # emulator running
unset GRADLE_USER_HOME
osv-scanner scan source -r .
```

Both passes need an empty cache: with a warm one Gradle leaves parent POMs and BOMs out of
the metadata. The second pass is needed because a locked build fetches some POMs and BOMs
that the lock-writing pass never touches; without them a fresh clone fails verification.

Review the diff of `gradle/verification-metadata.xml` and the lockfiles before committing.
The `[bundles] build-tool-security-floors` entries in the catalog lift libraries that AGP and
Lint pull in at build time above versions with published advisories; they are never part of
the app.

Lint's online version checks (`NewerVersionAvailable`, `GradleDependency`) are off in
`app/lint.xml`, so an upstream release never fails an unchanged build. Advisories are
caught by OSV-Scanner instead, and upgrading is a deliberate change made with the steps
above.

## Where things live

| Path | What |
|------|------|
| `app/src/main/kotlin/pk/yarsun/app/` | App code, one package per module of the plan's architecture |
| `app/src/sharedTest/` | Tests that run both on the JVM (Robolectric) and on a device; JVM-only tests go in `app/src/test/`, device-only ones in `app/src/androidTest/` |
| `gradle/libs.versions.toml` | Every dependency and plugin version |
| `gradle/verification-metadata.xml`, `**/gradle.lockfile`, `*-gradle.lockfile` | Dependency checksums and locked versions |
| `config/detekt.yml`, `app/lint.xml` | detekt and Lint settings |
| `.github/workflows/ci.yml` | CI: unit tests, Lint, detekt, Semgrep, gitleaks, OSV-Scanner, emulator tests |
| `docs/plans/ai-therapist/` | The plan, decisions and threat model |
