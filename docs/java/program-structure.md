---
hide:
  - navigation
---

# 프로그램 구조

[← Java로 돌아가기](index.md)

Java 프로그램은 반드시 `class` 안에 작성하며, 실행은 그 안의 **`main` 메서드**에서 시작합니다. 이 문서에서는 클래스와 파일의 관계, `main` 메서드의 형태, 그리고 코드에 설명을 남기는 주석까지 Java 프로그램의 기본 골격을 다룹니다.

| 구성 요소 | 설명 |
|---|---|
| `class` | 모든 코드를 반드시 담아야 하는 그릇 |
| `main` 메서드 | 프로그램 실행 시 가장 먼저 자동으로 실행되는 진입점 |
| 주석 | 실행에 영향을 주지 않고 코드에 남기는 설명 텍스트 |

---

## 1. 클래스와 파일

Java 소스 파일(`.java`)은 하나의 `public class`를 담으며, 이 클래스의 이름은 파일명과 반드시 같아야 합니다.

```java
// 파일명: Hello.java
public class Hello {  // 클래스 이름은 파일명(Hello.java)과 반드시 같아야 합니다
}
```

!!! summary "요약"
    Java 코드는 반드시 `class` 안에 작성하며, `public class`의 이름은 파일명과 일치해야 합니다.

## 2. main 메서드

`main` 메서드는 JVM이 프로그램을 실행할 때 가장 먼저 호출하는 진입점입니다. 아래 형태를 반드시 지켜야 JVM이 이를 진입점으로 인식합니다.

```java
public class App {
    public static void main(String[] args) {  // 프로그램 시작 시 가장 먼저 실행되는 진입점
        System.out.println("Hello, World!");
    }
}
```

!!! info "참고"
    `public`, `static`, `void`, `String[] args`의 의미는 이후 문서에서 다룹니다.

!!! summary "요약"
    `main` 메서드는 `public static void main(String[] args)` 형태로 선언해야 JVM이 진입점으로 인식하고 실행합니다.

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

!!! info "참고"
    문서화 주석은 이후 문서에서 자세히 다룹니다.

!!! summary "요약"
    주석은 `//`, `/* */`, `/** */` 세 가지 형태로 작성하며, 실행 결과에는 영향을 주지 않습니다.
