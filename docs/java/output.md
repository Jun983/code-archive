---
hide:
  - navigation
---

# 출력

[← Java로 돌아가기](index.md)

`System.out`은 Java 표준 라이브러리가 제공하는, 화면 출력을 담당하는 도구이고, `println`과 `print`는 값을 출력하는 메서드입니다. 이 문서에서는 두 메서드의 줄 바꿈 차이와, 다양한 타입의 값을 출력하는 방법을 다룹니다.

| 구성 요소 | 설명 |
|---|---|
| `System.out` | 표준 라이브러리가 제공하는 화면 출력 도구 |
| `println` | 값 출력 후 줄 바꿈을 추가하는 메서드 |
| `print` | 줄 바꿈 없이 값을 출력하는 메서드 |

---

## 1. println과 print

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

```
Hello, World!
Hello, World!
```

## 2. 다양한 타입 출력

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

```
42
3.14
true
```

## 3. 여러 값 출력

`println`과 `print`에 여러 값을 함께 넣으려면 `+`로 연결해야 합니다.

```java
public class PrintConcatExample {
    public static void main(String[] args) {
        System.out.println("나이: " + 20);
    }
}
```

```
나이: 20
```
