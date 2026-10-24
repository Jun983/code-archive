---
hide:
  - navigation
---

# 형변환

[← Python으로 돌아가기](index.md)

형변환은 하나의 타입을 다른 타입으로 변환하는 것입니다. `int()`, `float()`, `str()` 등 내장 함수로 명시적으로 변환합니다.

| 함수 | 설명 |
|------|------|
| `int(x)` | `x`를 정수로 변환합니다. |
| `float(x)` | `x`를 실수로 변환합니다. |
| `str(x)` | `x`를 문자열로 변환합니다. |

```python
text = "100"
number = int(text)          # str -> int
pi_text = str(3.14)         # float -> str
whole = int(9.99)           # float -> int, 소수점 버림

print(number, type(number))      # 100 <class 'int'>
print(pi_text, type(pi_text))    # 3.14 <class 'str'>
print(whole)                     # 9
```

```
100 <class 'int'>
3.14 <class 'str'>
9
```

> 숫자로 변환할 수 없는 문자열(`int("abc")`)을 변환하려 하면 실행 중 오류가 발생합니다.
