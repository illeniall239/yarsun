# Learnings

## Toolchain (this machine)
- The only JDK is Android Studio's bundled JBR, OpenJDK 25.0.3, at `~/android-studio/jbr`; there is no system JDK. Gradle and AGP must run on JDK 25 or use a toolchain. Evidence: `java` not on PATH before setup; `~/android-studio/jbr/bin/java -version`. (2026-10-24, setup)
- Android SDK is at `~/Android/Sdk` (platform 36, build-tools 36.1.0, platform-tools 37.0.1, emulator 37.2.12, system image android-36 google_apis x86_64). `ANDROID_HOME`, `JAVA_HOME` and PATH are fish universal variables; non-fish shells (the agent's Bash tool) need `export JAVA_HOME=~/android-studio/jbr ANDROID_HOME=~/Android/Sdk`. (2026-10-24, setup)
- `sdkmanager` 22.0 prints a deprecation warning pointing to the new `android sdk` CLI but still works. `avdmanager create avd -d pixel_6` prints "Could not load devices from .../devices.xml" yet creates the AVD correctly (`yarsun_api36`, hw.device.name=pixel_6). (2026-10-24, setup)
- `/dev/kvm` is world read-write, so the emulator gets hardware acceleration without joining the kvm group. (2026-10-24, setup)
- gitleaks 8.30.1, osv-scanner 2.7.0 and semgrep 1.182.1 (own venv at `~/.local/share/semgrep-venv`) live in `~/.local/bin`. No Docker yet; MobSF (S18) needs it. (2026-10-24, setup)
