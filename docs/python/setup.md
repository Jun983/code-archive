---
hide:
  - navigation
---

# 개발환경 설정

[← Python으로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    명령어가 낯설어도 괜찮습니다. 각 단계의 명령어를 그대로 입력하고, 설명된 결과가 나오는지만 확인하면 됩니다. 운영체제마다 명령어가 다른 단계는 **macOS**와 **Windows** 탭으로 나뉘어 있으니, 사용하는 운영체제의 탭을 선택해 진행합니다.

Python 실습에는 패키지 관리자, Python 환경을 관리하는 Miniconda, 코드 편집기인 VSCode가 필요합니다. 이 문서에서는 macOS와 Windows로 나누어 이 도구들을 터미널 명령으로 설치하고, 가상 환경을 만들어 첫 프로그램을 실행하는 방법까지 다룹니다.

| 용어 | 설명 |
|---|---|
| 패키지 관리자 | 터미널 명령으로 프로그램을 설치하는 도구 (macOS는 Homebrew, Windows는 winget) |
| Miniconda | Python 환경과 패키지를 관리하는 도구 |
| 가상 환경 | 프로젝트마다 독립된 Python 실행 공간 |
| VSCode | 코드를 작성하고 실행하는 편집기 |

- 터미널은 명령어를 입력하는 창이며, macOS에서는 "터미널" 앱, Windows에서는 "PowerShell"을 사용합니다.
- 명령어는 한 줄씩 입력하고 Enter를 눌러 실행합니다.

---

## 1. 패키지 관리자 준비

=== "macOS"

    macOS에서는 Homebrew로 프로그램을 설치합니다. 터미널 앱은 Spotlight(`Cmd + Space`)에서 "터미널"을 입력해 실행합니다.

    ### 1.1 Homebrew 설치 여부 확인

    ```bash
    brew --version
    ```

    ```text
    Homebrew 4.4.2
    ```

    버전이 출력되면 이미 설치된 것이므로 2단계로 건너뜁니다. 출력되지 않으면 아래 단계를 계속 진행합니다.

    ### 1.2 Homebrew 설치

    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

    설치 중 컴퓨터 비밀번호를 물으면 입력합니다. 입력하는 글자는 화면에 표시되지 않습니다. 설치가 끝나면 화면 마지막에 안내되는 `Next steps` 명령어를 그대로 실행해야 `brew` 명령어를 사용할 수 있습니다. 실행한 뒤 터미널 창을 닫았다가 다시 열고 1.1의 명령어로 확인합니다.

=== "Windows"

    앞으로 나오는 명령어는 모두 PowerShell 창에서 입력합니다. 시작 메뉴(또는 검색 아이콘)를 클릭하고 "PowerShell"을 입력한 뒤, 검색 결과에 뜨는 "Windows PowerShell"을 클릭해 실행합니다.

    ### 1.1 winget 설치 여부 확인

    winget은 Windows 10 최신 버전 및 Windows 11에 기본 포함되어 있습니다. 아래 명령어로 설치 여부를 확인합니다.

    ```powershell
    winget --version
    ```

    ```text
    v1.7.10582
    ```

    버전이 출력되면 정상입니다. 출력되지 않으면 Microsoft Store에서 "앱 설치 관리자"를 설치한 뒤 다시 시도합니다.

---

## 2. Miniconda 설치

Miniconda는 Anaconda의 경량 배포판으로, 필요한 패키지만 선택적으로 설치할 수 있는 Python 환경 및 패키지 관리 도구입니다. 여기서 패키지란 다른 사람이 미리 만들어둔 코드 묶음으로, 설치해서 가져다 쓰면 같은 기능을 직접 만들지 않아도 됩니다.

### 2.1 conda 설치 여부 확인

터미널(Windows는 PowerShell)에서 아래 명령어를 실행해 Miniconda(conda)가 이미 설치되어 있는지 확인합니다.

```bash
conda --version
```

```text
conda 24.9.2
```

버전이 출력되면 이미 설치된 것이므로 3단계로 건너뜁니다. 출력되지 않으면 아래 단계를 계속 진행합니다.

### 2.2 설치

=== "macOS"

    ```bash
    brew install --cask miniconda
    ```

    설치가 진행되는 동안 화면에 진행률이 표시됩니다. 완료되면 다시 명령어를 입력할 수 있는 상태로 돌아오며, 이때까지 기다립니다.

=== "Windows"

    ```powershell
    winget install -e --id Anaconda.Miniconda3
    ```

    설치가 진행되는 동안 화면에 진행률이 표시됩니다. 완료되면 다시 명령어를 입력할 수 있는 상태로 돌아오며, 이때까지 기다립니다. 설치 중 "이 앱이 디바이스를 변경할 수 있도록 허용하시겠습니까?" 같은 창이 뜨면 "예"를 클릭합니다.

### 2.3 터미널 초기화

설치 후 터미널에서 `conda` 명령어를 바로 사용할 수 있도록 초기화합니다. 아래 명령어를 실행한 뒤 터미널 창을 닫았다가 다시 엽니다.

=== "macOS"

    ```bash
    conda init zsh
    ```

    macOS의 기본 터미널은 zsh를 사용합니다. 다른 셸을 쓴다면 `zsh` 대신 해당 셸 이름(예: `bash`)을 입력합니다.

=== "Windows"

    ```powershell
    conda init powershell
    ```

    !!! warning "실행 정책 오류"
        PowerShell을 재시작한 뒤 conda 명령어 실행 시 `이 시스템에서 스크립트를 실행할 수 없으므로...` 오류가 발생하면, 관리자 권한 PowerShell에서 아래 명령어를 실행합니다. 관리자 권한 PowerShell은 시작 메뉴에서 "PowerShell"을 검색한 뒤, 검색 결과를 마우스 오른쪽 버튼으로 클릭하고 "관리자 권한으로 실행"을 선택하면 열 수 있습니다.
        ```powershell
        Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
        ```
        명령어 실행 후 이 창은 닫고, 원래 사용하던(관리자 권한이 아닌) PowerShell 창으로 돌아가 다시 시도합니다.

### 2.4 초기화 적용 확인

터미널을 재시작한 새 창에서 아래 명령어를 실행해 `conda init`이 정상 적용됐는지 확인합니다.

```bash
conda --version
```

```text
conda 24.9.2
```

버전이 출력되면 정상입니다.

- macOS에서는 초기화가 적용되면 터미널 맨 앞에 `(base)`가 표시됩니다. `base`는 conda가 기본으로 제공하는 환경이며, 3단계에서 만드는 가상 환경을 활성화하면 이름이 바뀝니다.

---

## 3. Python 가상 환경 생성

가상 환경은 프로젝트마다 독립된 Python 실행 공간을 만들어주는 기능입니다. 프로젝트별로 필요한 Python 버전이나 패키지가 다를 수 있는데, 가상 환경을 나누면 서로 영향을 주지 않고 관리할 수 있습니다. 이 단계의 명령어는 macOS와 Windows가 같습니다.

### 3.1 설치 가능한 버전 확인

```bash
conda search python
```

설치 가능한 버전 목록이 길게 출력됩니다. 원하는 버전(예: 3.12.x)이 목록에 있는지만 확인하면 되며, 전체 목록을 이해할 필요는 없습니다.

### 3.2 가상 환경 생성

원하는 버전을 지정해 `sample-project`라는 이름의 가상 환경을 생성합니다. 이 이름은 5단계에서 만들 프로젝트 폴더 이름과 통일해서 사용합니다. 최신 버전은 아래 예시와 다를 수 있습니다.

```bash
conda create -n sample-project python=3.12 -y
```

여기서 `-y`는 설치 여부를 다시 묻지 않고 자동으로 진행하는 옵션입니다.

### 3.3 가상 환경 활성화

```bash
conda activate sample-project
```

터미널 창의 맨 앞부분에 `(sample-project)`가 표시되면 활성화된 것입니다.

### 3.4 설치 확인

```bash
python --version
```

```text
Python 3.12.4
```

`conda create`로 지정한 버전이 출력되면 정상입니다.

!!! tip "가상 환경 비활성화"
    작업을 마친 뒤에는 `conda deactivate`로 가상 환경에서 빠져나올 수 있습니다.

---

## 4. VSCode 설치 및 확장 설치

### 4.1 설치 여부 확인

```bash
code --version
```

```text
1.90.2
```

버전이 출력되면 이미 설치된 것이므로 4.3으로 건너뜁니다. 출력되지 않으면 다음 단계로 진행합니다.

### 4.2 설치

=== "macOS"

    Homebrew의 cask는 GUI 애플리케이션을 설치할 때 사용하는 저장소입니다. cask로 VSCode를 설치합니다.

    ```bash
    brew install --cask visual-studio-code
    ```

    설치가 진행되는 동안 화면에 진행률이 표시됩니다. 완료되면 다시 명령어를 입력할 수 있는 상태로 돌아오며, 이때까지 기다립니다.

=== "Windows"

    ```powershell
    winget install -e --id Microsoft.VisualStudioCode
    ```

    설치가 진행되는 동안 화면에 진행률이 표시됩니다. 완료되면 다시 명령어를 입력할 수 있는 상태로 돌아오며, 이때까지 기다립니다. 설치 중 "이 앱이 디바이스를 변경할 수 있도록 허용하시겠습니까?" 같은 창이 뜨면 "예"를 클릭합니다.

### 4.3 Python Extension 설치

Python 코드를 작성할 때 자동 완성(코드를 자동으로 이어서 제안), 디버깅(오류가 발생한 부분을 찾아 수정), 린팅(문법 오류나 잘못된 코드 스타일을 미리 알려줌) 기능을 지원하는 VSCode 확장입니다.

설치 직후에는 터미널 창을 닫았다가 다시 열어야 아래 명령어가 정상적으로 인식됩니다.

```bash
code --install-extension ms-python.python
```

- `code` 명령어를 찾을 수 없다는 오류가 나오면 터미널을 새로 열었는지 먼저 확인합니다.

---

## 5. 프로젝트 생성 및 실행

### 5.1 프로젝트 폴더 생성

3단계에서 만든 가상 환경 이름(`sample-project`)과 동일한 이름으로 폴더를 생성합니다. 이름을 반드시 맞춰야 하는 것은 아니지만, 어떤 폴더가 어떤 가상 환경을 쓰는지 헷갈리지 않도록 통일하는 것을 권장합니다.

아래 경로는 예시이며, 원하는 위치에 폴더를 만들어도 됩니다.

=== "macOS"

    `mkdir -p` 명령어는 중간에 없는 폴더(`workspace`, `python-workspace`)까지 한 번에 만들어줍니다. `~`는 사용자의 홈 폴더를 뜻합니다.

    ```bash
    mkdir -p ~/workspace/python-workspace/sample-project
    cd ~/workspace/python-workspace/sample-project
    ```

=== "Windows"

    `mkdir` 명령어는 중간에 없는 폴더(`workspace`, `python-workspace`)까지 한 번에 만들어줍니다.

    ```powershell
    mkdir C:\workspace\python-workspace\sample-project
    cd C:\workspace\python-workspace\sample-project
    ```

### 5.2 가상 환경 활성화

새 터미널 창을 열면 가상 환경 활성화 상태가 유지되지 않으므로, 3단계에서 생성한 가상 환경을 프로젝트 폴더에서 다시 활성화합니다.

```bash
conda activate sample-project
```

### 5.3 VSCode에서 열기

```bash
code .
```

VSCode가 열리면 "이 폴더의 작성자를 신뢰하십니까?" 같은 확인 창이 뜰 수 있습니다. "예, 작성자를 신뢰합니다"를 클릭해야 다음 단계를 진행할 수 있습니다.

### 5.4 샘플 코드 작성 및 실행

VSCode 왼쪽 탐색기 아이콘을 클릭한 뒤 "새 파일" 아이콘을 누르면 이름을 입력하는 상자가 나타납니다. `main.py`를 입력하고 Enter를 눌러 파일을 생성한 뒤 아래 코드를 작성합니다.

```python
print("Hello, World!")
```

코드를 작성한 뒤에는 반드시 저장합니다. 저장은 macOS에서 `Cmd + S`, Windows에서 `Ctrl + S`입니다. 저장하지 않으면 빈 파일이 실행되어 아무 결과도 나오지 않거나 오류가 발생할 수 있습니다.

5.2에서 활성화한 터미널 창에서 아래 명령어로 실행합니다.

```bash
python main.py
```

```text
Hello, World!
```

`Hello, World!`가 출력되면 성공입니다.
