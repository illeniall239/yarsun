# Learnings

## Toolchain (this machine)
- The only JDK is Android Studio's bundled JBR, OpenJDK 25.0.3, at `~/android-studio/jbr`; there is no system JDK. Gradle and AGP must run on JDK 25 or use a toolchain. Evidence: `java` not on PATH before setup; `~/android-studio/jbr/bin/java -version`. (2026-10-24, setup)
- Android SDK is at `~/Android/Sdk` (platform 36, build-tools 36.1.0, platform-tools 37.0.1, emulator 37.2.12, system image android-36 google_apis x86_64). `ANDROID_HOME`, `JAVA_HOME` and PATH are fish universal variables; non-fish shells (the agent's Bash tool) need `export JAVA_HOME=~/android-studio/jbr ANDROID_HOME=~/Android/Sdk`. (2026-10-24, setup)
- `sdkmanager` 22.0 prints a deprecation warning pointing to the new `android sdk` CLI but still works. `avdmanager create avd -d pixel_6` prints "Could not load devices from .../devices.xml" yet creates the AVD correctly (`yarsun_api36`, hw.device.name=pixel_6). (2026-10-24, setup)
- `/dev/kvm` is world read-write, so the emulator gets hardware acceleration without joining the kvm group. (2026-10-24, setup)
- gitleaks 8.30.1, osv-scanner 2.7.0 and semgrep 1.182.1 (own venv at `~/.local/share/semgrep-venv`) live in `~/.local/bin`. No Docker yet; MobSF (S18) needs it. (2026-10-24, setup)

## Build (Gradle / AGP / Kotlin)
- AGP 9.4.1 bundles KGP 2.2.10; to compile with Kotlin 2.4.x, declare `org.jetbrains.kotlin.android` with `apply false` in the root build and never apply it in modules (AGP 9 built-in Kotlin). Evidence: `buildEnvironment` shows `kotlin-gradle-plugin:2.2.10 -> 2.4.21`. (2026-10-24, S1)
- Compose ui 1.12.x requires compileSdk 37 (AAR metadata check); `platforms;android-37.0` is installed for that. targetSdk stays 36 (plan). (2026-10-24, S1)
- detekt 1.23.x crashes on any JDK 25 (`JavaVersion.parse` in its embedded Kotlin 2.0.21; detekt#9772, no 1.x fix). We use 2.0.0-alpha.6 (`dev.detekt`); 2.0 dropped the 1.x `build: maxIssues` config section. (2026-10-24, S1)
- Robolectric 4.17 on JDK 25 needs `--add-exports=java.base/jdk.internal.access=ALL-UNNAMED`; without offline mode it downloads `android-all-instrumented` at test time, outside Gradle verification, so it is fetched through a locked Gradle configuration. (2026-10-24, S1)
- Verification metadata must be generated in two passes, each from an empty `GRADLE_USER_HOME` (README): lock-writing alone misses parent POMs/BOMs a locked build fetches and aapt2, which AGP fetches only while tasks run. A warm cache hides the gap; only an empty-cache fresh clone shows it. (2026-10-24, S1)
- Gradle doesn't write `--write-locks` output when the build fails; run `resolveAndLockAll --write-locks` on its own. (2026-10-24, S1)
- With a version catalog, the settings classpath can't use STRICT lock mode: `--write-locks` never writes its state (gradle/gradle#23727, open). It stays default; verification metadata still rejects unlisted settings plugins. (2026-10-24, S1)
- An empty-cache build downloads ~1,050 files / ~900 MB (Robolectric jars 203 MB + 151 MB) and takes ~7 min on this connection; warm `./gradlew check` takes seconds. (2026-10-24, S1)

## Tooling
- Semgrep registry has no `p/android`; `p/mobsfscan` is the maintained Android ruleset (used with `p/kotlin`). (2026-10-24, S1)
