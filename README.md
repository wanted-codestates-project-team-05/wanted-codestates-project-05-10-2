# 프리온보딩 휴먼스케이프 과제 2조 <정민님,수영님>

저희팀은 과제의 페이지가 많지 않아 3조으로 나누어 진행하기로 하였습니다. <br>
그 덕분에 팀원들이 다양한 과제를 수행하여 많은 경험을 쌓을 수 있었습니다. <br>
각조마다 회의를 하고 특정 시간에 모든 팀원들이 모여 코드 리뷰와 해결되지 않은 부분을 공유하였습니다.

# 👨🏻‍⚕️ 페이지 설명

병명을 검색하면 그와 비슷한 병명을 찾아서 추천해주는 검색창 사이트 입니다.

### 👨🏻‍🎓 필수사항

- **Github Repository URL**
- **README.md**
  - 구현한 방법과 이유, 어려웠던 점에 대한 간략한 내용 서술
  - 누구나 따라 할 수 있을 정도의 자세한 실행 방법
  - 함수형 컴포넌트 사용 필수
- **secret key, api key 등을 레포지토리에 올리지 않도록 유의**
  - api주소를 env에 따로저장하여 gitignore설정을 해주었습니다.

### 💂 도전과제

- API 호출 최적화
  - 호출별로 로컬 캐싱을 구현합니다. (expire time까지도 있으면 좋음)
  - 입력 마다 호출하지 않고 자신만의 전략으로 API 호출 횟수를 줄입니다.
- 키보드만으로도 추천 검색어들로 이동이 가능
- 배포하여 웹에서 바로 사용 할 수 있도록 제공

## 👩‍🏫 실행방법

1. git clone

```jsx
git clone https://github.com/wanted-codestates-project-team-05/wanted-codestates-project-05-10-2.git
```

2. npm install

```jsx
npm install
```

3. npm run start

```jsx
npm run start
```

## 👩🏼‍💻 배포 링크

https://wanted-codestates-project-05-10-2.vercel.app/

## 👨🏻‍🔬 기술 스택

- React.js
- styled-components
- redux-toolkit, RTK Query

## <정민님>

### 구현한 내용

- search UI 및 반응형 구현

  <img width="500" src="https://user-images.githubusercontent.com/56882147/157842542-83a7af2f-bb56-4ab7-bebc-a5f773df65ca.gif" alt="responsive" />

- 키보드 DropDown 기능 구현

  <img width="500" src="https://user-images.githubusercontent.com/56882147/157842581-8d1d191b-1fd8-46d0-8163-da50b53ed94a.gif" alt="DropDown" />

  - 먼저 index를 찾기 위한 selected 상태와 api 요청을 위한 keyword 상태를 만들어주었습니다.
  - input 박스에 키워드를 검색하면 api 요청을 받아 일치하는 데이터가 있으면 하단에 데이터 리스트들이
    나타나도록 해주었습니다.
  - 그리고 input 박스에서 특정 방향키를 클릭하면 keyCode 값을 얻을 수 있는데 방향키 아래 or 방향키 위로에 값이 일치하는지 여부를 확인하고, data.length의 길이가 있다면 selected에 +1 or -1로 인덱스 위치를 찾아주었습니다.
  - 하단 리스트는 map으로 돌리기 때문에 인덱스가 존재하는데 selected와 인덱스가 일치하다면 selected라는 className을 추가하여 selected에 포커스를 주었습니다.
  - onClick 버튼을 주어 클릭 or 엔터를 치면 keyword에 해당 데이터의 name이 keyword에 저장되어 키워드와 일치하는 값이 하단에 나타나도록 해주었습니다.

### 어려웠던 점 && 해결

- 자동완성이라는 기능 구현이 생소하고 키보드만으로 추천 검색어들로 이동이 가능하게 구현하는 부분이 까다롭고 어려웠습니다.
  구글링을 통해 keyCode값으로 특정 키를 파악하는 방법과 clasName을 주어 focus 잡는 방법을 알아내어 해결하였습니다.

- 로딩중, 추천 검색어, 검색어 없음 메세지를 주려고 useEffect와 setTimeout등을 이용했지만,
  onChange의 함수 특성상 '암'이라고 검색하면 3번이 랜더링이 되어서 원하는 기능이 구현되지 않았습니다. 그래서 같은 조의 수영님이 Debounce설정을 해주시고, RTK의 isLoading기능을 이용하여 해결하였습니다.

## <수영님>

### 구현한 내용

RTK query 사용 네트워크 요청 데이터 상태 관리

![](https://images.velog.io/images/sooyoung159/post/4ba2240f-35d1-4de3-97f1-4dea3d257ef5/%EC%BA%A1%EC%B2%98.PNG)

- 리덕스 툴킷, RTK query 라이브러리를 사용하여 네트워크 요청 및 상태 관리를 합니다.
- 요청뿐만 아니라 상태관리 캐싱까지 가능해서 선택했습니다.
- 수명주기는 60초로 설정했습니다.
- debounce hook을 만들어 검색어 입력 이후에 데이터를 요청할 수 있습니다.

### 어려웠던 점 && 해결

- rtx query라는 것을 처음 봤으며 다른 비교 라이브러리보다 정보가 많이 없어 쉽지 않았지만, 공식문서를 따라가면 어렵지 않게 비동기 처리까지 가능했다.
