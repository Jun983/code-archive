---
hide:
  - navigation
---

# 기본 문법

[← Python으로 돌아가기](index.md)

## 1. 프로그램 구조

Python은 클래스나 `main` 함수 없이, 파일에 작성한 코드가 위에서부터 순서대로 바로 실행됩니다.

| 용어 | 설명 |
|------|------|
| 인터프리터(interpreter) | 코드를 한 줄씩 읽어 즉시 실행하는 프로그램. Python은 컴파일 없이 인터프리터가 직접 실행합니다. |
| 스크립트(script) | `.py` 확장자로 저장된 Python 코드 파일. |

```python
# hello.py
print("Hello, World!")  # 파일을 저장하고 바로 실행합니다
```

```
Hello, World!
```

!!! info "참고"
    함수로 코드를 묶고 재사용하는 방법은 [함수](function.md)를 참고하세요.

---

## 2. 출력

`print()`는 값을 화면에 출력하는 내장 함수입니다.

### 2.1 print

`print()`는 기본적으로 출력 후 줄 바꿈을 추가합니다. 여러 값을 쉼표로 나열하면 공백으로 구분해 출력합니다.

```python
print("Hello, World!")       # 출력 후 줄 바꿈

print("Hello", end="")       # end="": 줄 바꿈 없이 출력
print(", World!")            # 앞 줄과 이어짐

print(42)                    # 정수, 실수, 논리값도 출력 가능
print(3.14)
print(True)

print("이름:", "지수", "나이:", 25)  # 쉼표로 나열하면 공백으로 구분
```

```
Hello, World!
Hello, World!
42
3.14
True
이름: 지수 나이: 25
```

---

## 3. 타입

Python은 변수 선언 시 타입을 명시하지 않는 **동적 타입** 언어입니다. 값이 대입되는 순간 타입이 결정됩니다.

### 3.1 기본 타입

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

### 3.2 동적 타입

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

---

## 4. 변수

변수는 값을 가리키는 이름입니다. 별도의 타입 키워드 없이 `이름 = 값` 형태로 선언과 동시에 초기화합니다.

### 4.1 선언과 초기화

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

### 4.2 다중 할당

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

### 4.3 변수의 명명 규칙

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

---

## 5. 문자열

문자열은 작은따옴표(`'`) 또는 큰따옴표(`"`)로 감싸 표현합니다.

### 5.1 선언

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

### 5.2 주요 메서드

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

### 5.3 f-string

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

---

## 6. 형변환

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

---

## 7. 연산자

연산자는 값을 계산하거나 비교·조합할 때 사용하는 기호입니다.

### 7.1 산술 연산자

| 연산자 | 의미 |
|--------|------|
| `+` | 왼쪽 값과 오른쪽 값을 더한 값을 반환합니다. |
| `-` | 왼쪽 값에서 오른쪽 값을 뺀 값을 반환합니다. |
| `*` | 왼쪽 값과 오른쪽 값을 곱한 값을 반환합니다. |
| `/` | 왼쪽 값을 오른쪽 값으로 나눈 값을 `float`로 반환합니다. |
| `//` | 나눗셈의 몫을 정수로 반환합니다(버림 나눗셈). |
| `%` | 나눗셈의 나머지를 반환합니다. |
| `**` | 거듭제곱 값을 반환합니다. |

```python
a = 10
b = 3

print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.3333333333333335
print(a // b)  # 3
print(a % b)   # 1
print(a ** b)  # 1000
```

```
13
7
30
3.3333333333333335
3
1
1000
```

> Java와 달리 `/`는 정수끼리 나눠도 항상 `float`를 반환합니다. 정수 몫이 필요하면 `//`를 사용합니다.

### 7.2 대입 연산자

변수에 값을 할당합니다.

| 연산자 | 의미 |
|--------|------|
| `=` | 오른쪽 값을 왼쪽 변수에 할당합니다. |
| `+=` | 변수에 오른쪽 값을 더한 뒤 할당합니다. |
| `-=` | 변수에서 오른쪽 값을 뺀 뒤 할당합니다. |
| `*=` | 변수에 오른쪽 값을 곱한 뒤 할당합니다. |
| `/=` | 변수를 오른쪽 값으로 나눈 뒤 할당합니다. |
| `//=` | 변수를 오른쪽 값으로 나눈 몫을 할당합니다. |
| `%=` | 변수를 오른쪽 값으로 나눈 나머지를 할당합니다. |

```python
count = 10

count += 5
print(count)   # 15

count -= 3
print(count)   # 12

count *= 2
print(count)   # 24

count //= 5
print(count)   # 4
```

```
15
12
24
4
```

### 7.3 비교 연산자

두 값을 비교해 `bool`을 반환합니다.

| 연산자 | 의미 |
|--------|------|
| `==` | 두 값이 같으면 `True`를 반환합니다. |
| `!=` | 두 값이 다르면 `True`를 반환합니다. |
| `<` | 왼쪽 값이 오른쪽 값보다 작으면 `True`를 반환합니다. |
| `>` | 왼쪽 값이 오른쪽 값보다 크면 `True`를 반환합니다. |
| `<=` | 왼쪽 값이 오른쪽 값보다 작거나 같으면 `True`를 반환합니다. |
| `>=` | 왼쪽 값이 오른쪽 값보다 크거나 같으면 `True`를 반환합니다. |

```python
a = 10
b = 3

print(a == b)  # False
print(a != b)  # True
print(a < b)   # False
print(a > b)   # True
```

```
False
True
False
True
```

> 문자열도 `==`로 값(내용) 비교가 바로 됩니다. Java의 `equals()`와 달리 별도 메서드가 필요 없습니다.

### 7.4 논리 연산자

두 `bool` 값을 조합해 하나의 `bool`을 반환합니다.

| 연산자 | 의미 |
|--------|------|
| `and` | 두 값이 모두 `True`이면 `True`를 반환합니다. |
| `or` | 두 값 중 하나라도 `True`이면 `True`를 반환합니다. |
| `not` | `True`는 `False`로, `False`는 `True`로 반환합니다. |

```python
a = True
b = False

print(a and b)  # False
print(a or b)   # True
print(not a)    # False
```

```
False
True
False
```

### 7.5 멤버십 연산자

값이 시퀀스(문자열, 리스트 등)에 포함되어 있는지 확인합니다.

| 연산자 | 의미 |
|--------|------|
| `in` | 왼쪽 값이 오른쪽 대상에 포함되면 `True`를 반환합니다. |
| `not in` | 왼쪽 값이 오른쪽 대상에 포함되지 않으면 `True`를 반환합니다. |

```python
word = "Hello"
numbers = [1, 2, 3]

print("H" in word)      # True
print(5 in numbers)     # False
print(5 not in numbers) # True
```

```
True
False
True
```

!!! info "참고"
    리스트를 비롯한 자료구조는 [자료구조](data-structures.md)를 참고하세요.

### 7.6 삼항 표현식

조건에 따라 두 값 중 하나를 반환합니다. Java의 삼항 연산자(`? :`)와 달리 `if`/`else`를 값 사이에 씁니다.

| 형태 | 의미 |
|------|------|
| `A if 조건 else B` | 조건이 `True`이면 `A`, `False`이면 `B`를 반환합니다. |

```python
score = 75
result = "합격" if score >= 60 else "불합격"
print(result)
```

```
합격
```

---

## 8. 조건문

조건식의 결과에 따라 실행할 코드 블록을 선택합니다. Python은 중괄호(`{}`) 대신 **들여쓰기**로 블록을 구분합니다.

### 8.1 if / elif / else

조건이 `True`인 블록을 순서대로 찾아 실행하고, 나머지는 건너뜁니다.

| 형태 | 의미 |
|------|------|
| `if 조건:` | 조건이 `True`이면 블록을 실행합니다. |
| `elif 조건:` | 위 조건이 `False`이고 이 조건이 `True`이면 실행합니다. |
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

```
C
```

!!! tip "들여쓰기"
    블록에 속한 코드는 같은 수의 공백(보통 4칸)으로 들여씁니다. 들여쓰기가 어긋나면 실행 중 오류가 발생합니다.

### 8.2 match

하나의 값을 여러 패턴과 비교하여 일치하는 블록을 실행합니다. Java의 `switch`에 대응합니다.

| 형태 | 의미 |
|------|------|
| `case 값:` | 값이 일치하면 이 블록을 실행합니다. |
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

```
수요일
```

> Java의 `switch`와 달리 `break`가 필요 없습니다. 일치한 `case` 블록만 실행되고 자동으로 빠져나옵니다.

---

## 9. 반복문

조건이 만족되는 동안 코드 블록을 반복 실행합니다.

### 9.1 for

Python의 `for`는 시퀀스(문자열, 리스트, `range()` 등)의 원소를 순서대로 꺼내는 방식입니다. Java처럼 초기화·조건·증감식을 직접 쓰지 않습니다.

| 형태 | 의미 |
|------|------|
| `for i in range(n):` | `0`부터 `n - 1`까지 순회합니다. |
| `for i in range(start, end):` | `start`부터 `end - 1`까지 순회합니다. |

```python
for i in range(5):
    print(i)
```

```
0
1
2
3
4
```

### 9.2 while

조건이 `True`인 동안 반복합니다. 반복 횟수를 사전에 알 수 없을 때 사용합니다.

| 구성 요소 | 의미 |
|-----------|------|
| 조건 | 매 반복 전에 확인하며, `False`가 되면 반복을 멈춥니다. (예: `count < 3`) |

```python
count = 0
while count < 3:
    print(count)
    count += 1
```

```
0
1
2
```

### 9.3 break와 continue

반복문 실행 중 흐름을 제어합니다.

| 키워드 | 동작 |
|--------|------|
| `break` | 반복문 전체를 즉시 종료합니다. |
| `continue` | 이번 반복의 남은 코드를 건너뛰고 다음 반복으로 이동합니다. |

**break 예시** — `i`가 3이 되는 순간 반복문을 종료합니다.

```python
for i in range(5):
    if i == 3:
        break
    print(i)
```

```
0
1
2
```

**continue 예시** — `i`가 3일 때만 건너뛰고 나머지는 출력합니다.

```python
for i in range(5):
    if i == 3:
        continue
    print(i)
```

```
0
1
2
4
```

---

## 10. 입력

키보드로 입력받으려면 내장 함수 `input()`을 사용합니다.

### 10.1 사용

`input()`은 프롬프트 문자열을 출력하고, 사용자가 입력한 값을 항상 `str` 타입으로 반환합니다.

```python
name = input("이름 입력: ")
print(f"안녕, {name}")
```

```
이름 입력: 홍길동
안녕, 홍길동
```

### 10.2 숫자 입력

숫자가 필요하면 `int()`나 `float()`로 반환값을 변환합니다.

```python
age = int(input("나이 입력: "))
print(f"내년이면 {age + 1}살")
```

```
나이 입력: 25
내년이면 26살
```

!!! info "참고"
    형변환에 대한 자세한 내용은 [6. 형변환](#6-형변환)을 참고하세요.
