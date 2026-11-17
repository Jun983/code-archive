---
hide:
  - navigation
---

# 개발환경 설정

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 VSCode와 OpenJDK 17을 설치하고, `Hello, World!`가 출력되는 것까지 확인하면 충분합니다. 심볼릭 링크 연결이나 `PATH` 같은 세부 설정은 이런 것이 있다는 정도만 훑어보고, 오류가 났을 때 다시 찾아보면 훨씬 쉽게 이해됩니다.

Java 실습에는 코드 편집기인 VSCode와, 코드를 컴파일·실행할 OpenJDK 17이 필요하며, 이 문서에서는 macOS와 Windows로 나누어 두 도구를 터미널 명령으로 설치하고, `JAVA_HOME`과 `PATH`를 설정하며, 터미널에서 직접 컴파일·실행하고 VSCode에서 프로젝트를 생성·실행하는 방법을 다룹니다.

---

## 1. 개발환경이란

Java 코드를 작성하고 실행하려면 코드를 입력하는 편집기와, 코드를 컴파일하고 실행하는 JDK가 필요합니다. 이 문서는 VSCode와 OpenJDK 17 조합을 사용합니다.

| 용어 | 설명 |
|---|---|
| VSCode | 코드를 작성·실행하는 편집기 |
| OpenJDK 17 | 코드를 컴파일·실행하는 JDK 배포판 |
| 프로젝트 | 소스 코드와 설정을 모아둔 작업 단위 |
| `PATH` | 터미널이 명령어를 찾을 때 확인하는 경로 목록 |
| `JAVA_HOME` | 사용할 JDK가 설치된 경로를 가리키는 환경 변수 |

- JDK와 JRE의 차이는 [Java 개요](overview.md)에서 다룹니다.

---

## 2. VSCode 설치

### 설치 및 확인

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

### 설치 오류

설치 후 터미널에서 `code` 명령을 찾지 못하면 아래와 같은 오류가 출력됩니다.

```text
zsh: command not found: code
```

| 상황 | 해결 |
|---|---|
| 설치 직후 같은 터미널에서 실행함 | 터미널을 새로 열어 `PATH`를 다시 읽게 합니다. |
| Windows에서 Add to PATH를 체크하지 않음 | VSCode를 다시 설치하며 옵션을 체크합니다. |

- 오류 메시지는 사용하는 셸과 운영체제에 따라 다를 수 있습니다.

---

## 3. OpenJDK 17 설치

### 설치 및 확인

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

        ```text
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

        ```text
        openjdk version "17.0.15" 2025-04-15
        OpenJDK Runtime Environment (build 17.0.15+6)
        OpenJDK 64-Bit Server VM (build 17.0.15+6, mixed mode, sharing)
        ```

        `openjdk 17`이 출력되면 정상입니다.

### 설치 오류

`java -version`을 실행했을 때 JDK를 찾지 못하면 아래와 같은 오류가 출력됩니다.

```text
The operation couldn't be completed. Unable to locate a Java Runtime.
```

| 상황 | 해결 |
|---|---|
| macOS에서 심볼릭 링크를 연결하지 않음 | 2번 단계의 `ln -sfn` 명령을 실행합니다. |
| Windows에서 설치 직후 같은 터미널에서 실행함 | 터미널을 새로 엽니다. |

- 오류 메시지는 운영체제와 설치 방식에 따라 다를 수 있습니다.

---

## 4. JAVA_HOME과 PATH 설정

`java`와 `javac`를 어느 위치에서나 실행하려면 터미널이 JDK의 `bin` 폴더를 찾을 수 있어야 하고, Maven·Gradle 같은 도구는 `JAVA_HOME`으로 JDK 위치를 확인합니다. 앞 단계의 설치로 `java -version`이 이미 동작하면 `PATH`는 설정된 것이므로, `JAVA_HOME`이 필요할 때만 아래 절차를 따릅니다.

=== "macOS"

    1. `java_home` 도구로 JDK 17의 설치 경로를 확인합니다.

        ```bash
        /usr/libexec/java_home -v 17
        ```

        ```text
        /Library/Java/JavaVirtualMachines/openjdk-17.jdk/Contents/Home
        ```

    2. `~/.zshrc`에 아래 두 줄을 추가합니다.

        ```bash
        export JAVA_HOME=$(/usr/libexec/java_home -v 17)
        export PATH="$JAVA_HOME/bin:$PATH"
        ```

    3. 설정을 반영하고 확인합니다.

        ```bash
        source ~/.zshrc
        echo $JAVA_HOME
        ```

=== "Windows"

    1. 시작 메뉴에서 **시스템 환경 변수 편집**을 열고 **환경 변수**를 클릭합니다.
    2. 사용자 변수에 `JAVA_HOME`을 새로 만들고 값으로 JDK 설치 경로를 입력합니다. `java.exe`가 있는 `bin` 폴더의 상위 폴더가 JDK 설치 경로이며, PowerShell에서 아래 명령으로 `java.exe` 위치를 확인할 수 있습니다.

        ```powershell
        where.exe java
        ```

    3. `Path` 변수에 `%JAVA_HOME%\bin`을 추가합니다.
    4. 터미널을 새로 열어 확인합니다.

        ```powershell
        echo $env:JAVA_HOME
        ```

- 출력되는 경로는 설치 방식과 JDK 버전에 따라 다를 수 있습니다.
- 여러 JDK를 설치했다면 `JAVA_HOME`이 가리키는 JDK와 `java -version`의 결과가 같은지 확인합니다.

---

## 5. 터미널에서 컴파일하고 실행하기

VSCode의 실행 버튼 없이도 터미널에서 `javac`로 컴파일하고 `java`로 실행할 수 있습니다. 이 과정을 직접 해보면 [Java 개요](overview.md)의 컴파일타임과 런타임이 어떻게 나뉘는지 눈으로 확인할 수 있습니다.

1. 작업 폴더에 `Hello.java` 파일을 만듭니다.

    ```java
    public class Hello {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
    }
    ```

2. `javac`로 컴파일하면 같은 폴더에 `Hello.class`가 생깁니다.

    ```bash
    javac Hello.java
    ls
    ```

    ```text
    Hello.class  Hello.java
    ```

3. `java`로 실행합니다. 이때 파일 확장자(`.class`)를 붙이지 않고 클래스 이름만 씁니다.

    ```bash
    java Hello
    ```

    ```text
    Hello, World!
    ```

| 용어 | 설명 |
|---|---|
| `javac Hello.java` | 소스 파일을 컴파일해 `Hello.class`를 만드는 명령 |
| `java Hello` | `Hello` 클래스를 JVM에서 실행하는 명령 |

### 실행 오류

| 상황 | 출력 | 해결 |
|---|---|---|
| 파일이 없는 위치에서 컴파일함 | `error: file not found: Hello.java` | `ls`로 현재 폴더를 확인하고 `cd`로 이동합니다. |
| `java Hello.class`로 실행함 | `Error: Could not find or load main class Hello.class` | 확장자 없이 `java Hello`로 실행합니다. |
| 컴파일 없이 실행함 | `Error: Could not find or load main class Hello` | 먼저 `javac Hello.java`를 실행합니다. |

- 오류 메시지는 JDK 버전에 따라 다를 수 있습니다.
- 소스 파일 하나를 컴파일 없이 바로 실행하는 `java Hello.java` 방식도 JDK 11부터 지원하지만, 이 문서에서는 컴파일 단계를 확인하기 위해 두 명령을 나누어 사용합니다.

---

## 6. 프로젝트 생성 및 실행

### VSCode 확장으로 프로젝트 만들기

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

    ```text
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

    ```text
    Hello, World!
    ```

    터미널에서 이 문구가 출력되면 성공입니다.
