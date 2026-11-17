---
hide:
  - navigation
---

# 변수와 상수

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 변수를 선언하고 값을 넣는 방법, 그리고 `final`로 값이 바뀌지 않는 상수를 만드는 방법만 익히면 충분합니다. 변수의 주소(Address) 속성과 `static final` 상수는 이런 것이 있다는 정도만 훑어보고, 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

변수는 값을 저장하는 메모리 공간에 붙인 이름이고 상수는 `final` 키워드로 선언해 최초 초기화 이후 값을 변경할 수 없는 변수이며, 이 문서에서는 변수의 속성, 선언과 초기화, 변수 간 대입, 변수의 범위, 상수, 명명 규칙을 다룹니다.

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

### 다중 선언

같은 타입의 변수는 쉼표(`,`)로 구분해 한 줄에 여러 개를 선언할 수 있습니다. 변수마다 초기화를 따로 지정할 수 있고, 초기화하지 않은 변수는 값을 넣기 전에는 읽을 수 없습니다.

```java
int a = 1, b = 2, c;
c = a + b;
System.out.println(a + " " + b + " " + c);
```

```text
1 2 3
```

- 선언 하나에는 타입을 하나만 쓸 수 있으므로 `int a = 1, double b = 2.0;`처럼 타입을 섞을 수 없습니다.
- 한 줄에 너무 많이 선언하면 읽기 어려우므로, 값의 의미가 다르면 줄을 나눠 선언하는 편이 좋습니다.

### 변수 간 대입과 값 복사

변수에 다른 변수를 대입하면 저장된 값이 복사됩니다. 복사된 뒤에는 두 변수가 서로 독립적이어서, 한쪽을 바꿔도 다른 쪽은 변하지 않습니다. 이는 기본형 변수에 해당하며, 참조형의 대입은 [클래스와 객체](class-object.md)에서 다룹니다.

```java
int x = 5;
int y = x;   // x의 값 5가 y로 복사됨
y = 10;      // y만 바뀜

System.out.println(x);
System.out.println(y);
```

```text
5
10
```

| 용어 | 설명 |
|---|---|
| 대입 | `=`로 오른쪽 값을 왼쪽 변수에 저장하는 것 |
| 값 복사 | 값 자체를 새로 복사해 저장하는 것. 원본과 복사본은 서로 영향을 주지 않음 |

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

## 3. 변수의 범위

변수는 선언된 블록(`{ }`) 안에서만 사용할 수 있으며, 이 유효 범위를 스코프라 합니다. 블록이 끝나면 그 안에서 선언한 변수는 사라지고 접근할 수 없습니다.

```java
public class ScopeExample {
    public static void main(String[] args) {
        int outer = 1;

        if (true) {
            int inner = 2;
            System.out.println(outer + inner);  // 바깥 변수는 안쪽 블록에서도 사용 가능
        }

        System.out.println(outer);
    }
}
```

```text
3
1
```

| 용어 | 설명 |
|---|---|
| 스코프 | 변수를 사용할 수 있는 코드의 범위 |
| 지역 변수 | 메서드나 블록 안에서 선언한 변수. 해당 블록 안에서만 유효함 |

- 바깥 블록의 변수는 안쪽 블록에서 쓸 수 있지만, 안쪽 블록의 변수는 바깥에서 쓸 수 없습니다.
- 안쪽 블록에서 바깥 변수와 같은 이름으로 다시 선언할 수는 없습니다.
- 블록을 만드는 조건문과 반복문은 [조건문](conditional.md), [반복문](loop.md)에서 다룹니다.

### 범위를 벗어난 변수 사용 오류

블록 밖에서 안쪽 변수를 사용하면 컴파일 오류가 발생합니다.

```java
if (true) {
    int inner = 2;
}
System.out.println(inner);
```

```text
Main.java:5: error: cannot find symbol
        System.out.println(inner);
                           ^
  symbol:   variable inner
  location: class Main
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

---

## 4. 상수의 선언과 초기화

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

## 5. 명명 규칙

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

### 대소문자 구분

Java는 대소문자를 구분하므로 `age`와 `Age`는 서로 다른 변수입니다. 철자는 같고 대소문자만 다른 이름은 실수하기 쉬우므로 피합니다.

```java
int age = 1;
int Age = 2;
System.out.println(age + " " + Age);
```

```text
1 2
```

- 대소문자를 잘못 입력해 선언하지 않은 이름을 쓰면 `cannot find symbol` 컴파일 오류가 발생합니다.

### 좋은 변수명

변수명은 값의 의미가 드러나게 짓습니다. 한 글자나 의미 없는 이름은 시간이 지나면 무엇을 저장하는지 알기 어렵습니다.

| 구분 | 예 | 설명 |
|---|---|---|
| 나쁜 예 | `a`, `tmp2`, `data1` | 무엇을 담는지 알 수 없음 |
| 좋은 예 | `userAge`, `totalPrice` | 값의 의미가 이름에 드러남 |
| `boolean` | `isActive`, `hasPermission` | 참/거짓 질문 형태로 지음 |

- 반복문의 카운터(`i`, `j`)처럼 관례로 통용되는 짧은 이름은 허용됩니다.
- 한글도 변수명으로 쓸 수 있지만, 관례상 영문 이름을 사용합니다.
