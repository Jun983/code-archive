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

---

## 4. printf와 서식 지정

`printf`는 서식 문자열 안의 **서식 지정자**를 뒤에 나열한 값으로 채워 출력합니다. `+` 연결보다 자릿수·정렬을 맞추기 쉽습니다. `printf`는 `println`과 달리 줄 바꿈을 넣지 않으므로 `%n`을 직접 씁니다.

```java
public class PrintfExample {
    public static void main(String[] args) {
        String name = "홍길동";
        int age = 20;
        double height = 175.5;

        System.out.printf("이름: %s, 나이: %d, 키: %.1f%n", name, age, height);
    }
}
```

```text
이름: 홍길동, 나이: 20, 키: 175.5
```

| 용어 | 설명 |
|---|---|
| 서식 문자열 | `%s`, `%d`처럼 값이 들어갈 자리를 표시한 문자열 |
| 서식 지정자 | `%` 뒤에 변환 문자를 붙여 값의 타입과 형식을 지정하는 표기 |
| `%n` | 운영체제에 맞는 줄 바꿈 문자를 출력하는 서식 지정자 |

| 지정자 | 대상 | 예시 출력 |
|---|---|---|
| `%s` | 문자열 (모든 타입 가능) | `홍길동` |
| `%d` | 정수 | `20` |
| `%f` | 실수 (기본 소수점 6자리) | `175.500000` |
| `%c` | 문자 하나 | `A` |
| `%b` | 논리값 | `true` |
| `%%` | `%` 문자 자체 | `%` |

### 폭·정렬·자릿수

`%` 뒤에 플래그와 숫자를 붙여 출력 형식을 조절합니다.

```java
public class PrintfFormatExample {
    public static void main(String[] args) {
        System.out.printf("[%5d]%n", 42);       // 폭 5, 오른쪽 정렬
        System.out.printf("[%-5d]%n", 42);      // 왼쪽 정렬
        System.out.printf("[%05d]%n", 42);      // 빈 자리를 0으로 채움
        System.out.printf("[%,d]%n", 1234567);  // 천 단위 구분
        System.out.printf("[%.2f]%n", 3.14159); // 소수점 둘째 자리까지
        System.out.printf("%d%%%n", 90);        // % 문자 출력
    }
}
```

```text
[   42]
[42   ]
[00042]
[1,234,567]
[3.14]
90%
```

- `%.2f`는 소수점 아래 셋째 자리에서 반올림합니다.

### String.format

`String.format`은 같은 서식 규칙으로 출력하지 않고 문자열로 돌려줍니다. 만든 문자열은 변수에 저장하거나 `println`으로 출력할 수 있습니다.

```java
public class FormatExample {
    public static void main(String[] args) {
        String message = String.format("%s의 나이는 %d살", "홍길동", 20);
        System.out.println(message);
    }
}
```

```text
홍길동의 나이는 20살
```

- `printf`는 화면에 바로 출력하고, `String.format`은 문자열을 반환합니다.

### 서식 지정자 오류

서식 지정자와 값의 타입이 맞지 않거나 값이 부족하면 런타임 예외가 발생합니다. 컴파일 단계에서는 잡히지 않습니다.

```java
System.out.printf("%d%n", 3.5);
```

```text
Exception in thread "main" java.util.IllegalFormatConversionException: d != java.lang.Double
	at java.base/java.util.Formatter$FormatSpecifier.failConversion(Formatter.java:4442)
```

```java
System.out.printf("%d %d%n", 1);
```

```text
1 Exception in thread "main" java.util.MissingFormatArgumentException: Format specifier '%d'
	at java.base/java.util.Formatter.format(Formatter.java:2688)
```

| 상황 | 예외 |
|---|---|
| 지정자와 값의 타입이 다름 (`%d`에 실수) | `IllegalFormatConversionException` |
| 지정자보다 값이 적음 | `MissingFormatArgumentException` |

- 두 번째 예제의 `1`은 예외가 발생하기 전까지 출력된 부분입니다.
- 예외 메시지와 `at` 줄의 표시는 JDK 버전에 따라 다를 수 있습니다.

---

## 5. 이스케이프 문자

문자열 안에서 `\`로 시작하는 특수 문자를 **이스케이프 문자**라고 합니다. 줄 바꿈이나 탭처럼 눈에 보이지 않는 문자나 따옴표를 문자열에 넣을 때 사용합니다.

```java
public class EscapeExample {
    public static void main(String[] args) {
        System.out.println("A\tB\nC");
        System.out.println("그는 \"안녕\"이라고 했다");
        System.out.println("C:\\temp");
    }
}
```

```text
A	B
C
그는 "안녕"이라고 했다
C:\temp
```

| 용어 | 설명 |
|---|---|
| 이스케이프 문자 | `\`와 문자 하나를 합쳐 특수한 의미를 나타내는 표기 |

| 표기 | 의미 |
|---|---|
| `\n` | 줄 바꿈 |
| `\t` | 탭 |
| `\"` | 큰따옴표 |
| `\'` | 작은따옴표 |
| `\\` | 역슬래시 자체 |

- 따옴표 안에 `"`를 넣으려면 `\"`로 써야 합니다. 작은따옴표는 문자열 안에서는 이스케이프 없이 써도 됩니다.

### 잘못된 이스케이프

정의되지 않은 이스케이프 문자를 쓰면 컴파일 오류가 발생합니다. 경로의 `\`는 `\\`로 써야 합니다.

```java
System.out.println("a\qb");
```

```text
Main.java:3: error: illegal escape character
        System.out.println("a\qb");
                              ^
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

---

## 6. 텍스트 블록

여러 줄 문자열은 큰따옴표 세 개(`"""`)로 감싼 **텍스트 블록**으로 쓸 수 있습니다(Java 15 이상). `\n`을 일일이 쓰지 않아도 줄 바꿈이 그대로 유지되고, `"`도 이스케이프 없이 쓸 수 있습니다.

```java
public class TextBlockExample {
    public static void main(String[] args) {
        String text = """
            안녕하세요
              Java "텍스트 블록"
            끝""";

        System.out.println(text);
    }
}
```

```text
안녕하세요
  Java "텍스트 블록"
끝
```

| 용어 | 설명 |
|---|---|
| 텍스트 블록 | `"""`로 시작해 `"""`로 끝나는 여러 줄 문자열 리터럴 |
| 여는 구분자 | 줄 끝까지 다른 문자가 올 수 없는 첫 번째 `"""` |

- 각 줄의 공통 들여쓰기는 자동으로 제거됩니다. 닫는 `"""` 위치도 이 기준에 포함됩니다.
- 닫는 `"""`를 별도 줄에 쓰면 마지막에 줄 바꿈이 하나 더 들어갑니다.

### 텍스트 블록 오류

여는 `"""` 뒤에 같은 줄에서 내용을 이어 쓰면 컴파일 오류가 발생합니다.

```java
String s = """hello""";
```

```text
Main.java:3: error: illegal text block open delimiter sequence, missing line terminator
        String s = """hello""";
                      ^
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.
- Java 14 이하에서는 텍스트 블록 자체를 사용할 수 없습니다.

---

## 7. 출력 대상과 줄 바꿈 제어

### System.out과 System.err

`System.out`은 **표준 출력**, `System.err`는 **표준 오류 출력**입니다. 둘 다 콘솔에 보이지만 별도의 스트림이므로, 실행 결과를 파일로 저장할 때 정상 출력과 오류 메시지를 따로 나눌 수 있습니다.

```java
public class ErrExample {
    public static void main(String[] args) {
        System.out.println("정상 출력");
        System.err.println("에러 메시지");
    }
}
```

```text
정상 출력
에러 메시지
```

| 용어 | 설명 |
|---|---|
| 표준 출력 (`System.out`) | 프로그램의 일반 결과를 내보내는 기본 출력 통로 |
| 표준 오류 출력 (`System.err`) | 오류·경고 메시지를 내보내는 별도의 출력 통로 |

- 터미널에서 `java Main > out.txt`로 실행하면 `System.out`의 내용만 파일에 저장되고, `System.err`의 내용은 화면에 남습니다.
- 두 스트림의 출력 순서는 환경에 따라 섞여 보일 수 있습니다.

### 줄 바꿈 제어

줄 바꿈은 `println`, `\n`, `%n`으로 만들 수 있습니다. `print`와 `\n`을 조합하면 줄 바꿈 위치를 직접 정할 수 있습니다.

```java
public class NewlineExample {
    public static void main(String[] args) {
        System.out.print("a\n");
        System.out.print("b");
        System.out.println();
        System.out.printf("c%n");
    }
}
```

```text
a
b
c
```

| 방법 | 설명 |
|---|---|
| `println` | 출력 후 줄 바꿈을 자동으로 추가 |
| `\n` | 문자열 안에 줄 바꿈 문자를 직접 포함 |
| `%n` | `printf`·`String.format`에서 운영체제에 맞는 줄 바꿈을 출력 |

- Windows는 줄 바꿈이 `\r\n`이고 macOS·Linux는 `\n`이므로, `printf`에서는 `%n`을 쓰는 것이 안전합니다.
