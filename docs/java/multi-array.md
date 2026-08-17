---
hide:
  - navigation
---

# 다차원 배열

[← Java로 돌아가기](index.md)

배열의 원소가 다시 배열인 구조입니다. 행(row)과 열(column)로 데이터를 표현할 때 사용합니다.

## 1. 2차원 배열 선언과 초기화

`타입[][] 변수명` 형태로 선언하고, 중첩 중괄호로 초기화합니다.

| 방법 | 예시 | 설명 |
|------|------|------|
| 크기 지정 | `new int[3][4]` | 3행 4열, 기본값 0으로 초기화. |
| 값 지정 | `{ {1,2}, {3,4} }` | 선언과 동시에 값 할당. |

```java
public class TwoDimArrayExample {
    public static void main(String[] args) {
        int[][] grid = new int[3][4];         // 3행 4열, 기본값 0
        int[][] matrix = { {1, 2}, {3, 4} };  // 2행 2열

        System.out.println(grid[0][0]);    // 0
        System.out.println(matrix[0][1]);  // 2
        System.out.println(matrix[1][0]);  // 3
    }
}
```

```
0
2
3
```

## 2. 2차원 배열 순회

중첩 `for`문으로 행과 열을 순서대로 접근합니다.

```java
public class TwoDimLoopExample {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        for (int row = 0; row < matrix.length; row++) {
            for (int col = 0; col < matrix[row].length; col++) {
                System.out.print(matrix[row][col] + " ");
            }
            System.out.println();
        }
    }
}
```

```
1 2 3 
4 5 6 
7 8 9 
```
