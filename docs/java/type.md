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
