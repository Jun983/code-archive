---
hide:
  - toc
  - navigation
---

# Kubernetes

여러 서버에 컨테이너를 자동으로 배치·관리해주는 쿠버네티스의 핵심 개념을 정리합니다.

---

| # | 주제 | 설명 |
|---|------|------|
| 1 | [쿠버네티스 개요](overview.md) | Cluster, Node, Pod 등 쿠버네티스의 기본 구성 단위 |
| 2 | [쿠버네티스의 역사](history.md) | Linux, VM, Container를 거쳐 쿠버네티스에 이르는 흐름 |
| 3 | [VM과 Container의 차이](vm-vs-container.md) | 격리 방식의 차이와 그로 인한 속도·크기 차이 |
| 4 | [쿠버네티스를 사용하는 이유](why.md) | 컨테이너가 많아질 때 쿠버네티스가 자동으로 대신 해주는 일들 |
| 5 | [minikube로 실습 환경 준비하기](setup.md) | minikube와 kubectl을 설치하고 로컬 클러스터를 띄우는 방법 |
| 6 | [파드와 그 구성 요소](pod.md) | Pod를 이루는 Container, Label, 그리고 배치를 결정하는 스케줄링 |
| 7 | [Service와 노출 방식](service.md) | ClusterIP, NodePort, LoadBalancer로 Pod를 노출하는 방법 |
| 8 | [Volume과 데이터 저장 방식](volume.md) | emptyDir, hostPath, PV/PVC로 데이터를 유지하는 방법 |
| 9 | [ConfigMap과 설정 관리](configmap.md) | ConfigMap, Secret, Env, Mount로 설정 값을 관리하는 방법 |
| 10 | [Namespace와 자원 제한](namespace.md) | Namespace, ResourceQuota, LimitRange로 자원을 관리하는 방법 |
| 11 | [ReplicaSet과 Pod 복제](replicaset.md) | Template, Replicas, Selector로 Pod 개수를 유지하는 방법 |
| 12 | [Deployment와 배포 전략](deployment.md) | Recreate, RollingUpdate, Blue/Green, Canary로 버전을 교체하는 방법 |
| 13 | [DaemonSet, Job, CronJob과 워크로드 실행 방식](workload-controllers.md) | Node 상시 실행, 일회성 완료, 일정 반복이라는 서로 다른 목적의 Controller |
| 14 | [StatefulSet과 상태 저장 워크로드](statefulset.md) | 고정 식별자, 순차적 생성과 삭제, 독립된 Volume으로 Pod의 정체성을 유지하는 방법 |
| 15 | [HPA와 자동 확장](hpa.md) | 지표 기반 판단, Replicas 조정, 최소·최대 범위로 Pod 수를 자동 조절하는 방법 |
