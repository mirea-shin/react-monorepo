# React Lab

> React와 Next.js의 개념을 작은 프로젝트로 직접 검증하고, 구현 과정에서 얻은 판단을 축적하는 프론트엔드 실험실입니다.

강의에서 접한 개념을 출발점으로 삼되, 단순 예제 보관보다 상태 관리·데이터 패칭·라우팅·렌더링 경계를 직접 구현하며 확인하는 데 목적을 둡니다. 완성도와 설명 가능성이 충분해진 프로젝트는 독립 저장소로 분리합니다.

## 이 저장소에서 확인하는 것

- React 상태와 컴포넌트 책임을 어디에서 나눌지
- URL 상태, 서버 상태, 클라이언트 상태를 어떻게 구분할지
- 로딩·오류·빈 상태를 라우팅 구조 안에서 어떻게 다룰지
- 반복되는 초기 설정을 워크스페이스와 템플릿으로 어떻게 표준화할지

## Lab 목록

| 경로 | 주제 | 주요 관찰 지점 |
|------|------|----------------|
| `lectures/dream-coding/todo` | React 기본 상태 관리 | 컴포넌트 분리, Context 기반 테마, 커스텀 Hook |
| `lectures/dream-coding/youtube-clone` | 클라이언트 데이터 흐름 | React Router, TanStack Query, Axios API 경계 |
| `lectures/nomad/nextjs` | Next.js App Router | 중첩 레이아웃, 동적 라우팅, 로딩·오류 경계 |
| `projects/rootin` | Lab에서 시작한 개인 프로젝트 | 서버 상태와 UI 상태 분리, 인증 경계, 대시보드 캐시 |

### Lab에서 독립 프로젝트로

Rootin은 이 저장소에서 실험을 시작해 별도 포트폴리오 프로젝트로 발전했습니다. 커밋 이력을 보존한 독립 저장소에서 현재 코드를 관리합니다.

- [Rootin Web](https://github.com/sm-rye/rootin-web)
- [Rootin Server](https://github.com/sm-rye/rootin-server)
- [Live Demo](https://react-monorepo-rootin-three.vercel.app/)

## 저장소 구조

```text
react-lab/
├── _template/                 # Vite + React + TypeScript 공통 시작점
├── lectures/                  # 강의 내용을 출발점으로 확장한 실험
│   ├── dream-coding/
│   └── nomad/
├── projects/                  # Lab에서 발전시킨 개인 프로젝트
└── scripts/new-project.mjs    # 워크스페이스 생성 자동화
```

Yarn Workspaces로 의존성과 실행 명령을 루트에서 관리합니다. 새 실험은 공통 템플릿으로 생성해 초기 설정 차이보다 검증할 주제에 집중할 수 있도록 구성했습니다.

## 실행 방법

### 요구사항

- Node.js 20 이상
- Corepack
- Yarn 4.13.0

```bash
corepack enable
yarn install
```

```bash
yarn dev:todo
yarn dev:youtube
yarn dev:nextjs
yarn dev:rootin
```

## 새 실험 추가

```bash
yarn new lectures/<출처>/<실험명>
yarn new projects/<프로젝트명>
```

생성 스크립트는 `_template`을 복사하고 패키지명과 루트 실행 명령을 자동으로 등록한 뒤 의존성을 갱신합니다.

## 운영 원칙

- 각 워크스페이스는 한 번에 하나의 학습 질문에 집중합니다.
- 기능 수보다 선택한 구조와 그 이유를 남기는 것을 우선합니다.
- 독립적으로 설명할 수 있는 프로젝트는 커밋 이력을 보존해 별도 저장소로 분리합니다.
- 실험이 끝난 코드는 방치하지 않고 유지·정리·비공개 중 하나로 상태를 명확히 합니다.
