---
hide:
  - navigation
---

# 다차원 배열

[← Java로 돌아가기](index.md)

배열의 원소가 다시 배열인 구조입니다. 행(row)과 열(column)로 데이터를 표현할 때 사용합니다. 3차원 이상으로도 확장할 수 있지만, 이 문서는 가장 많이 쓰이는 2차원 배열을 기준으로 설명합니다.

| 구성 요소 | 설명 |
|---|---|
| 선언과 초기화 | `new`로 크기 지정 또는 중첩 중괄호로 초기값 지정 |
| 순회 | 중첩 `for`문 또는 중첩 `for-each`문 |

---

## 1. 선언과 초기화

`타입[][] 변수명` 형태로 선언하고, 중첩 중괄호로 초기화합니다.

| 방법 | 예시 | 설명 |
|------|------|------|
| 크기 지정 | `new int[3][4]` | 3행 4열, 기본값 0으로 초기화. |
| 값 지정 | `{ {1,2}, {3,4} }` | 선언과 동시에 값 할당. |
| 가변 길이(jagged) | `new int[3][]` | 행 개수만 지정하고, 각 행의 열 개수는 따로 지정. |

```java
public class TwoDimArrayExample {
    public static void main(String[] args) {
        int[][] grid = new int[3][4];         // 3행 4열, 기본값 0
        int[][] matrix = { {1, 2}, {3, 4} };  // 2행 2열

        int[][] jagged = new int[3][];  // 행마다 다른 열 개수를 가질 수 있음
        jagged[0] = new int[1];
        jagged[1] = new int[2];
        jagged[2] = new int[3];

        System.out.println(grid[0][0]);    // 0
        System.out.println(matrix[0][1]);  // 2
        System.out.println(matrix[1][0]);  // 3
        System.out.println(jagged[2].length);  // 3
    }
}
```

```
0
2
3
3
```

## 2. 순회

중첩 `for`문으로 행과 열을 순서대로 접근합니다. 각 행은 독립된 배열이라 길이가 다를 수 있으므로, 열 순회 조건은 `matrix.length`가 아닌 `matrix[row].length`로 구합니다.

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

인덱스 없이 값만 읽을 때는 중첩 `for-each`문을 사용합니다.

```java
public class TwoDimForEachExample {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        for (int[] row : matrix) {
            for (int n : row) {
                System.out.print(n + " ");
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
