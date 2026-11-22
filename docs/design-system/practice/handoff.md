---
hide:
  - navigation
---

# 개발 전달 산출물 정리 실습

[← 실습편으로 돌아가기](index.md)

앞선 실습의 토큰 파일과 `my-ui` 패키지를 `handoff` 폴더 한 곳에 모으고, 사용 가이드를 작성한 뒤 전달 체크리스트를 실행합니다. 마지막으로 토큰 값 하나를 바꿔 버전과 변경 이력을 갱신하며 되돌아가기 흐름을 한 번 경험합니다. 개념 설명은 [개발 전달 산출물 정리](../handoff.md)에 있으므로 이 문서에서는 반복하지 않고 작업 순서와 확인 방법만 둡니다.

| 구분 | 내용 |
|---|---|
| 입력 | [토큰 실습](design-tokens.md)의 `tokens/tokens.json`, `build/css/variables.css`와 [컴포넌트 라이브러리 실습](component-library.md)의 `my-ui` 프로젝트 |
| 산출물 | `handoff` 폴더(토큰 파일, 패키지 `.tgz`), `my-ui/README.md`(사용 가이드), `my-ui/CHANGELOG.md`, 갱신된 버전 `0.1.1` |
| 마지막 실습 | 이 실습이 실습편의 마지막 단계입니다. |

!!! warning "제안임을 밝힙니다"
    사용 가이드를 패키지 `README.md`에 두고 `CHANGELOG.md`와 함께 패키지에 넣는 구성, 패키지 버전 하나로 토큰과 컴포넌트를 함께 표기하는 방식은 개념 문서의 [제안](../handoff.md)을 따른 것입니다. 실제 전달 대상(백엔드)이 선호하는 전달 형식은 확인하지 못했습니다. 이 실습은 `.tgz` 패키지 파일과 토큰 파일 묶음을 전달하는 것으로 가정하며, 형식이 정해지면 `handoff` 폴더 구성만 바꿉니다.

---

## 실습 범위와 환경

### 범위

| 항목 | 이 실습에서 하는 일 |
|---|---|
| 산출물 모으기 | 토큰 파일과 패키지를 `handoff` 폴더로 모음 |
| 사용 가이드 | `my-ui/README.md`를 [개념 문서의 세 부분](../handoff.md#사용-가이드)에 맞춰 작성 |
| 체크리스트 | 개념 문서의 [산출물 누락 확인](../handoff.md#산출물-누락-확인) 항목을 명령어로 실행 |
| 변경 이력 | 토큰 값 하나를 바꿔 버전을 올리고 `CHANGELOG.md`에 기록 |

배포 레지스트리에 올리는 일은 하지 않습니다. 레지스트리와 카탈로그 호스팅 위치는 [개념 문서](../handoff.md)에서 아직 정해지지 않은 항목입니다.

### 환경

[컴포넌트 라이브러리 실습의 환경](component-library.md#환경)과 같습니다. 이 문서의 명령어 출력은 Node.js 22.22.2, npm 10.9.7에서 직접 실행해 확인한 값입니다.

### 이전 단계 완성 산출물

앞 실습을 마치지 못했다면 아래 표에서 해당하는 행의 방법으로 입력을 준비합니다. 별도 압축 파일을 두지 않고 각 실습 문서에 실린 정답 코드를 쓰는 방식입니다.

| 없는 입력 | 준비 방법 |
|---|---|
| `tokens/tokens.json` | `expected/tokens.json`을 복사합니다. `mkdir -p tokens && cp expected/tokens.json tokens/tokens.json` ([토큰 실습 2-2](design-tokens.md#2-2-기대-결과-json)) |
| `build/css/variables.css` | `node build-tokens.js`를 실행하거나 [3-3의 정답 CSS](design-tokens.md#3-3-정답-파일과-대조)를 저장합니다. |
| `my-ui` 프로젝트 | [컴포넌트 라이브러리 실습](component-library.md)의 단계 코드를 1단계부터 5단계까지 따라 `npm run build`가 통과하는 상태로 만듭니다. [완성 폴더 구조](component-library.md#완성-폴더-구조)와 대조합니다. |

---

## 1. 산출물 모으기

### 1-1. handoff 폴더와 토큰 파일

1. **작업**: `design-system-practice` 폴더에서 터미널을 열고 아래 명령을 실행합니다. 토큰 파일은 원본(JSON)과 변환 결과(CSS)를 함께 복사합니다.

    **명령어**

    ```bash
    mkdir -p handoff/tokens
    cp tokens/tokens.json handoff/tokens/
    cp build/css/variables.css handoff/tokens/
    ```

    **출력 결과**: 없음(출력이 없으면 정상입니다).

2. **기대 결과**: `handoff/tokens`에 `tokens.json`, `variables.css`가 있습니다.
3. **확인 방법**: `ls handoff/tokens`를 실행해 두 파일이 보이는지 확인합니다.

### 1-2. 전달 묶음 구성

패키지는 2단계에서 사용 가이드를 넣은 뒤 만들므로 지금은 아래 구성의 빈 자리를 확인만 합니다.

```text
design-system-practice/
├─ tokens/tokens.json              원본
├─ build/css/variables.css         변환 결과
├─ my-ui/                          컴포넌트 라이브러리
│  ├─ README.md                    사용 가이드 (2단계에서 작성)
│  └─ CHANGELOG.md                 변경 이력 (2단계에서 작성)
└─ handoff/                        전달 묶음
   ├─ tokens/
   │  ├─ tokens.json
   │  └─ variables.css
   └─ my-ui-0.1.0.tgz              (2단계에서 생성)
```

- 전달 묶음에는 `handoff` 폴더만 넘깁니다. `my-ui`의 `node_modules`나 `storybook-static`은 넣지 않습니다.
- 토큰 파일은 `tokens`·`build`의 복사본입니다. 원본을 바꾸면 이 복사본도 다시 복사해야 하며, 이 흐름은 4단계에서 직접 해 봅니다.

---

## 2. 사용 가이드 작성

### 2-1. README.md 작성

개념 문서의 [사용 가이드 구성](../handoff.md#사용-가이드)(설치, 사용법, 컴포넌트 목록)을 그대로 채웁니다. 아래 표는 작성할 때 채워 넣는 템플릿입니다.

| 부분 | 채울 내용 | 이 실습의 값 |
|---|---|---|
| 설치 | 설치 명령, 요구 환경, CSS 불러오는 순서 | `npm install my-ui`, Node.js·React 버전, 토큰 CSS → 컴포넌트 CSS |
| 사용법 | import 예시, props 규칙, 테마 조정 | Button·Input 예시, Figma와 같은 props 이름, CSS 변수 덮어쓰기 |
| 컴포넌트 목록 | 이름, 주요 props, 상태 | Button, Input |

1. **작업**: `my-ui` 폴더에 `README.md`를 만듭니다. 코드 블록 안의 코드 블록이 있으므로 아래 내용을 그대로 저장합니다.

    ````md title="my-ui/README.md"
    # my-ui

    React 컴포넌트 라이브러리입니다. 디자인 토큰(CSS 변수)과 컴포넌트를 함께 제공합니다.

    ## 설치

    ```bash
    npm install my-ui
    ```

    | 요구 환경 | 버전 |
    |---|---|
    | Node.js | 20.19.0 이상 또는 22.12.0 이상 |
    | react, react-dom | 19 |

    ## 시작하기

    토큰 CSS를 컴포넌트 CSS보다 먼저 불러옵니다. 컴포넌트 스타일이 토큰 변수를 참조하므로 순서가 바뀌면 색이 적용되지 않습니다.

    ```tsx
    import 'my-ui/tokens.css';
    import 'my-ui/style.css';
    import { Button, Input } from 'my-ui';

    export const App = () => (
      <>
        <Button>저장</Button>
        <Input placeholder="이름" invalid />
      </>
    );
    ```

    ## props 규칙

    Figma의 variant·property 이름이 props 이름과 같습니다. Figma에서 값을 가진 variant는 문자열 prop으로, 상태(`error` 등)는 불리언 prop으로 대응합니다.

    ## 테마 조정

    `--color-blue-500` 같은 토큰 변수를 `:root` 뒤에서 덮어쓰면 값을 바꿀 수 있습니다. 토큰 파일(`variables.css`)은 직접 수정하지 않습니다.

    ```css
    :root {
      --color-bg-primary-default: #2563eb;
    }
    ```

    ## 컴포넌트 목록

    | 컴포넌트 | 주요 props | 상태 |
    |---|---|---|
    | `Button` | `variant` (`'primary'`) | Primary |
    | `Input` | `invalid` | Default, Invalid |

    상태별 모습은 Storybook 카탈로그에서 확인합니다.
    ````

2. **기대 결과**: `my-ui/README.md`가 생기고 설치, 시작하기, props 규칙, 테마 조정, 컴포넌트 목록 다섯 절이 있습니다.
3. **확인 방법**: 가이드의 코드 예시는 [6-1의 `consumer/main.tsx`](component-library.md#6-1-설치와-타입-확인)와 같은 코드여야 합니다. 개념 문서의 "실제 빌드된 패키지에서 동작하는 것만 적는다"는 기준을 3단계에서 `consumer`로 확인합니다.

!!! note "컴포넌트 목록과 상태는 직접 늘리지 않습니다"
    목록은 `src/index.ts`의 공개 export와 같은 항목만 적고, 상태별 모습은 카탈로그로 연결합니다. 목록을 두 곳에서 관리하면 어긋나므로, 컴포넌트가 늘어나면 이 표와 `src/index.ts`를 함께 고칩니다.

### 2-2. CHANGELOG.md 작성과 패키지에 포함

1. **작업**: `my-ui` 폴더에 `CHANGELOG.md`를 만듭니다. 날짜는 작업한 날짜로 바꿉니다.

    ```md title="my-ui/CHANGELOG.md"
    # Changelog

    ## 0.1.0 - 2026-11-22
    ### 토큰
    - 추가: 색상·간격·반경 토큰 20개
    ### 컴포넌트
    - 추가: Button, Input
    ```

2. `README.md`와 `CHANGELOG.md`가 패키지에 들어가도록 `files`를 고칩니다.

    **명령어**

    ```bash
    cd my-ui
    npm pkg set --json files='["dist","README.md","CHANGELOG.md"]'
    ```

    **출력 결과**: 없음(출력이 없으면 정상입니다).

3. **기대 결과**: `package.json`의 `files`가 `["dist", "README.md", "CHANGELOG.md"]`입니다.
4. **확인 방법**: 3단계의 패키지 파일 목록에서 두 파일이 보이는지 확인합니다.

### 2-3. 패키지 만들어 handoff에 넣기

1. **작업**: `my-ui` 폴더에서 빌드하고 패키지 파일을 `handoff` 폴더에 만듭니다.

    **명령어**

    ```bash
    npm run build
    npm pack --pack-destination ../handoff
    ```

    **출력 결과**: `npm run build`는 [5-2](component-library.md#5-2-빌드-실행)와 같은 출력으로 끝나고, `npm pack`은 포함 파일 목록 끝에 `total files: 13`과 `my-ui-0.1.0.tgz`를 출력합니다. 파일 크기와 해시는 환경에 따라 다를 수 있습니다.

2. **기대 결과**: `handoff/my-ui-0.1.0.tgz`가 생깁니다.
3. **확인 방법**: `ls handoff`에 `my-ui-0.1.0.tgz`와 `tokens`가 보이는지 확인합니다.

---

## 3. 체크리스트 실행

개념 문서의 [산출물 누락 확인](../handoff.md#산출물-누락-확인) 항목을 위에서 아래로 실행합니다. 2단계에서 `my-ui` 폴더에 있었다면 `cd ..`로 `design-system-practice` 폴더로 돌아와 시작합니다.

### 3-1. 토큰 파일

1. **작업**: 토큰 JSON을 다시 변환해 CSS 변수 파일이 현재 JSON의 결과인지, 의미 기반 토큰이 참조로 남아 있는지 확인합니다.

    **명령어**

    ```bash
    node build-tokens.js
    diff build/css/variables.css my-ui/src/tokens/variables.css && echo SAME
    diff build/css/variables.css handoff/tokens/variables.css && echo SAME
    grep -c '"\$value": "{' tokens/tokens.json
    ```

    **출력 결과**

    ```text
    css
    - build/css/variables.css
    - build/css
    - build

    css
    ✔︎ build/css/variables.css
    SAME
    SAME
    8
    ```

    `diff`는 차이가 없으면 아무것도 출력하지 않아 `&& echo SAME`이 실행됩니다. 마지막 숫자 `8`은 `{...}` 참조를 가진 의미 기반 토큰 수입니다.

2. **기대 결과**: `SAME`이 두 번 나오고, 참조 수가 의미 기반 토큰 수(8)와 같습니다.
3. **확인 방법**: `SAME`이 나오지 않고 `diff` 결과가 출력되면 그 파일이 이전 시점의 복사본입니다. 최신 `build/css/variables.css`를 해당 위치에 다시 복사합니다.

### 3-2. 컴포넌트 라이브러리 패키지

1. **작업**: 공개 export, 패키지 파일 목록, 토큰 참조 누락을 확인합니다. 모두 `design-system-practice` 폴더에서 실행합니다.

    **명령어**

    ```bash
    grep '^export {' my-ui/src/index.ts
    cd my-ui && npm pack --dry-run 2>&1 | grep -E 'variables.css|my-ui.(js|css)|index.d.ts'; cd ..
    grep -oh 'var(--[a-z0-9-]*' my-ui/src/components/*/*.css | sed 's/var(//' | sort -u > used.txt
    grep -oh '^  --[a-z0-9-]*' my-ui/src/tokens/variables.css | tr -d ' ' | sort -u > defined.txt
    comm -23 used.txt defined.txt
    ```

    **출력 결과**

    ```text
    export { Button } from './components/Button';
    export { Input } from './components/Input';
    npm notice 200B dist/index.d.ts
    npm notice 689B dist/my-ui.css
    npm notice 583B dist/my-ui.js
    npm notice 802B dist/variables.css
    ```

    `comm -23`은 출력이 없으면 정상입니다. 파일 크기는 환경에 따라 다를 수 있습니다.

2. **기대 결과**: 공개 export가 Button, Input 두 개이고 패키지 목록에 JS, 타입 선언, 컴포넌트 CSS, 토큰 CSS(`variables.css`)가 모두 있습니다. `comm -23`이 아무것도 출력하지 않습니다.
3. **확인 방법**: `comm -23`에 `--`로 시작하는 줄이 출력되면 컴포넌트 CSS가 참조하는데 발행된 토큰 파일에 없는 토큰입니다. 이름의 철자를 [토큰 실습](design-tokens.md)의 변환 결과와 대조합니다.

   | 체크리스트 항목 | 위 실행에서 확인한 것 |
   |---|---|
   | 공개할 컴포넌트가 `src/index.ts`에서 export된다 | `grep '^export {'` 결과 2개 |
   | `dist`에 JS, 타입 선언, CSS가 있다 | `npm pack --dry-run`의 `index.d.ts`, `my-ui.js`, `my-ui.css` |
   | 토큰 CSS가 별도 파일로 `dist`에 포함된다 | `dist/variables.css` 항목 |
   | 컴포넌트가 참조하는 토큰이 모두 발행됨 | `comm -23` 출력 없음 |
   | `peerDependencies`와 React 미포함 | [5-2의 확인](component-library.md#5-2-빌드-실행)(`head -n 1 dist/my-ui.js`)을 `my-ui`에서 다시 실행 |

### 3-3. 다른 프로젝트에서 설치

체크리스트의 "다른 프로젝트에 설치해 import와 스타일 적용이 된다" 항목입니다. 이번에는 `handoff`의 패키지 파일로 설치합니다. 개념 문서는 이 항목이 전체 패키지로는 검증되지 않았다고 적었으므로, Button, Input 둘을 모두 쓰는 `consumer/main.tsx`로 확인합니다.

1. **작업**: `consumer` 폴더에서 기존 설치를 지우고 `handoff`의 파일로 다시 설치한 뒤 타입 검사와 빌드를 실행합니다.

    **명령어**

    ```bash
    cd consumer
    rm -rf dist node_modules/my-ui
    npm install ../handoff/my-ui-0.1.0.tgz
    npx tsc
    npx vite build
    ```

    **출력 결과**: `npm install`은 `found 0 vulnerabilities`로 끝나고, `npx tsc`는 출력이 없으면 정상입니다. `npx vite build`는 아래와 같이 끝납니다. 해시와 크기, 소요 시간은 환경에 따라 다를 수 있습니다.

    ```text
    vite v8.3.8 building client environment for production...
    transforming...
    ✓ 18 modules transformed.
    rendering chunks...
    computing gzip size...
    dist/index.html                   0.16 kB │ gzip:  0.14 kB
    dist/assets/index-BqvNoPlE.css    1.32 kB │ gzip:  0.44 kB
    dist/assets/index-C1J7w1Ij.js   219.94 kB │ gzip: 68.79 kB

    ✓ built in 312ms
    ```

2. **기대 결과**: 타입 검사와 빌드가 오류 없이 끝나고, 설치된 패키지 폴더에 `README.md`와 `CHANGELOG.md`가 있습니다.
3. **확인 방법**: 아래 명령으로 패키지 내용을 확인합니다. 빌드된 CSS에 토큰 값이 들어 있으면 스타일 적용도 된 것입니다.

    **명령어**

    ```bash
    ls node_modules/my-ui
    grep -o '#3b82f6' dist/assets/*.css
    ```

    **출력 결과**

    ```text
    CHANGELOG.md
    README.md
    dist
    package.json
    #3b82f6
    ```

### 3-4. 사용 가이드와 일관성

| 체크리스트 항목 | 확인 방법 |
|---|---|
| 설치 방법이 현재 패키지 이름·버전과 일치한다 | `README.md`의 `npm install my-ui`가 `my-ui/package.json`의 `name`과 같은지 봅니다. |
| 토큰 CSS를 먼저 불러와야 한다는 안내가 있다 | `README.md`의 "시작하기"에 순서 설명이 있는지 봅니다. |
| 컴포넌트 목록이 공개 목록과 일치한다 | 3-2의 공개 export 2개와 `README.md`의 목록 두 행을 대조합니다. |
| Figma variant마다 대응하는 story가 카탈로그에 있다 | `grep -n '^export const' my-ui/src/components/*/*.stories.tsx`에서 `Primary`, `Default`, `Invalid`가 나오는지 봅니다. |
| 토큰 이름이 같은 규칙으로 이어진다 | [Figma 정리 실습](figma-organize.md)의 변수 이름, `tokens.json`, `variables.css`의 이름이 `.`과 `-`만 다른지 봅니다. |

- 모든 항목을 통과하면 [개념 문서의 정리 확인](../handoff.md#정리-확인) 중 산출물 존재, 체크리스트 확인이 끝난 것입니다. 버전·변경 이력 반영은 4단계에서 확인합니다.

---

## 4. 토큰 값 변경과 변경 이력 갱신

전달 뒤 Figma에서 값 하나가 바뀐 상황을 가정합니다. 개념 문서의 [되돌아가기 표](../handoff.md#변경이-생겼을-때의-되돌아가기)에서 "토큰 값 변경"은 토큰 추출·발행 → 전달 산출물 정리 순서로 다시 진행합니다. 컴포넌트 코드는 바뀌지 않습니다.

| 순서 | 되돌아간 단계 | 이 실습에서 하는 일 |
|---|---|---|
| 1 | Figma에서 값 변경 | `color.blue.500`을 `#3b82f6`에서 `#2563eb`로 바꿈 |
| 2 | 토큰 추출·발행 | 토큰 JSON 수정, 변환 실행 |
| 3 | 전달 산출물 정리 | 복사, 버전, `CHANGELOG.md`, 패키지 다시 만들기, 체크리스트 재확인 |

### 4-1. 토큰 값 바꾸고 다시 변환

1. **작업**: `design-system-practice` 폴더로 돌아와(3-3에서 `consumer`에 있었다면 `cd ..`) 진행합니다. 실제로는 Figma에서 값을 바꾸고 [토큰 내보내기](design-tokens.md#2-1-토큰-내보내기)를 다시 합니다. 이 실습에서는 같은 결과가 되도록 `tokens/tokens.json`의 `color.blue.500` 값을 직접 고칩니다.

    **명령어**

    ```bash
    sed -i '' 's/#3b82f6/#2563eb/' tokens/tokens.json
    node build-tokens.js
    diff handoff/tokens/variables.css build/css/variables.css
    ```

    `sed -i ''`는 macOS 기준입니다. Linux에서는 `sed -i`로 씁니다. 에디터로 직접 고쳐도 됩니다.

    **출력 결과**

    ```text
    7c7
    <   --color-blue-500: #3b82f6;
    ---
    >   --color-blue-500: #2563eb;
    ```

2. **기대 결과**: `diff`가 `--color-blue-500` 한 줄의 변경만 보여 줍니다.
3. **확인 방법**: 의미 기반 토큰(`--color-bg-primary-default` 등)은 `var(--color-blue-500)` 참조라서 `variables.css`에서 줄이 바뀌지 않아야 합니다. 값 하나만 바꿨는데 `diff`가 여러 줄이면 JSON의 다른 값이 함께 바뀐 것입니다.

### 4-2. 복사본 갱신과 버전·변경 이력

1. **작업**: 새 CSS를 `my-ui`와 `handoff`에 복사하고 버전을 올립니다. 토큰 값만 바뀌었으므로 개념 문서의 [버전 표](../handoff.md#버전과-변경-이력-표기)에 따라 PATCH(`0.1.0` → `0.1.1`)로 올립니다.

    **명령어**

    ```bash
    cp build/css/variables.css my-ui/src/tokens/variables.css
    cp tokens/tokens.json handoff/tokens/
    cp build/css/variables.css handoff/tokens/
    cd my-ui
    npm version patch --no-git-tag-version
    ```

    **출력 결과**

    ```text
    v0.1.1
    ```

2. `my-ui/CHANGELOG.md` 맨 위에 새 버전을 추가합니다. 토큰 변경과 컴포넌트 변경을 구분해 적고, 영향을 받는 토큰도 함께 적습니다.

    ```md title="my-ui/CHANGELOG.md"
    # Changelog

    ## 0.1.1 - 2026-11-22
    ### 토큰
    - 변경: `color.blue.500` `#3b82f6` → `#2563eb` (이 값을 참조하는 `color.bg.primary.default`, `color.border.input.focus`도 함께 바뀜)
    ### 컴포넌트
    - 변경 없음

    ## 0.1.0 - 2026-11-22
    ### 토큰
    - 추가: 색상·간격·반경 토큰 20개
    ### 컴포넌트
    - 추가: Button, Input
    ```

3. **기대 결과**: `package.json`의 `version`이 `0.1.1`이고 `CHANGELOG.md` 맨 위가 `0.1.1`입니다.
4. **확인 방법**: `npm pkg get version`을 실행해 `"0.1.1"`이 나오는지 확인합니다.

!!! note "토큰 값만 바뀌어도 MINOR로 올릴 수 있습니다"
    개념 문서의 표는 토큰 값만 바뀐 경우를 "PATCH 또는 MINOR"로 두었습니다. 사용 측 화면의 색이 눈에 띄게 바뀌므로 팀이 MINOR로 알리기로 정하면 `npm version minor`를 씁니다. 이 실습은 PATCH를 택했습니다.

### 4-3. 패키지 다시 만들고 전달 확인

1. **작업**: `my-ui` 폴더에서 빌드하고 패키지를 만든 뒤, `consumer`에서 새 파일로 설치해 빌드합니다.

    **명령어**

    ```bash
    npm run build
    npm pack --pack-destination ../handoff
    cd ../consumer
    npm install ../handoff/my-ui-0.1.1.tgz
    npx tsc
    npx vite build
    grep -o '#2563eb\|#3b82f6' dist/assets/*.css
    ```

    **출력 결과**: `npm pack`은 `my-ui-0.1.1.tgz`를 출력하고, `npx tsc`는 출력이 없으며, `npx vite build`는 3-3과 같은 형태로 끝납니다. 마지막 `grep`은 아래 한 줄만 출력합니다.

    ```text
    #2563eb
    ```

2. **기대 결과**: `handoff`에 `my-ui-0.1.0.tgz`, `my-ui-0.1.1.tgz`와 `tokens` 폴더가 있고, `consumer`의 빌드 결과에 새 값만 있습니다.
3. **확인 방법**: `#3b82f6`이 함께 출력되면 `consumer`가 이전 패키지를 계속 쓰는 것입니다. `consumer/package.json`의 `my-ui` 항목이 `file:../handoff/my-ui-0.1.1.tgz`인지 확인하고 `npm install`을 다시 실행합니다.

- 이전 버전 파일(`my-ui-0.1.0.tgz`)은 롤백 용도로 남겨 두거나 정리합니다. 어느 쪽이든 전달 시점에는 최신 버전만 넘기는 것을 권장합니다. (제안)
- 3단계의 체크리스트를 새 버전에 대해 다시 실행합니다. 특히 3-1의 `SAME` 확인이 이 변경의 핵심입니다.

---

## 막혔을 때

| 증상 | 확인 |
|---|---|
| `npm pack --pack-destination`에서 `handoff` 폴더가 없다는 오류 | 1-1의 `mkdir -p handoff/tokens`를 실행했는지 확인합니다. |
| 패키지에 `README.md`나 `CHANGELOG.md`가 없음 | `my-ui/package.json`의 `files`에 두 파일이 있는지 확인하고 `npm pack`을 다시 실행합니다. |
| `dist/variables.css`가 패키지 목록에 없음 | `npm run build`를 하지 않고 `npm pack`을 실행한 것입니다. `npm run build`의 `cp`가 이 파일을 `dist`로 복사합니다. |
| `consumer`가 새 값을 못 받음 | `consumer/package.json`의 `my-ui` 경로가 새 `.tgz`인지 확인하고 `rm -rf node_modules/my-ui` 뒤 다시 설치합니다. |
| `comm -23`에 토큰 이름이 출력됨 | 컴포넌트 CSS가 참조하는데 `variables.css`에 없는 토큰입니다. 토큰 실습의 변환 결과와 이름을 대조합니다. |
| 3-1에서 `diff`가 출력됨 | `my-ui/src/tokens/variables.css` 또는 `handoff/tokens/variables.css`가 오래된 복사본입니다. 최신 `build/css/variables.css`를 복사합니다. |

---

## 실습 완료 확인

- [ ] `handoff` 폴더에 `tokens/tokens.json`, `tokens/variables.css`, `my-ui-0.1.1.tgz`가 있다.
- [ ] `my-ui/README.md`에 설치, 시작하기, props 규칙, 테마 조정, 컴포넌트 목록이 있고 토큰 CSS를 먼저 불러오라는 안내가 있다.
- [ ] 3단계의 체크리스트 명령이 모두 기대 결과와 같다(`SAME`, 공개 export 2개, `comm -23` 출력 없음).
- [ ] `consumer`에서 `handoff`의 패키지로 설치해 타입 검사와 빌드가 된다.
- [ ] 토큰 값 하나를 바꿔 `package.json`의 `version`이 `0.1.1`이 되고 `CHANGELOG.md`에 토큰 변경이 기록되었다.
- [ ] 새 패키지로 빌드한 `consumer` CSS에 `#2563eb`만 있고 `#3b82f6`은 없다.

이 실습으로 개념 문서의 [정리 확인](../handoff.md#정리-확인)에 나온 전체 흐름(개발환경 → Figma 정리 → 토큰 → 컴포넌트 → 전달)을 한 번 따라 해 본 것입니다.
