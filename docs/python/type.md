---
hide:
  - navigation
---

# 타입

[← Python으로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 `int`, `float`, `str`, `bool` 네 가지 타입과 `type()`으로 타입을 확인하는 방법만 익히면 충분합니다. `list`, `dict`처럼 아직 배우지 않은 타입은 이름만 눈에 익혀 두고, 해당 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

Python의 모든 값은 타입을 가지며, 이 문서에서는 내장 타입의 종류와 타입을 확인하는 방법을 다룹니다.

---

## 1. 타입이란

타입은 값이 어떤 종류의 데이터인지를 나타내며, 타입에 따라 그 값으로 할 수 있는 연산이 달라집니다. 예를 들어 숫자끼리는 더할 수 있고, 문자열끼리는 이어 붙입니다.

```python
print(1 + 2)
print("1" + "2")
```

```text
3
12
```

| 용어 | 설명 |
|---|---|
| 타입 | 값의 종류와 그 값에 허용되는 연산을 정한 분류 |
| 리터럴 | 코드에 직접 적은 값 (`10`, `"hello"` 등) |

### 타입이 다른 값의 연산

타입이 서로 맞지 않는 연산은 실행 중에 `TypeError`가 발생합니다.

```python
print("시작")
print(1 + "2")
print("끝")
```

```text
시작
Traceback (most recent call last):
  File "main.py", line 2, in <module>
    print(1 + "2")
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

- `1`은 숫자이고 `"2"`는 문자열이므로, 두 값을 더할 수 없습니다.
- 모양이 같아 보여도 `2`와 `"2"`는 서로 다른 타입의 값입니다.
- 오류 메시지의 세부 표시는 Python 버전에 따라 다를 수 있습니다.
- 한 타입의 값을 다른 타입으로 바꾸는 방법은 [형변환](casting.md)에서 자세히 다룹니다.

---

## 2. 내장 타입

Python이 기본으로 제공하는 내장 타입 중 대표적인 타입은 다음과 같습니다.

| 타입 | 종류 | 예시 |
|---|---|---|
| `int` | 정수 | `10`, `-3` |
| `float` | 실수 | `3.14`, `-0.5` |
| `str` | 문자열 | `"hello"`, `'안녕'` |
| `bool` | 논리 | `True`, `False` |
| `NoneType` | 값 없음 | `None` |
| `list` | 순서가 있고 변경할 수 있는 값의 모음 | `[1, 2, 3]` |
| `tuple` | 순서가 있고 변경할 수 없는 값의 모음 | `(1, 2, 3)` |
| `dict` | 키와 값의 쌍으로 이루어진 모음 | `{"name": "지수"}` |
| `set` | 중복이 없는 값의 모음 | `{1, 2, 3}` |

### 숫자 타입

`int`와 `float`는 소수점의 유무로 구분됩니다.

```python
print(10)
print(10.0)
print(1_000_000)
print(1e3)
print(2 ** 100)
```

```text
10
10.0
1000000
1000.0
1267650600228229401496703205376
```

- `int`는 크기 제한 없이 큰 정수를 표현할 수 있습니다.
- `10`과 `10.0`은 값은 같지만 타입이 다릅니다. 소수점이 있으면 `float`입니다.
- 큰 숫자는 `_`로 자릿수를 나눠 적을 수 있으며, 값에는 영향을 주지 않습니다.
- `1e3`처럼 지수로 적은 숫자는 `float`입니다.
- `float`는 소수를 근사값으로 저장하므로 계산 결과에 미세한 오차가 생길 수 있습니다.

```python
print(0.1 + 0.2)
```

```text
0.30000000000000004
```

### 논리 타입

`bool`은 `True`와 `False` 두 값만 가지며, 첫 글자를 대문자로 써야 합니다.

```python
print(True)
print(True + 1)
```

```text
True
2
```

- `bool`은 `int`의 한 종류이며, `True`는 `1`, `False`는 `0`처럼 계산에 쓰입니다.
- `true`, `false`처럼 소문자로 쓰면 이름으로 해석되어 `NameError`가 발생합니다.
- 조건에 따라 코드를 실행하는 방법은 [조건문](conditional.md)에서 자세히 다룹니다.

### 값 없음

`None`은 "값이 없음"을 나타내는 값이며, `NoneType`의 유일한 값입니다.

- 값이 아직 정해지지 않았거나 결과가 없음을 표현할 때 사용합니다.
- `0`, `""`(빈 문자열)과는 다른 값입니다.
- 함수가 값을 돌려주지 않을 때의 결과는 [함수](function.md)에서 자세히 다룹니다.

### 문자열과 모음 타입

- `str`은 따옴표로 감싼 문자의 나열이며, [문자열](string.md)에서 자세히 다룹니다.
- `list`, `tuple`, `dict`, `set`은 여러 값을 묶어 다루는 타입이며, [자료구조](data-structures.md)에서 자세히 다룹니다.

---

## 3. 타입 확인

`type()`은 값의 타입을 알려주는 내장 함수입니다.

```python
print(type(10))
print(type(3.14))
print(type("지수"))
print(type(True))
print(type(None))
```

```text
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
<class 'NoneType'>
```

출력의 `class`는 Python의 타입이 곧 클래스라는 뜻입니다. 모음 타입도 같은 방식으로 확인합니다.

```python
print(type([1, 2, 3]))
print(type((1, 2, 3)))
print(type({"name": "지수"}))
print(type({1, 2, 3}))
```

```text
<class 'list'>
<class 'tuple'>
<class 'dict'>
<class 'set'>
```

### 계산 결과의 타입

타입은 값뿐 아니라 계산 결과에 따라서도 정해집니다.

```python
print(type(10 / 2))
print(type(10 // 3))
print(type(7 // 2.0))
```

```text
<class 'float'>
<class 'int'>
<class 'float'>
```

- `/`는 나누어떨어져도 결과가 항상 `float`입니다.
- `//`는 두 값이 모두 `int`이면 `int`, 하나라도 `float`이면 `float`입니다.
- 연산자별 동작은 [연산자](operator.md)에서 자세히 다룹니다.

### 타입 비교

`isinstance()`는 값이 특정 타입인지 `True` 또는 `False`로 알려줍니다.

```python
print(isinstance(10, int))
print(isinstance(3.14, int))
print(isinstance(3.14, (int, float)))
```

```text
True
False
True
```

- 두 번째 인수에 타입을 튜플로 묶어 넘기면, 그중 하나라도 해당하는지 확인합니다.
- `bool`은 `int`의 한 종류이므로 `isinstance(True, int)`는 `True`입니다.
- 클래스와 객체의 관계는 [클래스와 객체](class-object.md)에서 자세히 다룹니다.
- 값을 저장하는 변수의 타입이 정해지는 방식은 [변수](variable.md)에서 자세히 다룹니다.
