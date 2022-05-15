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
    props.updatedMovie(newMovie,props.chosenMovie.id);
  }
  async function handleAddMovie(e,movie){
    e.preventDefault();
    let url=`${process.env.REACT_APP_SERVER}/addMovie`
    let data={
      title: movie.title,
      poster_path: movie.poster_path,
      overview: movie.overview,
    }
    console.log("data",data)
    let response= await fetch(url , {
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data),
    })
    let addMovie=await response.json();
    console.log("addedMovie", addMovie);
  }
    return(
        <>
         <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.chosenMovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={`https://image.tmdb.org/t/p/w500${props.chosenMovie.poster_path}`} alt='movie image'/>
            <Form.Control type="text" placeholder="Enter your comment "/>

            <Button variant="primary" type="submit" onClick={(e)=>handleComment(e)}>
              submit comment </Button>
              <Button variant="primary" type="submit" onClick={(e)=>{handleAddMovie(e,props.chosenMovie)}}>
              Add to favourite</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
