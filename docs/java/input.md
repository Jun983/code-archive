---
hide:
  - navigation
---

# 입력

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 `Scanner`를 만들고 `nextInt()`, `nextLine()`으로 값을 읽는 기본 흐름만 익히면 충분합니다. `import` 선언과 `close()`의 의미는 이런 것이 있다는 정도만 훑어보고, 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

키보드로 입력받으려면 `Scanner`를 사용하며, 이 문서에서는 `Scanner` 객체를 만들어 사용하는 방법, 타입에 맞게 입력값을 읽는 주요 메서드, 입력 버퍼 문제, 반복·여러 값 입력, `BufferedReader`와의 비교를 다룹니다.

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
- `nextInt()` 뒤에 `nextLine()`을 호출하면 남아 있던 줄 바꿈을 먼저 읽어 빈 문자열이 반환될 수 있습니다. 원인과 해결은 아래에서 다룹니다.

### 입력 타입 오류

`nextInt()`로 정수가 아닌 값을 입력하면 런타임 예외가 발생합니다.

```text
나이 입력: abc
Exception in thread "main" java.util.InputMismatchException
	at java.base/java.util.Scanner.throwFor(Scanner.java:939)
```

- 오류 메시지와 `at` 줄의 표시는 JDK 버전에 따라 다를 수 있습니다.
- 예외의 처리 방법은 [예외 처리](exception.md)에서 자세히 다룹니다.

---

## 3. next와 nextLine의 차이

`next()`는 공백(스페이스, 탭, 줄 바꿈)을 기준으로 단어 하나를 읽고, `nextLine()`은 줄 바꿈 직전까지 한 줄 전체를 읽습니다.

```java
Scanner scanner = new Scanner(System.in);
String word = scanner.next();
String rest = scanner.nextLine();
System.out.println("[" + word + "]");
System.out.println("[" + rest + "]");
```

```text
hello world java
[hello]
[ world java]
```

| 용어 | 설명 |
|---|---|
| 입력 버퍼 | 키보드로 입력한 내용이 프로그램에 읽히기 전까지 임시로 쌓이는 공간 |
| 구분자 | 입력값을 나누는 기준이 되는 공백 문자 |

- `next()`는 단어 앞의 공백을 건너뛰지만, 뒤에 남은 공백과 줄 바꿈은 버퍼에 그대로 남깁니다.

### 줄 바꿈이 남는 문제

`nextInt()`, `nextDouble()`, `next()`는 값만 읽고 엔터로 입력된 줄 바꿈은 버퍼에 남겨둡니다. 이어서 `nextLine()`을 호출하면 남아 있던 줄 바꿈까지의 빈 문자열을 읽고 끝나므로, 의도한 입력을 받지 못합니다.

```java
Scanner scanner = new Scanner(System.in);
int age = scanner.nextInt();
String name = scanner.nextLine();   // 남은 줄 바꿈만 읽음
System.out.println("[" + name + "]");
```

```text
20
[]
```

`nextLine()`을 한 번 더 호출해 남은 줄 바꿈을 버리면 해결됩니다.

```java
Scanner scanner = new Scanner(System.in);
int age = scanner.nextInt();
scanner.nextLine();                  // 남은 줄 바꿈 버리기
String name = scanner.nextLine();
System.out.println(age + " " + name);
```

```text
20
홍길동
20 홍길동
```

- 숫자와 문자열을 섞어 입력받을 때는 읽는 순서를 의식합니다.
- 줄 단위로 `nextLine()`만 쓰고 `Integer.parseInt()`로 변환하면 이 문제를 피할 수 있습니다. 변환 방법은 [타입 캐스팅](casting.md)에서 다룹니다.

---

## 4. 입력이 없는 경우

### 빈 줄 입력

아무것도 입력하지 않고 엔터만 누르면 `nextLine()`은 빈 문자열(`""`)을 반환합니다. 오류는 발생하지 않습니다.

```java
Scanner scanner = new Scanner(System.in);
String text = scanner.nextLine();
System.out.println("[" + text + "]");
```

```text

[]
```

- 첫 줄은 엔터만 누른 입력입니다.
- `next()`, `nextInt()`는 공백만 있는 줄을 건너뛰고 값이 입력될 때까지 계속 기다립니다.

### 입력 스트림이 끝난 경우

더 읽을 입력이 없는데 읽기 메서드를 호출하면 런타임 예외가 발생합니다. 파일 입력 리다이렉션이나 `Ctrl+D`(Windows는 `Ctrl+Z`)로 입력이 끝난 경우에 해당합니다.

```text
Exception in thread "main" java.util.NoSuchElementException: No line found
	at java.base/java.util.Scanner.nextLine(Scanner.java:1651)
```

- `next()`, `nextInt()`에서는 `No line found` 대신 메시지 없는 `java.util.NoSuchElementException`이 발생합니다.
- 오류 메시지와 `at` 줄의 표시는 JDK 버전에 따라 다를 수 있습니다.

---

## 5. 반복 입력과 여러 값 입력

### hasNext로 반복 입력

`hasNext()` 계열 메서드는 읽을 값이 남아 있는지 `boolean`으로 알려줍니다. 입력 개수를 모를 때 `while` 반복문과 함께 사용합니다.

| 메서드 | 설명 |
|---|---|
| `hasNext()` | 읽을 단어가 남아 있으면 `true` |
| `hasNextInt()` | 다음 값이 정수이면 `true` |
| `hasNextLine()` | 읽을 줄이 남아 있으면 `true` |

```java
Scanner scanner = new Scanner(System.in);
int sum = 0;
while (scanner.hasNextInt()) {
    sum += scanner.nextInt();
}
System.out.println(sum);
```

```text
1 2 3
4 5
15
```

- 키보드 입력은 끝이 없으므로 입력 종료(`Ctrl+D`, Windows는 `Ctrl+Z`)나 정수가 아닌 값을 입력해야 반복이 끝납니다. 위 출력은 `1 2 3`, `4 5`를 입력한 뒤 입력을 종료한 결과입니다.
- 반복문은 [반복문](loop.md)에서 자세히 다룹니다.

### 한 줄에 여러 값 입력

공백으로 구분된 여러 값은 읽기 메서드를 연속 호출하거나, 한 줄을 읽어 `split()`으로 나누는 방법으로 받습니다.

```java
Scanner scanner = new Scanner(System.in);
int x = scanner.nextInt();
int y = scanner.nextInt();
System.out.println(x + y);
```

```text
3 4
7
```

```java
Scanner scanner = new Scanner(System.in);
String[] parts = scanner.nextLine().split(" ");
int a = Integer.parseInt(parts[0]);
int b = Integer.parseInt(parts[1]);
System.out.println(a * b);
```

```text
6 7
42
```

- `nextInt()`는 공백과 줄 바꿈을 모두 구분자로 취급하므로 같은 줄이든 여러 줄이든 값을 읽을 수 있습니다.
- `split()`은 문자열을 구분자로 나눠 배열로 반환합니다. [문자열](string.md)과 [배열](array.md)에서 자세히 다룹니다.

---

## 6. BufferedReader와 비교

`BufferedReader`는 입력을 버퍼에 모아 한 줄 단위로 읽는 클래스로, `Scanner`보다 읽기 속도가 빨라 입력량이 많을 때 사용합니다. 다만 `readLine()`으로 문자열만 읽을 수 있어 숫자는 직접 변환해야 합니다.

```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BufferedReaderExample {
    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        String line = reader.readLine();
        StringTokenizer tokenizer = new StringTokenizer(reader.readLine());
        int a = Integer.parseInt(tokenizer.nextToken());
        int b = Integer.parseInt(tokenizer.nextToken());

        System.out.println(line + " " + (a + b));
        reader.close();
    }
}
```

```text
안녕
3 4
안녕 7
```

| 용어 | 설명 |
|---|---|
| `BufferedReader` | 입력을 버퍼에 모아 한 줄씩 빠르게 읽는 클래스 |
| `InputStreamReader` | 바이트 입력(`System.in`)을 문자 입력으로 바꿔주는 클래스 |
| `StringTokenizer` | 문자열을 공백 기준으로 나눠 하나씩 꺼내주는 클래스 |

| 구분 | `Scanner` | `BufferedReader` |
|---|---|---|
| 읽는 방식 | 타입별 메서드(`nextInt()` 등) | 한 줄 문자열(`readLine()`) |
| 숫자 변환 | 자동 | `Integer.parseInt()`로 직접 변환 |
| 속도 | 상대적으로 느림 | 빠름 |
| 예외 처리 | 불필요 | `IOException` 처리 필요 |

- 입력이 끝난 상태에서 `readLine()`을 호출하면 예외 대신 `null`을 반환합니다.
- `IOException`은 검사 예외라 `throws`로 선언하거나 `try-catch`로 처리해야 하며, [예외 처리](exception.md)에서 자세히 다룹니다.
- 처음에는 사용이 편한 `Scanner`로 시작하고, 입력량이 많을 때 `BufferedReader`를 고려합니다.
