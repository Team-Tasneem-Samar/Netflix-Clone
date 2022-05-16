import MovieList from './MovieList';
import { useEffect, useState } from 'react';


export default function Home() {
    const [movies, setMovies] = useState([]);
    
    async function getMovies() {
      let url = 'https://movie-ma.herokuapp.com/trending'
      let response = await fetch(url);
      let moviesData = await response.json();
      setMovies(moviesData);
    }

    function updateMovie(newMovie ,id){
        let updatedMovies =movies.map((movie)=>{
            if (movie.id===id)
            {
                movie.comment=newMovie.userComment;
                return movie;
            }
            else{

                return movie;
            }
    })
            setMovies(updatedMovies);
        
    }

    useEffect(() => {
      getMovies();
    }, []);
    return (
      <>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(18rem, 1fr))', backgroundColor: 'grey' }}>
          {
            (movies.length > 0) && <MovieList movies={movies} updateMovie={updateMovie}/>
          }
        </div>
      </>
    )
  }



