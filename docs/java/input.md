---
hide:
  - navigation
---

# 입력

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 `Scanner`를 만들고 `nextInt()`, `nextLine()`으로 값을 읽는 기본 흐름만 익히면 충분합니다. `import` 선언과 `close()`의 의미는 이런 것이 있다는 정도만 훑어보고, 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

키보드로 입력받으려면 `Scanner`를 사용하며, 이 문서에서는 `Scanner` 객체를 만들어 사용하는 방법과 타입에 맞게 입력값을 읽는 주요 메서드를 다룹니다.

---

## 1. Scanner란

`Scanner`는 키보드 같은 입력 장치에서 값을 읽어 오는 표준 라이브러리 클래스입니다. `new Scanner(System.in)`으로 만든 뒤, 타입에 맞는 메서드로 값을 읽습니다.

```java
import java.util.Scanner; // Scanner를 사용하기 위해 필요한 선언

public class InputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("이름 입력: ");
        String name = scanner.nextLine();

        System.out.println("안녕, " + name);
        scanner.close();
    }
}
```

```text
이름 입력: 홍길동
안녕, 홍길동
```

| 용어 | 설명 |
|---|---|
| `Scanner` | 입력 장치에서 값을 읽어 오는 클래스 |
| `System.in` | 키보드 입력을 나타내는 표준 입력 |
| `import` | 다른 패키지의 클래스를 사용하겠다고 알리는 선언 |

- `import java.util.Scanner;`를 빼먹으면 컴파일 오류가 발생합니다. 오류 사례는 아래에서 다룹니다.
- 출력 방법은 [출력](output.md)에서 다룹니다.

### import 누락 오류

`import` 선언 없이 `Scanner`를 사용하면 컴파일 오류가 발생합니다.

```java
public class InputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
    }
}
```

```text
InputExample.java:3: error: cannot find symbol
        Scanner scanner = new Scanner(System.in);
        ^
  symbol:   class Scanner
  location: class InputExample
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

---

## 2. 주요 메서드

`Scanner`는 입력을 읽는 메서드를 제공합니다. `변수명.메서드명()` 형태로 호출합니다.

| 메서드 | 반환 타입 | 설명 |
|--------|-----------|------|
| `nextInt()` | `int` | 정수 1개를 읽음 |
| `nextDouble()` | `double` | 실수 1개를 읽음 |
| `next()` | `String` | 공백 기준 단어 1개를 읽음 |
| `nextLine()` | `String` | 줄 바꿈까지 한 줄을 읽음 |
| `close()` | `void` | 사용이 끝난 Scanner를 닫아 자원을 반환함. 사용 후 닫는 것이 관례 |

```java
import java.util.Scanner;

public class InputMethodExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("나이 입력: ");
        int age = scanner.nextInt();

        System.out.println("내년 나이: " + (age + 1));
        scanner.close();
    }
}
```

```text
나이 입력: 20
내년 나이: 21
```

- 지금은 호출 형태만 익히고, 메서드에 대한 자세한 내용은 [메서드](method.md)에서 다룹니다.
- `nextInt()` 뒤에 `nextLine()`을 호출하면 남아 있던 줄 바꿈을 먼저 읽어 빈 문자열이 반환될 수 있습니다.

### 입력 타입 오류

`nextInt()`로 정수가 아닌 값을 입력하면 런타임 예외가 발생합니다.

```text
나이 입력: abc
Exception in thread "main" java.util.InputMismatchException
	at java.base/java.util.Scanner.throwFor(Scanner.java:939)
```

- 오류 메시지와 `at` 줄의 표시는 JDK 버전에 따라 다를 수 있습니다.
- 예외의 처리 방법은 [예외 처리](exception.md)에서 자세히 다룹니다.
