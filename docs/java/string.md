---
hide:
  - navigation
---

# String 클래스

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 문자열을 `String` 변수에 저장하는 방법과 `length()`, `charAt()`처럼 `변수명.메서드명()` 형태로 메서드를 호출하는 방법만 익히면 충분합니다. 메서드의 세부 동작은 이런 것이 있다는 정도만 훑어보고, 필요할 때 다시 찾아보거나 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

`String`은 문자열을 저장하는 **참조 타입**이며, 이 문서에서는 문자열을 선언하는 방법과 문자열을 다루는 주요 메서드를 다룹니다.

---

## 1. String이란

`String`은 `"홍길동"`처럼 여러 문자가 이어진 문자열을 저장하는 타입입니다. 기본 타입이 아니라 참조 타입이므로 `null`을 가질 수 있고, 메서드를 호출할 수 있습니다.

```java
public class StringDeclareExample {
    public static void main(String[] args) {
        String name = "홍길동";
        String greeting = "안녕하세요";
        String empty = "";      // 빈 문자열
        String nothing = null;  // 아무것도 가리키지 않는 상태

        System.out.println(name);
        System.out.println(greeting);
    }
}
```

```text
홍길동
안녕하세요
```

| 용어 | 설명 |
|---|---|
| 문자열 | 문자가 순서대로 이어진 데이터 |
| 문자열 리터럴 | 큰따옴표(`"`)로 감싸 코드에 직접 쓴 문자열 |
| 빈 문자열 | 문자가 하나도 없는 `""` |

- 문자 하나는 작은따옴표(`'A'`)의 `char`, 문자열은 큰따옴표(`"A"`)의 `String`으로 구분합니다.
- 참조 타입의 특징은 [타입](type.md)에서 자세히 다룹니다.

### 선언 오류

문자열을 작은따옴표로 감싸거나 따옴표를 닫지 않으면 컴파일 오류가 발생합니다.

```java
String name = '홍길동';
```

```text
Main.java:3: error: unclosed character literal
        String name = '홍길동';
                      ^
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

---

## 2. 주요 메서드

`String`은 문자열을 다루는 메서드를 제공합니다. `변수명.메서드명()` 형태로 호출합니다.

| 용어 | 설명 |
|---|---|
| 반환 타입 | 메서드가 실행을 마치고 돌려주는 값의 타입 |
| 인덱스 | 문자열에서 각 문자의 위치를 나타내는 번호. 0부터 시작함 |

| 메서드 | 반환 타입 | 설명 |
|--------|-----------|------|
| `length()` | `int` | 문자열 길이를 반환합니다. |
| `charAt(index)` | `char` | 특정 위치의 문자를 반환합니다. 인덱스는 0부터 시작합니다. |
| `substring(start, end)` | `String` | `start`부터 `end` 직전까지의 부분 문자열을 반환합니다. |
| `toUpperCase()` | `String` | 모든 문자를 대문자로 변환합니다. |
| `toLowerCase()` | `String` | 모든 문자를 소문자로 변환합니다. |
| `contains(str)` | `boolean` | 특정 문자열이 포함되면 `true`를 반환합니다. |

```java
public class StringMethodExample {
    public static void main(String[] args) {
        String word = "Hello";

        System.out.println(word.length());
        System.out.println(word.charAt(0));
        System.out.println(word.substring(1, 3));
        System.out.println(word.toUpperCase());
        System.out.println(word.toLowerCase());
    }
}
```

```text
5
H
el
HELLO
hello
```

- 지금은 호출 형태만 익히고, 메서드에 대한 자세한 내용은 [메서드](method.md)에서 다룹니다.
- `+`를 이용한 문자열 연결은 [연산자](operator.md)에서 다룹니다.
- `equals()`를 이용한 문자열 비교는 나중에 다룹니다.

### 메서드 호출 오류

`null`인 변수나 범위를 벗어난 인덱스로 메서드를 호출하면 런타임 예외가 발생합니다.

```java
String word = "Hello";
System.out.println(word.charAt(10));
```

```text
Exception in thread "main" java.lang.StringIndexOutOfBoundsException: index 10, length 5
	at java.base/java.lang.String.checkIndex(String.java:4563)
```

| 상황 | 오류 |
|---|---|
| 문자열 길이를 벗어난 인덱스를 지정함 | 런타임 예외 `StringIndexOutOfBoundsException` |
| `null`인 변수에서 메서드를 호출함 | 런타임 예외 `NullPointerException` |
| 존재하지 않는 메서드를 호출함 | 컴파일 오류 `cannot find symbol` |

- 오류 메시지와 `at` 줄의 표시는 JDK 버전에 따라 다를 수 있습니다.
- 예외의 처리 방법은 [예외 처리](exception.md)에서 자세히 다룹니다.
