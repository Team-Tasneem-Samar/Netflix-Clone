
import Movie from './Movie';

export default function MovieList(props) {
  return (
    <>
      {
      props.movies.map((movie) => {
        return (
          <>
            <Movie key={movie.id} movie={movie} updateMovie={props.updateMovie} />
          </>
        )
      })}
    </>
  )
}
