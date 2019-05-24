import React, {Component} from 'react';
//import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Movie from './Movie';




class App extends Component
{

  state ={
    
  }
  componentDidMount(){
    // setTimeout(function(){
    //   console.log('Hello상범')
    // },1000)
    setTimeout(()=> {
      this.setState(
        {
          movies :[
            {
              title: "Matrix",
              poster: "https://irs.www.warnerbros.com/keyart/movies/media/browser/Matrix_2000x3000.JPEG"
            },
            {
              title : "Full Metal Jacket",
              poster : "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
            },
            {
              title : "Oldboy",
              poster : "https://m.media-amazon.com/images/M/MV5BNjY0ZmY5NjQtMWM1Yy00NmE0LWI1YTYtZWYzZGNjNzQwNjcxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTc0Njg2Mzg@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
            }
          
          ]
        }
      )
    },3000)
  }
  _renderMovies = () =>{
    const movies =this.state.movies.map((movie, index) =>{
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }

  render(){
    return (
      <div className="App">
      {this.state.movies ? this._renderMovies() : 'Wait!! Loading...'}
      {/* {this.state.movies.map((movie, index) =>{
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })} */}


    </div>
    );
  }
}

//<Movie title={movies[0]}  poster={movieImg[0]}/>


// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

export default App;
/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <h2>Welcome to React helloBeom</h2>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/