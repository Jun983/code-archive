---
hide:
  - navigation
---

# 배열

[← Java로 돌아가기](index.md)

배열은 같은 타입의 값을 순서대로 묶어 보관하는 자료구조입니다. 선언할 때 크기가 고정됩니다.

## 1. 선언과 초기화

타입 뒤에 `[]`를 붙여 선언하며, `new` 키워드로 크기를 지정하거나 중괄호로 초기값을 직접 지정합니다.

```java
public class ArrayExample {
    public static void main(String[] args) {
        // 크기 지정: 숫자 타입은 0으로 초기화
        int[] scores = new int[5];

        // 초기값 직접 지정
        int[] primes = {2, 3, 5, 7, 11};
        String[] days = {"월", "화", "수", "목", "금"};

        System.out.println(scores[0]);   // 기본값: 0
        System.out.println(primes[0]);   // 2
        System.out.println(days[0]);     // 월
    }
}
```

```
0
2
월
```

## 2. 원소 접근과 수정

배열에 담긴 각 값을 **원소**라 하며, **인덱스**로 접근합니다.

| 용어 | 설명 |
|------|------|
| **원소** | 배열에 담긴 각각의 값 |
| **인덱스** | 원소의 위치를 나타내는 번호. `0`부터 시작하며 마지막은 `length - 1` |

존재하지 않는 인덱스를 사용하면 프로그램 실행 중 오류가 발생합니다.

```java
public class ArrayAccessExample {
    public static void main(String[] args) {
        int[] scores = {90, 85, 70, 95, 60};

        System.out.println(scores[0]);      // 90 (첫 번째)
        System.out.println(scores[4]);      // 60 (마지막, length - 1)
        System.out.println(scores.length);  // 5

        scores[2] = 75;                     // 세 번째 원소 수정
        System.out.println(scores[2]);      // 75
    }
}
```

```
90
60
5
75
```

## 3. 배열 순회

인덱스 기반 `for`문 또는 `for-each`문으로 모든 원소를 순회합니다. `for-each`는 `for (타입 변수 : 배열)` 형태로, 인덱스 없이 값만 꺼낼 때 사용합니다.

| 방식 | 용도 |
|------|------|
| `for (int i = 0; i < arr.length; i++)` | 인덱스가 필요하거나 원소를 수정할 때. |
| `for (int n : arr)` | 값만 읽을 때. |

```java
public class ArrayLoopExample {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};

        // 인덱스 기반 순회
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(i + ": " + numbers[i]);
        }

        // for-each 순회
        for (int n : numbers) {
            System.out.println(n);
        }
    }
}
```

```
0: 10
1: 20
2: 30
3: 40
4: 50
10
20
30
40
50
```
