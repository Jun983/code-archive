---
hide:
  - navigation
---

# 조건문

[← Python으로 돌아가기](index.md)

조건식의 결과에 따라 실행할 코드 블록을 선택합니다. Python은 중괄호(`{}`) 대신 **들여쓰기**로 블록을 구분합니다.

---

## 1. if / elif / else

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

## 2. match

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
