---
hide:
  - navigation
---

# 랜덤 라이브러리

[← Java로 돌아가기](index.md)

무작위 값이 필요할 때는 `Math.random()` 또는 `Random` 클래스를 사용합니다.

## 1. Math.random()

`Math.random()`은 `0.0` 이상 `1.0` 미만의 `double` 값을 무작위로 반환합니다. 원하는 정수 범위로 바꾸려면 곱하고 더한 뒤 `(int)`로 캐스팅합니다.

| 형태 | 의미 |
|------|------|
| `Math.random()` | `0.0` 이상 `1.0` 미만의 `double`을 반환합니다. |
| `(int) (Math.random() * n)` | `0` 이상 `n` 미만의 정수를 반환합니다. |
| `(int) (Math.random() * n) + start` | `start` 이상 `start + n` 미만의 정수를 반환합니다. |

```java
public class MathRandomExample {
    public static void main(String[] args) {
        int dice = (int) (Math.random() * 6) + 1;        // 1 ~ 6
        int fourDigit = (int) (Math.random() * 9000) + 1000;  // 1000 ~ 9999

        System.out.println(dice);
        System.out.println(fourDigit);
    }
}
```

```
4
7392
```

## 2. Random 클래스

`Random`은 무작위 값을 생성하는 객체입니다. `new Random()`으로 만든 뒤, 타입에 맞는 메서드로 값을 뽑습니다.

!!! info "참고"
    메서드는 나중에 다룹니다.

| 메서드 | 반환 타입 | 설명 |
|--------|-----------|------|
| `nextInt()` | `int` | 정수 범위 전체에서 무작위 값을 반환합니다. |
| `nextInt(bound)` | `int` | `0` 이상 `bound` 미만의 무작위 정수를 반환합니다. |
| `nextDouble()` | `double` | `0.0` 이상 `1.0` 미만의 무작위 실수를 반환합니다. |
| `nextBoolean()` | `boolean` | 무작위로 `true` 또는 `false`를 반환합니다. |

```java
import java.util.Random; // Random을 사용하기 위해 필요한 선언

public class RandomExample {
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
