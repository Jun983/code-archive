---
hide:
  - navigation
---

# String 클래스

[← Java로 돌아가기](index.md)

`String`은 문자열을 저장하는 **참조 타입**입니다.

| 구성 요소 | 설명 |
|---|---|
| 선언 | 문자열 리터럴을 `String` 변수에 저장 |
| 주요 메서드 | 문자열을 다루는 기능을 제공하는 메서드 |

---

## 1. 선언

큰따옴표(`"`)로 감싼 문자열을 `String` 변수에 저장합니다.

```java
public class StringDeclareExample {
    public static void main(String[] args) {
        String name = "홍길동";
        String greeting = "안녕하세요";
        String empty = "";      // 빈 문자열
        String nothing = null;  // 아무것도 가리키지 않는 상태

        System.out.println(name);      // 홍길동
        System.out.println(greeting);  // 안녕하세요
    }
}
```

```
홍길동
안녕하세요
```

## 2. 주요 메서드

`String`은 문자열을 다루는 메서드를 제공합니다. `변수명.메서드명()` 형태로 호출합니다.

!!! info "참고"
    지금은 호출 형태만 익히고, 메서드에 대한 자세한 내용은 나중에 다룹니다.

- 반환 타입: 메서드가 실행을 마치고 돌려주는 값의 타입입니다.

| 메서드 | 반환 타입 | 설명 |
|--------|-----------|------|
| `length()` | `int` | 문자열 길이를 반환합니다. |
| `charAt(index)` | `char` | 특정 위치의 문자를 반환합니다. 인덱스는 0부터 시작합니다. |
| `substring(start, end)` | `String` | `start`부터 `end` 직전까지의 부분 문자열을 반환합니다. |
| `toUpperCase()` | `String` | 모든 문자를 대문자로 변환합니다. |
| `toLowerCase()` | `String` | 모든 문자를 소문자로 변환합니다. |
| `contains(str)` | `boolean` | 특정 문자열이 포함되면 `true`를 반환합니다. |

- 인덱스: 문자열에서 각 문자의 위치를 나타내는 번호입니다. 0부터 시작합니다.

```java
public class StringMethodExample {
    public static void main(String[] args) {
        String word = "Hello";

        System.out.println(word.length());         // 5
        System.out.println(word.charAt(0));        // H
        System.out.println(word.substring(1, 3));  // el
        System.out.println(word.toUpperCase());    // HELLO
        System.out.println(word.toLowerCase());    // hello
    }
}
```

```
5
H
el
HELLO
hello
```

!!! info "참고"
    `+`를 이용한 문자열 연결과 `equals()`를 이용한 비교는 나중에 다룹니다.
