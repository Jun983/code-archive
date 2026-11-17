---
hide:
  - navigation
---

# 변수와 상수

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 변수를 선언하고 값을 넣는 방법, 그리고 `final`로 값이 바뀌지 않는 상수를 만드는 방법만 익히면 충분합니다. 변수의 주소(Address) 속성과 `static final` 상수는 이런 것이 있다는 정도만 훑어보고, 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

변수는 값을 저장하는 메모리 공간에 붙인 이름이고 상수는 `final` 키워드로 선언해 최초 초기화 이후 값을 변경할 수 없는 변수이며, 이 문서에서는 변수의 속성, 선언과 초기화, 상수, 명명 규칙을 다룹니다.

---

## 1. 변수란

프로그램은 계산한 값을 나중에 다시 쓰기 위해 메모리에 저장해 둡니다. 변수는 이 메모리 공간에 이름을 붙여, 이름으로 값을 읽고 바꿀 수 있게 한 것입니다.

```java
int age = 30;
System.out.println(age);

age = 31;
System.out.println(age);
```

```text
30
31
```

| 용어 | 설명 |
|---|---|
| 변수 | 값을 저장하고 재할당할 수 있는 메모리 공간 |
| 상수 | `final`로 선언해 재할당을 막은 변수 |
| 재할당 | 이미 값이 들어 있는 변수에 새 값을 넣는 것 |

- 변수에 넣을 수 있는 값의 종류는 [타입](type.md)에서 다룹니다.

### 변수의 속성

변수는 세 가지 속성을 가집니다.

| 속성 | 설명 |
|------|------|
| **값(Value)** | 변수에 저장된 실제 데이터입니다. |
| **크기(Size)** | 타입마다 차지하는 메모리 크기가 다릅니다. |
| **주소(Address)** | 값이 저장된 메모리 위치입니다. 참조 타입에서 중요하게 쓰입니다. |

---

## 2. 변수의 선언과 초기화

선언은 타입과 변수명을 지정해 메모리 공간을 확보하고, 초기화는 선언된 변수에 처음 값을 할당하는 것입니다.

### 선언과 초기화

```java
public class VariableExample {
    public static void main(String[] args) {
        // 선언: 타입과 변수명만 지정
        int age;

        // 초기화: 선언 후 값 할당
        age = 30;

        // 선언 및 초기화: 선언과 동시에 값 할당
        int count = 0;
        double pi = 3.14159;
        long population = 8_000_000_000L;  // L: long 접미사 (int 범위 초과 시 필수), _는 숫자 가독성을 위한 구분자
        char grade = 'A';
        boolean isActive = true;

        System.out.println(age);
        System.out.println(count);
        System.out.println(pi);
        System.out.println(population);
        System.out.println(grade);
        System.out.println(isActive);
    }
}
```

```text
30
0
3.14159
8000000000
A
true
```

| 용어 | 설명 |
|---|---|
| 선언 | 타입과 변수명을 지정해 메모리 공간을 확보하는 것 |
| 초기화 | 선언된 변수에 처음 값을 할당하는 것 |
| 리터럴 | 코드에 직접 쓴 값 (예: `30`, `3.14159`, `'A'`) |

- 선언한 변수로 값을 계산하고 조합하는 방법은 [연산자](operator.md)에서 다룹니다.

### 변수 오류

변수를 선언하지 않고 쓰거나, 초기화하지 않고 읽거나, 같은 이름으로 다시 선언하면 컴파일 오류가 발생합니다.

```java
int age;
System.out.println(age);
```

```text
Main.java:4: error: variable age might not have been initialized
        System.out.println(age);
                           ^
```

| 상황 | 컴파일 오류 |
|---|---|
| 초기화하지 않은 지역 변수를 읽음 | `variable age might not have been initialized` |
| 선언하지 않은 변수를 사용함 | `cannot find symbol` |
| 같은 범위에서 같은 이름으로 다시 선언함 | `variable age is already defined in method main(String[])` |
| 변수에 타입이 맞지 않는 값을 넣음 | `incompatible types: String cannot be converted to int` |

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.
- 타입이 다른 값을 넣을 때의 변환 규칙은 [타입 캐스팅](casting.md)에서 자세히 다룹니다.

---

## 3. 상수의 선언과 초기화

변수 선언 앞에 `final`을 붙이면 상수가 됩니다. 선언과 동시에 초기화해야 하며, 이후 재할당을 시도하면 오류가 발생합니다.

```java
public class ConstantExample {
    public static void main(String[] args) {
        final int MAX_SIZE = 100;
        final double PI = 3.14159;
        final String APP_NAME = "MyApp";

        System.out.println(MAX_SIZE);
        System.out.println(PI);
        System.out.println(APP_NAME);
    }
}
```

```text
100
3.14159
MyApp
```

- `static final`을 사용한 클래스 범위 상수는 [클래스와 객체](class-object.md)에서 다룹니다.

### 상수 재할당 오류

`final` 변수에 값을 다시 할당하면 컴파일 오류가 발생합니다.

```java
final int MAX_SIZE = 100;
MAX_SIZE = 200;
```

```text
Main.java:4: error: cannot assign a value to final variable MAX_SIZE
        MAX_SIZE = 200;
        ^
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

---

## 4. 명명 규칙

변수명은 **camelCase**로, 상수명은 **UPPER_SNAKE_CASE**로 작성해 서로 구분합니다.

| 용어 | 설명 |
|---|---|
| camelCase | 첫 단어는 소문자로 시작하고, 이어지는 단어의 첫 글자만 대문자로 쓰는 표기법 (예: `maxRetryCount`) |
| UPPER_SNAKE_CASE | 모든 글자를 대문자로 쓰고, 단어 사이를 `_`로 구분하는 표기법 (예: `MAX_RETRY_COUNT`) |

```java
public class NamingExample {
    public static void main(String[] args) {
        int maxRetryCount = 3;
        boolean isActive = true;

        final int MAX_RETRY_COUNT = 3;
        final double DEFAULT_TIMEOUT = 30.0;

        System.out.println(maxRetryCount);
        System.out.println(isActive);
        System.out.println(MAX_RETRY_COUNT);
        System.out.println(DEFAULT_TIMEOUT);
    }
}
```

```text
3
true
3
30.0
```

- 변수명은 숫자로 시작할 수 없고 `int`, `class` 같은 예약어를 쓸 수 없으며, 어기면 컴파일 오류가 발생합니다.
