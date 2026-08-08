---
hide:
  - navigation
---

# 변수와 상수

[← Java로 돌아가기](index.md)

변수는 값을 저장하는 메모리 공간에 붙인 이름입니다. 상수는 `final` 키워드로 선언한 변수로, 최초 초기화 이후 값을 변경할 수 없습니다.

| 구성 요소 | 설명 |
|---|---|
| 변수 | 값을 저장하고 재할당할 수 있는 메모리 공간 |
| 상수 | `final`로 선언해 재할당을 막은 변수 |

---

## 1. 변수의 속성

변수는 세 가지 속성을 가집니다.

| 속성 | 설명 |
|------|------|
| **값(Value)** | 변수에 저장된 실제 데이터입니다. |
| **크기(Size)** | 타입마다 차지하는 메모리 크기가 다릅니다. |
| **주소(Address)** | 값이 저장된 메모리 위치입니다. 참조 타입에서 중요하게 쓰입니다. |

## 2. 변수의 선언과 초기화

선언은 타입과 변수명을 지정해 메모리 공간을 확보하고, 초기화는 선언된 변수에 처음 값을 할당하는 것입니다.

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

        System.out.println(age);         // 30
        System.out.println(count);       // 0
        System.out.println(pi);          // 3.14159
        System.out.println(population);  // 8000000000
        System.out.println(grade);       // A
        System.out.println(isActive);    // true
    }
}
```

```
30
0
3.14159
8000000000
A
true
```

- 리터럴: 코드에 직접 쓴 값입니다. 예: `30`, `3.14159`, `'A'`.

!!! info "참고"
    선언한 변수로 값을 계산하고 조합하는 방법은 [2. 연산자](syntax.md#2-연산자)를 참고하세요.

## 3. 상수의 선언과 초기화

변수 선언 앞에 `final`을 붙이면 상수가 됩니다. 선언과 동시에 초기화해야 하며, 이후 재할당을 시도하면 오류가 발생합니다.

```java
public class ConstantExample {
    public static void main(String[] args) {
        final int MAX_SIZE = 100;
        final double PI = 3.14159;
        final String APP_NAME = "MyApp";

        System.out.println(MAX_SIZE);   // 100
        System.out.println(PI);         // 3.14159
        System.out.println(APP_NAME);   // MyApp
    }
}
```

```
100
3.14159
MyApp
```

!!! info "참고"
    `static final`을 사용한 클래스 범위 상수는 나중에 다룹니다.

## 4. 명명 규칙

변수명은 **camelCase**로, 상수명은 **UPPER_SNAKE_CASE**로 작성해 서로 구분합니다.

- camelCase: 첫 단어는 소문자로 시작하고, 이어지는 단어의 첫 글자만 대문자로 쓰는 표기법입니다. 예: `maxRetryCount`.
- UPPER_SNAKE_CASE: 모든 글자를 대문자로 쓰고, 단어 사이를 `_`로 구분하는 표기법입니다. 예: `MAX_RETRY_COUNT`.

```java
public class NamingExample {
    public static void main(String[] args) {
        int maxRetryCount = 3;
        boolean isActive = true;

        final int MAX_RETRY_COUNT = 3;
        final double DEFAULT_TIMEOUT = 30.0;

        System.out.println(maxRetryCount);    // 3
        System.out.println(isActive);         // true
        System.out.println(MAX_RETRY_COUNT);  // 3
        System.out.println(DEFAULT_TIMEOUT);  // 30.0
    }
}
```

```
3
true
3
30.0
```
