---
hide:
  - navigation
---

# 프로그램 구조

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 모든 코드를 `class` 안에 작성하고, 실행이 `main` 메서드에서 시작한다는 점만 익히면 충분합니다. `public`, `static`, `void`, `String[] args`의 의미와 문서화 주석은 이런 것이 있다는 정도만 훑어보고, 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

Java 프로그램은 반드시 `class` 안에 작성하며 실행은 그 안의 `main` 메서드에서 시작하고, 이 문서에서는 클래스와 파일의 관계, `main` 메서드의 형태, 코드에 설명을 남기는 주석을 다룹니다.

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
- 문서화 주석은 나중에 다룹니다.
