---
hide:
  - navigation
---

# Figma 디자인 시스템 정리 실습

[← 실습편으로 돌아가기](index.md)

[샘플 Figma 파일](sample-file.md)에서 하드코딩된 값을 변수로 치환하고, 스타일과 컴포넌트를 정리하고, 이름을 점검합니다. 개념 설명은 [Figma 디자인 시스템 정리](../figma-organize.md)에 있으므로 이 문서에서는 반복하지 않고 작업 순서와 확인 방법만 둡니다.

| 구분 | 내용 |
|---|---|
| 입력 | [샘플 Figma 파일](sample-file.md) 20단계까지 마친 정리 전 파일 |
| 산출물 | 변수·스타일·컴포넌트·이름이 정돈된 Figma 파일 |
| 다음 단계 | 이 산출물이 디자인 토큰 추출 실습의 입력이 됩니다. |

!!! warning "확인 필요"
    - 아래 컬렉션 구성과 변수 개수는 이 실습용으로 정한 값입니다. 공통 준비 이슈에서 확정되는 샘플 파일 기준과 다르면 맞춰 고칩니다.
    - Figma UI 개편에 따라 메뉴 이름과 위치가 달라질 수 있습니다. 화면이 다르면 같은 기능의 메뉴를 찾아 진행합니다.
    - 단계별 기대 결과 스크린샷은 아직 준비하지 않았습니다. 준비되면 각 단계의 기대 결과에 추가합니다.

---

## 정리 대상

샘플 파일에서 하드코딩된 값을 모두 모으면 아래와 같습니다. 같은 의미인데 값이 조금씩 다른 항목은 하나로 합칩니다.

| 구분 | 현재 값 | 정리 방향 |
|---|---|---|
| 채우기 색 | `3B82F6`, `FFFFFF` | 원시 값 → 의미 기반 값 |
| 선 색 | `D1D5DB`, `3B82F6`, `EF4444`, `E5E7EB` | 원시 값 → 의미 기반 값 |
| 글자 색 | `FFFFFF`, `9CA3AF` | 원시 값 → 의미 기반 값 |
| 모서리 반경 | `6`, `7`, `12` | `6`과 `7`을 `6`으로 통일 |
| 패딩·간격 | `10`, `12`, `13`, `16`, Gap `8` | `12`와 `13`을 `12`로 통일 |
| 텍스트 | Medium 14, Regular 14, Medium 16 | 텍스트 스타일 3개 |

---

## 1. 변수 만들기

### 1-1. 컬렉션 만들기

1. **작업**:
    1. 캔버스의 빈 곳을 클릭해 선택을 해제하고, 오른쪽 패널의 **Variables** 항목에서 **Open variables**를 엽니다.
    2. 기본 컬렉션 이름을 `primitive`로 바꿉니다.
    3. 컬렉션을 하나 더 만들어 `semantic`, `spacing`, `radius`로 이름을 지정합니다.
2. **기대 결과**: 컬렉션 `primitive`, `semantic`, `spacing`, `radius`가 보입니다.
3. **확인 방법**: 왼쪽 컬렉션 목록에 네 개가 모두 있고, 컬렉션마다 모드가 하나(`Mode 1`)이면 정상입니다.

### 1-2. 원시 값 변수 만들기

1. **작업**: `primitive` 컬렉션에 Color 변수를 아래 이름과 값으로 만듭니다. 이름의 슬래시(`/`)가 그룹으로 묶입니다.

    | 변수 이름 | 값 |
    |---|---|
    | `color/white` | `FFFFFF` |
    | `color/blue/500` | `3B82F6` |
    | `color/gray/200` | `E5E7EB` |
    | `color/gray/300` | `D1D5DB` |
    | `color/gray/400` | `9CA3AF` |
    | `color/red/500` | `EF4444` |

2. **기대 결과**: 변수 6개가 `color` 그룹 아래 `white`, `blue`, `gray`, `red`로 묶여 보입니다.
3. **확인 방법**: 각 변수의 값이 표와 같고, 모두 Color 타입이면 정상입니다.

### 1-3. 의미 기반 변수 만들기

1. **작업**: `semantic` 컬렉션에 Color 변수를 만들고, 값 칸에서 직접 입력하지 않고 **원시 값 변수를 참조**하게 합니다.

    | 변수 이름 | 참조하는 원시 값 |
    |---|---|
    | `color/bg/primary/default` | `color/blue/500` |
    | `color/bg/surface/default` | `color/white` |
    | `color/text/on-primary/default` | `color/white` |
    | `color/text/placeholder/default` | `color/gray/400` |
    | `color/border/input/default` | `color/gray/300` |
    | `color/border/input/focus` | `color/blue/500` |
    | `color/border/input/error` | `color/red/500` |
    | `color/border/card/default` | `color/gray/200` |

2. **기대 결과**: 의미 기반 변수 8개가 보이고, 값 칸에 HEX가 아니라 원시 값 변수 이름이 표시됩니다.
3. **확인 방법**: 값 칸을 눌렀을 때 `primitive` 컬렉션의 변수가 연결되어 있으면 정상입니다. HEX가 직접 입력된 변수가 있으면 참조로 바꿉니다.

### 1-4. 간격과 모서리 반경 변수 만들기

1. **작업**: Number 변수를 아래처럼 만듭니다.

    | 컬렉션 | 변수 이름 | 값 |
    |---|---|---|
    | `spacing` | `spacing/8` | `8` |
    | `spacing` | `spacing/10` | `10` |
    | `spacing` | `spacing/12` | `12` |
    | `spacing` | `spacing/16` | `16` |
    | `radius` | `radius/md` | `6` |
    | `radius` | `radius/lg` | `12` |

2. **기대 결과**: `spacing` 컬렉션에 4개, `radius` 컬렉션에 2개의 변수가 보입니다.
3. **확인 방법**: `7`, `13`에 해당하는 변수가 없으면 정상입니다. 어중간한 값은 `6`, `12`로 합쳤기 때문입니다.

!!! note "모드"
    이 실습의 색상 변수는 모드를 `Mode 1` 하나만 씁니다. 라이트/다크 같은 모드 추가는 이 실습의 범위가 아닙니다.

---

## 2. 하드코딩된 값 치환

[개념 문서의 치환 순서](../figma-organize.md#하드코딩된-값을-변수로-치환하는-순서)대로 1단계(값 수집)와 2~3단계(원시·의미 변수)는 위에서 끝났습니다. 아래는 4~5단계에 해당합니다. 컴포넌트에는 **의미 기반 변수만** 연결합니다.

### 2-1. Button 치환

1. **작업**: `Components` 페이지에서 `Button` 컴포넌트를 선택하고 각 항목의 변수(육각형 모양의 **Apply variable**) 아이콘을 눌러 연결합니다.

    | 위치 | 항목 | 연결할 변수 |
    |---|---|---|
    | 프레임 | Fill | `color/bg/primary/default` |
    | 프레임 | Corner radius | `radius/md` |
    | 프레임 | Padding 세로 | `spacing/10` |
    | 프레임 | Padding 가로 | `spacing/12` |
    | 텍스트 | Fill | `color/text/on-primary/default` |

2. **기대 결과**: 겉모습이 치환 전과 같고, 각 항목 옆에 변수 이름이 표시됩니다.
3. **확인 방법**: 선택했을 때 오른쪽 패널의 Fill, Corner radius, Padding에 HEX나 숫자 대신 변수 이름이 보이면 정상입니다.

### 2-2. Input 치환

1. **작업**: `Input` 컴포넌트 세트 안의 Variant별로 연결합니다. 컴포넌트 세트가 아니라 `default`, `focus`, `error` Variant를 각각 선택합니다.

    | 위치 | 항목 | 연결할 변수 |
    |---|---|---|
    | 세 Variant 공통 | Fill | `color/bg/surface/default` |
    | 세 Variant 공통 | Corner radius | `radius/md` (`7`이 `6`으로 바뀜) |
    | 세 Variant 공통 | Padding 세로 | `spacing/10` |
    | 세 Variant 공통 | Padding 가로 | `spacing/12` (`13`이 `12`로 바뀜) |
    | `default` | Stroke | `color/border/input/default` |
    | `focus` | Stroke | `color/border/input/focus` |
    | `error` | Stroke | `color/border/input/error` |
    | 텍스트 | Fill | `color/text/placeholder/default` |

2. **기대 결과**: 모서리가 `6`, 가로 패딩이 `12`로 바뀌어 크기가 `240 × 40`으로 유지되는지 확인합니다. 세 Variant의 테두리 색은 그대로 회색, 파란색, 빨간색입니다.
3. **확인 방법**: 세 Variant를 차례로 선택했을 때 Stroke에 각각 `color/border/input/default`, `focus`, `error` 변수가 연결되어 있으면 정상입니다.

### 2-3. Card 치환

1. **작업**: `Card` 컴포넌트를 선택해 연결합니다.

    | 항목 | 연결할 변수 |
    |---|---|
    | Fill | `color/bg/surface/default` |
    | Stroke | `color/border/card/default` |
    | Corner radius | `radius/lg` |
    | Padding (가로·세로) | `spacing/16` |
    | Gap | `spacing/8` |

2. **기대 결과**: 겉모습이 치환 전과 같습니다.
3. **확인 방법**: 크기가 `280 × 78 Hug` 그대로이고, 위 항목마다 변수 이름이 표시되면 정상입니다.

### 2-4. 남은 하드코딩 확인

1. **작업**:
    1. `Components` 페이지에서 캔버스 전체를 선택합니다(**Cmd + A**).
    2. 오른쪽 패널에서 변수가 연결되지 않은 Fill, Stroke, Corner radius, Padding, Gap이 남았는지 확인합니다. 텍스트 색은 텍스트 레이어를 하나씩 확인합니다.
    3. `Examples` 페이지의 인스턴스도 같은 방법으로 확인합니다.
2. **기대 결과**: 변수가 연결되지 않은 색상·간격·반경 값이 없습니다.
3. **확인 방법**: `Examples`의 인스턴스는 컴포넌트에서 값을 가져오므로 따로 치환할 항목이 없어야 합니다. 남은 값이 있으면 해당 단계로 돌아가 연결합니다.

---

## 3. 스타일과 컴포넌트 정리

### 3-1. 텍스트 스타일 만들기

[변수와 스타일의 역할 구분](../figma-organize.md#변수와-스타일의-역할-구분)에 따라 글자 속성의 묶음은 스타일로 만듭니다.

1. **작업**:
    1. 텍스트 레이어를 선택하고 오른쪽 패널 Typography 항목의 **Styles** 아이콘(점 네 개)을 누른 뒤 **+** 로 스타일을 만듭니다.
    2. 아래 이름으로 세 개를 만들고, 해당하는 텍스트 레이어에 연결합니다.

        | 스타일 이름 | 글꼴 | 굵기 | 크기 | 연결할 레이어 |
        |---|---|---|---|---|
        | `text/body/default` | `Inter` | Regular | `14` | `Placeholder`, `Card description` |
        | `text/label/default` | `Inter` | Medium | `14` | `Button` 텍스트 |
        | `text/heading/default` | `Inter` | Medium | `16` | `Card title` |

2. **기대 결과**: 세 텍스트 스타일이 `text` 그룹 아래 `body`, `label`, `heading`으로 묶여 보입니다.
3. **확인 방법**: 텍스트 레이어를 선택했을 때 Typography에 스타일 이름이 표시되면 정상입니다.

!!! note "Cover 페이지 텍스트"
    `Cover` 페이지의 제목(Medium 32)과 설명(Regular 16)은 컴포넌트가 아니라 파일 안내용 텍스트이므로 스타일을 만들지 않습니다.

### 3-2. 컴포넌트 구조 점검

1. **작업**: [컴포넌트 구조화 기준](../figma-organize.md#컴포넌트-구조화-기준)에 맞는지 아래 항목을 확인합니다.

    | 점검 항목 | 기준 |
    |---|---|
    | Button | 컴포넌트이고, 안에 텍스트 레이어만 있다. |
    | Input | `State` property에 `default`, `focus`, `error` 값이 있는 컴포넌트 세트이다. |
    | Card | 컴포넌트이고, 안에 `Card title`, `Card description`이 있다. |
    | Examples 페이지 | 세 컴포넌트가 모두 인스턴스(◇)이다. |

2. **기대 결과**: 모든 항목이 기준을 만족합니다.
3. **확인 방법**: Layers에서 아이콘을 확인합니다. 기준과 다르면 [샘플 파일](sample-file.md)의 해당 단계를 다시 확인합니다.

### 3-3. 변수와 스타일 역할 점검

1. **작업**: 아래 표와 실제 파일이 일치하는지 확인합니다.

    | 대상 | 관리 수단 |
    |---|---|
    | 색상, 간격, 모서리 반경 | 변수 |
    | 글꼴·굵기·크기 조합 | 텍스트 스타일 |

2. **기대 결과**: 텍스트 속성이 변수가 아니라 스타일로만 관리됩니다.
3. **확인 방법**: `primitive`, `semantic`, `spacing`, `radius` 컬렉션에 글자 크기나 굵기 변수가 없으면 정상입니다.

---

## 4. 네이밍 점검

### 4-1. 레이어와 컴포넌트 이름 정리

1. **작업**: Layers를 펼쳐 `Frame 12`, `button copy`처럼 기본 이름이나 일관되지 않은 이름이 남아 있으면 규칙에 맞게 바꿉니다. 컴포넌트와 property 이름은 다음 표를 따릅니다.

    | 대상 | 이름 |
    |---|---|
    | 컴포넌트 | `Button`, `Input`, `Card` |
    | Input property | `State` |
    | Input property 값 | `default`, `focus`, `error` |

2. **기대 결과**: Layers에 기본 이름(`Frame N`, `Rectangle N`)이 남아 있지 않습니다.
3. **확인 방법**: Layers 검색창에 `Frame`을 입력해 결과가 없으면 정상입니다.

### 4-2. 네이밍 체크리스트

변수와 스타일 이름이 [네이밍 규칙](../figma-organize.md#네이밍-규칙)을 따르는지 확인합니다.

- [ ] 모든 변수·스타일 이름의 계층 구분자가 슬래시(`/`)이다.
- [ ] 모든 이름이 소문자 kebab-case이다(`on-primary`, `bg`).
- [ ] 이름이 큰 분류에서 작은 분류 순서이다(카테고리 → 용도 → 상태).
- [ ] 상태(`default`, `focus`, `error`)가 이름 끝 하위 계층으로 분리되어 있다.
- [ ] 상태가 없는 의미 기반 변수에도 `default` 계층이 있다.
- [ ] `bg`, `btn` 같은 약어 외에 줄임말을 쓰지 않았다.
- [ ] 같은 의미의 변수가 이름만 달리 중복되어 있지 않다.

!!! warning "확인 필요"
    `bg`는 개념 문서의 예시(`color/bg/primary/default`)를 따라 그대로 썼습니다. 개념 문서의 "약어 사용 안 함" 규칙과 충돌하는지는 네이밍 규칙 확정 시 함께 확인합니다.

---

## 정리 완료 확인

아래 항목을 모두 만족하면 이 실습을 마친 것입니다. 개념 문서의 [정리 확인](../figma-organize.md#정리-확인)과 같은 기준입니다.

- [ ] 변수가 `primitive`, `semantic`, `spacing`, `radius` 컬렉션으로 나뉘어 있다.
- [ ] 색상 변수가 원시 값과 의미 기반 값으로 분리되어 있다.
- [ ] 컴포넌트가 원시 값이 아닌 의미 기반 값만 참조한다.
- [ ] 하드코딩된 색상·간격·반경이 남아 있지 않다.
- [ ] 모든 이름이 같은 구분자와 대소문자 규칙을 따른다.

정리가 끝난 파일은 다음 실습(디자인 토큰 추출·발행)의 입력입니다. 이름을 이 문서와 동일하게 유지해야 다음 단계에서 변환 결과가 어긋나지 않습니다.
