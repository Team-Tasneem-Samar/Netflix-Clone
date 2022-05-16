
import { useState , useEffect } from "react";
import Card from 'react-bootstrap/Card'
import  Button  from "react-bootstrap/Button";

export default function FavList() {
    const [favMovies , setFavMovies] = useState();
    
     async function getFavMovies(){
       let url=`https://movie-ma.herokuapp.com/getMovies`
       let response = await fetch (url,{
         method:'GET'
       });
       let recivedData= await response.json();
       setFavMovies(recivedData);
     }
    
     async function handleDeleteMovie(id){
      let url=`https://movie-ma.herokuapp.com/DELETE?id=${id}`;
      let response = await fetch(url,{
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      if (response.status == 204){
        getFavMovies();
        alert("Movie deleted successfully");
      }
     }
         useEffect(()=> {
        getFavMovies();
         }, []);
    
      return (
        <>
          <h1> Favourite Movie Page </h1>
          {
            favMovies && favMovies.map((favMovie)=>{
              return(
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${favMovie.image}`} />
                  <Card.Body>
                  <Card.Title>{favMovie.name}</Card.Title>
                  <Card.Text>{favMovie.summary}</Card.Text>
                  <Card.Text>
                  {favMovie.comment}
                </Card.Text>
                  <Button variant="primary" onClick={()=>{handleDeleteMovie(favMovie.id)}}>Delete</Button>
                 </Card.Body>
                </Card>
              )
            })
          }
        </>
      );
    }