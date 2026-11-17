---
hide:
  - navigation
---

# Random 클래스

[← Java로 돌아가기](index.md)

무작위 값이 필요할 때 `Random` 클래스를 사용하며, 이 문서에서는 `Random` 객체를 만드는 방법과 타입에 맞는 무작위 값을 반환하는 주요 메서드를 다룹니다.

---

## 1. Random이란

`Random`은 무작위 정수, 실수, 논리값을 만들어 주는 표준 라이브러리 클래스입니다. `new Random()`으로 객체를 만든 뒤 메서드를 호출해 값을 얻습니다.

```java
import java.util.Random; // Random을 사용하기 위해 필요한 선언

public class RandomCreateExample {
    public static void main(String[] args) {
        Random random = new Random();
        System.out.println(random.nextBoolean());
    }
}
```

```text
true
```

| 용어 | 설명 |
|---|---|
| `Random` | 무작위 값을 만들어 주는 클래스 |
| `new Random()` | 무작위 값을 생성하는 객체를 만드는 식 |
| `import` | 다른 패키지의 클래스를 사용하겠다고 알리는 선언 |

- 실행할 때마다 값이 달라지므로 위 출력은 예시입니다.
- `import java.util.Random;`을 빼먹으면 `cannot find symbol` 컴파일 오류가 발생하며, 사례는 [입력](input.md)에서 같은 방식으로 다룹니다.

---

## 2. 주요 메서드

생성한 `Random` 객체의 메서드로 타입에 맞는 무작위 값을 뽑습니다. `변수명.메서드명()` 형태로 호출합니다.

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

```text
3
```

- `nextInt(6)`은 0~5를 반환하므로 `+ 1`을 더해 1~6 범위로 만듭니다.
- 지금은 호출 형태만 익히고, 메서드에 대한 자세한 내용은 [메서드](method.md)에서 다룹니다.
- `Math.random()`으로도 무작위 `double` 값을 얻을 수 있습니다. `(int) (Math.random() * n) + start` 형태로 정수 범위를 만들 수 있지만, 이 문서에서는 `Random` 클래스 사용을 기준으로 합니다.

### 범위 오류

`nextInt(bound)`에 0 이하의 값을 넣으면 런타임 예외가 발생합니다.

```java
Random random = new Random();
System.out.println(random.nextInt(0));
```

```text
Exception in thread "main" java.lang.IllegalArgumentException: bound must be positive
	at java.base/java.util.Random.nextInt(Random.java:322)
```

- 오류 메시지와 `at` 줄의 표시는 JDK 버전에 따라 다를 수 있습니다.
- 예외의 처리 방법은 [예외 처리](exception.md)에서 자세히 다룹니다.
