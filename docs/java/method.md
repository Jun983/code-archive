---
hide:
  - navigation
---

# 메서드

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 메서드를 선언하고 호출하는 방법, 매개변수로 값을 넘기는 방법, `return`으로 결과를 돌려받는 방법만 익히면 충분합니다. 오버로딩은 이런 것이 있다는 정도만 훑어보고, 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

메서드는 이름이 붙은 코드 블록이며, 이 문서에서는 메서드의 선언과 호출, 매개변수와 인수, 반환값, 오버로딩, 가변 인수, 변수의 범위, 재귀를 다룹니다.

---

## 1. 메서드란

같은 코드를 여러 곳에서 써야 할 때 매번 복사하는 대신, 메서드로 한 번 선언해 두고 이름으로 반복 호출할 수 있어 코드 중복이 줄어듭니다.

```java
public class MethodIntroExample {
    static void sayHello() {
        System.out.println("안녕하세요!");
    }

    public static void main(String[] args) {
        sayHello();
        sayHello();
    }
}
```

```text
안녕하세요!
안녕하세요!
```

| 용어 | 설명 |
|---|---|
| 메서드 | 이름을 붙여 묶어 둔 재사용 가능한 코드 블록 |
| 선언 | 반환 타입, 이름, 매개변수를 지정해 메서드를 만드는 것 |
| 호출 | 메서드 이름 뒤에 `()`를 붙여 본문을 실행하는 것 |

- 메서드는 호출될 때마다 본문을 처음부터 실행합니다.
- 선언만으로는 본문이 실행되지 않고, 호출해야 실행됩니다.

### 선언과 호출

선언은 `반환 타입 → 이름 → 매개변수` 순으로 작성합니다. 반환할 값이 없으면 반환 타입으로 `void`를 씁니다. 호출은 이름 뒤에 `()`를 붙입니다.

| 부분 | 예시 | 설명 |
|---|---|---|
| 반환 타입 | `void`, `int` | 메서드가 돌려주는 값의 타입. 없으면 `void` |
| 이름 | `sayHello` | 호출할 때 사용하는 이름 |
| 매개변수 | `(int a, int b)` | 메서드가 받는 값. 없으면 `()` |

- `main`과 같은 클래스에서 객체 없이 직접 호출하려면 `static`이어야 합니다.
- `static`과 객체에 대한 자세한 내용은 [클래스와 객체](class-object.md)를 참고하세요.

### static이 아닌 메서드를 호출한 경우

`static`이 붙지 않은 메서드는 객체가 있어야 호출할 수 있습니다. `main`에서 객체 없이 호출하면 컴파일 오류가 발생합니다.

```java
public class Main {
    static void hello() {
        System.out.println("hi");
    }

    void greet() {
        System.out.println("greet");
    }

    public static void main(String[] args) {
        hello();
        greet();
    }
}
```

```text
Main.java:12: error: non-static method greet() cannot be referenced from a static context
        greet();
        ^
```

- 지금은 연습용 메서드에 `static`을 붙여 선언합니다.
- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

---

## 2. 매개변수와 인수

메서드에 값을 전달하면 같은 코드로 다른 결과를 만들 수 있습니다. 선언할 때 괄호 안에 적는 변수가 매개변수이고, 호출할 때 넘기는 값이 인수입니다. 여러 개는 `,`로 구분합니다.

```java
public class ParamExample {
    static void greet(String name, int age) {
        System.out.println(name + "님은 " + age + "살입니다.");
    }

    public static void main(String[] args) {
        greet("지수", 25);
        greet("민준", 30);
    }
}
```

```text
지수님은 25살입니다.
민준님은 30살입니다.
```

| 용어 | 설명 |
|---|---|
| 매개변수 | 메서드를 선언할 때 값을 받기 위해 적는 변수 (`name`, `age`) |
| 인수 | 메서드를 호출할 때 실제로 넘기는 값 (`"지수"`, `25`) |

- 인수는 매개변수의 순서와 타입에 맞게 넘겨야 합니다.
- 타입의 종류는 [타입](type.md)에서 자세히 다룹니다.

### 값 복사

기본형 매개변수는 값이 복사되어 전달되므로, 메서드 안에서 매개변수를 바꿔도 호출한 쪽의 원본 변수는 바뀌지 않습니다.

```java
public class PassByValueExample {
    static void increase(int n) {
        n++;
    }

    public static void main(String[] args) {
        int num = 10;
        increase(num);
        System.out.println(num);
    }
}
```

```text
10
```

- `increase` 안의 `n`은 `num`의 복사본이므로 `n++`가 `num`에 영향을 주지 않습니다.
- 같은 이유로 두 변수의 값을 바꾸는 `swap(int a, int b)` 같은 메서드는 호출한 쪽의 값을 바꾸지 못합니다.

### 배열을 전달한 경우

배열 같은 참조 타입은 배열 자체가 아니라 배열의 참조가 복사되어 전달됩니다. 그래서 메서드 안에서 원소를 바꾸면 호출한 쪽의 배열도 바뀝니다. 반면 매개변수에 새 배열을 대입하는 것은 복사된 참조만 바꾸므로 원본에 영향이 없습니다.

```java
import java.util.Arrays;

public class PassArrayExample {
    static void change(int[] arr) {
        arr[0] = 99;
    }

    static void reassign(int[] arr) {
        arr = new int[]{7, 7, 7};
    }

    static void swap(int a, int b) {
        int t = a;
        a = b;
        b = t;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3};
        change(nums);
        System.out.println(Arrays.toString(nums));
        reassign(nums);
        System.out.println(Arrays.toString(nums));

        int x = 1, y = 2;
        swap(x, y);
        System.out.println(x + " " + y);
    }
}
```

```text
[99, 2, 3]
[99, 2, 3]
1 2
```

| 용어 | 설명 |
|---|---|
| 값에 의한 전달 | 인수의 값을 복사해 매개변수에 넘기는 방식. 참조 타입은 참조 값이 복사됨 |

- `change`는 `nums`가 가리키는 배열의 원소를 바꾸므로 `99`가 반영됩니다.
- `reassign`은 매개변수 `arr`가 다른 배열을 가리키게 할 뿐이므로 `nums`는 그대로입니다.
- 배열은 [배열](array.md)에서 자세히 다룹니다.

### 인수 개수가 맞지 않는 경우

매개변수보다 인수가 적거나 많으면 컴파일 오류가 발생합니다.

```java
static int add(int a, int b) { return a + b; }

public static void main(String[] args) {
    System.out.println(add(3));
}
```

```text
Main.java:4: error: method add in class Main cannot be applied to given types;
        System.out.println(add(3));
                           ^
  required: int,int
  found:    int
  reason: actual and formal argument lists differ in length
```

- `required`는 선언된 매개변수, `found`는 실제로 넘긴 인수입니다.
- 인수가 더 많을 때도 같은 오류가 발생합니다.
- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

### 인수 타입이 맞지 않는 경우

인수의 타입이 매개변수 타입과 맞지 않으면 컴파일 오류가 발생합니다.

```java
System.out.println(add(3, "4"));
```

```text
Main.java:4: error: incompatible types: String cannot be converted to int
        System.out.println(add(3, "4"));
                                  ^
```

- `"4"`는 문자열이므로 `int` 매개변수에 넘길 수 없습니다.
- 타입 변환은 [형변환](casting.md)에서 자세히 다룹니다.

---

## 3. 반환값

값을 돌려줄 때는 반환 타입을 지정하고 `return`으로 값을 반환합니다. `return`이 실행되면 값을 반환함과 동시에 메서드 실행이 즉시 종료됩니다.

| 구분 | 반환 타입 | `return` |
|---|---|---|
| 반환값 없음 | `void` | 생략함 |
| 반환값 있음 | `int`, `String` 등 | 반드시 작성 |

```java
public class ReturnExample {
    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int result = add(3, 4);
        System.out.println(result);
    }
}
```

```text
7
```

| 용어 | 설명 |
|---|---|
| 반환값 | `return`으로 호출한 곳에 돌려주는 값 |

- 반환된 값은 변수에 저장하거나 다른 식에서 바로 사용할 수 있습니다.
- 반환 타입이 `void`인 메서드는 값을 돌려주지 않으므로 변수에 담을 수 없습니다.

### 반환값을 빠뜨린 경우

반환 타입이 `void`가 아닌 메서드는 모든 경로에서 `return`으로 값을 돌려줘야 합니다. 그렇지 않으면 컴파일 오류가 발생합니다.

```java
static int add(int a, int b) {
    int sum = a + b;
}
```

```text
Main.java:4: error: missing return statement
    }
    ^
```

- 조건문 안에서만 `return`하고 나머지 경우에 `return`이 없어도 같은 오류가 발생합니다.
- 조건문은 [조건문](conditional.md)에서 자세히 다룹니다.

### void 메서드의 결과를 변수에 담은 경우

`void` 메서드는 값을 돌려주지 않으므로, 결과를 변수에 대입하면 컴파일 오류가 발생합니다.

```java
static void hello() { System.out.println("hi"); }

public static void main(String[] args) {
    int r = hello();
}
```

```text
Main.java:4: error: incompatible types: void cannot be converted to int
        int r = hello();
                     ^
```

- 값이 필요하면 반환 타입을 `void`가 아닌 타입으로 바꾸고 `return`을 추가합니다.

### return으로 메서드 일찍 끝내기

`return`이 실행되면 그 아래 코드는 실행되지 않고 메서드가 끝납니다. 조건에 맞지 않을 때 일찍 끝내는 용도로 `void` 메서드에서도 `return;`을 쓸 수 있습니다.

```java
public class EarlyReturnExample {
    static boolean isEven(int n) {
        if (n % 2 == 0) {
            return true;
        }
        return false;
    }

    static void check(int age) {
        if (age < 0) {
            System.out.println("잘못된 나이");
            return;
        }
        System.out.println("나이: " + age);
    }

    public static void main(String[] args) {
        System.out.println(isEven(4));
        check(-1);
        check(20);
    }
}
```

```text
true
잘못된 나이
나이: 20
```

- `check(-1)`은 `return;`에서 끝나므로 마지막 `println`이 실행되지 않습니다.

### 여러 값 반환

메서드는 값을 하나만 반환할 수 있습니다. 여러 값이 필요하면 배열에 담아 반환합니다.

```java
static int[] minMax(int[] arr) {
    int min = arr[0];
    int max = arr[0];
    for (int n : arr) {
        if (n < min) min = n;
        if (n > max) max = n;
    }
    return new int[]{min, max};
}

public static void main(String[] args) {
    int[] r = minMax(new int[]{3, 9, 1});
    System.out.println(r[0] + " " + r[1]);
}
```

```text
1 9
```

- 반환받은 배열의 `r[0]`이 최솟값, `r[1]`이 최댓값입니다.

### return 뒤에 코드를 쓴 경우

`return` 바로 아래에 실행될 수 없는 코드를 쓰면 컴파일 오류가 발생합니다.

```java
static int f() {
    return 1;
    System.out.println("never");
}
```

```text
Main.java:4: error: unreachable statement
        System.out.println("never");
        ^
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

---

## 4. 오버로딩

같은 이름이라도 매개변수의 개수나 타입이 다르면 별개의 메서드로 선언할 수 있습니다. 이를 오버로딩(overloading)이라 하며, 호출 시 전달한 인수에 맞는 메서드가 자동으로 선택됩니다.

```java
public class OverloadExample {
    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(add(3, 4));
        System.out.println(add(3.5, 4.2));
    }
}
```

```text
7
7.7
```

| 용어 | 설명 |
|---|---|
| 오버로딩 | 같은 이름의 메서드를 매개변수의 개수나 타입을 달리해 여러 개 선언하는 것 |

- `add(3, 4)`는 `int` 버전, `add(3.5, 4.2)`는 `double` 버전이 호출됩니다.
- 매개변수의 개수나 타입이 다르면 같은 이름을 여러 개 만들 수 있습니다.

### 매개변수가 같은 경우

반환 타입만 다르고 이름과 매개변수가 같으면 서로 다른 메서드로 구분할 수 없어 컴파일 오류가 발생합니다.

```java
static int twice(int a) { return a * 2; }
static double twice(int a) { return a * 2.0; }
```

```text
Main.java:6: error: method twice(int) is already defined in class Main
    static double twice(int a) { return a * 2.0; }
                  ^
```

- 오버로딩은 매개변수의 개수나 타입으로만 구분하며, 반환 타입은 구분 기준이 아닙니다.

### 호출할 메서드가 선택되는 순서

인수의 타입과 정확히 맞는 메서드가 없으면, 자동 형변환으로 맞출 수 있는 메서드 중 가장 가까운 타입의 것이 선택됩니다.

```java
public class OverloadChoiceExample {
    static void print(int n) { System.out.println("int"); }
    static void print(long n) { System.out.println("long"); }
    static void print(double n) { System.out.println("double"); }
    static void print(Object o) { System.out.println("Object"); }

    static void only(long n) { System.out.println("long"); }
    static void only(Integer n) { System.out.println("Integer"); }

    public static void main(String[] args) {
        byte b = 1;
        print(b);
        print('a');
        print(5);
        print(5L);
        print(5.0f);
        print("text");
        only(5);
    }
}
```

```text
int
int
int
long
double
Object
long
```

- `byte`와 `char`는 `int`로 넓혀지므로 `print(int)`가 호출됩니다. `float`는 `double`로 넓혀집니다.
- `only(5)`처럼 `long`(기본형 확장)과 `Integer`(박싱)가 모두 가능하면 기본형 확장이 우선합니다.
- 형변환의 규칙은 [형변환](casting.md)에서 자세히 다룹니다.

### 모호한 호출 오류

자동 형변환으로 맞는 메서드가 둘 이상이고 우열을 가릴 수 없으면 컴파일 오류가 발생합니다.

```java
static void show(int a, long b) {
    System.out.println("int, long");
}

static void show(long a, int b) {
    System.out.println("long, int");
}

public static void main(String[] args) {
    show(1, 1);
}
```

```text
Main.java:11: error: reference to show is ambiguous
        show(1, 1);
        ^
  both method show(int,long) in Main and method show(long,int) in Main match
```

- `show(1, 1)`은 두 메서드 모두 한 인수만 넓혀서 호출할 수 있어 어느 쪽이 더 적합한지 정할 수 없습니다.
- `show(1, 1L)`처럼 인수의 타입을 정확히 맞추거나, 메서드의 매개변수 구성을 바꿔 해결합니다.
- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

---

## 5. 가변 인수

같은 타입의 인수를 개수 제한 없이 받으려면 타입 뒤에 `...`를 붙인 가변 인수 매개변수를 선언합니다. 메서드 안에서는 배열처럼 사용합니다.

```java
public class VarargsExample {
    static int sum(int... nums) {
        int total = 0;
        for (int n : nums) {
            total += n;
        }
        return total;
    }

    static void printAll(String sep, int... nums) {
        System.out.println(sep + " " + nums.length);
    }

    public static void main(String[] args) {
        System.out.println(sum());
        System.out.println(sum(1));
        System.out.println(sum(1, 2, 3));
        System.out.println(sum(new int[]{4, 5}));
        printAll("개수:", 7, 8, 9);
    }
}
```

```text
0
1
6
9
개수: 3
```

| 용어 | 설명 |
|---|---|
| 가변 인수 | 개수가 정해지지 않은 인수를 받는 매개변수 (`int... nums`) |

- `nums`는 `int[]`이므로 `nums.length`로 개수를 알 수 있고, 인수를 하나도 넘기지 않으면 길이가 `0`인 배열이 됩니다.
- 호출할 때는 값을 나열하거나 `int[]` 배열을 그대로 넘길 수 있습니다.
- 일반 매개변수와 함께 쓰면 일반 매개변수를 앞에 둡니다.

### 가변 인수의 위치

가변 인수는 매개변수 목록의 맨 끝에만 올 수 있으며, 메서드당 하나만 선언할 수 있습니다.

```java
static void f(int... a, int b) {
}
```

```text
Main.java:2: error: varargs parameter must be the last parameter
    static void f(int... a, int b) {
                         ^
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

---

## 6. 변수의 범위

변수는 선언한 중괄호(`{}`) 블록 안에서만 사용할 수 있습니다. 메서드 안에서 선언한 변수(지역 변수)와 매개변수는 그 메서드 안에서만 존재하며, 메서드가 끝나면 사라집니다.

```java
public class ScopeExample {
    static int count = 100;

    static void show() {
        int count = 1;
        System.out.println(count);
    }

    static void add(int n) {
        n = n + 1;
        int local = n * 2;
        System.out.println(local);
    }

    public static void main(String[] args) {
        show();
        System.out.println(count);
        add(3);

        {
            int block = 5;
            System.out.println(block);
        }
    }
}
```

```text
1
100
8
5
```

| 용어 | 설명 |
|---|---|
| 지역 변수 | 메서드나 블록 안에서 선언해 그 안에서만 사용하는 변수 |
| 범위(스코프) | 변수를 사용할 수 있는 코드 영역 |

- `show()` 안의 `count`는 지역 변수이므로 클래스의 `count`(`100`)와 별개이며, 같은 이름이면 지역 변수가 우선합니다.
- `add`의 `n`과 `local`은 `add`가 끝나면 사라지며 `main`에서는 쓸 수 없습니다.
- `{ }`로 묶은 블록 안의 변수 `block`도 블록이 끝나면 사라집니다.

### 범위를 벗어난 변수를 사용한 경우

다른 메서드에서 선언한 변수를 쓰면 컴파일 오류가 발생합니다.

```java
static void calc() {
    int result = 10;
}

public static void main(String[] args) {
    calc();
    System.out.println(result);
}
```

```text
Main.java:8: error: cannot find symbol
        System.out.println(result);
                           ^
  symbol:   variable result
  location: class Main
```

- 값을 호출한 쪽에서 쓰려면 `return`으로 반환합니다.
- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

### 같은 범위에서 이름이 겹치는 경우

한 메서드 안에서는 바깥 범위에 이미 있는 이름으로 지역 변수를 다시 선언할 수 없습니다.

```java
int x = 1;
{
    int x = 2;
}
```

```text
Main.java:5: error: variable x is already defined in method main(String[])
            int x = 2;
                ^
```

- 클래스의 변수와 지역 변수가 이름이 같은 것은 가능하지만(위의 `count`), 지역 변수끼리 겹치는 것은 오류입니다.
- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

---

## 7. 재귀

메서드가 자기 자신을 다시 호출하는 것을 재귀 호출이라 합니다. 문제를 같은 형태의 더 작은 문제로 나눌 수 있을 때 사용하며, 반드시 호출을 멈추는 조건(종료 조건)이 있어야 합니다.

```java
public class RecursionExample {
    static int factorial(int n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    static int fib(int n) {
        if (n < 2) return n;
        return fib(n - 1) + fib(n - 2);
    }

    static void countdown(int n) {
        if (n == 0) {
            System.out.println("끝");
            return;
        }
        System.out.println(n);
        countdown(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(factorial(5));
        System.out.println(fib(7));
        countdown(3);
    }
}
```

```text
120
13
3
2
1
끝
```

| 용어 | 설명 |
|---|---|
| 재귀 호출 | 메서드가 자기 자신을 호출하는 것 |
| 종료 조건 | 재귀 호출을 멈추고 값을 바로 반환하는 조건 (`n <= 1`) |

- `factorial(5)`는 `5 * factorial(4)`, `4 * factorial(3)`, … 순으로 호출을 이어 가다가 `factorial(1)`에서 `1`을 반환하면 거꾸로 곱이 계산됩니다.
- 같은 결과를 반복문으로도 만들 수 있으며, 재귀는 호출마다 메모리를 사용하므로 깊이가 매우 깊으면 위험합니다.

### 종료 조건이 없는 경우

종료 조건이 없거나 도달하지 못하면 호출이 끝없이 쌓여 런타임 예외가 발생합니다.

```java
static int forever(int n) {
    return forever(n + 1);
}

public static void main(String[] args) {
    forever(0);
}
```

```text
Exception in thread "main" java.lang.StackOverflowError
	at Main.forever(Main.java:3)
```

- 호출된 메서드는 호출 스택에 쌓이는데, 스택이 가득 차면 `StackOverflowError`가 발생합니다.
- 출력되는 `at` 줄은 같은 줄이 매우 많이 반복되며, 줄 수와 세부 표시는 JVM 설정에 따라 다를 수 있습니다.