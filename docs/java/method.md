---
hide:
  - navigation
---

# 메서드

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 메서드를 선언하고 호출하는 방법, 매개변수로 값을 넘기는 방법, `return`으로 결과를 돌려받는 방법만 익히면 충분합니다. 오버로딩은 이런 것이 있다는 정도만 훑어보고, 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

메서드는 이름이 붙은 코드 블록이며, 이 문서에서는 메서드의 선언과 호출, 매개변수와 인수, 반환값, 오버로딩을 다룹니다.

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
