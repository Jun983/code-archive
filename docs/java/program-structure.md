---
hide:
  - navigation
---

# 프로그램 구조

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 모든 코드를 `class` 안에 작성하고, 실행이 `main` 메서드에서 시작한다는 점만 익히면 충분합니다. `public`, `static`, `void`, `String[] args`의 의미와 문서화 주석은 이런 것이 있다는 정도만 훑어보고, 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

Java 프로그램은 반드시 `class` 안에 작성하며 실행은 그 안의 `main` 메서드에서 시작하고, 이 문서에서는 클래스와 파일의 관계, `main` 메서드의 형태, 코드에 설명을 남기는 주석, 실행 순서, 문장과 블록의 규칙을 다룹니다.

---

## 1. 클래스와 파일

Java 소스 파일(`.java`)은 하나의 `public class`를 담으며, 이 클래스의 이름은 파일명과 반드시 같아야 합니다.

```java
// 파일명: Hello.java
public class Hello {  // 클래스 이름은 파일명(Hello.java)과 반드시 같아야 합니다
}
```

| 용어 | 설명 |
|---|---|
| `class` | 모든 코드를 반드시 담아야 하는 그릇 |
| `public class` | 파일명과 이름이 같아야 하는, 파일을 대표하는 클래스 |

- 클래스를 직접 정의하고 사용하는 방법은 [클래스와 객체](class-object.md)에서 자세히 다룹니다.

### 클래스 이름과 파일명이 다른 경우

`public class`의 이름이 파일명과 다르면 컴파일 오류가 발생합니다.

```java
// 파일명: Hello.java
public class Main {
}
```

```text
Hello.java:2: error: class Main is public, should be declared in a file named Main.java
public class Main {
       ^
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

---

## 2. main 메서드

`main` 메서드는 JVM이 프로그램을 실행할 때 가장 먼저 호출하는 진입점입니다. 아래 형태를 반드시 지켜야 JVM이 이를 진입점으로 인식합니다.

```java
public class App {
    public static void main(String[] args) {  // 프로그램 시작 시 가장 먼저 실행되는 진입점
        System.out.println("Hello, World!");
    }
}
```

```text
Hello, World!
```

| 용어 | 설명 |
|---|---|
| `main` 메서드 | 프로그램 실행 시 가장 먼저 자동으로 실행되는 진입점 |
| 메서드 | 클래스 안에 정의되어 특정 동작을 수행하는 코드 블록 |

- `public`, `static`, `void`, `String[] args`의 의미는 나중에 다룹니다.
- 메서드는 [메서드](method.md)에서 자세히 다룹니다.

### main 메서드 형태가 틀린 경우

`main`의 이름이나 매개변수 형태가 다르면 컴파일은 통과하지만 실행할 때 오류가 발생합니다.

```java
public class App {
    public static void man(String[] args) {  // main을 man으로 잘못 입력
        System.out.println("Hello, World!");
    }
}
```

```text
Error: Main method not found in class App, please define the main method as:
   public static void main(String[] args)
```

- 오류 메시지는 JDK 버전에 따라 다를 수 있습니다.

`static`을 빼먹은 경우에도 컴파일은 통과하고 실행할 때 오류가 발생합니다.

```java
public class App {
    public void main(String[] args) {  // static 누락
        System.out.println("Hello, World!");
    }
}
```

```text
Error: Main method is not static in class App, please define the main method as:
   public static void main(String[] args)
```

---

## 3. 주석

주석은 실행에 영향을 주지 않고 코드에 설명을 남기는 텍스트입니다. Java는 세 가지 형태를 제공합니다.

| 형태 | 문법 | 용도 |
|---|---|---|
| 한 줄 주석 | `// 설명` | 한 줄짜리 짧은 설명 |
| 여러 줄 주석 | `/* 설명 */` | 여러 줄에 걸친 설명 |
| 문서화 주석 | `/** 설명 */` | 클래스·메서드 API 문서 생성용 설명 |

```java
public class CommentExample {
    // 한 줄 주석: 프로그램의 시작점입니다
    public static void main(String[] args) {
        /*
         * 여러 줄 주석:
         * 여러 줄에 걸쳐 설명을 작성할 때 사용합니다.
         */
        System.out.println("Hello, World!");  // 콘솔에 출력합니다
    }
}
```

```text
Hello, World!
```

- 주석은 컴파일할 때 무시되므로, 주석 안의 내용은 출력되지 않습니다.

### 문서화 주석

`/** ... */` 형태의 문서화 주석은 클래스·메서드 바로 위에 작성하며, `javadoc` 도구가 이를 읽어 API 문서(HTML)를 생성합니다. `@param`, `@return` 같은 태그로 매개변수와 반환값을 설명합니다.

```java
public class Calculator {
    /**
     * 두 정수의 합을 반환합니다.
     *
     * @param a 첫 번째 정수
     * @param b 두 번째 정수
     * @return a와 b의 합
     */
    public static int add(int a, int b) {
        return a + b;
    }
}
```

- 문서화 주석은 컴파일과 실행에는 영향이 없고, IDE가 메서드 설명을 보여줄 때도 사용합니다.

### 좋은 주석

주석은 코드가 **무엇을** 하는지가 아니라 **왜** 그렇게 했는지를 적을 때 가치가 큽니다. 코드를 그대로 옮긴 주석은 코드가 바뀌어도 갱신되지 않아 오히려 혼란을 줍니다.

```java
// 나쁜 예: 코드를 그대로 옮긴 주석
int count = 0;  // count를 0으로 초기화

// 좋은 예: 이유를 설명하는 주석
int retryLimit = 3;  // 외부 API가 간헐적으로 실패하므로 최대 3회까지 재시도
```

- 이름만으로 의미가 드러나게 짓고, 이름으로 설명되지 않는 의도나 제약만 주석으로 남깁니다.
- 사용하지 않는 코드를 주석 처리해 남겨두기보다 삭제하는 편이 읽기 쉽습니다.

---

## 4. 실행 순서

프로그램은 `main` 메서드의 첫 줄부터 위에서 아래로 한 문장씩 순서대로 실행됩니다. `main` 안에서 다른 메서드를 호출하면 실행이 그 메서드로 넘어가고, 메서드가 끝나면 호출했던 다음 줄로 돌아옵니다.

```java
public class OrderExample {
    public static void main(String[] args) {
        System.out.println("1");
        hello();
        System.out.println("3");
    }

    static void hello() {
        System.out.println("2");
    }
}
```

```text
1
2
3
```

| 용어 | 설명 |
|---|---|
| 호출 | 메서드 이름을 써서 해당 메서드의 코드를 실행하는 것 |
| 순차 실행 | 위에서 아래로 한 문장씩 차례로 실행하는 흐름 |

- 메서드가 소스 파일에서 `main`보다 아래에 정의되어 있어도 호출할 수 있습니다. 실행 순서는 코드의 작성 위치가 아니라 호출 순서로 정해집니다.
- 조건과 반복으로 이 흐름을 바꾸는 방법은 [조건문](conditional.md)과 [반복문](loop.md)에서 다룹니다.
- 메서드 정의와 호출은 [메서드](method.md)에서 자세히 다룹니다.

---

## 5. 문장과 블록

### 문장과 세미콜론

문장은 실행할 하나의 명령이며, Java에서는 문장의 끝을 세미콜론(`;`)으로 표시합니다. 줄 바꿈은 문장의 끝이 아니므로, 한 줄에 여러 문장을 쓰거나 한 문장을 여러 줄로 나눠 쓸 수 있습니다.

```java
int a = 1; int b = 2;   // 한 줄에 두 문장
int sum = a
        + b;            // 한 문장을 두 줄로 나눠 작성
```

| 용어 | 설명 |
|---|---|
| 문장 | 세미콜론(`;`)으로 끝나는 하나의 실행 단위 |
| 세미콜론(`;`) | 문장의 끝을 알리는 기호 |

#### 세미콜론 누락 오류

세미콜론을 빠뜨리면 컴파일 오류가 발생합니다.

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("a")
        System.out.println("b");
    }
}
```

```text
Main.java:3: error: ';' expected
        System.out.println("a")
                               ^
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.
- 오류는 문제가 되는 줄의 끝을 가리키므로, 지적된 줄의 끝에서 세미콜론을 확인합니다.

### 중괄호와 들여쓰기

중괄호 `{ }`는 클래스, 메서드, 조건문 같은 코드의 범위(블록)를 묶으며, 여는 중괄호와 닫는 중괄호는 반드시 짝이 맞아야 합니다. 들여쓰기는 컴파일러가 아니라 사람이 블록 구조를 읽기 위한 것이므로, 블록 안쪽 코드는 한 단계(공백 4칸) 들여써서 구조가 눈에 보이게 합니다.

```java
public class Main {                          // 클래스 블록 시작
    public static void main(String[] args) { // 메서드 블록 시작
        System.out.println("Hello");
    }                                        // 메서드 블록 끝
}                                            // 클래스 블록 끝
```

- Python과 달리 들여쓰기가 틀려도 문법 오류가 아니지만, 어긋난 들여쓰기는 블록 경계를 오해하게 만듭니다.
- 변수가 유효한 범위는 이 블록으로 정해집니다. [변수와 상수](variable.md)에서 자세히 다룹니다.

#### 중괄호 누락 오류

닫는 중괄호가 부족하면 컴파일러가 파일 끝까지 읽고도 블록이 닫히지 않았음을 알려줍니다.

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("a");
    }
```

```text
Main.java:4: error: reached end of file while parsing
    }
     ^
```

- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.
