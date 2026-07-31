---
hide:
  - navigation
---

# Namespace와 자원 제한

[← Kubernetes로 돌아가기](index.md)

여러 팀이나 여러 프로젝트가 하나의 클러스터를 함께 쓰면, 리소스 이름이 겹치거나 한쪽이 자원을 과도하게 써서 다른 쪽에 영향을 주는 문제가 생길 수 있습니다. Namespace는 클러스터 안을 논리적으로 나누는 경계이고, ResourceQuota와 LimitRange는 그 경계 안에서 자원 사용을 제한하는 규칙입니다. 이 문서에서는 세 가지, Namespace·ResourceQuota·LimitRange를 하나씩 살펴봅니다.

| 개념 | 설명 |
|---|---|
| Namespace | 클러스터를 논리적으로 나누는 격리 단위 |
| ResourceQuota | Namespace 전체가 쓸 수 있는 자원 총량을 제한하는 규칙 |
| LimitRange | Namespace 안의 Container 하나하나에 적용되는 자원 기본값·제한 |

---

## Namespace는 클러스터를 논리적으로 나누는 경계입니다

Namespace는 하나의 클러스터 안에 여러 개의 논리적인 구역을 만드는 리소스입니다. `team-a`, `team-b`처럼 팀별로 나누거나, `dev`, `staging`, `production`처럼 환경별로 나누는 식으로 사용합니다. [파드와 그 구성 요소](pod.md)에서 다룬 Pod를 포함해 대부분의 리소스는 특정 Namespace에 소속되며, 같은 이름이라도 Namespace가 다르면 서로 다른 리소스로 취급됩니다.

Namespace로 나뉜 리소스들은 물리적으로 격리되는 것은 아니고, 클러스터 자원을 실제로 공유합니다. 하지만 이름 충돌을 막고, 접근 권한을 Namespace 단위로 부여할 수 있으며, 뒤에서 살펴볼 ResourceQuota·LimitRange 같은 자원 제한 규칙을 Namespace 단위로 적용할 수 있다는 점에서 여러 팀·프로젝트가 하나의 클러스터를 함께 쓸 때 유용합니다.

→ **Namespace는 클러스터를 논리적으로 나누는 경계이며, 이름 충돌을 막고 권한·자원 관리를 구역 단위로 할 수 있게 해줍니다.**

## ResourceQuota는 Namespace 전체의 자원 총량을 제한합니다

Namespace로 구역을 나눠도, 한 팀이 CPU나 메모리를 과도하게 쓰거나 Pod를 지나치게 많이 만들면 같은 클러스터를 쓰는 다른 Namespace에 영향을 줄 수 있습니다. ResourceQuota는 이를 막기 위해 특정 Namespace 안에서 사용할 수 있는 자원의 총량에 상한을 두는 리소스입니다.

예를 들어 `team-a` Namespace에 CPU 합계 4 코어, 메모리 합계 8Gi, Pod 개수 10개까지라는 ResourceQuota를 설정하면, 그 Namespace 안의 모든 리소스를 합친 사용량이 이 값을 넘어설 수 없습니다. 이미 한도를 채운 상태에서 새 Pod를 만들려고 하면 생성 자체가 거부됩니다.

여기서 주의할 점이 있습니다. ResourceQuota가 CPU나 메모리 같은 자원에 설정되어 있으면, 그 Namespace 안의 Container는 해당 자원에 필요한 값을 반드시 직접 지정해야 하고, 지정하지 않으면 Pod 생성이 거부됩니다. 이 문제는 다음에 살펴볼 LimitRange가 해결해줍니다.

→ **ResourceQuota는 Namespace 전체가 쓸 수 있는 자원의 총량에 상한을 두어, 한 Namespace가 클러스터 자원을 과도하게 차지하지 못하게 합니다.**

## LimitRange는 Container 하나하나의 자원 기본값과 제한을 정합니다

ResourceQuota가 Namespace 전체의 합계를 제한한다면, LimitRange는 그 Namespace 안에 만들어지는 Container 하나하나에 적용되는 규칙입니다. Container를 만들 때 자원 요청량(request)이나 제한량(limit)을 직접 지정하지 않으면 LimitRange에 정의된 기본값이 대신 적용되고, 값을 지정하더라도 LimitRange가 정한 최소·최대 범위를 벗어나면 생성이 거부됩니다.

예를 들어 LimitRange로 Container당 메모리 기본값 256Mi, 최대 1Gi를 정해두면, 자원 값을 따로 지정하지 않은 Container는 자동으로 256Mi를 요청하게 되고, 누군가 실수로 2Gi를 요청하는 Container를 만들려 해도 거부됩니다. ResourceQuota가 Namespace 단위의 총량을 지킨다면, LimitRange는 그 안의 개별 Container가 비정상적으로 큰 자원을 차지하지 않도록 막아주는 역할을 합니다.

→ **LimitRange는 Namespace 안 Container 하나하나에 자원 기본값과 최소·최대 범위를 적용해, 개별 Container가 과도한 자원을 차지하지 못하게 합니다.**

## Namespace, ResourceQuota, LimitRange는 함께 자원을 관리합니다

세 리소스는 각각 다른 층위에서 동작합니다. Namespace가 구역 자체를 나누고, ResourceQuota가 그 구역 전체의 자원 총량을 제한하며, LimitRange가 구역 안 Container 하나하나의 자원 범위를 정합니다. 이렇게 층위를 나눠 적용하면, 팀 전체가 쓸 수 있는 자원의 상한은 지키면서도 그 안에서 개별 Container가 비정상적인 값을 갖는 것까지 함께 막을 수 있습니다.

특히 ResourceQuota와 LimitRange는 실무에서 거의 항상 함께 쓰입니다. ResourceQuota는 자원 값이 지정되지 않은 Container가 있으면 총량을 계산할 수 없어 Pod 생성을 거부하는데, LimitRange가 미리 기본값을 채워주기 때문에 사용자가 값을 깜빡 잊어도 Pod가 정상적으로 만들어질 수 있습니다.

→ **Namespace는 구역을, ResourceQuota는 구역 전체의 총량을, LimitRange는 구역 안 Container 각각의 범위를 관리하며 함께 자원을 통제합니다.**
