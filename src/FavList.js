
import { useState , useEffect } from "react";
import Card from 'react-bootstrap/Card'
import  Button  from "react-bootstrap/Button";

export default function FavList() {
    const [favMovies , setFavMovies] = useState();
    
     async function getMovies(){
       let url=`${process.env.REACT_APP_SERVER}/getMovies`
       let response = await fetch (url,{
         method:'GET'
       });
       let recivedData= await response.json();
       setFavMovies(recivedData);
     }
    
     async function handleDeleteMovie(id){
      let url=`${process.env.REACT_APP_SERVER}/DELETE/:id/${id}`;
      let response = await fetch(url,{
        method: 'DELETE',
      })
      if (response.status == 204){
        getMovies();
        alert("Movie deleted successfully");
      }
     }
         useEffect(()=> {
        getMovies();
         }, []);
    
      return (
        <>
          <h1> Favourite Movie Page </h1>
          {
            favMovies && favMovies.map((props)=>{
              return(
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} />
                  <Card.Body>
                  <Card.Title>{props.movie.title}</Card.Title>
                  <Card.Text>{props.movie.overview}</Card.Text>
                  <Button variant="primary" onClick={()=>{handleDeleteMovie(favMovies.id)}}>Delete</Button>
                 </Card.Body>
                </Card>
              )
            })
          }
        </>
      );
    }