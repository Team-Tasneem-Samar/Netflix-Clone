import  Modal  from "react-bootstrap/Modal";
import  Button  from "react-bootstrap/Button";
import Form  from "react-bootstrap/Form";
import { useRef } from "react";

export default function ModalMovie(props){
  let commentRef =useRef();

  function handleComment(e){
    e.preventDefault ();
    let userComment =commentRef.current.value;
    console.log({userComment});
    let newMovie= {...props.chosenMovie,userComment};
    props.updateMovie(newMovie,props.chosenMovie.id);
  }

  async function handleAddFav(e,movie){
    e.preventDefault();
    let url=`https://movie-ma.herokuapp.com/addMovie`
    let data={
      name: movie.title,
      time: movie.release_date,
      summary: movie.overview,
      image: movie.poster_path,
      comment: movie.comment,
    }
    console.log("data",data)
    let response= await fetch(url , {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data),
    })
    let addedMovie=await response.json();
    console.log("addedMovie", addedMovie);
  }
    return(
        <>
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: '#7F8487' }}>
          <Modal.Title>{props.chosenMovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#7F8487' }}>
          <img src={`https://image.tmdb.org/t/p/w400/${props.chosenMovie.poster_path}`} alt="Movie poster" />
          <br />
          {props.chosenMovie.comment ? props.chosenMovie.comment : 'No Comment'}
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control ref={commentRef} as="textarea" rows={3} placeholder="Entre your comment" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e) => handleComment(e)}>
              Submit Comment
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#7F8487' }}>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="danger" type="submit" data-dismiss="modal" onClick={(e) => handleAddFav(e, props.chosenMovie)} >
            Add To Favorite
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
