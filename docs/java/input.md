---
hide:
  - navigation
---

# 입력

[← Java로 돌아가기](index.md)

키보드로 입력받으려면 `Scanner`를 사용합니다.

| 구성 요소 | 설명 |
|---|---|
| 선언과 사용 | `Scanner` 객체를 생성하고 값을 입력받는 방법 |
| 주요 메서드 | 타입에 맞게 입력값을 읽는 메서드 |

---

## 1. 선언과 사용

`new Scanner(System.in)`으로 Scanner를 만든 뒤, 타입에 맞는 메서드로 값을 읽습니다.

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

```
이름 입력: 홍길동
안녕, 홍길동
```

## 2. 주요 메서드

`Scanner`는 입력을 읽는 메서드를 제공합니다. `변수명.메서드명()` 형태로 호출합니다.

!!! info "참고"
    지금은 호출 형태만 익히고, 메서드에 대한 자세한 내용은 나중에 다룹니다.

| 메서드 | 반환 타입 | 설명 |
|--------|-----------|------|
| `nextInt()` | `int` | 정수 1개를 읽음 |
| `nextDouble()` | `double` | 실수 1개를 읽음 |
| `next()` | `String` | 공백 기준 단어 1개를 읽음 |
| `nextLine()` | `String` | 줄 바꿈까지 한 줄을 읽음 |
| `close()` | `void` | 사용이 끝난 Scanner를 닫아 자원을 반환함. 사용 후 닫는 것이 관례 |
