---
hide:
  - toc
---

# 쿠버네티스의 역사

[← Kubernetes로 돌아가기](index.md)

쿠버네티스는 어느 날 갑자기 등장한 기술이 아니라, 자원 격리 → 가상화 → 컨테이너 → 오케스트레이션으로 이어지는 흐름 속에서 탄생했습니다.

![쿠버네티스에 이르는 흐름](../assets/images/kubernetes/history.svg){ width="100%" }

---

## 1991 — Linux (자원 격리 기술)

리눅스 커널이 제공하는 `chroot`, `namespace`, `cgroup` 등의 기능은 프로세스 단위로 자원을 격리하는 기반 기술로, 이후 컨테이너 기술의 토대가 되었습니다.

## 2010.7 — VM (가상화 기술)

VirtualBox, VMware, KVM, Xen과 같은 하이퍼바이저 기반 가상화 기술이 널리 쓰이기 시작했고, Rackspace와 NASA가 공동 개발한 OpenStack이 이를 관리하는 클라우드 인프라로 등장했습니다.

## 2014.6 — Container (가상화 기술)

dotCloud 사가 개발한 Docker가 공개되면서, 무거운 VM 대신 커널을 공유하는 가벼운 컨테이너 방식의 가상화가 주목받기 시작했습니다.

## 2015.7 — Container 오케스트레이션

컨테이너 사용이 늘어나며 이를 여러 대의 서버에 걸쳐 관리·배포·확장하는 오케스트레이션 도구가 필요해졌습니다. Docker, Amazon(ECS), Rancher, HashiCorp(Nomad) 등이 이 영역에서 경쟁했습니다.

## Today — Kubernetes (클라우드 서비스)

Google이 자사의 내부 컨테이너 관리 시스템(Borg) 경험을 바탕으로 쿠버네티스 v1.0을 릴리스했습니다. 이후 Red Hat, Microsoft, IBM, CoreOS, Docker, Mesosphere, SaltStack 등 다양한 기업이 참여하는 커뮤니티가 형성되었고, Google Cloud, AWS, Azure, IBM Cloud, Oracle Cloud 등 주요 클라우드 사업자들이 쿠버네티스를 관리형 서비스로 제공하며 사실상 표준 오케스트레이션 도구로 자리잡았습니다.
