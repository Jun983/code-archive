---
hide:
  - navigation
---

# minikube로 실습 환경 준비하기

[← Kubernetes로 돌아가기](index.md)

이후 실습 문서들은 로컬 환경에 [minikube](https://minikube.sigs.k8s.io/)로 띄운 단일 노드 클러스터를 기준으로 진행합니다. minikube는 로컬 머신 안에 가상 쿠버네티스 클러스터를 만들어주는 도구로, 클라우드 계정 없이도 `kubectl`로 실제 클러스터를 다루는 경험을 할 수 있습니다. 이 문서에서는 세 가지, 설치·클러스터 시작·정리를 하나씩 살펴봅니다.

| 개념 | 설명 |
|---|---|
| 설치 | minikube와 kubectl을 로컬 머신에 설치하는 것 |
| 클러스터 시작 | minikube로 로컬 쿠버네티스 클러스터를 띄우고 상태를 확인하는 것 |
| 정리 | 실습이 끝난 클러스터를 멈추거나 삭제하는 것 |

---

## 설치는 minikube와 kubectl을 준비하는 것부터 시작합니다

minikube는 내부적으로 Docker 같은 컨테이너 런타임 위에서 가상 클러스터를 실행하므로, Docker Desktop을 먼저 설치해야 합니다.

=== "macOS"

    ```bash
    brew install --cask docker
    ```

    `docker`는 Homebrew의 cask로 설치되는 GUI 애플리케이션이라, 설치만으로는 실행되지 않습니다. 아래 명령으로 직접 실행해서 로그인·초기 설정을 마쳐야 컨테이너 런타임이 동작합니다.

    ```bash
    open -a Docker
    ```

    Docker Desktop 실행이 끝났다면, 이어서 minikube와 kubectl을 설치합니다.

    ```bash
    brew install minikube kubectl
    ```

=== "Windows"

    Docker Desktop은 WSL2(Windows Subsystem for Linux) 위에서 동작하므로, 설치 전에 WSL2가 활성화되어 있어야 합니다. PowerShell을 관리자 권한으로 열어 아래 명령을 실행하고 컴퓨터를 재시작합니다.

    ```powershell
    wsl --install
    ```

    WSL2 준비가 끝났다면, winget으로 Docker Desktop을 설치합니다.

    ```powershell
    winget install Docker.DockerDesktop
    ```

    Docker Desktop도 GUI 애플리케이션이라 설치 후 직접 실행해서 로그인·초기 설정을 마쳐야 합니다.

    ```powershell
    Start-Process "Docker Desktop"
    ```

    Docker Desktop 실행이 끝났다면, 이어서 minikube와 kubectl을 설치합니다.

    ```powershell
    winget install Kubernetes.minikube
    winget install Kubernetes.kubectl
    ```

→ **minikube 설치 전에 Docker Desktop을 설치하고 실행해 컨테이너 런타임을 먼저 준비해야 하며, macOS는 Homebrew로, Windows는 winget으로 Docker Desktop·minikube·kubectl을 모두 설치할 수 있습니다.**

## 클러스터 시작은 minikube start 한 번으로 끝납니다

설치가 끝나면 `minikube start` 명령으로 로컬 클러스터를 띄웁니다. 이 명령은 컨테이너 런타임 위에 쿠버네티스 구성 요소를 갖춘 노드를 하나 만들고, `kubectl`이 이 클러스터를 바라보도록 자동으로 연결해줍니다.

```bash
minikube start
kubectl get nodes
```

`kubectl get nodes` 실행 결과에 상태가 `Ready`인 노드가 하나 보이면 클러스터가 정상적으로 준비된 것입니다.

→ **`minikube start`로 로컬 클러스터를 띄우고, `kubectl get nodes`로 노드가 Ready 상태인지 확인하면 실습 준비가 끝납니다.**

## 실습을 마치면 클러스터를 정리할 수 있습니다

실습 중 문제가 생겨 클러스터를 처음부터 다시 만들고 싶거나, 실습을 마쳤다면 다음 명령으로 정리합니다.

```bash
minikube stop
minikube delete
```

`minikube stop`은 클러스터를 잠시 멈추고, `minikube delete`는 클러스터를 완전히 삭제합니다. 삭제한 뒤에는 `minikube start`로 언제든 다시 새 클러스터를 만들 수 있습니다.

→ **막히면 `minikube delete`로 클러스터를 지우고 `minikube start`로 다시 시작하면 됩니다.**
