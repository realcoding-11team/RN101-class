# RN101-class

Example for React Native 101 class. Each commit represents each step.

## How to run

### Clone the repository

```bash
$ git clone https://github.com/cwdoh/RN101-class.git
```

### Install whole dependencies

```bash
$ cd RN101-class
$ npm install
```

### Execute

```bash
$ npm run start
```

### 도시 목록 인터페이스 변경

IOS 13의 업데이트를 고려하여 첫 화면에서 도시 목록을 다크테마로 변경했습니다. 보기 좋게 폭도 약간 수정했습니다. 
'>' 모양을 추가하여 버튼의 느낌을 강조했습니다. 

### 로딩화면 추가

도시를 눌렀을때 로딩되는 화면(gif)를 추가했습니다.

### 정보 추가

도시를 눌렀을때, 열람할 수 있는 정보를 추가했습니다.
추가한 정보에는 최대 기온, 최저 기온, 습도와 같이 일반적인 날씨 앱에서 자주 보는 내용을 추가했습니다.
각 정보에 해당하는 단위도 알맞게 추가했으며, 현재 온도 같이 중요한 정보는 큰 글씨로 추가했습니다.

### 주요 날씨 정보

비, 눈, 맑음 등의 현재의 주된 날씨를 글씨로 표기하기 보다는 직관적으로 보여주기 위해 해당하는 이미지를 띄웠습니다.
안개를 비롯해 몇몇 날씨에 대해서 적절한 이미지를 찾기 못해 그외의 경우는 모두 cloud를 표기하도록 했습니다. 
적절한 이미지를 찾는다면 케이스를 추가하도록 하겠습니다.

### 기타 문자열

원래 표기되던 부분 중 메시지를 보기 좋은 방향으로 수정했습니다. 
weather info 와 같은 출력문이나 섭씨 기호도 일반 문자로 사용하면 보기 좋지 않아 이미지를 사용했습니다.
