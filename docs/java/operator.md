---
hide:
  - navigation
---

# 연산자

[← Java로 돌아가기](index.md)

연산자는 값을 계산하거나 비교·조합할 때 사용하는 기호입니다.

| 구성 요소 | 설명 |
|---|---|
| 산술 연산자 | 두 수를 계산하는 연산자 |
| 대입 연산자 | 변수에 값을 할당하는 연산자 |
| 비교 연산자 | 두 값을 비교하는 연산자 |
| 논리 연산자 | 두 `boolean` 값을 조합하는 연산자 |
| 증감 연산자 | 값을 1씩 증가·감소시키는 연산자 |
| 삼항 연산자 | 조건에 따라 값을 선택하는 연산자 |
| String 연산 | 문자열 연결과 비교 |

---

## 1. 산술 연산자

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

        System.out.println(sum);        // 13
        System.out.println(diff);       // 7
        System.out.println(product);    // 30
        System.out.println(quotient);   // 3
        System.out.println(remainder);  // 1
    }
}
```

```
13
7
30
3
1
```


## 2. 대입 연산자

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
        System.out.println(count);  // 15

        count -= 3;
        System.out.println(count);  // 12

        count *= 2;
        System.out.println(count);  // 24

        count /= 4;
        System.out.println(count);  // 6

        count %= 4;
        System.out.println(count);  // 2
    }
}
```

```
15
12
24
6
2
```

## 3. 비교 연산자

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

        System.out.println(number1 == number2);  // false
        System.out.println(number1 != number2);  // true
        System.out.println(number1 < number2);   // false
        System.out.println(number1 > number2);   // true
        System.out.println(number1 <= number2);  // false
        System.out.println(number1 >= number2);  // true
    }
}
```

```
false
true
false
true
false
true
```

## 4. 논리 연산자

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

        System.out.println(a && b);  // false
        System.out.println(a || b);  // true
        System.out.println(!a);      // false
    }
}
```

```
false
true
false
```

## 5. 증감 연산자

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
        System.out.println(x++);  // 5 (현재 값 출력 후 증가 → x = 6)
        System.out.println(++x);  // 7 (증가 후 출력 → x = 7)
    }
}
```

```
5
7
```

## 6. 삼항 연산자

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

```
합격
```

## 7. String 연산

`String`은 숫자 타입과 달리 `+`로 이어 붙이고, 내용 비교에는 `equals()`를 사용합니다.

### 7.1 문자열 연결

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

```
이름: 지수
나이: 25
지수님은 25살
```

### 7.2 문자열 비교

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

```
true
false
```
