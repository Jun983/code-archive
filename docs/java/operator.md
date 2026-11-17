---
hide:
  - navigation
---

# 연산자

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 산술(`+ - * / %`), 비교(`== != < >`), 논리(`&& || !`) 연산자와 대입 연산자(`=`)만 익히면 충분합니다. 증감, 삼항, 비트 단위에 가까운 세부 동작은 이런 것이 있다는 정도만 훑어보고, 필요할 때 다시 찾아보거나 [조건문](conditional.md)과 [반복문](loop.md)을 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

연산자는 값을 계산하거나 비교·조합할 때 사용하는 기호이며, 이 문서에서는 산술, 대입, 비교, 논리, 증감, 삼항 연산자와 String 연산을 다룹니다.

---

## 1. 연산자란

연산자는 하나 이상의 값(피연산자)을 계산해 새로운 값을 만드는 기호입니다. 연산자와 피연산자를 합친 것을 식이라 하며, 식은 계산이 끝나면 하나의 값이 됩니다.

```java
int sum = 10 + 3;
System.out.println(sum);
```

```text
13
```

| 용어 | 설명 |
|---|---|
| 연산자 | 값을 계산하거나 비교·조합하는 기호 |
| 피연산자 | 연산자가 계산하는 대상 값 (`10 + 3`에서 `10`, `3`) |
| 식 | 연산자와 피연산자로 이루어져 하나의 값이 되는 코드 |
| 산술 연산자 | 두 수를 계산하는 연산자 |
| 대입 연산자 | 변수에 값을 할당하는 연산자 |
| 비교 연산자 | 두 값을 비교하는 연산자 |
| 논리 연산자 | 두 `boolean` 값을 조합하는 연산자 |
| 증감 연산자 | 값을 1씩 증가·감소시키는 연산자 |
| 삼항 연산자 | 조건에 따라 값을 선택하는 연산자 |

- 변수에 값을 넣는 방법은 [변수와 상수](variable.md)에서 다룹니다.

---

## 2. 산술 연산자

두 수를 계산해 결과값을 반환합니다.

| 연산자 | 의미 |
|--------|------|
| `+` | 왼쪽 값과 오른쪽 값을 더한 값을 반환합니다. |
| `-` | 왼쪽 값에서 오른쪽 값을 뺀 값을 반환합니다. |
| `*` | 왼쪽 값과 오른쪽 값을 곱한 값을 반환합니다. |
| `/` | 왼쪽 값을 오른쪽 값으로 나눈 몫을 반환합니다. 정수끼리는 소수점을 버립니다. |
| `%` | 왼쪽 값을 오른쪽 값으로 나눈 나머지를 반환합니다. |

```java
public class ArithmeticExample {
    public static void main(String[] args) {
        int number1 = 10;
        int number2 = 3;

        int sum       = number1 + number2;
        int diff      = number1 - number2;
        int product   = number1 * number2;
        int quotient  = number1 / number2;
        int remainder = number1 % number2;

        System.out.println(sum);
        System.out.println(diff);
        System.out.println(product);
        System.out.println(quotient);
        System.out.println(remainder);
    }
}
```

```text
13
7
30
3
1
```

- 정수끼리 나누면 소수점 이하가 버려지므로, `10 / 3`의 결과는 `3.33`이 아니라 `3`입니다.

### 0으로 나누기

정수를 `0`으로 나누거나 나머지를 구하면 런타임 예외가 발생합니다.

```java
int result = 10 / 0;
```

```text
Exception in thread "main" java.lang.ArithmeticException: / by zero
	at Main.main(Main.java:3)
```

- 실수(`double`)를 `0.0`으로 나누면 예외 없이 `Infinity`가 됩니다.
- 예외의 처리 방법은 [예외 처리](exception.md)에서 자세히 다룹니다.

---

## 3. 대입 연산자

변수에 값을 할당합니다.

| 연산자 | 의미 |
|--------|------|
| `=` | 오른쪽 값을 왼쪽 변수에 할당합니다. |
| `+=` | 변수에 오른쪽 값을 더한 뒤 할당합니다. |
| `-=` | 변수에서 오른쪽 값을 뺀 뒤 할당합니다. |
| `*=` | 변수에 오른쪽 값을 곱한 뒤 할당합니다. |
| `/=` | 변수를 오른쪽 값으로 나눈 몫을 할당합니다. |
| `%=` | 변수를 오른쪽 값으로 나눈 나머지를 할당합니다. |

```java
public class AssignmentExample {
    public static void main(String[] args) {
        int count = 10;

        count += 5;
        System.out.println(count);

        count -= 3;
        System.out.println(count);

        count *= 2;
        System.out.println(count);

        count /= 4;
        System.out.println(count);

        count %= 4;
        System.out.println(count);
    }
}
```

```text
15
12
24
6
2
```

---

## 4. 비교 연산자

두 값을 비교해 `boolean`을 반환합니다.

| 연산자 | 의미 |
|--------|------|
| `==` | 두 값이 같으면 `true`를 반환합니다. |
| `!=` | 두 값이 다르면 `true`를 반환합니다. |
| `<` | 왼쪽 값이 오른쪽 값보다 작으면 `true`를 반환합니다. |
| `>` | 왼쪽 값이 오른쪽 값보다 크면 `true`를 반환합니다. |
| `<=` | 왼쪽 값이 오른쪽 값보다 작거나 같으면 `true`를 반환합니다. |
| `>=` | 왼쪽 값이 오른쪽 값보다 크거나 같으면 `true`를 반환합니다. |

```java
public class ComparisonExample {
    public static void main(String[] args) {
        int number1 = 10;
        int number2 = 3;

        System.out.println(number1 == number2);
        System.out.println(number1 != number2);
        System.out.println(number1 < number2);
        System.out.println(number1 > number2);
        System.out.println(number1 <= number2);
        System.out.println(number1 >= number2);
    }
}
```

```text
false
true
false
true
false
true
```

- 대입(`=`)과 비교(`==`)는 다른 연산자입니다. 이를 헷갈려 `if (a = 3)`처럼 쓰면 조건식이 `boolean`이 아니어서 컴파일 오류가 발생합니다.
- 비교 연산자는 [조건문](conditional.md)의 조건식에 주로 사용합니다.

### 비교 연산자 오류

조건식 자리에 `=`를 쓰면 컴파일 오류가 발생합니다.

```java
int a = 3;
if (a = 3) {
    System.out.println("같다");
}
```

```text
Main.java:4: error: incompatible types: int cannot be converted to boolean
        if (a = 3) {
              ^
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

---

## 5. 논리 연산자

두 `boolean` 값을 조합해 하나의 `boolean`을 반환합니다.

| 연산자 | 의미 |
|--------|------|
| `&&` | 두 값이 모두 `true`이면 `true`를 반환합니다. |
| `\|\|` | 두 값 중 하나라도 `true`이면 `true`를 반환합니다. |
| `!` | `true`는 `false`로, `false`는 `true`로 반환합니다. |

`&&`는 왼쪽이 `false`이면 오른쪽을 확인하지 않고, `||`는 왼쪽이 `true`이면 오른쪽을 확인하지 않습니다.

```java
public class LogicalExample {
    public static void main(String[] args) {
        boolean a = true;
        boolean b = false;

        System.out.println(a && b);
        System.out.println(a || b);
        System.out.println(!a);
    }
}
```

```text
false
true
false
```

- 논리 연산자는 [조건문](conditional.md)에서 여러 조건을 조합할 때 사용합니다.
- 짧은 회로 평가 때문에 `&&`, `||`의 오른쪽에 증감 연산 같은 부수 효과가 있는 식을 두면 실행되지 않을 수 있습니다.

---

## 6. 증감 연산자

변수의 값을 1씩 증가하거나 감소시킵니다.

| 연산자 | 의미 |
|--------|------|
| `++x` | 변수를 1 증가시킨 뒤 값을 반환합니다. |
| `x++` | 현재 값을 반환한 뒤 변수를 1 증가시킵니다. |
| `--x` | 변수를 1 감소시킨 뒤 값을 반환합니다. |
| `x--` | 현재 값을 반환한 뒤 변수를 1 감소시킵니다. |

```java
public class IncrementExample {
    public static void main(String[] args) {
        int x = 5;
        System.out.println(x++);  // 현재 값 출력 후 증가 (x = 6)
        System.out.println(++x);  // 증가 후 출력 (x = 7)
    }
}
```

```text
5
7
```

- 증감 연산자는 [반복문](loop.md)에서 반복 횟수를 세는 데 자주 사용합니다.
- `x++`와 `++x`는 단독으로 쓰면 결과가 같지만, 다른 식 안에서 쓰면 반환하는 값이 다릅니다.

---

## 7. 삼항 연산자

조건에 따라 두 값 중 하나를 반환합니다.

| 형태 | 의미 |
|------|------|
| `조건 ? A : B` | 조건이 `true`이면 `A`, `false`이면 `B`를 반환합니다. |

```java
public class TernaryExample {
    public static void main(String[] args) {
        int score = 75;
        String result = (score >= 60) ? "합격" : "불합격";
        System.out.println(result);
    }
}
```

```text
합격
```

---

## 8. String 연산

`String`은 숫자 타입과 달리 `+`로 이어 붙이고, 내용 비교에는 `equals()`를 사용합니다.

### 문자열 연결

| 형태 | 의미 |
|------|------|
| `+` | 두 문자열을 이어 붙입니다. 다른 타입과 연결하면 자동으로 문자열로 변환됩니다. |

```java
public class StringConcatExample {
    public static void main(String[] args) {
        String name = "지수";
        int age = 25;

        System.out.println("이름: " + name);
        System.out.println("나이: " + age);
        System.out.println(name + "님은 " + age + "살");
    }
}
```

```text
이름: 지수
나이: 25
지수님은 25살
```

### 문자열 비교

| 형태 | 의미 |
|------|------|
| `a.equals(b)` | 두 문자열의 **내용**이 같은지 비교합니다. |
| `a == b` | 두 변수가 같은 **객체**를 가리키는지 비교합니다. 내용이 같아도 `false`가 나올 수 있습니다. |

```java
public class StringEqualsExample {
    public static void main(String[] args) {
        String a = "hello";
        String b = new String("hello");

        System.out.println(a.equals(b));
        System.out.println(a == b);
    }
}
```

```text
true
false
```

- 문자열의 내용을 비교할 때는 `==`가 아니라 `equals()`를 사용해야 합니다.

### 문자열 연산 오류

`String`에는 `-`, `*` 같은 산술 연산자를 사용할 수 없으며, 사용하면 컴파일 오류가 발생합니다.

```java
String a = "hello";
String b = a - "h";
```

```text
Main.java:4: error: bad operand types for binary operator '-'
        String b = a - "h";
                     ^
  first type:  String
  second type: String
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.
