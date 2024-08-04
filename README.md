# 김정길의 Portfolio

## project 소개

이 프로젝트는 여행사 모방을 목적을 두었으며 AirbnbUi를 참고하였습니다

## Ui소개

- main page
  <img src="https://github.com/power12203/popol/assets/160206287/9798becf-df75-4e2a-8dee-fed13f7bac69 " width="600" height="400"/>

- project page
  <img src="https://github.com/power12203/popol/assets/160206287/74bb72ce-54d1-46d9-9e9e-9aa791343eb4" width="600" height="400"/>

## 기능

- 로그인/회원가입
- slick 라이브러리를 이용한 카드리스트/슬라이드
- 게시판 기능
- 글쓰기 수정 삭제

## 설치및 실행 방법

[서버 실행 code](https://github.com/power12203/server)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```

### 7. 기술 스택 (Tech Stack)

## Tech Stack

- HTML
- CSS
- JavaScript
- React.js
- [Redux](https://github.com/power12203/Redux-main)

```markdown
## 프로젝트 구조

|-- public/
| |-- index.html
|-- src/
| |-- assets/
| | |--footerImg/푸터에있는 소셜이미지
| |-- common/레이아웃 구성
| |-- components/
| | |-- auth/로그인/회원가입
| | |-- main/메인 구성
| | |-- post/게시판구성
| | |-- postList/게시판리스트
| | |-- write/글쓰기구성
| |-- data/데이터 json
| |-- imag/메인 아래 슬라이드 이미지
| |-- img/메인 카드리스트 이미지
| |-- modules/Redux
| | |-- api/
| |-- page/페이지구성
| |-- App.js
| |-- index.js
|-- package.json
|-- README.md
```
