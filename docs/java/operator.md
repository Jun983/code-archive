---
hide:
  - navigation
---

# 연산자

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 산술(`+ - * / %`), 비교(`== != < >`), 논리(`&& || !`) 연산자와 대입 연산자(`=`)만 익히면 충분합니다. 증감, 삼항, 비트 연산자와 우선순위의 세부 동작은 이런 것이 있다는 정도만 훑어보고, 필요할 때 다시 찾아보거나 [조건문](conditional.md)과 [반복문](loop.md)을 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

연산자는 값을 계산하거나 비교·조합할 때 사용하는 기호이며, 이 문서에서는 산술, 대입, 비교, 논리, 증감, 비트, 삼항 연산자와 String 연산, 연산자 우선순위를 다룹니다.

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
| 비트 연산자 | 정수를 비트(0과 1) 단위로 계산하는 연산자 |
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

### 정수 나눗셈과 실수가 섞인 계산

피연산자 중 하나라도 실수이면 결과가 실수가 됩니다. 정수끼리 먼저 계산한 뒤에 실수 변수에 담으면 이미 버려진 소수점은 되돌아오지 않습니다.

```java
public class DivisionExample {
    public static void main(String[] args) {
        System.out.println(7 / 2);
        System.out.println(7 / 2.0);
        System.out.println((double) 7 / 2);
        System.out.println((double) (7 / 2));

        double d = 10 / 4;
        System.out.println(d);
    }
}
```

```text
3
3.5
3.5
3.0
2.0
```

- `(double) 7 / 2`는 `7`을 먼저 `double`로 바꾼 뒤 나누므로 `3.5`가 되고, `(double) (7 / 2)`는 정수 나눗셈 결과 `3`을 바꾸므로 `3.0`이 됩니다.
- `double d = 10 / 4`의 `2.0`처럼, 대입받는 변수의 타입은 계산 방식에 영향을 주지 않습니다.
- 형변환은 [형변환](casting.md)에서 자세히 다룹니다.

### 음수의 나눗셈과 나머지

Java의 정수 나눗셈은 소수점을 반올림하지 않고 0 방향으로 버립니다. 나머지(`%`)의 부호는 왼쪽 피연산자를 따릅니다.

```java
public class NegativeDivisionExample {
    public static void main(String[] args) {
        System.out.println(-7 / 2);
        System.out.println(7 % 3);
        System.out.println(-7 % 3);
        System.out.println(7 % -3);
    }
}
```

```text
-3
1
-1
1
```

| 식 | 결과 | 설명 |
|---|---|---|
| `-7 / 2` | `-3` | `-3.5`에서 소수점을 버려 0 쪽으로 가까운 값 |
| `-7 % 3` | `-1` | 왼쪽 피연산자(`-7`)가 음수이므로 나머지도 음수 |
| `7 % -3` | `1` | 왼쪽 피연산자(`7`)가 양수이므로 나머지도 양수 |

- 짝수·홀수 판별에 `n % 2 == 1`을 쓰면 `n`이 음수일 때 `-1`이 나와 틀립니다. `n % 2 != 0`으로 쓰는 것이 안전합니다.

### 0으로 나누기

정수를 `0`으로 나누거나 나머지를 구하면 런타임 예외가 발생합니다.

```java
int result = 10 / 0;
```

```text
Exception in thread "main" java.lang.ArithmeticException: / by zero
	at Main.main(Main.java:3)
```

- 실수(`double`)를 `0.0`으로 나누면 예외 없이 특수한 값이 됩니다.

```java
System.out.println(10.0 / 0);
System.out.println(-10.0 / 0);
System.out.println(0.0 / 0);
```

```text
Infinity
-Infinity
NaN
```

| 용어 | 설명 |
|---|---|
| `Infinity` | 실수를 `0`으로 나눴을 때의 무한대 값 |
| `NaN` | Not a Number. 숫자로 정의할 수 없는 계산(`0.0 / 0`)의 결과 |

- `NaN`은 자기 자신과도 `==`로 같지 않으므로, 확인할 때는 `Double.isNaN(값)`을 사용합니다.
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

### 복합 대입과 묵시적 형변환

복합 대입 연산자(`+=` 등)는 계산 결과를 왼쪽 변수의 타입으로 자동 변환해 저장합니다. 그래서 `=`와 `+`를 따로 쓰면 컴파일 오류가 나는 코드도 복합 대입으로는 오류 없이 실행됩니다.

```java
public class CompoundCastExample {
    public static void main(String[] args) {
        byte b = 10;
        b += 5;
        System.out.println(b);

        int x = 10;
        x *= 1.5;
        System.out.println(x);

        x += 3.7;
        System.out.println(x);

        byte c = 127;
        c += 1;
        System.out.println(c);
    }
}
```

```text
15
15
18
-128
```

- `x *= 1.5`는 `x = (int) (x * 1.5)`와 같습니다. 소수점이 버려지므로 `x += 3.7`은 `15 + 3.7 = 18.7`에서 `18`이 됩니다.
- `byte` 범위(-128~127)를 넘는 `c += 1`은 오류 없이 `-128`로 넘칩니다. 값이 조용히 바뀌므로 주의해야 합니다.

### 복합 대입을 쓰지 않은 경우

같은 계산이라도 `b = b + 5`로 쓰면 `b + 5`가 `int`가 되어 `byte`에 담을 수 없으므로 컴파일 오류가 발생합니다.

```java
byte b = 10;
b = b + 5;
```

```text
Main.java:4: error: incompatible types: possible lossy conversion from int to byte
        b = b + 5;
              ^
```

- `b = (byte) (b + 5);`처럼 명시적으로 형변환하면 오류가 사라집니다.
- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

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

### 실수의 비교

실수는 이진수로 저장되어 0.1처럼 정확히 표현되지 않는 값이 있습니다. 그래서 계산 결과를 `==`로 비교하면 예상과 다를 수 있습니다.

```java
public class DoubleCompareExample {
    public static void main(String[] args) {
        System.out.println(0.1 + 0.2);
        System.out.println(0.1 + 0.2 == 0.3);

        double diff = Math.abs((0.1 + 0.2) - 0.3);
        System.out.println(diff < 1e-9);
    }
}
```

```text
0.30000000000000004
false
true
```

- 실수를 비교할 때는 두 값의 차이가 아주 작은 값(허용 오차)보다 작은지 확인합니다. `1e-9`는 `0.000000001`입니다.
- 정확한 소수 계산이 필요한 금액 등은 `double` 대신 `BigDecimal` 클래스를 사용합니다.

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

### 진리표

두 값의 모든 조합에 대한 결과입니다.

| `a` | `b` | `a && b` | `a \|\| b` | `!a` |
|---|---|---|---|---|
| `true` | `true` | `true` | `true` | `false` |
| `true` | `false` | `false` | `true` | `false` |
| `false` | `true` | `false` | `true` | `true` |
| `false` | `false` | `false` | `false` | `true` |

### 단락 평가

`&&`는 왼쪽이 `false`이면 오른쪽을 계산하지 않고, `||`는 왼쪽이 `true`이면 오른쪽을 계산하지 않습니다. 결과가 이미 정해졌기 때문이며, 이를 단락 평가라고 합니다.

```java
public class ShortCircuitExample {
    public static void main(String[] args) {
        int x = 0;
        boolean safe = (x != 0) && (10 / x > 1);
        System.out.println(safe);

        int a = 5;
        boolean r1 = (a < 3) && (++a > 0);
        System.out.println(r1 + " " + a);

        int b = 5;
        boolean r2 = (b < 3) & (++b > 0);
        System.out.println(r2 + " " + b);

        int c = 5;
        boolean r3 = (c > 3) || (++c > 0);
        System.out.println(r3 + " " + c);
    }
}
```

```text
false
false 5
false 6
true 5
```

| 용어 | 설명 |
|---|---|
| 단락 평가 | 왼쪽 값만으로 결과가 정해지면 오른쪽 식을 계산하지 않는 동작 |
| `&`, `\|` (boolean) | 단락 평가 없이 양쪽을 항상 계산하는 논리 연산자 |

- 첫 번째 줄에서 `x != 0`이 `false`이므로 `10 / x`는 계산되지 않아 `ArithmeticException`이 발생하지 않습니다. 이 성질로 "값이 있는지 확인한 뒤 사용"하는 조건을 안전하게 쓸 수 있습니다.
- `&&`는 `++a`를 실행하지 않아 `a`가 `5` 그대로지만, `&`는 양쪽을 모두 계산해 `b`가 `6`이 됩니다. `&&`, `||`의 오른쪽에 증감 연산 같은 부수 효과가 있는 식을 두면 실행되지 않을 수 있습니다.

### 논리 연산자 오류

논리 연산자는 `boolean`에만 사용할 수 있습니다. Java는 `0`과 `1`을 `false`와 `true`로 취급하지 않습니다.

```java
int a = 1;
int b = 2;
System.out.println(a && b);
```

```text
Main.java:5: error: bad operand types for binary operator '&&'
        System.out.println(a && b);
                             ^
  first type:  int
  second type: int
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

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

## 7. 비트 연산자

정수를 비트(0과 1) 단위로 계산합니다. 일반적인 계산보다는 상태 값을 하나의 정수에 모아 저장하거나 저수준 데이터를 다룰 때 사용합니다. 처음에는 이런 것이 있다는 정도만 확인해도 충분합니다.

| 연산자 | 의미 |
|--------|------|
| `&` | 두 비트가 모두 `1`이면 `1`을 반환합니다. |
| `\|` | 두 비트 중 하나라도 `1`이면 `1`을 반환합니다. |
| `^` | 두 비트가 서로 다르면 `1`을 반환합니다. |
| `~` | 모든 비트를 뒤집습니다. |
| `<<` | 비트를 왼쪽으로 옮깁니다. 한 칸마다 2배가 됩니다. |
| `>>` | 비트를 오른쪽으로 옮기고 왼쪽을 부호 비트로 채웁니다. |
| `>>>` | 비트를 오른쪽으로 옮기고 왼쪽을 `0`으로 채웁니다. |

```java
public class BitExample {
    public static void main(String[] args) {
        int a = 0b1100;   // 12
        int b = 0b1010;   // 10

        System.out.println(Integer.toBinaryString(a & b));
        System.out.println(Integer.toBinaryString(a | b));
        System.out.println(Integer.toBinaryString(a ^ b));
        System.out.println(~a);
        System.out.println(a << 2);
        System.out.println(a >> 1);
        System.out.println(-16 >> 2);
        System.out.println(-16 >>> 28);
    }
}
```

```text
1000
1110
110
-13
48
6
-4
15
```

| 용어 | 설명 |
|---|---|
| `0b1100` | 이진수 리터럴. `0b`로 시작하며 십진수 `12`와 같음 |
| `Integer.toBinaryString()` | 정수를 이진수 문자열로 바꾸는 메서드 |
| 비트 | 컴퓨터가 값을 저장하는 최소 단위. `0` 또는 `1` |

- `a << 2`는 `12 * 4`와 같은 `48`이고, `a >> 1`은 `12 / 2`와 같은 `6`입니다.
- `-16 >> 2`는 부호가 유지되어 `-4`가 되고, `-16 >>> 28`은 왼쪽을 `0`으로 채워 `15`가 됩니다.
- `~a`는 `-(a + 1)`과 같아 `-13`이 됩니다.

### 비트로 상태 확인

`&`로 특정 위치의 비트가 켜져 있는지 확인할 수 있습니다.

```java
int flags = 0b0101;
System.out.println((flags & 0b0100) != 0);
System.out.println((flags & 0b0010) != 0);
```

```text
true
false
```

- `&`와 `|`는 피연산자가 `boolean`이면 단락 평가를 하지 않는 논리 연산자이고, 정수이면 비트 연산자입니다.

---

## 8. 삼항 연산자

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

- 삼항 연산자를 중첩하는 방법과 `if`와의 선택 기준은 [조건문](conditional.md)에서 자세히 다룹니다.

---

## 9. String 연산

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

---

## 10. 연산자 우선순위

하나의 식에 연산자가 여러 개 있으면 우선순위가 높은 연산자부터 계산합니다. 위쪽일수록 우선순위가 높습니다.

| 순위 | 연산자 | 계산 방향 |
|---|---|---|
| 1 | `x++` `x--` | 왼쪽 → 오른쪽 |
| 2 | `++x` `--x` `+x` `-x` `~` `!` | 오른쪽 → 왼쪽 |
| 3 | `*` `/` `%` | 왼쪽 → 오른쪽 |
| 4 | `+` `-` | 왼쪽 → 오른쪽 |
| 5 | `<<` `>>` `>>>` | 왼쪽 → 오른쪽 |
| 6 | `<` `<=` `>` `>=` | 왼쪽 → 오른쪽 |
| 7 | `==` `!=` | 왼쪽 → 오른쪽 |
| 8 | `&` | 왼쪽 → 오른쪽 |
| 9 | `^` | 왼쪽 → 오른쪽 |
| 10 | `\|` | 왼쪽 → 오른쪽 |
| 11 | `&&` | 왼쪽 → 오른쪽 |
| 12 | `\|\|` | 왼쪽 → 오른쪽 |
| 13 | `? :` | 오른쪽 → 왼쪽 |
| 14 | `=` `+=` `-=` 등 | 오른쪽 → 왼쪽 |

```java
public class PrecedenceExample {
    public static void main(String[] args) {
        System.out.println(2 + 3 * 4);
        System.out.println((2 + 3) * 4);
        System.out.println(3 + 4 > 6 ? "크다" : "작다");
        System.out.println(true || false && false);
        System.out.println((true || false) && false);
    }
}
```

```text
14
20
크다
true
false
```

- `*`가 `+`보다 먼저 계산되므로 `2 + 3 * 4`는 `14`입니다. 괄호를 쓰면 원하는 순서로 바꿀 수 있습니다.
- `&&`가 `||`보다 우선순위가 높아 `true || false && false`는 `true || (false && false)`로 계산되어 `true`가 됩니다.
- 헷갈리는 식은 외우지 말고 괄호로 순서를 분명히 표시하는 것이 좋습니다.

### 같은 순위의 계산 순서

우선순위가 같은 연산자는 계산 방향에 따라 순서가 정해집니다. 대부분은 왼쪽에서 오른쪽이지만, 대입 연산자는 오른쪽에서 왼쪽입니다.

```java
public class AssociativityExample {
    public static void main(String[] args) {
        System.out.println(10 - 4 - 3);
        System.out.println(100 / 10 * 2);

        int a, b, c;
        a = b = c = 7;
        System.out.println(a + " " + b + " " + c);
    }
}
```

```text
3
20
7 7 7
```

- `10 - 4 - 3`은 `(10 - 4) - 3`으로 계산되어 `3`입니다. 오른쪽부터 계산했다면 `9`가 되었을 것입니다.
- `a = b = c = 7`은 오른쪽부터 `c = 7`, `b = c`, `a = b` 순으로 계산됩니다.

### 문자열과 숫자가 섞인 `+`

`+`는 왼쪽부터 계산하며, 한쪽이 문자열이 되는 순간부터 뒤는 모두 이어 붙이기가 됩니다.

```java
System.out.println(1 + 2 + "3");
System.out.println("1" + 2 + 3);
System.out.println("1" + (2 + 3));
```

```text
33
123
15
```

- `1 + 2 + "3"`은 `(1 + 2)`를 먼저 계산해 `3`이 된 뒤 `"3"`과 이어 붙입니다.
- 숫자끼리 먼저 더하고 싶다면 괄호로 묶어야 합니다.
