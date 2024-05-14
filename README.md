# 🌿 2024 이화여대 대동제 : 부스 통합 안내 서비스 🌿

## 🎉 프로젝트 소개

#### 💚 [사이트 바로가기](https://www.liber-ewha.com/) 💚 <br>

2024 이화여대 대동제를 맞이해 '이화여대 멋쟁이 사자처럼 12기'가 (준)축제준비위원회과 협업하여 **부스 통합 안내 서비스**를 제작하였습니다.
<br/> **LiberEwha 홈페이지**는 311개의 부스를 포함해 대동제에 대한 모든 정보를 한번에 모아볼 수 있는 유일한 플랫폼으로써,
<br/> 대동제를 즐기는 벗들의 편의와 즐거움을 증진시키고, 부스를 운영하는 벗들에겐 부스 정보 관리 및 부스 홍보 효과를 제공합니다.
<br/>
<br>

## 🎉 기능

**LiberEwha 홈페이지**가 제공하는 기능은 다음과 같습니다.

1. 부스 위치 및 날짜별 조회 기능
2. 부스 이름 및 메뉴 검색 기능
3. 각 부스의 운영 일정, 위치 지도, 실시간 공지사항, 메뉴 및 품절 여부, 영업 상태 정보 제공
4. 부스 관리자가 부스 및 메뉴 관련 정보를 수정할 수 있는 기능
5. 관심 부스 및 메뉴 스크랩 기능
6. 부스 방명록을 통한 이용 후기 공유
7. 대동제 내 배리어프리 관련 정보 제공
8. (준)축제준비위원회 공지사항, 쓰레기통 및 그릇 반납 장소 안내, 주요 행사 일정 소개

<br>

## 🎉 프론트엔드 팀원 소개

<table align="center">
    <tr align="center">
        <td style="min-width: 150px;">
            <a href="https://github.com/mod-siw">
              <img src="https://avatars.githubusercontent.com/mod-siw" width="150" height="150" style="object-fit :cover">
            </a>
        </td>
        <td style="min-width: 150px;">
            <a href="https://github.com/youtheyeon">
              <img src="https://avatars.githubusercontent.com/youtheyeon" width="150" height="150" style="object-fit :cover">
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/kyubinjin">
              <img src="https://avatars.githubusercontent.com/kyubinjin" width="150" height="150" style="object-fit :cover">
            </a>
        </td>
       <td style="min-width: 150px;">
            <a href="https://github.com/jiwonnchoi">
              <img src="https://avatars.githubusercontent.com/jiwonnchoi" width="150" height="150" style="object-fit :cover">
            </a>
        </td>
    </tr>
    <tr align="center">
        <td>
            변지혜<br/>
      </td>
        <td>
            유서연<br />
        </td>
       <td>
            진규빈<br />
        </td>
        <td>
            최지원<br />
        </td>
    </tr>
     <tr align="center">
        <td>
            메인 페이지<br />
            축준위 메인 페이지<br />
            부스/공연 관리자 메인 페이지<br />
            검색 페이지<br />
            부스/공연 목록 페이지 <br />
        </td>
        <td>
            부스 상세 페이지 <br />
            공지사항 관련 페이지 <br />
            축제 일정 관련 페이지 <br />
            축준위 부스 수정 목록 페이지 <br />
            대동제 소개 / 배리어프리 페이지 <br />
        </td>
        <td>
            만든이들 페이지 <br />
            축준위 부스 수정 페이지 <br />
            부스/공연 관리자 수정 페이지 <br />
            부스 메뉴 수정 목록/상세/추가 페이지 <br />
        </td>
        <td>
            로그인 / 회원가입 페이지 <br />
            유저 인증, 카카오 소셜 로그인 <br />
            마이페이지 <br />
            주요 시설 위치 페이지 <br />
            사이드바 <br />
        </td>
    </tr>
</table>
<br/>

## 🎉 개발 기간

- 퍼블리싱 : 2024.05.01
- 기능 구현과 API 연결 : 2024.05.05
- 알파 테스트 : 2024.05.06
- 사이트 공개 : 2024.05.07

<br/>

## 🎉 프로젝트 시작

```
git clone https://github.com/EWHA-LIKELION/12th-Ewha-Festival-Front.git
npm install
npm start
```
<br/>

## 🎉 기술 스택

- Frontend : <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=Recoil&logoColor=white"> <img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styled-components&logoColor=white"> 
- Package Manager : <img src="https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white">
- Code Formmater : <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=React&logoColor=white">
- ETC :
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/> <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Google Analytics-F7B93E?style=flat-square&logo=Google&logoColor=white">
</br>

## 🎉 라이브러리

```
"@emotion/css": "^11.11.2",
"@emotion/react": "^11.11.4",
"@emotion/styled": "^11.11.5",
"@tanstack/react-query": "^5.34.1",
"@testing-library/jest-dom": "^5.17.0",
"@testing-library/react": "^13.4.0",
"@testing-library/user-event": "^13.5.0",
"axios": "^1.6.8",
"framer-motion": "^11.1.7",
"grapheme-splitter": "^1.0.4",
"history": "^5.3.0",
"https-browserify": "^1.0.0",
"react": "^18.2.0",
"react-cookie": "^7.1.4",
"react-dom": "^18.2.0",
"react-ga": "^3.3.1",
"react-intersection-observer": "^9.10.2",
"react-router-dom": "^6.23.0",
"react-scripts": "5.0.1",
"recoil": "^0.7.7",
"recoil-persist": "^5.1.0",
"stream-http": "^3.2.0",
"styled-components": "^6.1.8",
"styled-reset": "^4.5.2",
"swiper": "^6.8.4",
"web-vitals": "^2.1.4"
```

