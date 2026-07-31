---
hide:
  - navigation
---

# ReplicaSet과 Pod 복제

[← Kubernetes로 돌아가기](index.md)

[파드와 그 구성 요소](pod.md)에서 살펴본 것처럼 Pod는 언제든 삭제될 수 있는데, Pod 하나만 직접 만들어 운영하면 그 Pod가 죽었을 때 아무도 다시 만들어주지 않습니다. ReplicaSet은 지정한 개수만큼 Pod가 항상 떠 있도록 유지해주는 리소스입니다. 다만 실무에서는 ReplicaSet을 직접 만들기보다 이를 감싸는 Deployment를 통해 간접적으로 사용하는 경우가 대부분이며, 이 문서에서는 그 바탕이 되는 ReplicaSet의 동작 원리를 먼저 살펴봅니다. 이 문서에서는 세 가지, Template·Replicas·Selector를 하나씩 살펴봅니다.

| 개념 | 설명 |
|---|---|
| Template | 새 Pod를 만들 때 사용하는 Pod 명세 |
| Replicas | 유지하고자 하는 Pod의 개수 |
| Selector | ReplicaSet이 관리 대상 Pod를 찾는 기준 |

---

## Template은 새로 만들 Pod의 명세입니다

Template은 ReplicaSet이 Pod를 새로 만들 때 사용하는 설계도로, [파드와 그 구성 요소](pod.md)에서 다룬 Container 이미지, Label 등 Pod를 구성하는 내용을 그대로 담고 있습니다. ReplicaSet은 이 Template을 이용해 동일한 설정을 가진 Pod를 여러 개 찍어냅니다.

Template에 정의된 Label은 단순히 Pod를 식별하는 용도를 넘어, 뒤에서 살펴볼 Selector가 어떤 Pod를 자신이 관리할 대상으로 인식할지를 결정하는 데도 사용됩니다.

→ **Template은 ReplicaSet이 Pod를 새로 만들 때 사용하는 명세이며, 여기 담긴 Label은 Selector와도 연결됩니다.**

## Replicas는 유지할 Pod의 개수입니다

Replicas는 ReplicaSet이 항상 유지하려는 Pod의 개수를 나타내는 값입니다. ReplicaSet은 현재 떠 있는 Pod의 수를 계속 감시하다가, 이 수가 Replicas보다 적으면 Template을 이용해 부족한 만큼 새 Pod를 만들고, 반대로 많으면 초과분을 삭제해 항상 지정된 개수를 유지합니다.

예를 들어 Replicas가 3인 상태에서 Pod 하나가 예기치 않게 종료되면, ReplicaSet은 이를 감지하고 즉시 새 Pod 하나를 추가로 만들어 다시 3개를 유지합니다.

이렇게 현재 상태(떠 있는 Pod 수)와 원하는 상태(Replicas 값)를 끊임없이 비교하며 차이를 자동으로 맞춰나가는 동작 방식을 컨트롤 루프(control loop)라고 부릅니다. ReplicaSet뿐 아니라 쿠버네티스의 여러 리소스가 이 컨트롤 루프 방식으로 동작합니다.

→ **Replicas는 ReplicaSet이 유지하려는 Pod 개수이며, 컨트롤 루프를 통해 실제 개수가 이보다 적거나 많으면 자동으로 맞춰집니다.**

## Selector는 관리 대상 Pod를 찾는 기준입니다

Selector는 ReplicaSet이 클러스터 안의 어떤 Pod를 자신이 관리해야 할 대상으로 볼지 정하는 기준입니다. 이때 Template의 Label은 Selector 조건을 반드시 포함하고 있어야 하며, 정확히 같을 필요는 없고 Template에 Label이 더 있어도 상관없습니다. ReplicaSet은 Pod를 직접 소유하는 것이 아니라, 이 Selector 조건을 만족하는 Label을 가진 Pod들을 찾아 그 개수를 세고 관리합니다.

이 때문에 Selector 조건에 맞는 Label을 가진 Pod가 이미 존재한다면, ReplicaSet이 직접 만들지 않은 Pod라도 자신의 관리 대상으로 인식해 Replicas 개수에 포함시킵니다.

또한 Selector는 ReplicaSet을 만든 뒤에는 수정할 수 없습니다. 관리 대상을 바꾸고 싶다면 ReplicaSet을 새로 만들어야 합니다.

→ **Selector는 Label을 기준으로 관리 대상 Pod를 찾아내며, ReplicaSet이 직접 만들지 않은 Pod도 조건만 맞으면 관리 대상에 포함됩니다. 생성 후에는 수정할 수 없습니다.**

## Template, Replicas, Selector는 함께 동작합니다

세 요소는 서로 맞물려 동작합니다. Selector가 Label을 기준으로 현재 관리 대상 Pod를 찾아 개수를 세고, 그 개수가 Replicas에 못 미치면 Template을 이용해 부족한 Pod를 새로 만듭니다. 이때 Template에 정의된 Label이 Selector 조건을 만족하기 때문에, 새로 만들어진 Pod도 곧바로 관리 대상에 포함됩니다.

→ **Selector로 대상을 찾고, Replicas만큼 개수를 맞추며, 부족하면 Template으로 새 Pod를 만드는 방식으로 세 요소가 함께 동작합니다.**
