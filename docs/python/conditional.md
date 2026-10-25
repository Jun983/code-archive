---
hide:
  - navigation
---

# 조건문

[← Python으로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 `if`/`elif`/`else`로 조건에 따라 코드를 나누는 방법과, 조건 끝의 콜론(`:`) 및 들여쓰기 규칙만 익히면 충분합니다. `match`와 삼항 표현식은 이런 것이 있다는 정도만 훑어보고, 필요할 때 다시 찾아보거나 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

조건문은 조건식의 결과에 따라 실행할 코드를 선택하는 문법이며, 이 문서에서는 `if`/`elif`/`else`, `match`, 삼항 표현식을 다룹니다.

---

## 1. 조건문이란

프로그램은 기본적으로 위에서 아래로 한 줄씩 실행되지만, 조건문을 사용하면 조건에 따라 일부 코드만 실행하거나 건너뛸 수 있습니다. 조건식은 `True` 또는 `False`로 평가되며, Python은 중괄호(`{}`) 대신 들여쓰기로 실행할 블록을 구분합니다.

```python
age = 20

if age >= 19:
    print("성인")

print("종료")
```

```text
성인
종료
```

| 용어 | 설명 |
|---|---|
| 조건문 | 조건식의 결과에 따라 실행할 코드를 선택하는 문장 |
| 조건식 | `True` 또는 `False`로 평가되는 식 (`age >= 19`) |
| 블록 | 같은 들여쓰기 수준으로 묶인 코드 묶음 |

- 조건식에는 [연산자](operator.md)의 비교 연산자와 논리 연산자를 사용합니다.
- 조건 끝에는 콜론(`:`)을 붙이며, 들여쓰지 않은 `print("종료")`는 조건과 관계없이 항상 실행됩니다.

### 조건이 False인 경우

조건이 `False`이면 블록 전체를 건너뛰고, 블록 아래의 코드부터 이어서 실행합니다.

```python
age = 15

if age >= 19:
    print("성인")

print("종료")
```

```text
종료
```

- `if` 블록은 조건이 `True`일 때만 실행되며, 아무것도 출력되지 않았다고 오류가 난 것은 아닙니다.

### 문법 오류

콜론이 빠지거나 들여쓰기가 맞지 않으면 실행이 시작되기 전에 오류가 발생합니다.

```python
age = 20
if age >= 19:
print("성인")
```

```text
  File "main.py", line 3
    print("성인")
    ^^^^^
IndentationError: expected an indented block after 'if' statement on line 2
```

| 상황 | 오류 |
|---|---|
| 콜론(`:`)을 빼먹음 | `SyntaxError: expected ':'` |
| 조건문 아래 줄을 들여쓰지 않음 | `IndentationError: expected an indented block` |
| 같은 블록 안에서 들여쓰기 칸 수가 다름 | `IndentationError: unindent does not match any outer indentation level` |
| 조건식에 `==` 대신 `=`를 사용 | `SyntaxError: invalid syntax` |

- 오류 메시지의 세부 표시는 Python 버전에 따라 다를 수 있습니다.
- 값이 같은지 비교할 때는 대입(`=`)이 아니라 비교(`==`)를 사용하며, [연산자](operator.md)에서 자세히 다룹니다.

---

## 2. if / elif / else

조건이 `True`인 블록을 위에서부터 차례로 찾아 실행하고, 나머지는 건너뜁니다.

| 형태 | 의미 |
|---|---|
| `if 조건:` | 조건이 `True`이면 블록을 실행합니다. |
| `elif 조건:` | `else if`의 줄임말이며, 위 조건이 `False`이고 이 조건이 `True`이면 실행합니다. |
| `else:` | 위의 모든 조건이 `False`이면 실행합니다. |

```python
score = 75

if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
else:
    print("F")
```

```text
C
```

| 용어 | 설명 |
|---|---|
| 분기 | 조건에 따라 실행 흐름이 나뉘는 것 |
| `elif` | `else if`의 줄임말로, "그렇지 않고 이 조건이면"을 뜻하는 키워드 |

- 블록에 속한 코드는 같은 수의 공백(보통 4칸)으로 들여쓰며, 어긋나면 `IndentationError`가 발생합니다.
- `elif`는 여러 개 쓸 수 있고, 조건을 위에서부터 평가해 처음 `True`인 블록 하나만 실행합니다.
- `elif`와 `else`는 생략할 수 있지만, `else`는 항상 마지막에 한 번만 올 수 있습니다.

### if / else

`elif` 없이 `if`와 `else`만 쓰면 둘 중 정확히 한 블록이 실행됩니다.

```python
age = 20

if age >= 19:
    print("성인")
else:
    print("미성년자")
```

```text
성인
```

- `else`에는 조건을 쓰지 않으며, 앞의 조건이 모두 `False`일 때의 나머지 경우를 처리합니다.

### elif와 연속된 if의 차이

`elif`는 앞의 조건이 `True`이면 평가하지 않지만, `if`를 연달아 쓰면 각각 독립적으로 평가됩니다.

```python
score = 95

if score >= 90:
    print("A")
if score >= 80:
    print("B")

print("---")

if score >= 90:
    print("A")
elif score >= 80:
    print("B")
```

```text
A
B
---
A
```

- 연속된 `if`는 조건마다 따로 검사하므로 여러 블록이 실행될 수 있습니다.
- `elif`는 하나의 묶음이므로 처음 `True`인 블록만 실행됩니다.
- `elif`를 쓸 때는 범위가 좁은 조건을 위에 두어야 합니다. 위의 예에서 `score >= 80`을 먼저 쓰면 `95`도 `B`가 됩니다.

### 중첩 조건문

블록 안에 또 다른 조건문을 쓸 수 있으며, 안쪽 조건문은 한 단계 더 들여씁니다.

```python
age = 25
has_id = True

if age >= 19:
    if has_id:
        print("입장")
    else:
        print("신분증 필요")
```

```text
입장
```

- 바깥 조건이 `False`이면 안쪽 조건문은 평가되지 않습니다.
- 두 조건을 모두 만족해야 하는 경우에는 `if age >= 19 and has_id:`처럼 논리 연산자로 합치면 들여쓰기 단계가 줄어듭니다.
- 논리 연산자는 [연산자](operator.md)에서 자세히 다룹니다.

### 참과 거짓의 판단

조건식이 `bool`이 아니어도 Python이 값을 `True` 또는 `False`로 간주해 판단합니다.

```python
name = ""

if name:
    print("이름 있음")
else:
    print("이름 없음")

items = []

if not items:
    print("비어 있음")
```

```text
이름 없음
비어 있음
```

| 용어 | 설명 |
|---|---|
| 거짓으로 취급되는 값 (falsy) | 조건식에서 `False`처럼 동작하는 값 |
| 참으로 취급되는 값 (truthy) | 조건식에서 `True`처럼 동작하는 값 |

| 거짓으로 취급되는 값 | 설명 |
|---|---|
| `False` | 논리 값 |
| `0`, `0.0` | 숫자 0 |
| `""` | 빈 문자열 |
| `[]`, `{}` | 비어 있는 `list`, `dict` (`()`, `set()`도 포함) |
| `None` | 값 없음 |

- 위 표에 없는 값은 모두 참으로 취급됩니다.
- 문자열 `"0"`, `"False"`와 공백 `" "`은 비어 있지 않은 문자열이므로 `True`입니다.
- 값이 있는지 없는지만 확인하는 경우 `if name:`처럼 간단히 쓸 수 있습니다.
- `list`, `dict` 같은 컬렉션은 [자료구조](data-structures.md)에서 자세히 다룹니다.

### None 확인

값이 `None`인지 확인할 때는 `==` 대신 `is`를 사용하는 것이 관례입니다.

```python
result = None

if result is None:
    print("값 없음")
```

```text
값 없음
```

- `0`이나 `""`도 거짓으로 취급되므로, `if not result:`는 `None`과 `0`을 구분하지 못합니다.
- `None`만 따로 구분해야 하면 `is None`을 사용합니다.
- `is`는 [연산자](operator.md)에서 자세히 다룹니다.

### 범위 조건

비교 연산자를 이어 쓰면 값이 범위 안에 있는지 한 번에 확인할 수 있습니다.

```python
n = 15

if 10 <= n < 20:
    print("10 이상 20 미만")
```

```text
10 이상 20 미만
```

- `10 <= n < 20`은 `10 <= n and n < 20`과 같은 의미입니다.

---

## 3. match

하나의 값을 여러 패턴과 비교하여 일치하는 블록을 실행합니다. Python 3.10부터 사용할 수 있습니다.

| 형태 | 의미 |
|---|---|
| `case 값:` | 값이 일치하면 이 블록을 실행합니다. |
| `case 값1 \| 값2:` | 여러 값 중 하나라도 일치하면 실행합니다. |
| `case _:` | 일치하는 패턴이 없을 때 실행합니다(기본값). |

```python
day = 3

match day:
    case 1:
        print("월요일")
    case 2:
        print("화요일")
    case 3:
        print("수요일")
    case _:
        print("그 외")
```

```text
수요일
```

| 용어 | 설명 |
|---|---|
| 패턴 | `case` 뒤에 쓰며 비교 대상 값과 맞는지 검사하는 형태 |
| 와일드카드 | 어떤 값과도 일치하는 패턴 `_` |

- 일치한 `case` 블록만 실행되고 자동으로 빠져나오므로 `break`가 필요 없습니다.
- 값 하나와의 일치 여부만 볼 때는 `match`, 범위나 복합 조건은 `if`/`elif`가 적합합니다.

### 여러 값 묶기

`|`로 여러 값을 묶으면 그중 하나라도 일치할 때 같은 블록을 실행합니다. 문자열도 비교할 수 있습니다.

```python
command = "quit"

match command:
    case "start":
        print("시작")
    case "stop" | "quit":
        print("종료")
    case _:
        print("알 수 없음")
```

```text
종료
```

- `case "stop" | "quit":`는 `command`가 `"stop"` 또는 `"quit"`일 때 실행됩니다.

### 일치하는 패턴이 없는 경우

`case _:`를 생략했을 때 일치하는 패턴이 없으면 오류 없이 `match` 전체를 건너뜁니다.

```python
code = 99

match code:
    case 1:
        print("하나")
    case 2:
        print("둘")

print("끝")
```

```text
끝
```

- 처리하지 못한 값을 놓치지 않으려면 마지막에 `case _:`를 두는 것이 좋습니다.
- `case _:`는 모든 값과 일치하므로 항상 마지막에 와야 합니다.

### 조건을 붙이는 case

`case` 뒤에 `if`를 붙이면 패턴이 일치하더라도 조건을 만족할 때만 실행합니다.

```python
n = 15

match n:
    case x if x < 0:
        print("음수")
    case 0:
        print("영")
    case x if x < 10:
        print("한 자리")
    case _:
        print("두 자리 이상")
```

```text
두 자리 이상
```

| 용어 | 설명 |
|---|---|
| 가드 | `case` 뒤에 붙이는 `if 조건`으로, 패턴이 일치한 뒤 추가로 검사하는 조건 |

- `case x`처럼 이름을 쓰면 일치한 값이 그 이름에 대입되어 조건과 블록에서 사용할 수 있습니다.
- 이름만 쓴 `case x`는 어떤 값과도 일치하므로, 가드 없이 쓰면 `case _:`처럼 동작합니다.
- 범위 비교가 많다면 `match`보다 `if`/`elif`가 읽기 쉽습니다.

---

## 4. 삼항 표현식

조건에 따라 두 값 중 하나를 반환하는 한 줄짜리 조건 표현식입니다. `if`/`else`를 값 사이에 씁니다.

| 형태 | 의미 |
|---|---|
| `A if 조건 else B` | 조건이 `True`이면 `A`, `False`이면 `B`를 반환합니다. |

```python
score = 75
result = "합격" if score >= 60 else "불합격"
print(result)
```

```text
합격
```

| 용어 | 설명 |
|---|---|
| 표현식 | 계산되어 하나의 값이 되는 코드 (문장과 달리 변수에 저장할 수 있음) |

- 조건이 먼저 평가된 뒤, 선택된 쪽의 값만 계산됩니다.
- 값을 하나 고르는 용도로 쓰며, 여러 문장을 실행해야 하면 `if` 문을 사용합니다.

### 값을 바로 사용

삼항 표현식은 값이므로 변수에 담지 않고 `print()` 등에 바로 넣을 수 있습니다.

```python
a, b = 3, 7

print(a if a > b else b)
print("짝수" if 4 % 2 == 0 else "홀수")
```

```text
7
짝수
```

- 두 값 중 큰 값을 고르는 것처럼 값을 선택하는 경우에 적합합니다.
- `else`는 생략할 수 없습니다. 값이 반드시 하나로 정해져야 하기 때문입니다.

### 평가되는 쪽만 계산

선택되지 않은 쪽은 계산되지 않습니다.

```python
def first():
    print("first 실행")
    return 1


def second():
    print("second 실행")
    return 2


print(first() if True else second())
```

```text
first 실행
1
```

- `second()`는 호출되지 않으므로 `second 실행`은 출력되지 않습니다.
- 함수의 정의와 호출은 [함수](function.md)에서 자세히 다룹니다.

### 중첩 사용

삼항 표현식을 이어 쓸 수 있지만, 조건이 늘어나면 읽기 어려워집니다.

```python
score = 75

grade = "A" if score >= 90 else "B" if score >= 70 else "C"
print(grade)
```

```text
B
```

- 조건이 세 가지 이상이면 `if`/`elif`/`else`가 더 읽기 쉽습니다.
