---
hide:
  - navigation
---

# 다차원 배열

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 2차원 배열을 선언하고 `[행][열]`로 값을 읽는 방법, 중첩 `for`문으로 순회하는 방법만 익히면 충분합니다. 가변 길이 배열은 이런 것이 있다는 정도만 훑어보고, 필요할 때 다시 찾아보면 됩니다. 먼저 [배열](array.md)을 학습하면 훨씬 쉽게 이해됩니다.

다차원 배열은 배열의 원소가 다시 배열인 구조이며, 이 문서에서는 가장 많이 쓰이는 2차원 배열을 기준으로 선언과 초기화, 순회, 인덱스 범위 오류를 다룹니다.

---

## 1. 다차원 배열이란

행(row)과 열(column)로 이루어진 표 형태의 데이터는 배열 하나로 표현하기 어렵습니다. 다차원 배열은 배열 안에 배열을 담아 `[행][열]` 두 개의 인덱스로 값을 가리킬 수 있게 합니다. 3차원 이상으로도 확장할 수 있습니다.

```java
public class MultiArrayIntroExample {
    public static void main(String[] args) {
        int[][] matrix = { {1, 2}, {3, 4} };

        System.out.println(matrix[0][1]);
        System.out.println(matrix[1][0]);
        System.out.println(matrix.length);
        System.out.println(matrix[0].length);
    }
}
```

```text
2
3
2
2
```

| 용어 | 설명 |
|---|---|
| 다차원 배열 | 원소가 다시 배열인 배열 |
| 행 | 2차원 배열에서 가로 한 줄. `matrix[행]` |
| 열 | 2차원 배열에서 세로 한 줄. `matrix[행][열]` |

- `matrix.length`는 행의 개수, `matrix[0].length`는 0번 행의 열 개수입니다.
- 배열의 기본 개념은 [배열](array.md)에서 자세히 다룹니다.

---

## 2. 선언과 초기화

`타입[][] 변수명` 형태로 선언하고, `new`로 크기를 지정하거나 중첩 중괄호로 초기화합니다.

| 방법 | 예시 | 설명 |
|---|---|---|
| 크기 지정 | `new int[3][4]` | 3행 4열, 기본값 0으로 초기화합니다. |
| 값 지정 | `{ {1,2}, {3,4} }` | 선언과 동시에 값을 할당합니다. |
| 가변 길이(jagged) | `new int[3][]` | 행 개수만 지정하고, 각 행의 열 개수는 따로 지정합니다. |

```java
public class TwoDimArrayExample {
    public static void main(String[] args) {
        int[][] grid = new int[3][4];
        int[][] matrix = { {1, 2}, {3, 4} };

        int[][] jagged = new int[3][];
        jagged[0] = new int[1];
        jagged[1] = new int[2];
        jagged[2] = new int[3];

        System.out.println(grid[0][0]);
        System.out.println(matrix[0][1]);
        System.out.println(matrix[1][0]);
        System.out.println(jagged[2].length);
    }
}
```

```text
0
2
3
3
```

- `grid`는 3행 4열이며 모든 원소가 기본값 `0`입니다.
- `jagged`는 행마다 다른 열 개수를 가질 수 있습니다.

### 가변 길이 배열

각 행은 독립된 배열이므로, 중괄호로 초기화할 때 행마다 원소 개수를 다르게 쓸 수 있습니다.

```java
public class JaggedExample {
    public static void main(String[] args) {
        int[][] jagged = { {1}, {2, 3}, {4, 5, 6} };

        for (int[] row : jagged) {
            System.out.println(row.length);
        }
    }
}
```

```text
1
2
3
```

- 행마다 길이가 다르므로 열 개수는 `jagged.length`가 아니라 `jagged[행].length`로 구해야 합니다.

### 행을 만들기 전에 접근한 경우

`new int[2][]`처럼 행의 개수만 지정하면 각 행은 아직 만들어지지 않아 `null`입니다. 행을 만들기 전에 그 안의 열에 접근하면 `NullPointerException`이 발생합니다.

```java
int[][] rows = new int[2][];
System.out.println(rows[0]);
System.out.println(rows[0].length);
```

```text
null
Exception in thread "main" java.lang.NullPointerException: Cannot read the array length because "<local1>[0]" is null
	at Main.main(Main.java:5)
```

- `rows[0] = new int[3];`처럼 행을 먼저 만든 뒤 사용합니다.
- 오류 메시지의 세부 표시는 Java 버전과 컴파일 옵션에 따라 다를 수 있습니다.

---

## 3. 순회

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

```text
1 2 3 
4 5 6 
7 8 9 
```

- 바깥 `for`문이 행, 안쪽 `for`문이 열을 담당합니다.
- 반복문은 [반복문](loop.md)에서 자세히 다룹니다.

### 중첩 for-each

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

```text
1 2 3 
4 5 6 
7 8 9 
```

- 바깥 `for-each`가 꺼내는 `row`는 한 행 전체(`int[]`)이고, 안쪽 `for-each`가 그 행의 값을 꺼냅니다.

### 행·열 인덱스 범위를 벗어난 경우

행 인덱스와 열 인덱스는 각각 범위가 있으며, 어느 쪽이든 벗어나면 `ArrayIndexOutOfBoundsException`이 발생합니다. 2행 2열 배열에서 행 인덱스는 `0`~`1`, 열 인덱스는 `0`~`1`입니다.

```java
int[][] m = {{1, 2}, {3, 4}};
System.out.println(m[2][0]);
```

```text
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 2 out of bounds for length 2
	at Main.main(Main.java:4)
```

- `m[0][2]`처럼 열 인덱스를 벗어나도 같은 오류가 발생하며, 메시지만으로는 행과 열 중 어느 쪽인지 구분되지 않습니다.
- 행 범위는 `m.length`, 열 범위는 `m[행].length`와 비교해 확인합니다.
- 오류 메시지의 세부 표시는 Java 버전에 따라 다를 수 있습니다.
