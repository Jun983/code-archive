---
hide:
  - navigation
---

# 반복문

[← Python으로 돌아가기](index.md)

조건이 만족되는 동안 코드 블록을 반복 실행합니다.

---

## 1. for

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

## 2. while

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

## 3. break와 continue

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
