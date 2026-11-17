---
hide:
  - navigation
---

# 배열

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 배열을 선언하고 초기화하는 방법, 인덱스로 원소를 읽고 수정하는 방법, `for`문으로 순회하는 방법만 익히면 충분합니다. 기본값, 참조 복사와 값 복사의 차이는 이런 것이 있다는 정도만 훑어보고, 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

배열은 같은 타입의 값을 순서대로 묶어 보관하는 자료구조이며, 이 문서에서는 배열의 선언과 초기화, 원소 접근과 수정, 순회, 배열 복사를 다룹니다.

---

## 1. 배열이란

변수 하나에는 값 하나만 담을 수 있어서, 비슷한 값이 여러 개일 때 `score1`, `score2`처럼 변수를 계속 만들어야 합니다. 배열을 사용하면 같은 타입의 값을 하나의 이름으로 묶어 관리할 수 있습니다.

```java
public class ArrayIntroExample {
    public static void main(String[] args) {
        int[] scores = {90, 85, 70};

        System.out.println(scores[0]);
        System.out.println(scores[1]);
        System.out.println(scores.length);
    }
}
```

```text
90
85
3
```

| 용어 | 설명 |
|---|---|
| 배열 | 같은 타입의 값을 순서대로 묶어 보관하는 자료구조 |
| 원소 | 배열에 담긴 각각의 값 |
| 인덱스 | 원소의 위치를 나타내는 번호. `0`부터 시작하며 마지막은 `length - 1` |
| 길이 | 배열에 담을 수 있는 원소의 개수. `배열명.length`로 구함 |

- 배열은 한 번 만들면 길이를 바꿀 수 없습니다.
- 한 배열에는 같은 타입의 값만 담을 수 있습니다.
- 변수에 대한 기본 내용은 [변수](variable.md), 타입의 종류는 [타입](type.md)에서 자세히 다룹니다.

### 배열의 길이

배열의 길이는 만들 때 정해지며 이후에 바꿀 수 없습니다. `length`는 읽기만 가능하므로 값을 대입하면 컴파일 오류가 발생합니다.

```java
int[] x = new int[3];
x.length = 5;
```

```text
Main.java:8: error: cannot assign a value to final variable length
        x.length = 5;
         ^
```

- 더 많은 원소가 필요하면 새 배열을 만들어 값을 옮겨 담아야 합니다.
- 길이가 자주 변하는 데이터는 [컬렉션](collections.md)을 사용합니다.
- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

---

## 2. 선언과 초기화

타입 뒤에 `[]`를 붙여 선언하며, `new` 키워드로 크기를 지정하거나 중괄호로 초기값을 직접 지정합니다.

| 방법 | 예시 | 설명 |
|---|---|---|
| 크기 지정 | `new int[5]` | 길이 5인 배열을 만들고 기본값으로 채웁니다. |
| 값 지정 | `{2, 3, 5}` | 선언과 동시에 초기값을 직접 지정합니다. |

```java
public class ArrayExample {
    public static void main(String[] args) {
        // 크기 지정: 숫자 타입은 0으로 초기화
        int[] scores = new int[5];

        // 초기값 직접 지정
        int[] primes = {2, 3, 5, 7, 11};
        String[] days = {"월", "화", "수", "목", "금"};

        System.out.println(scores[0]);
        System.out.println(primes[0]);
        System.out.println(days[0]);
    }
}
```

```text
0
2
월
```

- `scores[0]`의 `0`은 `new int[5]`가 채워 둔 기본값입니다.
- 선언할 때 쓰는 `[]`는 타입 뒤(`int[] scores`)에 붙이는 것이 일반적입니다.

### 기본값

배열의 크기만 지정하고 초기값을 주지 않으면 타입별 기본값으로 채워집니다.

| 타입 | 기본값 |
|---|---|
| `int`, `double` 등 숫자 타입 | `0` |
| `boolean` | `false` |
| 참조 타입 (`String` 등) | `null` |

```java
import java.util.Arrays;

public class ArrayDefaultExample {
    public static void main(String[] args) {
        boolean[] flags = new boolean[2];
        String[] names = new String[2];

        System.out.println(flags[0]);
        System.out.println(names[0]);
        System.out.println(Arrays.toString(new int[3]));
    }
}
```

```text
false
null
[0, 0, 0]
```

- `null`은 아무 값도 가리키지 않는다는 뜻이며, `null`인 원소에 `.length()` 같은 메서드를 호출하면 `NullPointerException`이 발생합니다.
- `Arrays.toString()`은 배열의 내용을 문자열로 바꿔 줍니다. 배열 변수를 그대로 `println`하면 내용이 아닌 `[I@7ad041f3` 같은 참조 값이 출력됩니다.

---

## 3. 원소 접근과 수정

배열에 담긴 각 값을 원소라 하며, 인덱스로 접근합니다. 인덱스는 `0`부터 시작하고 마지막 원소의 인덱스는 `length - 1`입니다.

```java
public class ArrayAccessExample {
    public static void main(String[] args) {
        int[] scores = {90, 85, 70, 95, 60};

        System.out.println(scores[0]);
        System.out.println(scores[4]);
        System.out.println(scores.length);

        scores[2] = 75;
        System.out.println(scores[2]);
    }
}
```

```text
90
60
5
75
```

- `scores[0]`은 첫 번째, `scores[4]`는 마지막(`length - 1`) 원소입니다.
- `scores[2] = 75`처럼 인덱스에 값을 대입하면 해당 원소가 수정됩니다.

### 인덱스 범위를 벗어난 경우

존재하지 않는 인덱스를 사용하면 `ArrayIndexOutOfBoundsException`이 발생합니다. 길이가 3인 배열의 유효한 인덱스는 `0`~`2`이므로 `3`은 범위를 벗어납니다.

```java
int[] scores = {90, 85, 70};
System.out.println(scores[3]);
```

```text
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3
	at Main.main(Main.java:4)
```

- 읽을 때뿐 아니라 `scores[3] = 100;`처럼 쓸 때도 같은 오류가 발생합니다.
- 오류 메시지의 `Index 3`은 사용한 인덱스, `length 3`은 배열의 길이입니다.
- 마지막 원소는 `scores[scores.length - 1]`로 접근하며, 오류 처리 방법은 [예외 처리](exception.md)에서 자세히 다룹니다.
- 오류 메시지의 세부 표시는 Java 버전에 따라 다를 수 있습니다.

---

## 4. 배열 순회

인덱스 기반 `for`문 또는 `for-each`문으로 모든 원소를 순회합니다. `for-each`는 `for (타입 변수 : 배열)` 형태로, 인덱스 없이 값만 꺼낼 때 사용합니다.

| 방식 | 용도 |
|---|---|
| `for (int i = 0; i < arr.length; i++)` | 인덱스가 필요하거나 원소를 수정할 때 |
| `for (int n : arr)` | 값만 읽을 때 |

```java
public class ArrayLoopExample {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};

        // 인덱스 기반 순회
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(i + ": " + numbers[i]);
        }

        // for-each 순회
        for (int n : numbers) {
            System.out.println(n);
        }
    }
}
```

```text
0: 10
1: 20
2: 30
3: 40
4: 50
10
20
30
40
50
```

- 반복문의 문법은 [반복문](loop.md)에서 자세히 다룹니다.
- 반복 조건을 `i <= numbers.length`로 쓰면 마지막에 `numbers[5]`에 접근해 `ArrayIndexOutOfBoundsException`이 발생하므로, 조건은 `i < numbers.length`로 작성합니다.

### for-each와 원본 배열

`for-each`는 원소의 값을 복사해 순회하므로, 반복 변수를 수정해도 원본 배열은 바뀌지 않습니다.

```java
public class ForEachCopyExample {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3};

        for (int n : numbers) {
            n = n * 10;
        }
        System.out.println(numbers[0]);

        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = numbers[i] * 10;
        }
        System.out.println(numbers[0]);
    }
}
```

```text
1
10
```

- 원소를 수정하려면 인덱스 기반 `for`문을 사용합니다.

---

## 5. 배열 복사

배열 변수는 배열 자체가 아니라 배열이 있는 위치(참조)를 담고 있습니다. 그래서 `=`로 대입하면 값이 복사되지 않고 같은 배열을 가리키게 됩니다.

| 방식 | 예시 | 결과 |
|---|---|---|
| 참조 복사 | `int[] b = a;` | `a`와 `b`가 같은 배열을 가리킴 |
| 값 복사 | `int[] c = a.clone();` | 내용이 같은 새 배열을 만듦 |

```java
public class ArrayCopyExample {
    public static void main(String[] args) {
        int[] a = {1, 2, 3};

        int[] b = a;
        b[0] = 99;
        System.out.println(a[0]);
        System.out.println(a == b);

        int[] c = a.clone();
        c[0] = 1;
        System.out.println(a[0]);
        System.out.println(a == c);
    }
}
```

```text
99
true
99
false
```

- `b`를 바꿨는데 `a[0]`도 `99`가 된 것은 두 변수가 같은 배열을 가리키기 때문입니다.
- `clone()`으로 만든 `c`는 별도의 배열이므로 `c`를 바꿔도 `a`는 바뀌지 않습니다.
- `a == c`가 `false`인 것은 내용이 같아도 서로 다른 배열이기 때문입니다.
- `Arrays.copyOf(a, a.length)`로도 값 복사를 할 수 있습니다.
