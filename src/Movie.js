import React , {Component} from 'react';
import './Movie.css';

// 아래 <MoviePoster/> 함으로써 componet 호출
//'Componet를 functional Component로 바꿔서 만듬. 같은 내용'
class Movie extends Component{



    render(){
        console.log(this.props);
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1> {this.props.title} </h1>
            </div>
        )
        
    }
}


class MoviePoster extends Component{
    render()
    {
        return( 
            <img src={this.props.poster}></img>
        )

    }
}

// function Movie({title,poster}){
//     return (
//         <div>
//             <MoviePoster poster={poster}></MoviePoster>
//         </div>
//     )
// }

// function MoviePoster({poster}){
//     return(
//         <img src={poster} alt="Movie Poster String"></img>
//     )
// }



export default Movie;