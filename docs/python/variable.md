---
hide:
  - navigation
---

# 변수

[← Python으로 돌아가기](index.md)

변수는 값을 가리키는 이름입니다. 별도의 타입 키워드 없이 `이름 = 값` 형태로 선언과 동시에 초기화합니다.

---

## 1. 선언과 초기화

```python
age = 30                 # 선언과 동시에 초기화
count = 0
price = 3.14159
name = "홍길동"
is_valid = True

print(age)        # 30
print(count)      # 0
print(price)      # 3.14159
print(name)       # 홍길동
print(is_valid)   # True
```

```
30
0
3.14159
홍길동
True
```

코드에 직접 쓴 값(예: `30`, `3.14159`, `"홍길동"`)을 **리터럴**이라고 합니다.

## 2. 다중 할당

한 줄에서 여러 변수를 동시에 선언하거나, 값을 서로 교환할 수 있습니다.

```python
x, y, z = 1, 2, 3
print(x, y, z)   # 1 2 3

x, y = y, x      # 값 교환
print(x, y)      # 2 1
```

```
1 2 3
2 1
```

## 3. 변수의 명명 규칙

변수명은 **snake_case**로 작성합니다. 모든 글자를 소문자로 쓰고, 단어 사이는 언더스코어(`_`)로 구분합니다.

```python
max_retry_count = 3
is_active = True

print(max_retry_count)
print(is_active)
```

```
3
True
```

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
