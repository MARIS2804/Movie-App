const API_KEY="0d0acab7b7cd3a3cf2558890b1ea76e1"
const BASE_URL="https://api.themoviedb.org/3";

export const getPopularMovies =async ()=>{
    const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data= await response.json()
    return data.results
}

export const searchmovies =async (query)=>{
    const response=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    const data= await response.json()
    return data.results
}