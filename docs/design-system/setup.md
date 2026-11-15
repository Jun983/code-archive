---
hide:
  - navigation
---

# 개발환경 준비

[← 디자인 시스템으로 돌아가기](index.md)

이후 문서들은 Figma에서 디자인 토큰을 꺼내 코드로 변환하는 작업을 다룹니다. 이 문서에서는 그 작업에 필요한 계정과 도구를 정리하고, 준비가 끝났는지 확인하는 방법을 살펴봅니다.

| 구분 | 설명 |
|---|---|
| 계정 | 디자인 시스템이 들어 있는 Figma 계정 |
| 기본 도구 | Node.js, 코드 에디터 |
| 토큰 변환 도구 | Figma의 토큰을 코드용 형식으로 바꾸는 도구 |
| AI 자동화 도구 | 반복 작업을 AI로 자동화하는 도구 |

---

## 필요한 계정과 도구

### Figma

디자인 시스템 파일을 열고 스타일·변수 정보를 읽으려면 Figma 계정이 필요합니다. 파일에 접근 권한이 있는지, 토큰 추출에 쓸 개인 액세스 토큰을 발급할 수 있는 요금제인지 확인합니다.

### Node.js

토큰 변환 도구와 컴포넌트 라이브러리는 Node.js 환경에서 실행됩니다. LTS 버전을 설치하면 `npm`도 함께 설치됩니다.

### 코드 에디터

토큰 파일과 컴포넌트 코드를 작성하고 확인할 편집기가 필요합니다. 이 저장소의 다른 문서와 같이 VSCode를 기준으로 합니다.

---

## 토큰 변환 도구와 AI 자동화 도구

| 도구 | 역할 | 이름·버전 | 공식 문서 |
|---|---|---|---|
| 토큰 변환 도구 | Figma 토큰을 코드용 형식으로 변환 | Style Dictionary 5.8.0, `@tokens-studio/sd-transforms` 2.0.3 | [Style Dictionary](https://styledictionary.com/) |
| AI 자동화 도구 | 토큰 추출·정리 같은 반복 작업을 자동화 | Claude Code + Figma MCP 서버 (버전 표기 없음) | [Figma MCP server](https://developers.figma.com/docs/figma-mcp-server/) |

토큰 변환 도구의 설치와 사용법은 [디자인 토큰 추출·발행](design-tokens.md)에서 다룹니다.

### Figma MCP 서버 연결

Figma MCP 서버는 Figma 파일의 변수와 스타일을 AI 도구가 읽을 수 있게 해 줍니다. 원격 서버(`https://mcp.figma.com/mcp`)를 권장하며, Claude Code에는 아래 명령으로 추가합니다. 추가한 뒤 새 세션에서 `/mcp`로 figma를 선택해 인증합니다.

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

변수 읽기에는 `get_variable_defs` 도구를 씁니다. 선택 영역에서 쓰인 변수와 스타일을 반환합니다.

!!! warning "확인 필요"
    Figma 공식 문서에는 MCP 서버의 버전 번호와 변수 도구의 호출 횟수 제한이 나와 있지 않습니다. 데스크톱 서버는 Dev 또는 Full 시트가 필요하지만, 원격 서버의 요금제별 제약은 이 문서 작성 시점에 확인하지 못했습니다. Figma의 "Plans, access, and permissions" 문서에서 확인합니다.

---

## 설치 확인

준비가 끝났다면 아래 항목을 모두 확인할 수 있어야 합니다.

- [ ] Figma에서 디자인 시스템 파일이 열린다.
- [ ] 터미널에서 Node.js와 `npm`의 버전이 출력된다.
- [ ] 코드 에디터에서 프로젝트 폴더를 열 수 있다.
- [ ] `npm ls style-dictionary @tokens-studio/sd-transforms`로 토큰 변환 도구의 버전이 출력된다.
- [ ] Claude Code의 `/mcp` 화면에서 figma가 연결됨으로 표시된다.
