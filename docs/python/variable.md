---
hide:
  - navigation
---

# 변수

[← Python으로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 `이름 = 값`으로 변수를 만들고, 만든 변수를 `print()`로 출력해 보는 것만 익히면 충분합니다. 변수명은 소문자와 언더스코어(`_`)로 짓는 규칙만 기억하고, 값이 변수에 연결되는 방식은 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

변수는 값을 가리키는 이름이며, 이 문서에서는 변수를 만들고 값을 대입하는 방법과 이름을 짓는 규칙, 같은 변수에 다른 타입의 값을 대입할 수 있는 동적 타입을 다룹니다.

---

## 1. 선언과 초기화

변수는 별도의 타입 키워드 없이 `이름 = 값` 형태로 선언과 동시에 초기화합니다. `=`는 오른쪽의 값을 왼쪽 이름에 대입합니다.

```python
age = 30
name = "홍길동"
price = 3.14159
is_valid = True

print(age)
print(name)
print(price)
print(is_valid)
```

```text
30
홍길동
3.14159
True
```

| 용어 | 설명 |
|---|---|
| 변수 | 값을 가리키는 이름 |
| 선언 | 변수 이름을 만들어 사용할 수 있게 하는 것 |
| 초기화 | 변수에 처음으로 값을 대입하는 것 |
| 대입 | `=`로 변수에 값을 연결하는 동작 |
| 리터럴 | 코드에 직접 적은 값 (`30`, `"홍길동"` 등) |

- `=`는 수학의 "같다"가 아니라, 오른쪽 값을 왼쪽 이름에 연결하는 동작입니다.
- 값을 비교하는 `==`는 [연산자](operator.md)에서 자세히 다룹니다.

### 재대입

이미 만든 변수에 `=`로 다른 값을 다시 대입하면, 변수는 새 값을 가리킵니다.

```python
count = 1
print(count)

count = 2
print(count)
```

```text
1
2
```

- 이전 값은 변수에서 사라지고, 항상 마지막에 대입한 값만 사용됩니다.
- 오른쪽 계산이 먼저 끝난 뒤 왼쪽 변수에 대입되므로, `count = count + 1`처럼 자기 자신의 값을 사용해 갱신할 수 있습니다.
- `+=` 같은 대입 연산자는 [연산자](operator.md)에서 자세히 다룹니다.

### 변수 간 대입

변수를 다른 변수에 대입하면, 그 시점의 값이 연결됩니다.

```python
a = 1
b = a
a = 2

print(a)
print(b)
```

```text
2
1
```

- `b = a` 이후에 `a`를 다시 대입해도 `b`는 영향을 받지 않습니다.
- 리스트처럼 내용을 바꿀 수 있는 값은 동작이 달라질 수 있으며, [자료구조](data-structures.md)에서 자세히 다룹니다.

### 정의되지 않은 변수

값이 대입되기 전에 변수를 사용하면 `NameError`가 발생합니다.

```python
print(score)
score = 90
```

```text
Traceback (most recent call last):
  File "main.py", line 1, in <module>
    print(score)
NameError: name 'score' is not defined
```

- 변수는 사용하는 줄보다 위에서 먼저 대입되어 있어야 합니다.
- 이름을 잘못 입력한 경우에도 같은 오류가 발생하므로, 오류 메시지의 이름을 먼저 확인합니다.
- 오류 메시지의 세부 표시는 Python 버전에 따라 다를 수 있습니다.
- 코드의 실행 순서는 [프로그램 구조](program-structure.md)에서 자세히 다룹니다.

---

## 2. 다중 할당

한 줄에서 여러 변수를 동시에 선언하거나, 값을 서로 교환할 수 있습니다.

```python
x, y, z = 1, 2, 3
print(x, y, z)

x, y = y, x
print(x, y)
```

```text
1 2 3
2 1
```

- 왼쪽 변수의 개수와 오른쪽 값의 개수가 같아야 합니다.
- `x, y = y, x`는 임시 변수 없이 두 값을 교환합니다.

### 같은 값 대입

`=`를 이어 쓰면 여러 변수에 같은 값을 한 번에 대입합니다.

```python
a = b = 0
print(a, b)
```

```text
0 0
```

- 숫자나 문자열처럼 바꿀 수 없는 값은 이후에 각각 따로 재대입해도 서로 영향을 주지 않습니다.

### 개수가 맞지 않는 경우

변수와 값의 개수가 다르면 `ValueError`가 발생합니다.

```python
x, y, z = 1, 2
```

```text
Traceback (most recent call last):
  File "main.py", line 1, in <module>
    x, y, z = 1, 2
ValueError: not enough values to unpack (expected 3, got 2)
```

- 값이 변수보다 많을 때도 `ValueError`가 발생하며, 메시지는 `too many values to unpack`으로 표시됩니다.
- 여러 값을 묶은 `tuple`과 `list`를 변수로 나누어 받는 방법은 [자료구조](data-structures.md)에서 자세히 다룹니다.

---

## 3. 명명 규칙

Python 공식 스타일 가이드(PEP 8)는 변수명을 **snake_case**로 작성하도록 권장하며, 대부분의 Python 코드가 이 관례를 따릅니다. 모든 글자를 소문자로 쓰고, 단어 사이는 언더스코어(`_`)로 구분합니다.

```python
max_retry_count = 3
is_active = True

print(max_retry_count)
print(is_active)
```

```text
3
True
```

| 용어 | 설명 |
|---|---|
| snake_case | 소문자만 사용하고 단어 사이를 언더스코어(`_`)로 이어 쓰는 표기법 |
| 키워드 | `if`, `for`, `class`처럼 Python이 문법으로 사용하는 예약어 |

### 이름 규칙

변수명은 문법 규칙을 지켜야 하며, 어기면 `SyntaxError`가 발생해 실행이 시작되지 않습니다.

- 문자, 숫자, 언더스코어(`_`)만 사용할 수 있고, 한글도 문법상 가능합니다.
- 숫자로 시작할 수 없습니다. (`1st`는 불가, `first`는 가능)
- 공백과 `-`(하이픈)은 사용할 수 없습니다. (`my name`, `my-name`은 불가, `my_name`은 가능)
- 키워드는 변수명으로 사용할 수 없습니다.

```python
class = 1
```

```text
  File "main.py", line 1
    class = 1
          ^
SyntaxError: invalid syntax
```

- 오류 메시지의 세부 표시는 Python 버전에 따라 다를 수 있습니다.

### 대소문자 구분

대문자와 소문자는 서로 다른 이름으로 취급합니다.

```python
age = 1
Age = 2

print(age)
print(Age)
```

```text
1
2
```

- 이름을 헷갈리기 쉬우므로, 대문자만 다른 변수를 함께 쓰지 않습니다.

### 좋은 변수명

- `a`, `x`보다 `user_age`, `total_price`처럼 값의 의미가 드러나는 이름을 사용합니다.
- 값이 바뀌지 않는 상수는 `MAX_SIZE`처럼 모두 대문자와 언더스코어로 쓰는 것이 관례입니다. 이는 관례일 뿐 값의 변경을 막지는 않습니다.
- `list`, `str`, `type`처럼 내장 이름은 키워드가 아니어서 변수명으로 쓸 수는 있지만, 원래 기능을 가리게 되므로 피합니다.

---

## 4. 동적 타입

Python은 변수를 만들 때 타입을 선언하지 않으며, 값이 대입되는 순간 그 값의 타입이 결정됩니다. 타입은 변수가 아니라 값이 가지므로, 같은 변수에 다른 타입의 값을 다시 대입할 수 있습니다.

```python
value = 10
print(type(value))

value = "문자열"
print(type(value))
```

```text
<class 'int'>
<class 'str'>
```

| 용어 | 설명 |
|---|---|
| 동적 타입 | 타입을 코드 작성 시점이 아니라 실행 중에 값으로 결정하는 방식 |

- 타입 오류는 실행 전 변환 단계가 아니라 해당 코드가 실행되는 시점에 발견됩니다.
- `type()`과 내장 타입은 [타입](type.md)에서 자세히 다룹니다.

### 타입 오류의 발견 시점

변수에 어떤 타입이 들어 있는지는 연산이 실행될 때 확인됩니다.

```python
value = 10
print("시작")

value = "문자열"
print(value + 1)
```

```text
시작
Traceback (most recent call last):
  File "main.py", line 5, in <module>
    print(value + 1)
TypeError: can only concatenate str (not "int") to str
```

- 문법에는 문제가 없으므로 `시작`은 정상적으로 출력되고, 오류가 발생한 줄에서 멈춥니다.
- 같은 변수라도 마지막에 대입한 값의 타입을 기준으로 연산이 처리됩니다.
- 같은 이름에 다른 타입의 값을 계속 대입하면 코드를 읽기 어려워지므로, 한 변수에는 한 가지 종류의 값만 담는 것이 좋습니다.
- 오류 메시지의 세부 표시는 Python 버전에 따라 다를 수 있습니다.
- 타입이 다른 값을 변환하는 방법은 [형변환](casting.md)에서 자세히 다룹니다.
