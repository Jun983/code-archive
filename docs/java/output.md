---
hide:
  - navigation
---

# 출력

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 `System.out.println`으로 값을 화면에 출력하는 방법과, `println`과 `print`의 줄 바꿈 차이만 익히면 충분합니다. 타입별 출력과 `+` 연결은 직접 따라 쳐 보며 훑어보고, [타입](type.md)과 [연산자](operator.md)를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

`System.out`은 Java 표준 라이브러리가 제공하는 화면 출력 도구이고 `println`과 `print`는 값을 출력하는 메서드이며, 이 문서에서는 두 메서드의 줄 바꿈 차이와 다양한 타입의 값을 출력하는 방법을 다룹니다.

---

## 1. 출력이란

출력은 프로그램이 처리한 결과를 화면(콘솔)에 표시하는 것입니다. Java에서는 `System.out`의 메서드로 값을 출력합니다.

```java
public class PrintExample {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

```text
Hello, World!
```

| 용어 | 설명 |
|---|---|
| `System.out` | 표준 라이브러리가 제공하는 화면 출력 도구 |
| `println` | 값 출력 후 줄 바꿈을 추가하는 메서드 |
| `print` | 줄 바꿈 없이 값을 출력하는 메서드 |

- 문자열은 큰따옴표(`"`)로 감싸고, 문장 끝에는 세미콜론(`;`)을 붙입니다.

### 출력 오류

문자열을 큰따옴표로 닫지 않거나 세미콜론을 빼먹으면 컴파일 오류가 발생합니다.

```java
System.out.println("Hello, World!)
```

```text
Main.java:3: error: unclosed string literal
        System.out.println("Hello, World!)
                           ^
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.
- `System.out.printn`처럼 메서드 이름을 잘못 쓰면 `error: cannot find symbol`이 발생합니다.

---

## 2. println과 print

`println`은 출력 후 줄 바꿈을 추가하고, `print`는 줄 바꿈 없이 이어서 출력합니다.

```java
public class PrintExample {
    public static void main(String[] args) {
        System.out.println("Hello, World!");  // 출력 후 줄 바꿈

        System.out.print("Hello");            // 줄 바꿈 없이 출력
        System.out.print(", World!");         // 앞 줄과 이어짐
        System.out.println();                 // 줄 바꿈
    }
}
```

```text
Hello, World!
Hello, World!
```

- `System.out.println()`처럼 값을 비우면 줄 바꿈만 출력합니다.

---

## 3. 다양한 타입 출력

`println`과 `print`는 문자열뿐 아니라 정수, 실수, 논리값 등 다양한 타입의 값도 그대로 출력할 수 있습니다.

```java
public class PrintTypeExample {
    public static void main(String[] args) {
        System.out.println(42);     // 정수
        System.out.println(3.14);   // 실수
        System.out.println(true);   // 논리값
    }
}
```

```text
42
3.14
true
```

- 타입의 종류는 [타입](type.md)에서 자세히 다룹니다.

### 여러 값 출력

`println`과 `print`에 여러 값을 함께 넣으려면 `+`로 연결해야 합니다.

```java
public class PrintConcatExample {
    public static void main(String[] args) {
        System.out.println("나이: " + 20);
    }
}
```

```text
나이: 20
```

- `System.out.println("나이: ", 20)`처럼 쉼표로 값을 나열하면 컴파일 오류가 발생합니다.
- `+` 연산은 [연산자](operator.md)에서 자세히 다룹니다.
