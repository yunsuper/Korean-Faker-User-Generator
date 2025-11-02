# READEME.md

# 🇰🇷 Korean Faker User Generator

데이터베이스 더미 데이터나 UI 테스트용으로 사용할 수 있는 **한국어 사용자 임의 생성기 Apple Silicon용 macOS 데스크탑 앱**입니다.

## ✨ 주요 기능

| 기능 | 설명 |
| --- | --- |
| ✅ 한국어 이름 생성 | `faker.js (locale=ko)` 기반 한국식 이름 생성 |
| ✅ 010-형식의 랜덤 전화번호 | `전화번호 패턴: 010-####-####` |
| ✅ 이메일 랜덤 생성 | **여러 이메일 도메인을 무작위 조합** |
| ✅ 비밀번호 자동 생성 | 12자리 랜덤 문자열 |
| ✅ 최대 100명까지 생성 가능 | 버튼 한 번으로 즉시 데이터 생성 |
| ✅ JSON 복사 | 클립보드로 바로 복사 |
| ✅ CSV 다운로드 | Excel / DB Import 용으로 바로 다운로드 |
| ✅ macOS (Apple Silicon, M1/M2/M3) 지원 |  |
| 🎨 깔끔한 UI | Tailwind CSS 기반 반응형 UI |
| 🟡 오프라인 작동 | 인터넷 없이도 사용 가능 |

---

## 📦 다운로드

> dist 폴더 또는 Release 탭에서 .dmg 파일 다운로드 후 실행
> 

## 🛠️ 기술 스택

| 분야 | 사용기술 |
| --- | --- |
| Desktop App | **Electron** |
| 임의 데이터 생성 | **@faker-js/faker (locale=ko)** |
| UI 스타일링 | **Tailwind CSS** |
| Build / Packaging | **electron-builder** |
| 언어 | JavaScript (ESM + preload contextBridge 구조) |

## 💡 사용 방법

1. 앱 실행
2. 입력창에 **생성할 사용자 수 입력** (1 ~ 100)
3. **데이터 생성** 버튼 클릭
4. 테이블에서 생성 결과 확인
5. 필요하다면:
    - **JSON 복사** 버튼 → API 테스트 등에 붙여넣기
    - **CSV 다운로드** 버튼 → Excel / DB Import 용

### 🔁 데이터 예시

```jsx
[
  {
    "fullname": "김하늘",
    "phone": "010-4923-2183",
    "email": "haneul.kim@naver.com",
    "password": "aB7@39shQwPP"
  }
]

```

## 🎯 왜 만들었나요?

- DB 샘플 데이터 채우려고 매번 "홍길동 / test@example.com" 쓰기 지겨울 때
- UI 테이블, 리스트, 회원 관리 페이지 테스트용 더미가 필요할 때
- API/백엔드 개발 중 **로그인/회원 흐름 테스트**해야 할 때
- “그냥 사람이름, 전화번호, 이메일 좀 뿌려줘”가 필요할 때

### 🧪 스크린샷

<img width="815" height="783" alt="스크린샷_2025-11-02_오후_2 21 45" src="https://github.com/user-attachments/assets/49f841f7-6188-430b-8fba-9a2ab30df44f" />

<img width="815" height="825" alt="스크린샷_2025-11-02_오후_2 22 01" src="https://github.com/user-attachments/assets/31b97ab6-df81-47b5-acb0-0c96cda43d5f" />

<img width="715" height="473" alt="스크린샷_2025-11-02_오후_2 22 46" src="https://github.com/user-attachments/assets/b6f0afbc-6882-42ad-8041-7b43a3a1df6b" />



