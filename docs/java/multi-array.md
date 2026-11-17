---
hide:
  - navigation
---

# 다차원 배열

[← Java로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 2차원 배열을 선언하고 `[행][열]`로 값을 읽는 방법, 중첩 `for`문으로 순회하는 방법만 익히면 충분합니다. 가변 길이 배열은 이런 것이 있다는 정도만 훑어보고, 필요할 때 다시 찾아보면 됩니다. 먼저 [배열](array.md)을 학습하면 훨씬 쉽게 이해됩니다.

다차원 배열은 배열의 원소가 다시 배열인 구조이며, 이 문서에서는 가장 많이 쓰이는 2차원 배열을 기준으로 선언과 초기화, 순회, 인덱스 범위 오류, 출력과 비교, 얕은 복사와 깊은 복사, 활용 예시를 다룹니다.

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

### 선언 오류

`new`로 만들 때는 행의 크기를 생략할 수 없습니다. 행은 비워 둘 수 있지만 열만 지정할 수는 없습니다.

```java
int[][] grid = new int[][3];
```

```text
Main.java:3: error: ']' expected
        int[][] grid = new int[][3];
                                 ^
```

행에는 배열을 대입해야 하며, 값을 대입하면 컴파일 오류가 발생합니다.

```java
int[][] grid = new int[2][2];
grid[1] = 5;
```

```text
Main.java:5: error: incompatible types: int cannot be converted to int[]
        grid[1] = 5;
                  ^
```

- `grid[0]`은 `int[]` 한 행을 가리키므로 `grid[0] = new int[3];`처럼 배열을 대입합니다. 이 경우 행마다 길이가 달라집니다.
- 컴파일 오류 메시지의 세부 표시는 `javac` 버전에 따라 다를 수 있습니다.

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

---

## 4. 출력과 비교

2차원 배열을 `println`에 그대로 넘기면 내용이 아닌 참조 값이 출력됩니다. `Arrays.toString()`은 한 겹만 문자열로 바꾸므로, 2차원 이상은 `Arrays.deepToString()`을 사용합니다.

```java
import java.util.Arrays;

public class DeepToStringExample {
    public static void main(String[] args) {
        int[][] a = {{1, 2}, {3, 4}};
        System.out.println(Arrays.deepToString(a));
        System.out.println(Arrays.toString(a[0]));

        int[][] b = {{1, 2}, {3, 4}};
        System.out.println(a == b);
        System.out.println(Arrays.equals(a, b));
        System.out.println(Arrays.deepEquals(a, b));
    }
}
```

```text
[[1, 2], [3, 4]]
[1, 2]
false
false
true
```

| 용어 | 설명 |
|---|---|
| `Arrays.deepToString()` | 다차원 배열의 모든 단계를 문자열로 바꿈 |
| `Arrays.deepEquals()` | 다차원 배열의 모든 단계의 내용을 비교 |

- `a == b`는 같은 배열인지 비교하므로 내용이 같아도 `false`입니다.
- `Arrays.equals(a, b)`는 각 행(`int[]`)을 참조로 비교하므로 내용이 같아도 `false`가 됩니다. 2차원 배열의 내용 비교에는 `deepEquals()`를 사용합니다.
- 1차원 배열의 `Arrays`는 [배열](array.md)에서 다룹니다.

---

## 5. 복사

다차원 배열은 행이 각각 별도의 배열이므로, 복사 방법에 따라 행을 공유하는지가 달라집니다.

| 방식 | 예시 | 결과 |
|---|---|---|
| 참조 복사 | `int[][] b = a;` | 전체가 같은 배열 |
| 얕은 복사 | `int[][] b = a.clone();` | 바깥 배열만 새로 만들고, 행은 `a`와 공유 |
| 깊은 복사 | 행마다 `clone()` | 모든 행이 새 배열 |

```java
import java.util.Arrays;

public class CopyExample {
    public static void main(String[] args) {
        int[][] original = {{1, 2}, {3, 4}};

        int[][] same = original;
        same[0][0] = 99;
        System.out.println(Arrays.deepToString(original));

        int[][] shallow = original.clone();
        shallow[1][0] = 77;
        System.out.println(Arrays.deepToString(original));
        System.out.println(original == shallow);
        System.out.println(original[1] == shallow[1]);

        int[][] deep = new int[original.length][];
        for (int i = 0; i < original.length; i++) {
            deep[i] = original[i].clone();
        }
        deep[0][1] = -1;
        System.out.println(Arrays.deepToString(original));
        System.out.println(Arrays.deepToString(deep));
    }
}
```

```text
[[99, 2], [3, 4]]
[[99, 2], [77, 4]]
false
true
[[99, 2], [77, 4]]
[[99, -1], [77, 4]]
```

| 용어 | 설명 |
|---|---|
| 얕은 복사 | 바깥 배열만 복사하고 안쪽 배열(행)은 같은 것을 가리키는 복사 |
| 깊은 복사 | 안쪽 배열까지 모두 새로 만드는 복사 |

- `same`은 `original`과 같은 배열이므로 `same[0][0]`을 바꾸면 `original`도 바뀝니다.
- `shallow`는 새 바깥 배열이지만 `original[1] == shallow[1]`이 `true`인 것처럼 행은 공유합니다. 그래서 `shallow[1][0] = 77`이 `original`에도 반영됩니다.
- `deep`은 행마다 `clone()`으로 새 배열을 만들었으므로 `deep[0][1]`을 바꿔도 `original`은 그대로입니다.

---

## 6. 활용

### 행·열 합계와 전치

행 순서로 순회하면 행 합계를, 바깥 반복을 열로 바꾸면 열 합계를 구할 수 있습니다. 행과 열을 맞바꾼 새 배열을 만드는 것을 전치라고 합니다.

```java
import java.util.Arrays;

public class MatrixExample {
    public static void main(String[] args) {
        int[][] m = {{1, 2, 3}, {4, 5, 6}};

        for (int r = 0; r < m.length; r++) {
            int rowSum = 0;
            for (int c = 0; c < m[r].length; c++) {
                rowSum += m[r][c];
            }
            System.out.println("행 " + r + ": " + rowSum);
        }

        for (int c = 0; c < m[0].length; c++) {
            int colSum = 0;
            for (int r = 0; r < m.length; r++) {
                colSum += m[r][c];
            }
            System.out.println("열 " + c + ": " + colSum);
        }

        int[][] t = new int[m[0].length][m.length];
        for (int r = 0; r < m.length; r++) {
            for (int c = 0; c < m[r].length; c++) {
                t[c][r] = m[r][c];
            }
        }
        System.out.println(Arrays.deepToString(t));
    }
}
```

```text
행 0: 6
행 1: 15
열 0: 5
열 1: 7
열 2: 9
[[1, 4], [2, 5], [3, 6]]
```

| 용어 | 설명 |
|---|---|
| 전치 | 행과 열을 맞바꾼 배열 (`t[c][r] = m[r][c]`) |

- 2행 3열 배열의 전치는 3행 2열이므로 `new int[m[0].length][m.length]`로 만듭니다.
- 열 합계는 바깥 반복이 열, 안쪽 반복이 행입니다. 모든 행의 길이가 같을 때만 `m[0].length`를 열 개수로 쓸 수 있습니다.

### 행 교환

행은 각각 배열을 가리키는 참조이므로, 행 전체를 서로 바꿔도 값이 하나씩 복사되지 않습니다.

```java
int[][] m = {{4, 5, 6}, {1, 2, 3}};
int[] temp = m[0];
m[0] = m[1];
m[1] = temp;
System.out.println(java.util.Arrays.deepToString(m));
```

```text
[[1, 2, 3], [4, 5, 6]]
```

### 3차원 배열

`[]`를 하나 더 붙이면 3차원 배열이 됩니다. 행 안의 원소가 다시 배열인 구조입니다.

```java
int[][][] cube = new int[2][3][4];
System.out.println(cube.length + " " + cube[0].length + " " + cube[0][0].length);
```

```text
2 3 4
```

- 크기는 바깥쪽부터 차례로 `cube.length`(2), `cube[0].length`(3), `cube[0][0].length`(4)입니다.
- 3차원 이상은 이해하기 어려우므로 실제로는 2차원까지만 쓰는 경우가 많습니다.
