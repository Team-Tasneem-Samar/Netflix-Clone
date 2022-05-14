import Card from 'react-bootstrap/Card'
import { useState } from "react";
import ModalMovie from "./ModalMovie";
import Button  from 'react-bootstrap/Button';

export default function MovieList(props) {
    const [show, setShow] = useState(false);
    const [chosenMovie, setChosenMovies] = useState();

    const handleClose = () => setShow(false);
    const handleShow = (Movie) => {
        setChosenMovies(Movie);
        setShow(true);

    }
    return (
        <>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />
  <Card.Body>
    <Card.Title>{props.movie.title}</Card.Title>
    <Card.Text>{props.movie.overview}</Card.Text>
    <Button variant="primary" onClick={()=>{handleShow(props.movie)}}>add to favourite</Button>
  </Card.Body>
</Card>
            {
                chosenMovie && <ModalMovie  show={show} handleClose={handleClose} chosenMovie={chosenMovie} />
            }
          
        </>
    )
}







