import  Modal  from "react-bootstrap/Modal";
import  Button  from "react-bootstrap/Button";
import Form  from "react-bootstrap/Form";

export default function ModalMovie(props){
    return(
        <>
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.chosenMovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={`https://image.tmdb.org/t/p/w500${props.chosenMovie.poster_path}`} alt='movie image'/>
            <Form.Control type="text" placeholder="Enter your comment "/>
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
