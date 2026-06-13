---
hide:
  - navigation
---

# 개발환경 설정

[← Java로 돌아가기](index.md)

## 1. WSL 설치

WSL(Windows Subsystem for Linux)은 Windows에서 Linux 환경을 실행하는 기능입니다.

### 1.1 PowerShell 실행

화면 하단 작업 표시줄의 검색창에 **PowerShell** 을 입력한 뒤 **Windows PowerShell** 을 클릭합니다.

!!! tip "관리자 권한이 필요한 경우"
    설치 단계에서는 관리자 권한이 필요합니다. 검색 결과에서 **Windows PowerShell** 을 **우클릭** 한 뒤 **관리자 권한으로 실행** 을 선택합니다.

### 1.2 설치 여부 확인

PowerShell에서 아래 명령어를 실행합니다.

```powershell
wsl --list --verbose
```

배포판 목록이 출력되면 이미 설치된 것입니다. 아무것도 출력되지 않거나 오류가 발생하면 다음 단계로 진행합니다.

### 1.3 설치

PowerShell을 **관리자 권한**으로 실행한 뒤 아래 명령어를 입력합니다.

```powershell
wsl --install
```

설치 완료 후 재부팅하면 Ubuntu가 자동으로 설정됩니다.

### 1.4 설치 확인

재부팅 후 PowerShell에서 다시 확인합니다.

```powershell
wsl --list --verbose
```

```
  NAME      STATE           VERSION
* Ubuntu    Running         2
```

`Ubuntu`가 목록에 표시되면 정상입니다.

### 1.5 사용

**방법 A** — 시작 메뉴에서 **Ubuntu**를 검색하여 실행합니다.

**방법 B** — PowerShell에서 아래 명령어를 입력합니다.

```powershell
wsl
```

이후 모든 작업은 이 **WSL 터미널(Ubuntu)** 에서 진행합니다.

---

## 2. VSCode 설치

VSCode는 Windows에 설치하고, WSL Extension을 통해 Linux 환경에 연결합니다.

### 2.1 설치 여부 확인

WSL 터미널에서 아래 명령어를 실행합니다.

```bash
code --version
```

버전이 출력되면 이미 설치된 것입니다. 명령어를 찾을 수 없으면 다음 단계로 진행합니다.

### 2.2 설치

PowerShell을 **관리자 권한**으로 실행한 뒤 아래 명령어를 입력합니다.

```powershell
winget install Microsoft.VisualStudioCode
```

다운로드가 완료되면 VSCode 설치 마법사 창이 열립니다. 안내에 따라 설치를 진행합니다.

!!! tip "Add to PATH 옵션"
    설치 마법사에서 **Add to PATH (requires shell restart)** 옵션을 반드시 체크합니다. 이 옵션이 없으면 WSL 터미널에서 `code` 명령어를 사용할 수 없습니다.

### 2.3 설치 확인

WSL 터미널을 재시작한 뒤 다시 확인합니다.

```bash
code --version
```

버전 번호가 출력되면 정상입니다. 설치된 버전에 따라 아래와 다를 수 있습니다.

```
1.96.0
abc1234abcdef1234567890abcdef1234567890ab
x64
```

### 2.4 WSL Extension 설치

WSL Extension을 설치합니다. 이 확장은 Windows에 설치된 VSCode가 WSL(Linux) 환경에 연결할 수 있게 해줍니다. PowerShell에서 아래 명령어를 실행합니다.

```powershell
code --install-extension ms-vscode-remote.remote-wsl
```

---

## 3. OpenJDK 17 설치 (SDKMAN)

SDKMAN은 터미널에서 JDK 버전을 관리하는 도구입니다.

JDK(Java Development Kit)는 Java 코드를 작성하고 실행하는 데 필요한 도구 모음입니다.

### 3.1 설치 여부 확인

WSL 터미널에서 아래 명령어를 실행합니다.

```bash
java -version
```

`openjdk 17`이 출력되면 이미 설치된 것입니다. 그렇지 않으면 다음 단계로 진행합니다.

### 3.2 사전 패키지 설치

SDKMAN은 `curl`, `zip`, `unzip` 패키지를 필요로 합니다. 누락된 패키지만 설치하도록 WSL 터미널에서 아래 명령어를 실행합니다.

```bash
if ! dpkg -s curl zip unzip > /dev/null 2>&1; then
    sudo apt-get update && sudo apt-get install -y curl zip unzip
fi
```

### 3.3 SDKMAN 설치

공식 설치 스크립트를 내려받아 실행한 뒤, `source` 명령으로 현재 터미널에 즉시 적용합니다.

```bash
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
```

### 3.4 OpenJDK 17 설치

먼저 설치 가능한 Java 버전 목록을 확인합니다.

```bash
sdk list java
```

목록에서 `17`로 시작하고 `Vendor`가 `open`인 항목을 찾습니다. `Identifier` 열의 값이 설치 시 사용할 버전 이름입니다. 최신 버전은 아래 예시와 다를 수 있습니다.

```
================================================================================
Available Java Versions for Linux 64bit
================================================================================
 Vendor        | Use | Version      | Dist    | Status     | Identifier
--------------------------------------------------------------------------------
 ...
 Java.net      |     | 17.0.15      | open    |            | 17.0.15-open
 ...
================================================================================
```

목록에서 확인한 최신 `open` 17 버전의 Identifier를 사용해 설치합니다.

```bash
sdk install java 17.0.15-open
```

설치 중 기본 버전으로 설정할지 묻는 프롬프트가 나타납니다. `Y`를 입력하면 자동으로 설정됩니다.

```
Do you want java 17.0.15-open to be set as default? (Y/n): Y
```

### 3.5 설치 확인

설치가 완료되면 아래 명령어로 버전을 확인합니다.

```bash
java -version
```

```
openjdk version "17.0.15" 2025-04-15
OpenJDK Runtime Environment (build 17.0.15+6-Debian-1)
OpenJDK 64-Bit Server VM (build 17.0.15+6-Debian-1, mixed mode, sharing)
```

`openjdk 17`이 출력되면 정상입니다.

!!! tip "기본 버전 수동 설정"
    설치 중 프롬프트에서 `n`을 입력했거나 기본 버전이 설정되지 않은 경우, 아래 명령어로 직접 설정할 수 있습니다.

    ```bash
    sdk default java 17.0.15-open
    ```

---

## 4. 프로젝트 생성 및 실행 (VSCode)

### 4.1 Extension Pack for Java 설치 (최초 1회)

Java 프로젝트를 생성하고 실행할 수 있게 해주는 VSCode 확장 도구입니다.

WSL 터미널에서 아래 명령어를 실행하여 설치합니다.

```bash
code --install-extension vscjava.vscode-java-pack
```

### 4.2 workspace 생성

workspace는 Java 프로젝트를 모아두는 작업 폴더입니다. WSL 터미널에서 아래 명령어로 생성합니다.

```bash
mkdir -p ~/programming/basic-language/java-workspace
```

생성한 폴더로 이동한 뒤 VSCode를 엽니다.

```bash
cd ~/programming/basic-language/java-workspace
code .
```

### 4.3 Java 프로젝트 생성

아래와 같은 순서로 Java 프로젝트를 생성합니다.

1. WSL 터미널에서 `code .`를 실행하여 VSCode를 엽니다.
2. VSCode 커맨드 팔레트(`Ctrl+Shift+P`)를 엽니다.
3. `Java: Create Java Project`를 선택합니다.
4. `No build tools`를 선택합니다.
5. 프로젝트를 저장할 폴더를 지정합니다.
6. 프로젝트 이름을 입력합니다.

생성되는 기본 구조는 아래와 같습니다.

```
sample-project/
├── src/
│   └── App.java
└── README.md
```

!!! tip "기존 VSCode 창 닫기"
    프로젝트 생성 후 새로운 VSCode 창이 자동으로 열립니다. 기존 창은 닫아도 됩니다.

### 4.4 기존 프로젝트 열기

WSL 터미널에서 아래 명령어로 프로젝트 폴더로 이동한 뒤 VSCode를 엽니다.

```bash
cd ~/programming/basic-language/java-workspace/sample-project
code .
```

VSCode가 해당 폴더를 프로젝트로 열어줍니다.

### 4.5 샘플 프로젝트 실행

`src/App.java`를 열면 아래 코드가 미리 작성되어 있습니다.

```java
public class App {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

`App.java` 파일에서 `public static void main(String[] args) {` 바로 위의 `▷ Run` 버튼을 클릭합니다.

```
Hello, World!
```

터미널에서 다음과 같은 문구가 나오면 성공입니다.
