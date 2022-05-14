import MovieList from './MovieList';
import { useEffect, useState } from 'react';


    export default function Home() {

        const [data, setData] = useState([]);
    
    
        const getData =async ()=> {
            
            let url = "https://movie-ma.herokuapp.com/trending";
        
            const response = await fetch(url);
            const rRender = await response.json();

            setData(rRender); 
    
    
        }
    
    
        useEffect(() => {
            getData();
        }, [])
    
    
    return (
        <>
            <h1>Home Page</h1>
    
            <br />
            
            {
                (data.length>0)&& <MovieList movies={data}/>
            }
        
        </>
    )
}