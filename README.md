# Code Archive

프로그래밍 언어와 백엔드 개발 원리를 직접 공부하며 정리한 개인 기술 저장소입니다.

## 문서 사이트

정리된 내용은 아래 사이트에서 확인할 수 있습니다.

**[https://jun983.github.io/code-archive/](https://jun983.github.io/code-archive/)**

## 다루는 내용

| 카테고리 | 주제 |
|----------|------|
| C | 기초 문법부터 포인터, 메모리 관리까지 |
| Java | 기초 문법부터 JVM, 객체지향, 동시성까지 |

## 로컬 실행

```bash
# conda 환경 생성 (최초 1회)
conda create -n code-archive python=3.11 -y

# 환경 활성화
conda activate code-archive

# 의존성 설치
pip install -r requirements.txt

# 개발 서버 실행
mkdocs serve
```

브라우저에서 `http://localhost:8000` 접속.
