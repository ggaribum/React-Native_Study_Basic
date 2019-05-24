## **React - Native** 

계획 - 

|  **항목**  |     **상세 내용**     | **진행 목표기간** |
| :--------: | :-------------------: | :---------------: |
| 인프런강의 | 초급 맛보기- 환경셋팅 |      ~05/03       |
|            |                       |                   |
|            |                       |                   |
|            |                       |                   |
|            |                       |                   |



React - Native [인프런 강의 -초급]

웹팩 -  최근 자바스크립트(ES6...등)를 브라우저가 이해할 수 있게 변경

리액트로 작업하려면 웹팩같은게 필요한데 facebook에서 제공하는 create react app 이용

* create reacte app 설치
  1. <https://leeph.tistory.com/25> 사이트 참고
  2.  node js 설치 후 개발 디렉토리 생성
  3. yarn 설치 (npm install --global yarn)
  4. create-react-app 글로벌 설치 (yarn global add create-react-app)
  5. 프로젝트 생성 npx create-react-app sampleApp)
  6. 프로젝트 디렉토리로 이동 (cd sampleApp)
  7. yarn으로 프로젝트 시작 (yarn start) - > git 에선 npm으로 프로젝트 생성 권장

* test app 생성하기
  1. npx create-react-app movie_app 명령어 입력
  2. cd movie_app으로 디렉토리 들어가서
  3. yarn start !!!!  -> react-scripts를 시작하게 됨
  4. 미리 설치된 개발서버(pre-built development server가 보이면서 접속)

* cd movie_app 폴더로 들어가서
  1. code . 입력 --> VSC(visual studio code)가 설치되있고 PATH및 code로 실행 등록해놔야함



-------

Movie_app을 만들어보자

[기초문법]

JSX -> react에서 쓰는 html영역...?

class 대신 - > className='"App"' 이렇게 씀

render -> 이 컴포넌트가 나에게 보여주는 것이 무엇인가 ? 에 대한 내용

yarn start하게 되면 모든 js파일을 읽어와서 html 파일에 넣어준다...?

public << index.html 보면 body부분에 대한 <div id="root">로 되어 있다
즉 index.js가 root이니깐 그걸 읽어오는데 index.js안에는 
App,js를 참조하게 되어있어서 그내용을 읽어와서 로드함

```js
/////////  index.js  /////////

import App from './App';
//App을 import
import * as serviceWorker from './serviceWorker';
//서비스 워커가 등록되어 있네 ? 이건 뭘까..?

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDom이 render(출력한다) - > App 컴포넌트를 -> root elment에 !!(index.html에 정의된 이름== div id="root"임)
//여기서 ReactDOM은 하나의 컴포넌트(App)만을 출력(render) 하고 있다.
```

reactDOM(Document Object Model)은 react를 웹사이트에 출력(render) 하는 걸 도와주는 모델

> React를 웹에 올리고 싶다 - > ReactDOM으로 올린다
>
> React를 앱에 올리고 싶다 -> ReactNative쓴다.





-------

[Movie.js] 만들기

1. App.js 처럼 똑같이 import 해서 Componet를 react로 쓸 수 있게 함.
2. 중요한 점은 render() 가 꼭 필요하다!!!  + return
3. App.js에서 Movie.js를 받기위해 import Movie from './Movie'; 해준다.
4. App.js body가 될 div 부분에 <Movie/> 만 작성하면 끝~
5. Movie.js 안에 render() 안에 return( 내용들 ) 이 있어야 한다.
6. 마지막 에 export...를 작성해서 app.js로 해당 컴포넌트를 내보낸다

> 참고로 작성한 js부분 모두 저장해줘야 정상작동 됨~~ 까먹지말길~

절차를 정리하자면 

컴포넌트 생성 < 렌더 < 리턴 < html 내용 작성 < 브라우저에서 확인~
import react < class < RENDER 



----

#6 Data flow with Props

props 

-> 부모 컴포넌트가 자식컴포턴트에 정보를 전달한다 () - > 메인컴포넌트가 정보를 다
관리하고 그걸 각각 자식 컴포넌트에게 넣어주는 의미!!

-> 부모 컴포넌트 (App.js) 에서 const 값(==배열)을 만들고 자식컴포넌트를 불러오는부분
<Movie /> 안에 원하는 변수명과 값을 넣어준다.
ex) <Movie title= { constName[ num ] }  - > 자식컴포넌트에서 사용하기 위해 바인딩 해준다.
ex ) **{ this.props.constName }**

> * 주의해야할 점은 const 변수명과 props로 사용할(==title) 변수명이 같아야한다
> * 자식컴포넌트에서는 위에서 만든 props로 사용할 변수명을 호출한다.



------------

#7 Lists with .map



map

-> 새로운 array를 만든다. 즉, 기존의 array의 엘리먼트들을 하나씩 다 읽어와서 map()을 통해 하나씩 새로 연산혹은 연결해준다.

> Syntax - Example
>
> ```javascript
> var new_array = array.map(function callback(currentValue, index, arr){
> return element for new_array
> }  [, thisValue] )
> ```
>
> 

ex)  movie 가 위의 **currentValue** , <Movie ~~ >가 **new array**가 되는거임

```javascript
 movies.map(movie =>{
          return <Movie title={movie.title} poster={movie.poster} />
        })
```



- 리액트는 읽어올 array의엘리먼트가 많을경우unique  key를 줘야한다. 

- ```javascript
  {
          movies.map((movie, index) =>{
            return <Movie title={movie.title} poster={movie.poster} key={index} />
          })
        }
  ```

  

-----------

#8 Validating Props with Prop Types.

-> Prop-Types라는걸 이용해서 API 혹은 부모 컴포넌트로 부터 
불러오는 DATA 타입을 확인 및 검증할 수 있다.''

-----

#9 Component Lifecycle

[ Render와 같은 경우]

* componentWillMount - ex) api 작업요청
* Render - ex ) 데이터 관련작업
* componentDidMount - ex) 
  순서로 호출된다.

[Update와 같은 경우]

* componentWillReceiveProps() - 새로운 props를 받는다
* shouldComponentUpdate() - 새로운 props를 살펴본 다음 이전과 다르면 update=true라고 판단
* componentWillUpdate() - 업데이트 한다. (프로그레스 바 만들 수 있음)
* render() 
* componet

-----------

#10 Thinking in React Component State

state : 컴포넌트 안에있는 오브젝트

state가 바뀔 때마다 컴포넌트는 다시 render한다.

예제로 mount된 이후 5초뒤에 state가 변화되는걸 작성

```javascript
state ={
    greeting : 'Hello!!'
  }


  componentDidMount(){
    setTimeout(()=> {
      this.setState({
        greeting : 'Hello Again'
      })
    }, 5000)
  }
```

--------

#11 Practicing this setState

State 연습하기!

"컴포넌트 외부에 이는 무비 리스트를 state 안으로 옮기기"

//setTimeout 활용하기

```react
componentDidMount()
{
    setTimeout(func , time) // time초 후에 페이지가 로드하고 func 작업싶행
}
```

```react
setTimeout(function(){
		console.log('Hello상범')
 	},1000)
 	
//두 개 같은 코드

 setTimeout(()=> {
      console.log('Hello상범')
    },1000)
```



```react
setTimeout(()=> {
      this.setState(
        {
          movies: [
            ...this.state.movies,
            {title: 'Transformer'}
          ]
        }
      )
    },1000)
  } //1초뒤에 movies[] 에 title:'Transformer'을 추가하라
```

**위에 ...this.state.movie 부분은 ** 이전 리스트를 그대로 두고 추가! 하라는 의미.
왜냐면 this.setState에서 movies[] 로 새로 정의해 버리니깐 이전에 movies[]는 사라짐...ㅎㅎㅎ

## **setState를 활용해서 scroll 등이 내려갈 때 이벤트를 조정할 수 잇따^^**

---------

#12 Loading states

API콜을 타임아웃 기능으로 유사하게 구성해보자

List를 componentDidMount() 안에 setState에서 구성해보고 싶은데 로직상 render가 먼저 실행된다. 하지만 render에서는 List를 먼저읽어오게 되고 텅텅비어있는 state{}안에서 movies property를 찾지 못하니깐 에러! - > 이 때 Loading states를 쓴다.

```react
//_renderMovies라는 새로운 function 정의 최신자바스크립트 방식
_renderMovies = () =>{
    const movies =this.state.movies.map((movie, index) =>{
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }

//render영역 !!

  render(){
    return (
      <div className="App">
      {this.state.movies ? this._renderMovies() : 'Wait!! Loading...'}
   
    </div>
    );
  }
```

> "this.state.movies ? trueFun() : falseFun() " 을 통해 state에 movies가 있는지 없는지에 따라 실행하는 function을 다르게 구성

위와같은 작업(state 에 원하는 데이터 값이 있는지 없는지 판별)없이 바로 render에서 state에 접근하게 되면 Error가 뜬다 이것이 **Loading State의 핵심**


--------

#13 Smart vs Dumb Components

- state가 있고 없고의 차이 
- 기존에 Component를 만들어서 render로 this.props ... 그리고 state를 조작한걸
  간단하게 노출만 시키고 싶을 때는 이렇게 return으로만 functional하게 만들 수 있음

```react
function Movie({title,poster}){
    return (
        <div>
            <MoviePoster poster={poster}></MoviePoster>
        </div>
    )
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt="Movie Poster String"></img>
    )
}
```



------------

#14 Ajax on React

AJAX로 JSON형태의 API 호출

------

#15 promise

순서 정리

-------

#16 Async Await

Async - > 작업이 끝나기를 기다리지 않고 병렬적으로(동시) 실행시키게 하는것

Await - >  해당 작업이 Succeed가 아니라 Finish 할 떄 까지 기다린다. 거기에 따른 리턴이 무엇이든지 간에.

```react

해당 메서드는 fetch(AJAX)
async _getMovies =() =>{
    const movies = await this._callApi()
    //위의 await 뒤에 func의 리턴값을 movies에 집어넣고
    //아래 setState에 movies를 넣는다
    //따라서 callApi() fucn은 리턴이 있어야한다!
    this. setState({
        //movies
    })
}


_callApi() = ()=>{
    return fetch('url...')
    .then(helloBeom => helloBeom.json) //병렬수행- helloBeom안에 fetch의 리턴값을 집어넣고 json형태로 변환하여 집어넣는다.
    .then(json => return json.data.movies) //=> 가 있으므로 return 빼도됨.
}
```















-----------

# **[별첨]** Visual Studio Code 단축키

![](C:\Users\USER\Desktop\공부할 것들\공부한 것들\visualStudioCode단축키.PNG)