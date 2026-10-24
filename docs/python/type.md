---
hide:
  - navigation
---

# 타입

[← Python으로 돌아가기](index.md)

Python은 변수 선언 시 타입을 명시하지 않는 **동적 타입** 언어입니다. 값이 대입되는 순간 타입이 결정됩니다.

---

## 1. 기본 타입

| 타입 | 종류 | 예시 |
|------|------|------|
| `int` | 정수 | `10`, `-3` |
| `float` | 실수 | `3.14`, `-0.5` |
| `str` | 문자열 | `"hello"`, `'안녕'` |
| `bool` | 논리 | `True`, `False` |
| `NoneType` | 값 없음 | `None` |

```python
number = 10
pi = 3.14
name = "지수"
is_active = True
nothing = None

print(type(number))     # <class 'int'>
print(type(pi))         # <class 'float'>
print(type(name))       # <class 'str'>
print(type(is_active))  # <class 'bool'>
print(type(nothing))    # <class 'NoneType'>
```

```
<class 'int'>
<class 'float'>
<class 'str'>
<class 'bool'>
<class 'NoneType'>
```

> `type()`은 값의 타입을 확인하는 내장 함수입니다.

## 2. 동적 타입

같은 변수에 다른 타입의 값을 다시 대입할 수 있습니다. Java의 `int`, `String`처럼 타입이 변수에 고정되는 것이 아니라, 값 자체가 타입 정보를 가집니다.

```python
value = 10        # int
print(type(value))

value = "문자열"   # 같은 변수에 다른 타입 재할당
print(type(value))
```

```
<class 'int'>
<class 'str'>
```
