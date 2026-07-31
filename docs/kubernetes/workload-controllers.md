---
hide:
  - navigation
---

# DaemonSet, Job, CronJob과 워크로드 실행 방식

[← Kubernetes로 돌아가기](index.md)

[ReplicaSet과 Pod 복제](replicaset.md), [Deployment와 배포 전략](deployment.md) 역시 Pod를 관리하는 Controller지만, 이들이 지향하는 정상 상태는 "항상 떠 있어야 하는 서비스"입니다. 하지만 모든 워크로드가 이런 형태는 아닙니다. 모든 Node에 하나씩 떠 있어야 하는 Pod도 있고, 끝까지 실행되고 나면 종료되어야 하는 작업도 있습니다. DaemonSet, Job, CronJob은 각각 이런 다른 실행 목적에 맞춰진 Controller입니다. 이 문서에서는 세 가지, DaemonSet·Job·CronJob을 하나씩 살펴봅니다.

| 개념 | 설명 |
|---|---|
| DaemonSet | 모든(혹은 조건에 맞는) Node에 Pod를 하나씩 유지하는 Controller |
| Job | Pod가 성공적으로 완료될 때까지 실행을 보장하는 Controller |
| CronJob | 정해진 일정에 따라 Job을 반복 생성하는 Controller |

---

## DaemonSet은 모든 Node에 Pod를 하나씩 유지합니다

DaemonSet은 클러스터에 속한 각 Node마다 지정한 Pod를 정확히 하나씩 띄우고 유지하는 Controller입니다. [ReplicaSet과 Pod 복제](replicaset.md)가 "몇 개를 유지할지"를 Replicas 값으로 지정하는 것과 달리, DaemonSet은 개수를 직접 지정하지 않고 대상 Node의 수에 따라 Pod 개수가 자동으로 정해집니다. 새 Node가 클러스터에 추가되면 그 Node에도 자동으로 Pod가 하나 생기고, Node가 제거되면 그 Node에 있던 Pod도 함께 사라집니다.

이런 특성 때문에 DaemonSet은 로그 수집기, 모니터링 에이전트, 네트워크 플러그인처럼 모든 Node에서 공통으로 동작해야 하는 인프라성 워크로드에 주로 사용됩니다. Node Selector 등을 이용하면 모든 Node가 아니라 조건을 만족하는 일부 Node에만 Pod를 띄우도록 범위를 좁힐 수도 있습니다.

→ **DaemonSet은 대상 Node마다 Pod를 정확히 하나씩 유지하며, 개수를 직접 지정하지 않고 Node 수에 따라 자동으로 정해집니다.**

## Job은 Pod가 완료될 때까지 실행을 보장합니다

Job은 실행 후 종료되는 작업을 위한 Controller로, Pod가 정상적으로 완료될 때까지 실행을 보장합니다. [Deployment](deployment.md)나 DaemonSet이 관리하는 Pod는 계속 떠 있는 것이 정상 상태지만, Job이 관리하는 Pod는 작업을 마치고 종료되는 것이 정상 상태입니다. 일반 Pod는 컨테이너가 종료되면 기본적으로 항상 다시 시작하지만, 이렇게 되면 Job은 영원히 끝나지 않으므로, Job이 관리하는 Pod는 실패했을 때만 다시 시작하거나 아예 다시 시작하지 않는 정책을 사용합니다.

Pod가 실패로 종료되면 Job은 설정에 따라 새 Pod를 다시 만들어 작업이 성공할 때까지 재시도합니다. 다만 이 재시도 횟수에도 상한이 있어, 정해진 횟수를 넘겨서도 계속 실패하면 Job 자체가 실패한 것으로 처리됩니다.

Job은 동시에 몇 개의 Pod를 병렬로 실행할지, 전체 작업이 완료됐다고 판단하기까지 몇 개의 Pod가 성공해야 하는지를 지정할 수 있습니다. 이를 통해 하나의 작업을 순차적으로 처리할 수도 있고, 여러 Pod가 나눠서 병렬로 처리하게 만들 수도 있습니다.

이렇게 실행이 끝난 뒤에도, Job이 완료된 Pod를 자동으로 삭제하지는 않습니다. Pod가 그대로 남아있기 때문에 필요하면 로그나 결과를 나중에 확인할 수 있습니다.

→ **Job은 Pod가 성공적으로 완료될 때까지 실행을 보장하는 Controller이며, 실패 시 재시도하고 병렬 실행 정도를 조절할 수 있습니다.**

## CronJob은 일정에 따라 Job을 반복 생성합니다

CronJob은 Job을 직접 관리하는 대신, 정해진 일정에 맞춰 Job을 반복적으로 만들어내는 Controller입니다. 리눅스의 cron과 같은 방식의 일정 표현을 사용해 "매일 새벽 3시", "5분마다"처럼 반복 주기를 지정하면, CronJob이 그 일정에 맞춰 새 Job을 하나씩 생성하고, 생성된 Job은 앞서 살펴본 방식대로 Pod를 완료될 때까지 실행합니다.

CronJob은 정기 백업, 리포트 생성, 오래된 데이터 정리처럼 사람이 반복해서 수동으로 실행하던 작업을 자동화하는 데 주로 사용됩니다.

다만 실행 주기가 짧거나 이전 실행이 끝나기 전에 다음 일정이 도래할 수 있는 경우, 다음 세 가지 중 하나를 정해줘야 합니다.

- 이전 실행과 새 실행을 동시에 진행
- 새 실행을 건너뛰고 이전 실행이 끝나기를 기다림
- 이전 실행을 중단하고 새 실행을 시작

→ **CronJob은 정해진 일정에 따라 Job을 반복 생성하는 Controller이며, 반복되는 작업을 사람의 개입 없이 자동으로 실행합니다.**

## 세 Controller는 서로 다른 실행 목적에 맞춰져 있습니다

DaemonSet, Job, CronJob은 모두 [ReplicaSet과 Pod 복제](replicaset.md)나 [Deployment](deployment.md)와 마찬가지로 Pod를 관리하는 Controller지만, 지향하는 정상 상태가 다릅니다. DaemonSet은 "모든 Node에 하나씩 계속 떠 있는 상태"를, Job은 "한 번 실행되어 성공적으로 끝난 상태"를, CronJob은 "그 성공적인 실행이 일정에 맞춰 반복되는 상태"를 정상으로 봅니다.

→ **DaemonSet은 Node 단위로 상시 실행을, Job은 일회성 완료를, CronJob은 그 완료를 일정에 따라 반복하는 것을 목적으로 합니다.**
