---
hide:
  - navigation
---

# 타입

[← Python으로 돌아가기](index.md)

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
| `list` | 순서가 있는 값의 모음 | `[1, 2, 3]` |
| `dict` | 키와 값의 쌍으로 이루어진 모음 | `{"name": "지수"}` |

- `int`는 크기 제한 없이 큰 정수를 표현할 수 있습니다.
- `bool`은 `True`와 `False` 두 값만 가지며, 첫 글자를 대문자로 써야 합니다.
- `None`은 "값이 없음"을 나타내는 값이며, `NoneType`의 유일한 값입니다.
- `str`은 따옴표로 감싼 문자의 나열이며, 자세한 내용은 [문자열](string.md)에서 다룹니다.
- `list`와 `dict`는 여러 값을 묶어 다루는 타입이며, [자료구조](data-structures.md)에서 다룹니다.

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

출력의 `class`는 Python의 타입이 곧 클래스라는 뜻입니다. 클래스는 [클래스와 객체](class-object.md)에서 다룹니다.
