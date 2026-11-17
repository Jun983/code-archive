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
- `equals()`를 이용한 문자열 비교는 아래 4절에서 다룹니다.

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

### 인덱스로 직접 접근하는 경우

`String`은 배열이 아니므로 `s[0]`처럼 대괄호로 문자에 접근할 수 없습니다. `charAt()`을 사용합니다.

```java
String s = "Hi";
char c = s[0];
```

```text
Main.java:4: error: array required, but String found
        char c = s[0];
                  ^
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.
- `substring(start, end)`의 범위가 문자열 길이를 벗어나면 `StringIndexOutOfBoundsException`이 발생합니다.

---

## 3. 불변성

`String` 객체는 한 번 만들어지면 내용을 바꿀 수 없습니다. 이를 **불변(immutable)**이라고 하며, `toUpperCase()`·`concat()`·`+`는 원본을 바꾸지 않고 새 문자열 객체를 만들어 반환합니다.

```java
public class ImmutableExample {
    public static void main(String[] args) {
        String a = "Hi";
        String b = a + "!";   // 새 객체 생성
        a.toUpperCase();      // 반환값을 받지 않으면 결과는 버려짐
        a.concat("x");        // 마찬가지

        System.out.println(a);
        System.out.println(b);
    }
}
```

```text
Hi
Hi!
```

| 용어 | 설명 |
|---|---|
| 불변 (Immutable) | 객체가 만들어진 뒤 내용을 바꿀 수 없는 성질 |

- 바뀐 결과가 필요하면 `a = a.toUpperCase();`처럼 반환값을 변수에 다시 대입해야 합니다.
- 반복문에서 `+`로 문자열을 계속 이어 붙이면 매번 새 객체가 생기므로, 많은 횟수라면 아래 6절의 `StringBuilder`를 사용합니다.

---

## 4. 문자열 비교

### equals와 ==

문자열의 **내용**을 비교할 때는 `equals()`를, 대소문자를 무시하려면 `equalsIgnoreCase()`를 사용합니다. `==`는 두 변수가 **같은 객체**를 가리키는지 비교합니다.

```java
public class EqualsExample {
    public static void main(String[] args) {
        String s1 = "java";
        String s2 = "java";
        String s3 = new String("java");

        System.out.println(s1 == s2);
        System.out.println(s1 == s3);
        System.out.println(s1.equals(s3));
        System.out.println("Java".equalsIgnoreCase("JAVA"));
    }
}
```

```text
true
false
true
true
```

| 용어 | 설명 |
|---|---|
| 문자열 풀 (String Pool) | 같은 내용의 문자열 리터럴을 하나의 객체로 공유해 보관하는 메모리 영역 |
| `equals()` | 두 문자열의 내용이 같은지 비교하는 메서드 |
| `==` | 두 참조가 같은 객체를 가리키는지 비교하는 연산자 |

- `s1`과 `s2`는 리터럴이라 문자열 풀의 같은 객체를 가리키므로 `==`가 `true`입니다.
- `new String("java")`는 풀과 별개의 새 객체를 만들므로 내용이 같아도 `==`가 `false`입니다.
- 문자열 비교에는 항상 `equals()`를 사용합니다.

### equals 호출 시 null

`null`인 변수에서 `equals()`를 호출하면 `NullPointerException`이 발생합니다.

```java
String s = null;
System.out.println(s.equals("a"));
```

```text
Exception in thread "main" java.lang.NullPointerException: Cannot invoke "String.equals(Object)" because "s" is null
	at Main.main(Main.java:4)
```

- 오류 메시지는 JDK 버전과 컴파일 옵션에 따라 다를 수 있습니다.
- `"a".equals(s)`처럼 리터럴을 앞에 두면 `s`가 `null`이어도 `false`를 반환합니다.

---

## 5. 검색·치환·분리·결합

### 검색과 치환

| 메서드 | 반환 타입 | 설명 |
|--------|-----------|------|
| `indexOf(str)` | `int` | 처음 나타나는 위치를 반환합니다. 없으면 `-1`입니다. |
| `lastIndexOf(str)` | `int` | 마지막으로 나타나는 위치를 반환합니다. |
| `startsWith(str)` / `endsWith(str)` | `boolean` | 해당 문자열로 시작·끝나는지 확인합니다. |
| `replace(old, new)` | `String` | 모든 `old`를 `new`로 바꾼 새 문자열을 반환합니다. |
| `trim()` / `strip()` | `String` | 앞뒤 공백을 제거한 새 문자열을 반환합니다. |
| `isEmpty()` / `isBlank()` | `boolean` | 길이가 0인지 / 공백뿐인지 확인합니다. |

```java
public class SearchReplaceExample {
    public static void main(String[] args) {
        String t = "  Hello, Java  ";

        System.out.println(t.indexOf("Java"));
        System.out.println(t.indexOf("xyz"));
        System.out.println(t.replace("Java", "World"));
        System.out.println(t.trim().length());
        System.out.println("Hello".startsWith("He"));
        System.out.println("  ".isBlank());
    }
}
```

```text
9
-1
  Hello, World  
11
true
true
```

- 모든 메서드는 원본을 바꾸지 않고 새 문자열을 반환합니다. (불변성)
- `isBlank()`와 `strip()`은 Java 11 이상에서 사용할 수 있습니다.

### 분리와 결합

`split()`은 구분자로 문자열을 나눠 `String` 배열로 반환하고, `String.join()`은 여러 문자열을 구분자로 이어 붙입니다. `repeat()`는 문자열을 반복합니다.

```java
public class SplitJoinExample {
    public static void main(String[] args) {
        String[] parts = "a,b,c".split(",");
        System.out.println(parts.length);
        System.out.println(parts[1]);

        System.out.println(String.join("-", "a", "b", "c"));
        System.out.println("ab".repeat(3));
    }
}
```

```text
3
b
a-b-c
ababab
```

- 배열은 [배열](array.md)에서 자세히 다룹니다.
- `repeat()`는 Java 11 이상에서 사용할 수 있습니다.

---

## 6. StringBuilder

`StringBuilder`는 내용을 직접 수정할 수 있는 **가변** 문자열 클래스입니다. 새 객체를 만들지 않고 같은 객체에 이어 붙이므로 문자열을 여러 번 조합할 때 효율적입니다.

```java
public class StringBuilderExample {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder();
        sb.append("a").append(1).append(true);
        sb.insert(0, "[");
        sb.append("]");

        System.out.println(sb);
        System.out.println(sb.length());
        System.out.println(sb.reverse());
        System.out.println(sb.toString());
    }
}
```

```text
[a1true]
8
]eurt1a[
]eurt1a[
```

| 용어 | 설명 |
|---|---|
| 가변 (Mutable) | 객체가 만들어진 뒤에도 내용을 바꿀 수 있는 성질 |
| `append()` | 끝에 값을 이어 붙이고 자기 자신을 반환하는 메서드 |
| `insert()` | 지정한 위치에 값을 끼워 넣는 메서드 |
| `reverse()` | 문자 순서를 뒤집는 메서드. 원본이 바뀜 |
| `toString()` | `StringBuilder`의 내용을 `String`으로 변환하는 메서드 |

- `append()`가 자기 자신을 반환하므로 `sb.append("a").append(1)`처럼 이어서 호출할 수 있습니다.
- `reverse()`는 `String`과 달리 원본을 바꿉니다. 위 예제에서 `toString()` 결과도 뒤집힌 상태입니다.
- 한 번만 조합하는 단순한 경우에는 `+`가 더 간결하며, 반복문 안에서 많이 이어 붙일 때 `StringBuilder`를 사용합니다.
