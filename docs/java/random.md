---
hide:
  - navigation
---

# Random 클래스

[← Java로 돌아가기](index.md)

무작위 값이 필요할 때 `Random` 클래스를 사용하며, 이 문서에서는 `Random` 객체를 만드는 방법, 타입에 맞는 무작위 값을 반환하는 주요 메서드, 원하는 범위의 값을 만드는 방법, 시드를 지정해 같은 값을 재현하는 방법을 다룹니다.

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

### import를 빼먹은 경우

`import java.util.Random;`을 쓰지 않으면 컴파일러가 `Random`을 찾지 못해 오류가 발생합니다.

```java
public class Main {
    public static void main(String[] args) {
        Random random = new Random();
        System.out.println(random.nextInt(6));
    }
}
```

```text
Main.java:3: error: cannot find symbol
        Random random = new Random();
        ^
  symbol:   class Random
  location: class Main
```

- `Random`이 두 번 나오므로 오류도 두 번 출력됩니다.
- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

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

### 범위 오류

`nextInt(bound)`에 0 이하의 값을 넣으면 런타임 예외가 발생합니다.

```java
Random random = new Random();
System.out.println(random.nextInt(-5));
```

```text
Exception in thread "main" java.lang.IllegalArgumentException: bound must be positive
	at java.base/java.util.Random.nextInt(Random.java:322)
```

- `0`을 넣어도 같은 예외가 발생합니다.
- 오류 메시지와 `at` 줄의 표시는 JDK 버전에 따라 다를 수 있습니다.
- 예외의 처리 방법은 [예외 처리](exception.md)에서 자세히 다룹니다.

---

## 3. 원하는 범위의 값 만들기

`nextInt(bound)`는 항상 `0`부터 시작하므로, 시작값을 더해 원하는 범위로 옮깁니다. `최솟값`부터 `최댓값`까지(양쪽 포함)의 정수는 다음과 같이 만듭니다.

| 범위 | 식 |
|---|---|
| `0` ~ `n - 1` | `random.nextInt(n)` |
| `최솟값` ~ `최댓값` | `random.nextInt(최댓값 - 최솟값 + 1) + 최솟값` |

```java
import java.util.Random;

public class RandomRangeExample {
    public static void main(String[] args) {
        Random random = new Random(7);
        int min = 10;
        int max = 20;

        for (int i = 0; i < 5; i++) {
            System.out.print((random.nextInt(max - min + 1) + min) + " ");
        }
        System.out.println();

        String[] menu = {"김밥", "라면", "우동"};
        System.out.println(menu[random.nextInt(menu.length)]);
    }
}
```

```text
12 20 20 12 16 
라면
```

- `nextInt(11)`은 0~10을 반환하므로 `+ 10`을 하면 10~20이 됩니다. 상한이 포함되도록 `+ 1`을 잊지 않습니다.
- 배열의 무작위 원소는 `nextInt(배열.length)`를 인덱스로 써서 고릅니다. 배열은 [배열](array.md)에서 다룹니다.
- Java 17 이상에서는 `random.nextInt(5, 8)`처럼 시작값(포함)과 끝값(제외)을 함께 지정할 수 있습니다.

### Math.random()

`Math.random()`도 `0.0` 이상 `1.0` 미만의 무작위 `double`을 반환합니다. 객체를 만들지 않고 바로 호출할 수 있지만, 정수 범위를 만들려면 형변환이 필요합니다.

```java
int dice = (int) (Math.random() * 6) + 1;
System.out.println(dice >= 1 && dice <= 6);
```

```text
true
```

- `Math.random() * 6`은 `0.0` 이상 `6.0` 미만이며, `(int)`로 소수점을 버리면 0~5가 됩니다.
- 이 문서에서는 `nextInt()` 등 다양한 타입의 메서드를 제공하는 `Random` 클래스를 기준으로 합니다.
- 형변환은 [형변환](casting.md)에서 자세히 다룹니다.

---

## 4. 시드로 같은 값 재현하기

`new Random(시드)`처럼 정수(시드)를 넘겨 객체를 만들면 같은 시드로 만든 객체는 항상 같은 순서의 값을 만듭니다. 테스트나 디버깅에서 결과를 재현할 때 사용합니다.

```java
import java.util.Random;

public class RandomSeedExample {
    public static void main(String[] args) {
        Random r1 = new Random(42);
        Random r2 = new Random(42);

        for (int i = 0; i < 3; i++) {
            System.out.println(r1.nextInt(10) + " " + r2.nextInt(10));
        }
    }
}
```

```text
0 0
3 3
8 8
```

| 용어 | 설명 |
|---|---|
| 시드(seed) | 무작위 값 생성의 출발점이 되는 값. 같으면 같은 순서의 값이 만들어짐 |

- `new Random()`은 매번 다른 시드를 사용하므로 실행할 때마다 값이 달라집니다.
- 시드를 고정하면 무작위처럼 보여도 예측할 수 있는 값이므로, 보안용 난수에는 사용하지 않습니다.
- 같은 시드로 만든 객체에서 같은 순서로 같은 메서드를 호출해야 같은 값이 나옵니다.
