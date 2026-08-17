---
hide:
  - navigation
---

# 메서드

[← Java로 돌아가기](index.md)

메서드는 이름이 붙은 코드 블록입니다. 한 번 선언하면 여러 곳에서 반복 호출할 수 있어 코드 중복을 줄입니다.

| 구성 요소 | 설명 |
|---|---|
| 선언과 호출 | 반환 타입, 이름, 매개변수를 지정해 정의하고 이름으로 호출 |
| 매개변수 | 메서드에 값을 전달하는 방법 |
| 반환값 | `return`으로 결과값을 돌려주는 방법 |

---

## 1. 선언과 호출

선언은 `반환 타입 → 이름 → 매개변수` 순으로 작성합니다. 반환할 값이 없으면 반환 타입으로 `void`를 씁니다. 호출은 이름 뒤에 `()`를 붙입니다.

```java
public class MethodExample {
    static void sayHello() {  // void: 반환값 없음
        System.out.println("안녕하세요!");
    }

    public static void main(String[] args) {
        sayHello();  // 안녕하세요!
        sayHello();  // 안녕하세요!
    }
}
```

```
안녕하세요!
안녕하세요!
```

!!! info "참고"
    `main`과 같은 클래스에서 객체 없이 직접 호출하려면 `static`이어야 합니다. 자세한 내용은 [클래스와 객체](class-object.md)를 참고하세요.

같은 이름이라도 매개변수의 개수나 타입이 다르면 별개의 메서드로 정의할 수 있습니다. 이를 **오버로딩(overloading)**이라 하며, 호출 시 전달한 인수에 맞는 메서드가 자동으로 선택됩니다.

```java
public class OverloadExample {
    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(add(3, 4));      // 7
        System.out.println(add(3.5, 4.2));  // 7.7
    }
}
```

```
7
7.7
```

## 2. 매개변수

**매개변수**는 메서드를 선언할 때 지정하는 변수 이름이고, **인수**는 호출할 때 실제로 전달하는 값입니다. 여러 개는 `,`로 구분합니다.

```java
public class ParamExample {
    static void greet(String name, int age) {  // name, age: 매개변수
        System.out.println(name + "님은 " + age + "살입니다.");
    }

    public static void main(String[] args) {
        greet("지수", 25);  // "지수", 25: 인수
        greet("민준", 30);
    }
}
```

```
지수님은 25살입니다.
민준님은 30살입니다.
```

기본형 매개변수는 값이 복사되어 전달되므로, 메서드 안에서 매개변수를 바꿔도 호출한 쪽의 원본 변수는 바뀌지 않습니다.

```java
public class PassByValueExample {
    static void increase(int n) {
        n++;
    }

    public static void main(String[] args) {
        int num = 10;
        increase(num);
        System.out.println(num);  // 10 (원본 그대로)
    }
}
```

```
10
```

## 3. 반환값

값을 돌려줄 때는 반환 타입을 지정하고 `return`으로 값을 반환합니다. `return`이 실행되면 값을 반환함과 동시에 메서드 실행이 즉시 종료됩니다.

| 구분 | 반환 타입 | `return` |
|------|-----------|----------|
| 반환값 없음 | `void` | 생략함. |
| 반환값 있음 | `int`, `String` 등 | 반드시 작성. |

```java
public class ReturnExample {
    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int result = add(3, 4);
        System.out.println(result);  // 7
    }
}
```

```
7
```
