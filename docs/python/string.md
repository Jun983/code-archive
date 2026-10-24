---
hide:
  - navigation
---

# 문자열

[← Python으로 돌아가기](index.md)

문자열은 작은따옴표(`'`) 또는 큰따옴표(`"`)로 감싸 표현합니다.

---

## 1. 선언

```python
name = "홍길동"
greeting = '안녕하세요'
empty = ""       # 빈 문자열
multiline = """여러 줄
문자열"""         # 삼중따옴표: 줄 바꿈 포함 가능

print(name)       # 홍길동
print(greeting)   # 안녕하세요
print(multiline)
```

```
홍길동
안녕하세요
여러 줄
문자열
```

## 2. 주요 메서드

문자열은 값을 다루는 메서드를 제공합니다. `변수명.메서드명()` 형태로 호출합니다.

!!! info "참고"
    지금은 호출 형태만 익히고, 메서드에 대한 자세한 내용은 [함수](function.md)를 참고하세요.

| 메서드 | 반환 타입 | 설명 |
|--------|-----------|------|
| `len(s)` | `int` | 문자열 길이를 반환합니다. (내장 함수) |
| `s[index]` | `str` | 특정 위치의 문자를 반환합니다. 인덱스는 0부터 시작합니다. |
| `s[start:end]` | `str` | `start`부터 `end` 직전까지의 부분 문자열을 반환합니다. |
| `upper()` | `str` | 모든 문자를 대문자로 변환합니다. |
| `lower()` | `str` | 모든 문자를 소문자로 변환합니다. |
| `strip()` | `str` | 문자열 양 끝의 공백을 제거합니다. |
| `split(sep)` | `list` | 구분자를 기준으로 문자열을 나눕니다. |

```python
word = "Hello"

print(len(word))         # 5
print(word[0])           # H
print(word[1:3])         # el
print(word.upper())      # HELLO
print(word.lower())      # hello
print("  hi  ".strip())  # hi
print("a,b,c".split(",")) # ['a', 'b', 'c']
```

```
5
H
el
HELLO
hello
hi
['a', 'b', 'c']
```

## 3. f-string

`f""` 접두사를 붙이면 문자열 안에 `{}`로 변수나 표현식을 바로 삽입할 수 있습니다.

```python
name = "지수"
age = 25

print(f"{name}님은 {age}살입니다.")
print(f"내년이면 {age + 1}살")
```

```
지수님은 25살입니다.
내년이면 26살
```
