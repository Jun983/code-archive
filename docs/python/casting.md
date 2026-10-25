---
hide:
  - navigation
---

# 형변환

[← Python으로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 `int()`, `float()`, `str()` 세 가지로 값을 바꾸는 방법과, 숫자가 아닌 문자열을 변환하면 `ValueError`가 발생한다는 점만 익히면 충분합니다. 오류를 처리하는 방법은 아직 몰라도 괜찮으며, 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

형변환은 값을 다른 타입으로 바꾸는 것이며, 이 문서에서는 `int`, `float`, `str`로 값을 변환하는 방법과 변환할 수 없는 값을 만났을 때의 동작을 다룹니다.

---

## 1. 형변환이란

Python은 타입이 다른 값끼리의 연산을 자동으로 맞춰주지 않으므로, 필요하면 직접 타입을 변환해야 합니다. 변환할 때는 타입 이름 뒤에 괄호를 붙여 `int(x)`처럼 호출하며, 원본은 그대로 두고 변환된 새 값을 반환합니다.

```python
print("1" + "2")
print(int("1") + int("2"))
```

```text
12
3
```

| 용어 | 설명 |
|---|---|
| 형변환 | 값을 다른 타입의 값으로 바꾸는 것 |
| 명시적 형변환 | 코드에서 `int()`, `str()` 등을 직접 호출하는 변환 |
| 암시적 형변환 | 코드에서 호출하지 않아도 Python이 자동으로 타입을 맞추는 변환 |

- `int`, `float`, `str`은 [타입](type.md)이면서 동시에 변환에 사용하는 호출 형태입니다.
- 서로 다른 타입을 그대로 더하면(`"1" + 2`) `TypeError`가 발생합니다.

### 원본은 바뀌지 않음

형변환은 새 값을 반환할 뿐, 변수에 들어 있는 원본은 바꾸지 않습니다.

```python
text = "100"
number = int(text)

print(text, type(text))
print(number, type(number))
```

```text
100 <class 'str'>
100 <class 'int'>
```

- 변환한 값을 계속 사용하려면 `number`처럼 변수에 대입합니다.
- 변수에 값을 대입하는 방법은 [변수](variable.md)에서 자세히 다룹니다.

### 자동으로 변환되는 경우

`int`와 `float`를 함께 계산하면 정수가 실수로 자동 변환되어 결과가 `float`가 됩니다.

```python
result = 1 + 2.0

print(result)
print(type(result))
```

```text
3.0
<class 'float'>
```

- 숫자 타입끼리의 연산만 자동으로 맞춰지며, 숫자와 문자열은 자동으로 변환되지 않습니다.
- 연산자별 동작은 [연산자](operator.md)에서 자세히 다룹니다.

### TypeError

숫자와 문자열을 그대로 이어 붙이려고 하면 `TypeError`가 발생합니다.

```python
age = 25
print("나이: " + age)
```

```text
Traceback (most recent call last):
  File "main.py", line 2, in <module>
    print("나이: " + age)
TypeError: can only concatenate str (not "int") to str
```

- 숫자를 `str(age)`로 변환한 뒤 이어 붙여야 합니다.
- 오류 메시지의 세부 표시는 Python 버전에 따라 다를 수 있습니다.

---

## 2. int 변환

`int(x)`는 값을 정수로 변환합니다. 문자열은 정수 형태일 때 변환되고, 실수는 소수점 이하를 버립니다.

```python
print(int("100"))
print(int(9.99))
print(int(-9.99))
print(int(True))
```

```text
100
9
-9
1
```

| 용어 | 설명 |
|---|---|
| 버림 | 반올림 없이 소수점 이하를 잘라내는 것 (0에 가까운 쪽으로 이동) |

- 반올림이 아니므로 `int(9.99)`는 `10`이 아니라 `9`입니다.
- `True`는 `1`, `False`는 `0`으로 변환됩니다.

### 문자열 변환

문자열은 정수 형태여야 변환되며, 앞뒤 공백과 부호는 허용됩니다.

```python
print(int("  42  "))
print(int("-7"))
print(int("+5"))
```

```text
42
-7
5
```

- 문자열 중간에 공백이 있거나(`"1 2"`), 소수점이 있으면(`"3.14"`) 변환되지 않습니다.
- 소수 형태의 문자열은 `float()`로 먼저 변환한 뒤 `int()`로 변환합니다.

### 반올림

반올림이 필요하면 내장 함수 `round()`를 사용합니다.

```python
print(round(9.99))
print(round(3.14159, 2))
```

```text
10
3.14
```

- 두 번째 인수로 소수점 아래 자리 수를 지정할 수 있습니다.
- 정확히 `.5`인 값은 가까운 짝수로 맞춰지므로(`round(2.5)`는 `2`), 일반적인 반올림과 다를 수 있습니다.

---

## 3. float 변환

`float(x)`는 값을 실수로 변환합니다. 정수나 숫자 형태의 문자열을 실수로 바꿀 때 사용합니다.

```python
print(float("3.14"))
print(float(3))
print(float("10"))
```

```text
3.14
3.0
10.0
```

- 정수를 변환하면 `3`이 `3.0`처럼 소수점이 붙은 값이 됩니다.

### 문자열 변환

`float()`도 앞뒤 공백과 부호를 허용하며, 지수 형태의 문자열도 변환할 수 있습니다.

```python
print(float("  3.14  "))
print(float("-2"))
print(float("1e3"))
print(float(True))
```

```text
3.14
-2.0
1000.0
1.0
```

- 정수 형태의 문자열도 `float()`로 변환할 수 있어, 소수점 유무를 알 수 없는 입력에 사용하기 편리합니다.
- 변환 결과는 항상 `float`이므로 값이 정수여도 `.0`이 붙습니다.
- `float`의 계산 오차는 [타입](type.md)에서 자세히 다룹니다.

---

## 4. str 변환

`str(x)`는 값을 문자열로 변환합니다. 숫자를 문자열과 이어 붙이거나 출력용 문자열을 만들 때 사용합니다.

```python
age = 25

print("나이: " + str(age))
print(str(3.14), type(str(3.14)))
print(str(True))
```

```text
나이: 25
3.14 <class 'str'>
True
```

- 어떤 값이든 문자열로 변환할 수 있습니다.
- `print()`가 값을 출력할 때 내부에서 `str()`을 호출하는 방식은 [출력](output.md)에서 자세히 다룹니다.

### 다양한 값의 변환

`None`이나 `list`처럼 숫자가 아닌 값도 문자열로 변환됩니다.

```python
print(str(None))
print(str([1, 2]))
print(str(10) + "1")
```

```text
None
[1, 2]
101
```

- 변환된 값은 문자열이므로 `str(10) + "1"`은 숫자 덧셈이 아니라 문자열 이어 붙이기입니다.
- `list`는 [자료구조](data-structures.md)에서 자세히 다룹니다.

### 변환 대신 f-string

숫자를 문자열과 함께 출력할 때는 `str()` 대신 f-string을 사용하면 변환 없이 값을 끼워 넣을 수 있습니다.

```python
age = 25

print(f"나이: {age}")
```

```text
나이: 25
```

- f-string은 [문자열](string.md)에서 자세히 다룹니다.

---

## 5. 변환 실패

값의 형태가 변환하려는 타입과 맞지 않으면 `ValueError`가 발생합니다.

```python
print(int("abc"))
```

```text
Traceback (most recent call last):
  File "main.py", line 1, in <module>
    print(int("abc"))
ValueError: invalid literal for int() with base 10: 'abc'
```

| 용어 | 설명 |
|---|---|
| `ValueError` | 타입은 맞지만 값이 올바르지 않을 때 발생하는 오류 |

- 소수 형태의 문자열(`"3.14"`)은 `int()`로 바로 변환할 수 없으며, `int(float("3.14"))`처럼 두 단계로 변환합니다.
- 오류 메시지의 세부 표시는 Python 버전에 따라 다를 수 있습니다.
- 오류를 처리하는 방법은 [예외 처리](exception.md)에서 자세히 다룹니다.

### 변환 실패의 종류

변환 실패는 값의 형태가 맞지 않을 때와 변환할 수 없는 타입일 때로 나뉩니다.

| 상황 | 예시 | 오류 |
|---|---|---|
| 숫자 형태가 아닌 문자열 | `int("abc")`, `int("")` | `ValueError` |
| 소수 형태의 문자열을 `int()`로 변환 | `int("3.14")` | `ValueError` |
| 변환할 수 없는 타입 | `int(None)`, `int([1])` | `TypeError` |

```python
print(int("3.14"))
```

```text
Traceback (most recent call last):
  File "main.py", line 1, in <module>
    print(int("3.14"))
ValueError: invalid literal for int() with base 10: '3.14'
```

- 빈 문자열(`""`)도 숫자가 아니므로 `ValueError`가 발생합니다.
- `float()`도 같은 규칙이며, `float("abc")`는 `ValueError`, `float(None)`은 `TypeError`가 발생합니다.
- 사용자가 입력한 값은 숫자 형태가 아닐 수 있으므로 변환 전에 주의가 필요하며, [입력](input.md)에서 자세히 다룹니다.
