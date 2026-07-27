---
hide:
  - navigation
---

# 개발환경 설정

[← Python으로 돌아가기](index.md)

## 1. pyenv 설치

pyenv는 여러 Python 버전을 설치하고 프로젝트별로 전환해 사용할 수 있게 해주는 버전 관리 도구입니다.

### 1.1 설치 여부 확인

터미널에서 아래 명령어를 실행합니다.

```bash
pyenv --version
```

버전이 출력되면 이미 설치된 것입니다. 명령어를 찾을 수 없으면 다음 단계로 진행합니다.

### 1.2 설치 (macOS, Homebrew)

```bash
brew install pyenv
```

### 1.3 셸 설정

설치 후 셸 설정 파일(`~/.zshrc` 등)에 아래 내용을 추가하고 터미널을 재시작합니다.

```bash
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
source ~/.zshrc
```

### 1.4 설치 확인

```bash
pyenv --version
```

```
pyenv 2.4.10
```

버전이 출력되면 정상입니다.

---

## 2. Python 설치

### 2.1 설치 가능한 버전 목록 확인

```bash
pyenv install --list | grep " 3\."
```

### 2.2 설치

원하는 버전을 지정해 설치합니다. 최신 버전은 아래 예시와 다를 수 있습니다.

```bash
pyenv install 3.12.4
```

### 2.3 전역 기본 버전 설정

```bash
pyenv global 3.12.4
```

### 2.4 설치 확인

```bash
python --version
```

```
Python 3.12.4
```

`pyenv install`로 설치한 버전이 출력되면 정상입니다.

!!! tip "프로젝트별 버전 지정"
    특정 프로젝트 폴더에서만 다른 버전을 쓰려면 해당 폴더에서 `pyenv local 3.11.9`를 실행합니다. 폴더 안에 `.python-version` 파일이 생성되어 이후 자동으로 적용됩니다.

---

## 3. VSCode 설치 및 확장 설치

### 3.1 설치 여부 확인

```bash
code --version
```

버전이 출력되면 이미 설치된 것입니다. 명령어를 찾을 수 없으면 다음 단계로 진행합니다.

### 3.2 설치 (macOS, Homebrew)

```bash
brew install --cask visual-studio-code
```

### 3.3 Python Extension 설치

Python 코드의 자동 완성, 디버깅, 린팅을 지원하는 VSCode 확장입니다.

```bash
code --install-extension ms-python.python
```

---

## 4. 프로젝트 생성 및 실행

### 4.1 프로젝트 폴더 생성

```bash
mkdir -p ~/programming/basic-language/python-workspace/sample-project
cd ~/programming/basic-language/python-workspace/sample-project
```

### 4.2 가상 환경 생성 및 활성화

가상 환경은 프로젝트마다 독립된 패키지 설치 공간을 만들어 프로젝트 간 의존성 충돌을 막아줍니다.

```bash
python -m venv .venv
source .venv/bin/activate
```

터미널 프롬프트 앞에 `(.venv)`가 표시되면 활성화된 것입니다.

### 4.3 VSCode에서 열기

```bash
code .
```

### 4.4 샘플 코드 작성 및 실행

`main.py` 파일을 생성하고 아래 코드를 작성합니다.

```python
print("Hello, World!")
```

터미널에서 아래 명령어로 실행합니다.

```bash
python main.py
```

```
Hello, World!
```

`Hello, World!`가 출력되면 성공입니다.
