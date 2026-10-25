---
hide:
  - navigation
---

# 자료구조

[← Python으로 돌아가기](index.md)

!!! tip "초보자를 위한 안내"
    처음에는 여러 값을 담는 `list`와 인덱스로 값을 꺼내는 방법, 키로 값을 찾는 `dict`의 기본 사용법만 익히면 충분합니다. `tuple`, `set`, 중첩 자료구조는 이런 것이 있다는 정도만 훑어보고, 다른 문서를 학습한 뒤에 다시 읽으면 훨씬 쉽게 이해됩니다.

자료구조는 여러 값을 하나로 묶어 저장하는 방식이며, 이 문서에서는 Python의 기본 자료구조인 `list`, `tuple`, `dict`, `set`과 이들을 겹쳐 쓰는 중첩 자료구조를 다룹니다.

---

## 1. 자료구조란

변수 하나에는 값 하나만 담을 수 있으므로, 값이 여러 개일 때는 자료구조로 묶어서 관리합니다. Python은 용도에 따라 네 가지 기본 자료구조를 제공하며, 각각 괄호 모양이 다릅니다.

| 자료구조 | 표기 | 순서 | 변경 | 중복 |
|---|---|---|---|---|
| `list` | `[1, 2, 3]` | 있음 | 가능 | 허용 |
| `tuple` | `(1, 2, 3)` | 있음 | 불가 | 허용 |
| `dict` | `{"a": 1}` | 있음 | 가능 | 키는 불가 |
| `set` | `{1, 2, 3}` | 없음 | 가능 | 불가 |

```python
print(len([1, 2, 3]))
print(len((1, 2)))
print(len({"a": 1}))
print(len({1, 2, 2}))
```

```text
3
2
1
2
```

| 용어 | 설명 |
|---|---|
| 자료구조 | 여러 값을 일정한 방식으로 묶어 저장하는 구조 |
| 요소 | 자료구조 안에 들어 있는 각각의 값 |
| 가변(mutable) | 만든 뒤에 요소를 추가·수정·삭제할 수 있는 성질 |
| 불변(immutable) | 만든 뒤에 요소를 바꿀 수 없는 성질 |

- `len()`은 자료구조에 들어 있는 요소의 개수를 반환합니다.
- 모든 자료구조는 [반복문](loop.md)의 `for`로 요소를 하나씩 순회할 수 있습니다.
- 요소의 포함 여부는 [연산자](operator.md)의 멤버십 연산자(`in`)로 확인합니다.

### 어떤 자료구조를 쓸지

저장하려는 값의 성격에 따라 알맞은 자료구조를 고릅니다.

| 필요한 것 | 알맞은 자료구조 | 예시 |
|---|---|---|
| 순서대로 모아 두고 추가·수정할 값 | `list` | 장바구니 상품 목록 |
| 바뀌지 않는 값의 묶음 | `tuple` | 좌표 `(3, 4)` |
| 이름(키)으로 값을 찾을 때 | `dict` | 사용자 정보 |
| 중복 없이 모으거나 포함 여부를 확인할 때 | `set` | 방문한 페이지 목록 |

- 처음에는 대부분 `list`와 `dict`로 충분합니다.

### 빈 자료구조

요소가 없는 빈 자료구조도 만들 수 있으며, 빈 상태에서 시작해 값을 추가하는 방식으로 자주 사용합니다.

```python
a = []
b = ()
c = {}
d = set()

print(len(a), len(b), len(c), len(d))
print(type(c))
```

```text
0 0 0 0
<class 'dict'>
```

- `{}`는 빈 `set`이 아니라 빈 `dict`이므로, 빈 집합은 `set()`으로 만듭니다.
- 빈 자료구조는 [조건문](conditional.md)에서 `False`로 취급됩니다.
- 타입을 확인하는 `type()`은 [타입](type.md)에서 자세히 다룹니다.

---

## 2. list

요소를 순서대로 저장하는 가변 자료구조입니다. 대괄호(`[]`)로 만들며, 인덱스로 요소에 접근합니다.

| 형태 | 의미 |
|---|---|
| `list[i]` | `i`번째 요소를 반환합니다. 인덱스는 `0`부터 시작합니다. |
| `list[-1]` | 마지막 요소를 반환합니다. |
| `list.append(x)` | 맨 뒤에 요소를 추가합니다. |
| `list.remove(x)` | 값이 `x`인 첫 요소를 삭제합니다. |

```python
fruits = ["apple", "banana", "cherry"]

print(fruits[0])
print(fruits[-1])

fruits.append("grape")
fruits[1] = "melon"
print(fruits)
```

```text
apple
cherry
['apple', 'melon', 'cherry', 'grape']
```

| 용어 | 설명 |
|---|---|
| 인덱스 | 요소의 위치를 나타내는 번호 (`0`부터 시작) |

- 서로 다른 타입의 값도 한 리스트에 함께 담을 수 있습니다.
- 범위를 벗어난 인덱스로 접근하면 `IndexError`가 발생합니다.
- 문자열도 인덱스로 접근하는 방식이 같으며, [문자열](string.md)에서 다룹니다.

### IndexError

요소의 개수보다 큰 인덱스로 접근하면 `IndexError`가 발생합니다.

```python
fruits = ["apple", "banana", "cherry"]

print(fruits[3])
```

```text
Traceback (most recent call last):
  File "main.py", line 3, in <module>
    print(fruits[3])
IndexError: list index out of range
```

- 요소가 3개이면 유효한 인덱스는 `0`, `1`, `2`(또는 `-1`, `-2`, `-3`)입니다.
- 오류 메시지의 세부 표시는 Python 버전에 따라 다를 수 있습니다.
- 오류를 처리하는 방법은 [예외 처리](exception.md)에서 자세히 다룹니다.

### 슬라이싱

`list[start:end]`로 `start`부터 `end` 직전까지의 요소를 새 리스트로 가져옵니다.

```python
nums = [10, 20, 30, 40, 50]

print(nums[1:3])
print(nums[:2])
print(nums[2:])
print(nums[::-1])
```

```text
[20, 30]
[10, 20]
[30, 40, 50]
[50, 40, 30, 20, 10]
```

- 문자열과 같은 규칙이며, 범위를 벗어나도 오류 없이 가능한 부분만 가져옵니다.
- 슬라이싱의 규칙은 [문자열](string.md)에서 자세히 다룹니다.

### 요소 추가와 삭제

자주 쓰는 `list` 메서드는 다음과 같습니다.

| 메서드 | 반환값 | 설명 |
|---|---|---|
| `append(x)` | `None` | 맨 뒤에 `x`를 추가합니다. |
| `insert(i, x)` | `None` | `i`번 위치에 `x`를 끼워 넣습니다. |
| `pop()` | 삭제한 요소 | 맨 뒤 요소를 꺼내 삭제합니다. `pop(i)`는 `i`번 요소를 삭제합니다. |
| `remove(x)` | `None` | 값이 `x`인 첫 요소를 삭제합니다. |
| `sort()` | `None` | 요소를 오름차순으로 정렬합니다. |

```python
nums = [3, 1, 2]

nums.append(5)
nums.insert(0, 9)
print(nums)

last = nums.pop()
print(last, nums)

nums.remove(1)
nums.sort()
print(nums)
```

```text
[9, 3, 1, 2, 5]
5 [9, 3, 1, 2]
[2, 3, 9]
```

- 이 메서드들은 원본 리스트를 직접 바꾸며, 문자열 메서드처럼 새 값을 반환하지 않습니다.
- `remove(x)`는 값이 없으면 `ValueError`가 발생합니다.
- 메서드와 함수의 차이는 [함수](function.md)에서 자세히 다룹니다.

### 같은 리스트를 가리키는 경우

리스트를 다른 변수에 대입하면 복사되는 것이 아니라 같은 리스트를 함께 가리킵니다. 한쪽을 바꾸면 다른 쪽에도 반영됩니다.

```python
a = [1, 2, 3]
b = a
c = a.copy()

b.append(4)

print(a)
print(c)
```

```text
[1, 2, 3, 4]
[1, 2, 3]
```

- `b = a`는 같은 리스트에 이름을 하나 더 붙이는 것이므로 `a`도 함께 바뀝니다.
- 별도의 복사본이 필요하면 `copy()`를 사용합니다.
- 가변 값을 다룰 때의 이런 특성은 `dict`와 `set`에도 같습니다.

---

## 3. tuple

요소를 순서대로 저장하지만 만든 뒤에는 바꿀 수 없는 불변 자료구조입니다. 소괄호(`()`)로 만들며, 인덱스로 접근하는 방식은 `list`와 같습니다.

```python
point = (3, 4)

print(point[0])

x, y = point
print(x, y)
```

```text
3
3 4
```

| 용어 | 설명 |
|---|---|
| 언패킹 | 자료구조의 요소를 여러 변수에 한 번에 나누어 대입하는 것 (`x, y = point`) |

- `point[0] = 10`처럼 요소를 바꾸려 하면 `TypeError`가 발생합니다.
- 요소가 하나인 튜플은 `(1,)`처럼 쉼표를 붙여야 하며, 쉼표가 없으면 괄호로 묶은 값 `(1)`이 됩니다.
- [함수](function.md)가 여러 값을 반환하면(`return a, b`) 튜플로 묶여 반환됩니다.
- [변수](variable.md)의 다중 할당(`a, b = 1, 2`)도 같은 원리입니다.

### 바꿀 수 없는 성질

튜플의 요소를 수정하려고 하면 `TypeError`가 발생합니다.

```python
point = (3, 4)

point[0] = 10
```

```text
Traceback (most recent call last):
  File "main.py", line 3, in <module>
    point[0] = 10
TypeError: 'tuple' object does not support item assignment
```

- 값을 바꿔야 한다면 `list`를 사용하고, 바뀌면 안 되는 값은 `tuple`로 두면 실수로 수정하는 것을 막을 수 있습니다.
- 튜플은 불변이므로 `dict`의 키로 사용할 수 있습니다.

### 괄호 없이 만들기

튜플은 괄호 없이 쉼표만으로도 만들 수 있으며, 요소가 하나일 때는 쉼표가 필수입니다.

```python
a = 1, 2, 3
b = (1,)
c = (1)

print(a, type(a))
print(b, type(b))
print(c, type(c))
```

```text
(1, 2, 3) <class 'tuple'>
(1,) <class 'tuple'>
1 <class 'int'>
```

- 튜플을 만드는 것은 괄호가 아니라 쉼표입니다.
- 실수로 값 뒤에 쉼표를 붙이면 의도하지 않게 튜플이 될 수 있습니다.

---

## 4. dict

키(key)와 값(value)을 짝지어 저장하는 가변 자료구조입니다. 중괄호(`{}`)에 `키: 값` 형태로 적으며, 인덱스 대신 키로 값에 접근합니다.

| 형태 | 의미 |
|---|---|
| `dict[key]` | 키에 해당하는 값을 반환합니다. 키가 없으면 `KeyError`가 발생합니다. |
| `dict[key] = value` | 키가 있으면 값을 수정하고, 없으면 새로 추가합니다. |
| `dict.get(key)` | 키에 해당하는 값을 반환하며, 키가 없으면 `None`을 반환합니다. |

```python
user = {"name": "홍길동", "age": 25}

print(user["name"])

user["age"] = 26
user["city"] = "서울"
print(user)

print(user.get("phone"))
```

```text
홍길동
{'name': '홍길동', 'age': 26, 'city': '서울'}
None
```

| 용어 | 설명 |
|---|---|
| 키(key) | 값을 찾는 데 쓰는 이름표. 중복될 수 없고 불변 값이어야 함 |
| 값(value) | 키에 연결되어 저장된 데이터 |

- 키는 문자열, 숫자, 튜플처럼 불변 값만 사용할 수 있습니다.
- 같은 키로 값을 다시 대입하면 기존 값이 덮어써집니다.
- `for key, value in user.items():`로 키와 값을 함께 순회할 수 있습니다.
- 키워드 인수를 딕셔너리로 받는 방법은 [함수](function.md)의 가변 인수에서 다룹니다.

### KeyError

없는 키로 `dict[key]`에 접근하면 `KeyError`가 발생합니다.

```python
user = {"name": "홍길동", "age": 25}

print(user["phone"])
```

```text
Traceback (most recent call last):
  File "main.py", line 3, in <module>
    print(user["phone"])
KeyError: 'phone'
```

- 키가 있는지 확실하지 않으면 `get()`을 사용합니다.
- `get(key, 기본값)`처럼 두 번째 인수를 주면 키가 없을 때 `None` 대신 그 값을 반환합니다.
- `"phone" in user`처럼 `in`으로 키의 존재 여부를 확인할 수도 있으며, 이때 확인 대상은 값이 아니라 키입니다.
- 오류를 처리하는 방법은 [예외 처리](exception.md)에서 자세히 다룹니다.

### 삭제와 순회

`del`로 키와 값의 쌍을 삭제하고, 목적에 따라 `keys()`, `values()`, `items()`로 순회합니다.

| 메서드 | 순회 대상 |
|---|---|
| `keys()` | 키 |
| `values()` | 값 |
| `items()` | `(키, 값)` 쌍 |

```python
user = {"name": "홍길동", "age": 25, "city": "서울"}

del user["city"]

for key in user:
    print(key)

for value in user.values():
    print(value)

for key, value in user.items():
    print(key, value)
```

```text
name
age
홍길동
25
name 홍길동
age 25
```

- `for key in user:`처럼 `dict`를 그대로 순회하면 키만 꺼내집니다.
- `dict`는 값을 넣은 순서를 유지하므로 순회하면 추가한 순서대로 꺼내집니다.
- `for key, value in ...`처럼 변수 둘로 받는 것은 튜플 언패킹과 같은 원리입니다.

---

## 5. set

중복 없이 값을 저장하는 가변 자료구조입니다. 순서가 없어 인덱스로 접근할 수 없으며, 포함 여부 확인과 집합 연산에 사용합니다.

| 형태 | 의미 |
|---|---|
| `set.add(x)` | 요소를 추가합니다. 이미 있으면 변화가 없습니다. |
| `a & b` | 두 집합에 모두 있는 요소(교집합)를 반환합니다. |
| `a \| b` | 두 집합의 모든 요소(합집합)를 반환합니다. |
| `a - b` | `a`에만 있는 요소(차집합)를 반환합니다. |

```python
nums = {1, 2, 2, 3, 3}
print(nums)

nums.add(4)
print(2 in nums)

a = {1, 2, 3}
b = {2, 3, 4}
print(a & b)
print(a | b)
print(a - b)
```

```text
{1, 2, 3}
True
{2, 3}
{1, 2, 3, 4}
{1}
```

| 용어 | 설명 |
|---|---|
| 집합 | 중복 없이 요소를 모아 놓은 것 |
| 교집합 | 두 집합에 공통으로 들어 있는 요소 |
| 합집합 | 두 집합의 요소를 모두 합친 것 |
| 차집합 | 한 집합에서 다른 집합의 요소를 뺀 것 |

- 중복된 값은 자동으로 하나만 남으므로, 리스트의 중복을 제거할 때 `set()`으로 변환해 활용합니다.
- 빈 집합은 `{}`가 아니라 `set()`으로 만듭니다. `{}`는 빈 `dict`입니다.
- 순서가 없으므로 출력되는 요소의 순서를 기대하면 안 됩니다.

### 중복 제거

`set()`에 리스트를 넘기면 중복이 사라진 집합이 만들어집니다.

```python
names = ["kim", "lee", "kim", "park", "lee"]

unique = set(names)

print(len(names), len(unique))
print(sorted(unique))
```

```text
5 3
['kim', 'lee', 'park']
```

- 집합은 순서가 없으므로 `sorted()`로 정렬한 리스트를 만들어 출력했습니다.
- `set(names)`는 원본 `names`를 바꾸지 않고 새 집합을 만듭니다.

### 요소 삭제

`remove(x)`와 `discard(x)`는 요소를 삭제하며, 없는 요소를 삭제할 때의 동작이 다릅니다.

| 메서드 | 요소가 있을 때 | 요소가 없을 때 |
|---|---|---|
| `remove(x)` | 삭제합니다. | `KeyError`가 발생합니다. |
| `discard(x)` | 삭제합니다. | 아무 일도 하지 않습니다. |

```python
nums = {1, 2, 3}

nums.discard(5)
nums.remove(1)
print(nums)

nums.remove(5)
```

```text
{2, 3}
Traceback (most recent call last):
  File "main.py", line 7, in <module>
    nums.remove(5)
KeyError: 5
```

- 있는지 확실하지 않은 요소를 삭제할 때는 `discard()`가 안전합니다.
- 인덱스가 없으므로 `nums[0]`처럼 위치로 접근하면 `TypeError`가 발생합니다.

---

## 6. 중첩 자료구조

자료구조의 요소로 다른 자료구조를 넣을 수 있습니다. 가장 흔한 형태는 사용자 여러 명을 `dict`로 표현하고 이를 `list`로 묶는 것입니다.

```python
users = [
    {"name": "홍길동", "age": 25},
    {"name": "김철수", "age": 30},
]

print(users[0]["name"])
print(users[1]["age"])

users[0]["age"] = 26
users.append({"name": "이영희", "age": 22})

for user in users:
    print(user["name"], user["age"])
```

```text
홍길동
30
홍길동 26
김철수 30
이영희 22
```

| 용어 | 설명 |
|---|---|
| 중첩 | 자료구조 안에 다른 자료구조가 들어 있는 것 |

- `users[0]["name"]`은 먼저 `users[0]`으로 첫 번째 `dict`를 꺼낸 뒤, 그 안에서 `"name"` 키로 값을 꺼냅니다.
- 바깥은 순서가 필요한 `list`, 안쪽은 이름으로 값을 찾는 `dict`로 구성하는 형태가 자주 쓰입니다.
- 중첩이 깊어질수록 접근식이 길어지므로, 한 단계씩 변수에 꺼내 두면 읽기 쉽습니다.
