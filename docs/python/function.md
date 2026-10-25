---
hide:
  - navigation
---

# 함수

[← Python으로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 `def`로 함수를 만들고 호출하는 방법, 매개변수로 값을 넘기는 방법, `return`으로 결과를 돌려받는 방법만 익히면 충분합니다. 기본값, 가변 인수, 변수의 범위는 이런 것이 있다는 정도만 훑어보고, 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

함수는 자주 쓰는 코드를 이름을 붙여 묶어 둔 것이며, 이 문서에서는 함수의 정의와 호출, 매개변수와 인수, 반환값, 기본값, 가변 인수, 변수의 범위를 다룹니다.

---

## 1. 함수란

같은 코드를 여러 곳에서 써야 할 때 매번 복사하는 대신, 함수로 한 번 정의해 두고 이름으로 호출할 수 있습니다. 함수는 `def` 키워드로 정의하며, [조건문](conditional.md)·[반복문](loop.md)처럼 들여쓰기로 함수의 본문을 구분합니다.

```python
def greet():
    print("안녕하세요")

greet()
greet()
```

```text
안녕하세요
안녕하세요
```

| 용어 | 설명 |
|---|---|
| 함수 | 이름을 붙여 묶어 둔 재사용 가능한 코드 묶음 |
| 정의 | `def`로 함수를 만드는 것 (정의만으로는 본문이 실행되지 않음) |
| 호출 | 함수 이름 뒤에 괄호를 붙여 본문을 실행하는 것 |

- 함수는 호출될 때마다 본문을 처음부터 실행합니다.
- 함수는 호출하기 전에 정의되어 있어야 합니다.
- `print()`, `input()`처럼 Python이 미리 만들어 둔 함수를 내장 함수라고 합니다.

### 정의와 호출

`def`로 정의만 하면 아무 일도 일어나지 않고, 호출해야 본문이 실행됩니다. 이름 뒤에 괄호를 붙이지 않으면 호출이 아니라 함수 자체를 가리킬 뿐입니다.

```python
def greet():
    print("안녕하세요")

print("정의 후")
greet
print("괄호 없이 이름만 쓴 뒤")
greet()
```

```text
정의 후
괄호 없이 이름만 쓴 뒤
안녕하세요
```

- `greet`처럼 괄호 없이 이름만 쓴 줄은 오류도 출력도 없이 지나가므로, 실행되지 않는다면 괄호를 빠뜨렸는지 확인합니다.

### 정의 전에 호출한 경우

함수는 정의가 실행된 뒤에야 사용할 수 있으므로, 정의보다 먼저 호출하면 `NameError`가 발생합니다.

```python
greet()

def greet():
    print("안녕하세요")
```

```text
Traceback (most recent call last):
  File "main.py", line 1, in <module>
    greet()
NameError: name 'greet' is not defined
```

- 오류 메시지의 세부 표시는 Python 버전에 따라 다를 수 있습니다.
- 파일 전체가 위에서 아래로 실행되는 순서는 [프로그램 구조](program-structure.md)에서 자세히 다룹니다.

### 함수와 메서드

메서드는 특정 값에 속한 함수이며, `값.메서드명()` 형태로 호출합니다. 함수는 `len(text)`처럼 값을 인수로 넘기고, 메서드는 `text.upper()`처럼 값에 점(`.`)을 붙여 호출합니다.

```python
text = "python"

print(len(text))
print(text.upper())
```

```text
6
PYTHON
```

| 구분 | 호출 형태 | 예시 |
|---|---|---|
| 함수 | `함수명(값)` | `len(text)` |
| 메서드 | `값.메서드명()` | `text.upper()` |

- 메서드는 `def`로 정의한 함수와 같은 원리이며, 클래스 안에 정의하는 방법은 [클래스와 객체](class-object.md)에서 자세히 다룹니다.
- 문자열 메서드의 종류는 [문자열](string.md)에서 자세히 다룹니다.

---

## 2. 매개변수와 인수

함수에 값을 전달하면 같은 코드로 다른 결과를 만들 수 있습니다. 정의할 때 괄호 안에 적는 변수가 매개변수이고, 호출할 때 넘기는 값이 인수입니다.

| 전달 방식 | 의미 |
|---|---|
| 위치 인수 | 매개변수 순서대로 값을 전달합니다. (`add(3, 5)`) |
| 키워드 인수 | `이름=값` 형태로 매개변수를 지정해 전달합니다. (`add(b=5, a=3)`) |

```python
def add(a, b):
    print(a + b)

add(3, 5)
add(b=5, a=3)
```

```text
8
8
```

| 용어 | 설명 |
|---|---|
| 매개변수 | 함수를 정의할 때 값을 받기 위해 적는 변수 (`a`, `b`) |
| 인수 | 함수를 호출할 때 실제로 넘기는 값 (`3`, `5`) |

- 위치 인수는 순서가 중요하지만, 키워드 인수는 순서와 관계없이 이름으로 짝지어집니다.
- 위치 인수와 키워드 인수를 섞을 때는 위치 인수를 먼저 써야 합니다.
- 인수의 개수가 맞지 않으면 `TypeError`가 발생합니다.

### 순서가 결과를 바꾸는 경우

위치 인수는 순서대로 짝지어지므로, 순서를 바꾸면 결과도 달라집니다.

```python
def subtract(a, b):
    print(a - b)

subtract(10, 3)
subtract(3, 10)
subtract(b=3, a=10)
```

```text
7
-7
7
```

- 매개변수가 많을수록 위치 인수는 어떤 값인지 알아보기 어려우므로, 키워드 인수로 이름을 함께 적으면 읽기 쉽습니다.

### 인수 개수가 맞지 않는 경우

매개변수보다 인수가 적거나 많으면 `TypeError`가 발생합니다.

```python
def add(a, b):
    print(a + b)

add(3)
```

```text
Traceback (most recent call last):
  File "main.py", line 4, in <module>
    add(3)
TypeError: add() missing 1 required positional argument: 'b'
```

- 인수가 더 많을 때도 `add() takes 2 positional arguments but 3 were given`처럼 `TypeError`가 발생합니다.
- 매개변수에 맞지 않는 개수를 쓸 수 있게 하려면 아래의 기본값이나 가변 인수를 사용합니다.

---

## 3. 반환값

함수는 `return`으로 계산 결과를 호출한 곳에 돌려줄 수 있습니다. 돌려받은 값은 변수에 저장하거나 다른 식에서 사용할 수 있습니다.

```python
def add(a, b):
    return a + b

result = add(3, 5)
print(result)
print(add(1, 2) * 10)
```

```text
8
30
```

| 용어 | 설명 |
|---|---|
| 반환값 | `return`으로 호출한 곳에 돌려주는 값 |

- `return`을 만나면 함수가 즉시 종료되며, 그 아래 코드는 실행되지 않습니다.
- `return`이 없거나 값 없이 `return`만 쓰면 `None`이 반환됩니다.
- 쉼표로 여러 값을 반환하면(`return a, b`) 하나의 튜플로 묶여 반환되며, 튜플은 [자료구조](data-structures.md)에서 다룹니다.
- `print()`는 화면에 출력할 뿐 값을 돌려주지 않으므로, 결과를 다시 사용하려면 `return`을 사용합니다.

### print와 return의 차이

`print()`로 출력만 하는 함수는 값을 돌려주지 않으므로, 결과를 변수에 받으면 `None`이 들어 있습니다.

```python
def add_print(a, b):
    print(a + b)

def add_return(a, b):
    return a + b

x = add_print(3, 5)
y = add_return(3, 5)

print(x)
print(y)
```

```text
8
None
8
```

- 첫 번째 `8`은 `add_print(3, 5)`가 실행되며 출력한 것이고, 그 아래 `None`이 `x`의 값입니다.
- 계산 결과를 이어서 사용할 함수는 출력하지 않고 `return`으로 돌려주는 편이 재사용하기 좋습니다.
- `None`은 [타입](type.md)에서 자세히 다룹니다.

### 여러 값 반환

쉼표로 값을 나열해 반환하면 호출하는 쪽에서 여러 변수로 나누어 받을 수 있습니다.

```python
def min_max(numbers):
    return min(numbers), max(numbers)

low, high = min_max([3, 1, 4, 1, 5])

print(low, high)
print(min_max([3, 1, 4]))
```

```text
1 5
(1, 4)
```

- 변수 하나로 받으면 두 값이 `(1, 4)`처럼 튜플로 묶여 있습니다.
- 여러 변수에 나누어 받는 방법은 [변수](variable.md)에서 자세히 다룹니다.

### return으로 함수 일찍 끝내기

조건에 맞으면 `return`으로 바로 끝내, 아래 코드를 실행하지 않을 수 있습니다.

```python
def check_age(age):
    if age < 0:
        return "잘못된 나이"
    return "정상"

print(check_age(-1))
print(check_age(20))
```

```text
잘못된 나이
정상
```

- 첫 번째 호출은 첫 `return`에서 끝나므로 마지막 줄은 실행되지 않습니다.
- `if`는 [조건문](conditional.md)에서 자세히 다룹니다.

---

## 4. 기본값

매개변수에 기본값을 지정하면 호출할 때 해당 인수를 생략할 수 있습니다. 인수를 넘기면 넘긴 값이 기본값 대신 사용됩니다.

```python
def greet(name, greeting="안녕하세요"):
    print(f"{greeting}, {name}")

greet("홍길동")
greet("홍길동", "반갑습니다")
greet("홍길동", greeting="어서 오세요")
```

```text
안녕하세요, 홍길동
반갑습니다, 홍길동
어서 오세요, 홍길동
```

| 용어 | 설명 |
|---|---|
| 기본값 | 인수가 전달되지 않았을 때 매개변수가 가지는 값 |

- 기본값이 있는 매개변수는 기본값이 없는 매개변수보다 뒤에 와야 합니다.
- 기본값에 리스트처럼 변경 가능한 값(`[]`)을 쓰면 호출 간에 공유되어 의도치 않게 값이 쌓이므로 피해야 합니다.

### 기본값의 순서 규칙

기본값이 있는 매개변수 뒤에 기본값이 없는 매개변수를 두면 함수를 정의하는 시점에 `SyntaxError`가 발생합니다.

```python
def greet(greeting="안녕하세요", name):
    print(f"{greeting}, {name}")
```

```text
  File "main.py", line 1
    def greet(greeting="안녕하세요", name):
                                     ^^^^
SyntaxError: parameter without a default follows parameter with a default
```

- `name`처럼 반드시 받아야 하는 매개변수를 앞에 두고, 기본값이 있는 매개변수를 뒤에 둡니다.
- 오류 메시지의 세부 표시는 Python 버전에 따라 다를 수 있습니다.

### 변경 가능한 기본값의 문제

기본값은 함수를 정의할 때 한 번만 만들어지므로, 리스트를 기본값으로 쓰면 호출 간에 같은 리스트를 계속 사용합니다.

```python
def add_item(item, items=[]):
    items.append(item)
    return items

print(add_item("a"))
print(add_item("b"))
```

```text
['a']
['a', 'b']
```

- 두 번째 호출은 새 리스트가 아니라 첫 번째 호출에서 쓴 리스트에 이어 붙입니다.
- 기본값을 `None`으로 두고 함수 안에서 새 리스트를 만들면 이 문제를 피할 수 있습니다.

```python
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item("a"))
print(add_item("b"))
```

```text
['a']
['b']
```

- `list`는 [자료구조](data-structures.md)에서, `is None` 비교는 [조건문](conditional.md)에서 자세히 다룹니다.

---

## 5. 가변 인수

인수의 개수를 미리 정할 수 없을 때는 매개변수 앞에 `*` 또는 `**`를 붙여 개수에 관계없이 받을 수 있습니다.

| 형태 | 의미 |
|---|---|
| `*args` | 나머지 위치 인수를 모두 튜플로 받습니다. |
| `**kwargs` | 나머지 키워드 인수를 모두 딕셔너리로 받습니다. |

```python
def total(*args):
    return sum(args)

def show(**kwargs):
    for key, value in kwargs.items():
        print(key, value)

print(total(1, 2, 3, 4))
show(name="홍길동", age=25)
```

```text
10
name 홍길동
age 25
```

| 용어 | 설명 |
|---|---|
| 가변 인수 | 개수가 정해지지 않은 인수 |
| `args` / `kwargs` | 가변 인수를 받는 매개변수의 관례적인 이름 (arguments, keyword arguments) |

- `*`와 `**`가 문법이고 `args`, `kwargs`는 관례적인 이름이므로 다른 이름을 써도 됩니다.
- 일반 매개변수, `*args`, `**kwargs` 순서로 써야 합니다.
- 딕셔너리는 [자료구조](data-structures.md)에서 다룹니다.

### 받은 값의 형태

`*args`는 튜플, `**kwargs`는 딕셔너리로 전달되므로, 인수를 넘기지 않으면 빈 튜플과 빈 딕셔너리가 됩니다.

```python
def info(*args, **kwargs):
    print(args)
    print(kwargs)

info(1, 2, name="홍길동")
info()
```

```text
(1, 2)
{'name': '홍길동'}
()
{}
```

- 반복문으로 `args`의 값을 하나씩 꺼내 사용할 수 있으며, 반복문은 [반복문](loop.md)에서 자세히 다룹니다.

### 일반 매개변수와 함께 쓰기

고정된 매개변수를 먼저 받고, 나머지를 가변 인수로 받을 수 있습니다.

```python
def print_all(title, *items):
    print(title)
    for item in items:
        print("-", item)

print_all("과일", "사과", "배", "포도")
```

```text
과일
- 사과
- 배
- 포도
```

- 첫 번째 인수는 `title`에 대입되고, 나머지 인수는 모두 `items`에 튜플로 묶입니다.

### 호출할 때 풀어서 넘기기

호출하는 쪽에서 리스트나 딕셔너리 앞에 `*`, `**`를 붙이면 요소를 하나씩 풀어 인수로 넘깁니다.

```python
def add(a, b):
    return a + b

numbers = [3, 5]
values = {"a": 1, "b": 2}

print(add(*numbers))
print(add(**values))
```

```text
8
3
```

- `add(*numbers)`는 `add(3, 5)`와 같고, `add(**values)`는 `add(a=1, b=2)`와 같습니다.
- 정의할 때의 `*`는 모아서 받는 것이고, 호출할 때의 `*`는 풀어서 넘기는 것입니다.

---

## 6. 변수의 범위

함수 안에서 만든 변수는 그 함수 안에서만 사용할 수 있습니다. 매개변수도 함수 안에서만 존재합니다.

```python
def calc():
    result = 10
    print(result)

calc()
print(result)
```

```text
10
Traceback (most recent call last):
  File "main.py", line 6, in <module>
    print(result)
NameError: name 'result' is not defined
```

| 용어 | 설명 |
|---|---|
| 지역 변수 | 함수 안에서 만들어져 그 함수 안에서만 사용할 수 있는 변수 |
| 전역 변수 | 함수 밖에서 만들어져 파일 어디에서나 읽을 수 있는 변수 |

- 함수 안의 변수는 함수가 끝나면 사라지므로, 값을 밖에서 쓰려면 `return`으로 돌려받습니다.
- 오류 메시지의 세부 표시는 Python 버전에 따라 다를 수 있습니다.

### 전역 변수와 같은 이름

함수 안에서 전역 변수와 같은 이름에 대입하면 값을 바꾸는 것이 아니라 새로운 지역 변수가 만들어집니다.

```python
count = 0

def increase():
    count = 100
    print("함수 안:", count)

increase()
print("함수 밖:", count)
```

```text
함수 안: 100
함수 밖: 0
```

- 함수 안에서도 전역 변수의 값을 읽는 것은 가능합니다.
- 함수 밖의 값을 함수 안에서 바꾸고 싶다면 `return`으로 새 값을 돌려받아 대입하는 방식이 가장 명확합니다.
- 변수에 값을 대입하는 방법은 [변수](variable.md)에서 자세히 다룹니다.
