---
hide:
  - navigation
---

# Random 클래스

[← Java로 돌아가기](index.md)

무작위 값이 필요할 때는 `Random` 클래스를 사용합니다.

| 구성 요소 | 설명 |
|---|---|
| 생성 | `new Random()`으로 객체 생성 |
| 주요 메서드 | 타입에 맞는 무작위 값을 반환하는 메서드 |

---

## 1. 생성

`new Random()`으로 무작위 값을 생성하는 객체를 만듭니다.

```java
import java.util.Random; // Random을 사용하기 위해 필요한 선언

public class RandomCreateExample {
    public static void main(String[] args) {
        Random random = new Random();
    }
}
```

## 2. 주요 메서드

생성한 `Random` 객체의 메서드로 타입에 맞는 무작위 값을 뽑습니다. `변수명.메서드명()` 형태로 호출합니다.

!!! info "참고"
    지금은 호출 형태만 익히고, 메서드에 대한 자세한 내용은 나중에 다룹니다.

| 메서드 | 반환 타입 | 설명 |
|--------|-----------|------|
| `nextInt()` | `int` | 정수 범위 전체에서 무작위 값을 반환합니다. |
| `nextInt(bound)` | `int` | `0` 이상 `bound` 미만의 무작위 정수를 반환합니다. |
| `nextDouble()` | `double` | `0.0` 이상 `1.0` 미만의 무작위 실수를 반환합니다. |
| `nextBoolean()` | `boolean` | 무작위로 `true` 또는 `false`를 반환합니다. |

```java
import java.util.Random;

public class RandomMethodExample {
    public static void main(String[] args) {
        Random random = new Random();

        int dice = random.nextInt(6) + 1;  // 1 ~ 6
        System.out.println(dice);
    }
}
```

```
3
```

!!! info "참고"
    `Math.random()`으로도 무작위 `double` 값을 얻을 수 있습니다. `(int) (Math.random() * n) + start` 형태로 정수 범위를 만들 수 있지만, 이 문서에서는 `Random` 클래스 사용을 기준으로 합니다.
