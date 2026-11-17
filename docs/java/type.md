---
hide:
  - navigation
---

# 타입

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 `int`, `double`, `boolean`, `char`와 문자열(`String`)이 각각 어떤 값을 저장하는지만 익히면 충분합니다. `byte`, `short`, `long`, `float`의 범위와 참조 타입의 세부 동작은 이런 것이 있다는 정도만 훑어보고, 필요할 때 다시 찾아보거나 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

타입은 저장할 수 있는 값의 종류와 크기를 정의하며, 이 문서에서는 Java의 타입을 구분하는 **기본 타입**과 **참조 타입**을 다룹니다.

---

## 1. 타입이란

Java는 정적 타입 언어이므로, 모든 값에는 컴파일 시점에 정해지는 타입이 있습니다. 타입에 따라 저장할 수 있는 값의 범위와 차지하는 메모리 크기가 달라집니다.

```java
int age = 20;
double height = 175.5;
boolean isStudent = true;

System.out.println(age);
System.out.println(height);
System.out.println(isStudent);
```

```text
20
175.5
true
```

| 용어 | 설명 |
|---|---|
| 타입 | 저장할 수 있는 값의 종류와 크기를 정한 분류 |
| 기본 타입 | 값 자체를 직접 저장하는 8가지 타입 |
| 참조 타입 | 객체를 가리키는 타입 |

- 변수를 선언하고 사용하는 방법은 [변수와 상수](variable.md)에서 자세히 다룹니다.

---

## 2. 기본 타입 (Primitive Type)

값 자체를 직접 저장하는 8가지 타입입니다.

| 타입 | 종류 | 크기 | 기본값 | 범위 |
|------|------|------|--------|------|
| `byte` | 정수 | 1 byte | `0` | -128 ~ 127 |
| `short` | 정수 | 2 byte | `0` | -32,768 ~ 32,767 |
| `int` | 정수 | 4 byte | `0` | 약 -21억 ~ 21억 |
| `long` | 정수 | 8 byte | `0L` | 약 -922경 ~ 922경 |
| `float` | 실수 | 4 byte | `0.0f` | 소수점 약 7자리 |
| `double` | 실수 | 8 byte | `0.0` | 소수점 약 15자리 |
| `char` | 문자 | 2 byte | `'\0'` | 0 ~ 65,535 (유니코드) |
| `boolean` | 논리 | 1 byte | `false` | true / false |

| 용어 | 설명 |
|---|---|
| 유니코드 | 전 세계 문자를 하나의 숫자 번호로 표현하는 국제 표준 (예: `'A'`=65, `'가'`=44032) |

- 접미사가 없으면 정수는 `int`, 실수는 `double`로 처리됩니다.
- `long`은 `L`, `float`은 `f`를 붙여 구분합니다 (예: `100L`, `3.14f`).

### 범위를 넘는 값

타입의 범위를 벗어나는 리터럴을 쓰면 컴파일 오류가 발생합니다.

```java
int big = 3000000000;
```

```text
Main.java:3: error: integer number too large
        int big = 3000000000;
                  ^
```

- `3000000000L`처럼 `L`을 붙여 `long`으로 선언하면 해결됩니다.
- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.
- `double` 값을 `float`에 넣을 때 `f`를 빼먹는 경우도 같은 방식으로 컴파일 오류가 발생하며, [타입 캐스팅](casting.md)에서 자세히 다룹니다.

### 타입이 다른 값의 연산

타입이 다른 기본 타입끼리 연산하면 더 큰 타입으로 맞춰져 계산됩니다. 정수끼리의 나눗셈은 정수 결과를, 문자열과의 `+`는 문자열 연결을 만듭니다.

```java
public class MixedTypeExample {
    public static void main(String[] args) {
        System.out.println(1 + 2.0);
        System.out.println(10 / 4);
        System.out.println(10 / 4.0);
        System.out.println('A' + 1);
        System.out.println("A" + 1);
        System.out.println(1 + 2 + "3" + 4 + 5);
    }
}
```

```text
3.0
2
2.5
66
A1
3345
```

| 식 | 결과 타입 | 설명 |
|---|---|---|
| `1 + 2.0` | `double` | `int`가 `double`로 맞춰짐 |
| `10 / 4` | `int` | 소수점 이하가 버려짐 |
| `'A' + 1` | `int` | `char`가 문자 코드(65)로 계산됨 |
| `"A" + 1` | `String` | 숫자가 문자열로 바뀌어 연결됨 |

- `1 + 2 + "3" + 4 + 5`는 왼쪽부터 계산하므로 `1 + 2 = 3`까지는 숫자 덧셈이고, `"3"`을 만난 뒤부터 문자열 연결이 됩니다.
- 자동 변환의 규칙은 [타입 캐스팅](casting.md)에서 자세히 다룹니다.

### 오버플로

정수 타입은 표현 범위가 정해져 있어, 범위를 넘으면 예외 없이 반대쪽 끝값으로 되돌아갑니다.

```java
public class OverflowTypeExample {
    public static void main(String[] args) {
        System.out.println(Integer.MAX_VALUE + 1);
        System.out.println(Long.MAX_VALUE + 1);

        byte b = 127;
        b++;
        System.out.println(b);

        System.out.println(2147483647 * 2);
        System.out.println(2147483647 * 2L);
    }
}
```

```text
-2147483648
-9223372036854775808
-128
-2
4294967294
```

| 용어 | 설명 |
|---|---|
| 오버플로 (Overflow) | 값이 타입의 범위를 넘어 반대쪽 끝으로 되돌아가는 현상 |
| `Integer.MAX_VALUE` | `int`가 표현할 수 있는 최댓값 (2,147,483,647) |

- `2147483647 * 2`는 `int` 연산이라 오버플로가 발생하고, 한쪽을 `long`(`2L`)으로 바꾸면 `long`으로 계산되어 정상 값이 나옵니다.
- 범위를 넘으면 예외를 던지고 싶다면 `Math.addExact`처럼 `Exact`가 붙은 메서드를 사용합니다. 범위를 넘으면 `ArithmeticException: integer overflow`가 발생합니다.

### 실수의 오차

`float`와 `double`은 이진수로 값을 저장하므로 `0.1` 같은 값을 정확히 표현하지 못해 계산에 작은 오차가 생길 수 있습니다.

```java
System.out.println(0.1 + 0.2);
```

```text
0.30000000000000004
```

- 실수는 `==`로 같은지 비교하지 않고, 오차 범위 안인지 확인합니다.
- 정확한 소수 계산이 필요하면 `BigDecimal`을 사용합니다.

### 0으로 나누기

정수를 0으로 나누면 예외가 발생하지만, 실수를 0으로 나누면 `Infinity`가 됩니다.

```java
System.out.println(1.0 / 0);
System.out.println(10 / 0);
```

```text
Infinity
Exception in thread "main" java.lang.ArithmeticException: / by zero
	at Main.main(Main.java:5)
```

- 오류 메시지는 JDK 버전에 따라 다를 수 있습니다.

---

## 3. 참조 타입 (Reference Type)

객체를 가리키는 타입입니다. 기본 타입이 값 자체를 저장하는 것과 달리, 참조 타입은 객체가 있는 메모리 위치(주소)를 저장합니다. `null`을 가질 수 있습니다.

```java
String name = "홍길동";
String empty = null;

System.out.println(name);
System.out.println(empty);
```

```text
홍길동
null
```

| 용어 | 설명 |
|---|---|
| 객체 | 데이터와 기능을 하나로 묶은 단위 |
| `null` | 아무것도 가리키지 않는 상태. 기본 타입은 `null`을 가질 수 없음 |

- 객체를 직접 정의하고 생성하는 방법은 [클래스와 객체](class-object.md)에서 다룹니다.
- 대표적인 참조 타입인 문자열은 [String 클래스](string.md)에서 자세히 다룹니다.

### null 참조 오류

`null`인 참조 변수의 메서드를 호출하면 런타임 예외가 발생합니다.

```java
String empty = null;
System.out.println(empty.length());
```

```text
Exception in thread "main" java.lang.NullPointerException: Cannot invoke "String.length()" because "empty" is null
	at Main.main(Main.java:4)
```

- 오류 메시지는 JDK 버전과 컴파일 옵션에 따라 다를 수 있습니다.
- 예외의 처리 방법은 [예외 처리](exception.md)에서 자세히 다룹니다.

---

## 4. var

`var`는 변수의 타입을 직접 쓰는 대신 초기값을 보고 컴파일러가 타입을 정하게 하는 키워드입니다(Java 10 이상). 타입이 사라지는 것이 아니라 컴파일 시점에 정해지므로 Java는 여전히 정적 타입 언어입니다.

```java
public class VarExample {
    public static void main(String[] args) {
        var n = 10;        // int
        var d = 3.5;       // double
        var s = "hi";      // String
        var l = 10L;       // long

        System.out.println(n + d);
        System.out.println(s.length());
    }
}
```

```text
13.5
2
```

| 용어 | 설명 |
|---|---|
| `var` | 초기값으로 타입을 추론해 지정하는 지역 변수용 키워드 |
| 타입 추론 | 컴파일러가 값을 보고 타입을 자동으로 정하는 것 |

- `var`는 메서드 안의 지역 변수에서만 쓸 수 있고, 필드나 메서드 매개변수에는 쓸 수 없습니다.
- 변수가 한 번 정해진 타입은 바뀌지 않습니다.

### var 오류

초기값이 없거나 `null`이면 타입을 추론할 수 없고, 추론된 타입과 다른 값을 대입할 수도 없습니다.

```java
var x;
```

```text
Main.java:3: error: cannot infer type for local variable x
        var x;
            ^
  (cannot use 'var' on variable without initializer)
```

```java
var z = 1;
z = "a";
```

```text
Main.java:4: error: incompatible types: String cannot be converted to int
        z = "a";
            ^
```

- `var y = null;`도 타입을 추론할 수 없어 컴파일 오류가 발생합니다.
- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

---

## 5. 타입 확인

### instanceof

`instanceof`는 참조 변수가 가리키는 객체가 특정 타입인지 `boolean`으로 확인합니다.

```java
public class InstanceofExample {
    public static void main(String[] args) {
        Object o = "text";

        System.out.println(o instanceof String);
        System.out.println(o instanceof Integer);

        if (o instanceof String str) {
            System.out.println(str.length());
        }
    }
}
```

```text
true
false
4
```

| 용어 | 설명 |
|---|---|
| `instanceof` | 객체가 해당 타입인지 확인하는 연산자 |
| `Object` | 모든 참조 타입의 최상위 타입 |

- `o instanceof String str`는 `true`일 때 `str` 변수로 바로 사용할 수 있게 해 주는 패턴 매칭 문법입니다(Java 16 이상).

### getClass

`getClass()`는 객체의 실제 클래스 정보를 반환하며, `getName()`·`getSimpleName()`으로 이름을 얻습니다.

```java
public class GetClassExample {
    public static void main(String[] args) {
        Integer i = 5;
        String s = "hi";

        System.out.println(i.getClass());
        System.out.println(s.getClass().getName());
        System.out.println(i.getClass().getSimpleName());
    }
}
```

```text
class java.lang.Integer
java.lang.String
Integer
```

- 기본 타입은 객체가 아니므로 `int n = 5; n.getClass()`처럼 메서드를 호출할 수 없습니다. 래퍼 클래스(`Integer`)에 담은 뒤 호출합니다. [타입 캐스팅](casting.md)에서 다룹니다.

### 기본 타입에 instanceof를 쓴 경우

기본 타입 변수에는 `instanceof`를 사용할 수 없습니다.

```java
int n = 5;
System.out.println(n instanceof Integer);
```

```text
Main.java:4: error: unexpected type
        System.out.println(n instanceof Integer);
                           ^
  required: reference
  found:    int
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.
- 기본 타입의 타입은 변수를 선언한 타입으로 이미 정해져 있으므로, 실행 중에 타입을 확인하는 방법은 참조 타입에 주로 쓰입니다.
