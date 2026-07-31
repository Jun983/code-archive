---
hide:
  - navigation
---

# 개발환경 설정

[← Java로 돌아가기](index.md)

Java 실습에는 코드 편집기인 VSCode와, 코드를 컴파일·실행할 OpenJDK 17이 필요합니다. 이 문서에서는 macOS와 Windows로 나누어 두 도구를 모두 터미널 명령으로 설치하고, VSCode에서 Java 프로젝트를 생성·실행하는 방법까지 다룹니다.

| 개념 | 설명 |
|---|---|
| VSCode | 코드를 작성·실행하는 편집기 |
| OpenJDK 17 | 코드를 컴파일·실행하는 JDK 배포판 |
| 프로젝트 생성 및 실행 | VSCode에서 Java 프로젝트를 만들고 실행하는 것 |

---

## 1. VSCode 설치

=== "macOS"

    1. Homebrew의 cask는 GUI 애플리케이션을 설치할 때 사용하는 저장소입니다. cask로 VSCode를 설치합니다.

        ```bash
        brew install --cask visual-studio-code
        ```

    2. 설치가 끝나면 터미널을 새로 열어 정상적으로 설치되었는지 확인합니다.

        ```bash
        code --version
        ```

        버전 번호가 출력되면 정상입니다.

=== "Windows"

    1. PowerShell을 관리자 권한으로 열어 아래 명령을 실행합니다.

        ```powershell
        winget install Microsoft.VisualStudioCode
        ```

        !!! tip "Add to PATH 옵션"
            설치 마법사에서 **Add to PATH (requires shell restart)** 옵션을 반드시 체크합니다. 이 옵션이 없으면 터미널에서 `code` 명령어를 사용할 수 없습니다.

    2. 설치가 끝나면 터미널을 새로 열어 정상적으로 설치되었는지 확인합니다.

        ```bash
        code --version
        ```

        버전 번호가 출력되면 정상입니다.

!!! summary "요약"
    macOS는 Homebrew cask로, Windows는 winget으로 VSCode를 설치할 수 있습니다.

## 2. OpenJDK 17 설치

=== "macOS"

    1. Homebrew로 OpenJDK 17을 설치합니다.

        ```bash
        brew install openjdk@17
        ```

    2. Homebrew로 설치한 JDK는 시스템이 바로 찾지 못하므로, 아래 명령으로 시스템 경로에 연결해줍니다.

        ```bash
        sudo ln -sfn /opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
        ```

    3. 설치가 끝나면 터미널을 새로 열어 정상적으로 설치되었는지 확인합니다.

        ```bash
        java -version
        ```

        ```
        openjdk version "17.0.15" 2025-04-15
        OpenJDK Runtime Environment (build 17.0.15+6)
        OpenJDK 64-Bit Server VM (build 17.0.15+6, mixed mode, sharing)
        ```

        `openjdk 17`이 출력되면 정상입니다.

=== "Windows"

    1. PowerShell을 관리자 권한으로 열어 아래 명령을 실행합니다.

        ```powershell
        winget install Microsoft.OpenJDK.17
        ```

    2. 설치가 끝나면 터미널을 새로 열어 정상적으로 설치되었는지 확인합니다.

        ```bash
        java -version
        ```

        ```
        openjdk version "17.0.15" 2025-04-15
        OpenJDK Runtime Environment (build 17.0.15+6)
        OpenJDK 64-Bit Server VM (build 17.0.15+6, mixed mode, sharing)
        ```

        `openjdk 17`이 출력되면 정상입니다.

!!! summary "요약"
    macOS는 Homebrew로 설치 후 심볼릭 링크를 연결하고, Windows는 winget 설치만으로 OpenJDK 17을 사용할 수 있습니다.

## 3. VSCode 확장을 이용한 프로젝트 생성 및 실행

1. Java 프로젝트를 생성하고 실행할 수 있게 해주는 VSCode 확장을 설치합니다.

    ```bash
    code --install-extension vscjava.vscode-java-pack
    ```

2. workspace는 Java 프로젝트를 모아두는 작업 폴더입니다. 폴더를 생성하고 VSCode로 엽니다.

    ```bash
    mkdir -p ~/programming/basic-language/java-workspace
    cd ~/programming/basic-language/java-workspace
    code .
    ```

3. 아래와 같은 순서로 Java 프로젝트를 생성합니다.

    1. VSCode 커맨드 팔레트(macOS: `Cmd+Shift+P`, Windows: `Ctrl+Shift+P`)를 엽니다.
    2. `Java: Create Java Project`를 선택합니다.
    3. `No build tools`를 선택합니다.
    4. 프로젝트를 저장할 폴더를 지정합니다.
    5. 프로젝트 이름을 입력합니다.

    생성되는 기본 구조는 아래와 같습니다.

    ```
    sample-project/
    ├── src/
    │   └── App.java
    └── README.md
    ```

4. `src/App.java`를 열면 아래 코드가 미리 작성되어 있습니다.

    ```java
    public class App {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
    }
    ```

5. `public static void main(String[] args) {` 바로 위의 `▷ Run` 버튼을 클릭해 실행합니다.

    ```
    Hello, World!
    ```

    터미널에서 이 문구가 출력되면 성공입니다.

!!! summary "요약"
    Extension Pack for Java를 설치하면 VSCode 안에서 프로젝트 생성부터 실행까지 한 번에 처리할 수 있습니다.
