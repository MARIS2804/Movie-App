import MovieCard from "../components/MovieCard";
import { useState ,useEffect } from "react";
import {getPopularMovies,searchmovies} from '../services/api';
import '../css/Home.css';
function Home(){
    const [searchquery,setsearchquery]=useState("");
    const [movies,setmovies]=useState([]);
    const [error,seterror]=useState(null);
    const [loadingstate,setloadingstate]=useState(true);

    useEffect(()=>{
      const loadpopularmovies=async()=>{
        try{
          const popularmovies=await getPopularMovies();
          setmovies(popularmovies);
        }
        catch(error){
          console.log(error);
          seterror("Failed to load");
        }
        finally{
            setloadingstate(false);
        }
      }
      loadpopularmovies();
    },[])
    
      const handleClick= async (e)=>{
        e.preventDefault();
        if(!searchquery.trim()) return;
        if(loadingstate) return;
        try{
             const searchresults=await searchmovies(searchquery);
             setmovies(searchresults);
             seterror(null);
        }
        catch(err){
             console.log(err);
             seterror("Failed to search..");
        } 
        finally{
             setloadingstate(false);
        }
      };
   return (
      <div className="home">
        <form onSubmit={handleClick} className="search-form">
               <input type="text" placeholder="Search for a Movie...." className="search-input"
                 value={searchquery} onChange={(e)=>{setsearchquery(e.target.value)}}> 
               </input>
               <button type="submit" className="submit-btn">Search</button>
        </form>

        {error && <div className="error-message">Error</div>}

        {loadingstate ? (
  <div className="loading">Loading...</div>
) : (
  <div className="movies-grid">
    {movies
      .map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
  </div>
)}
            
      </div>


   )

}

export default Home