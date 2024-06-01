import { Fragment, useEffect, useState } from "react";
import Style from "./style";
import api from "../../helpers/api";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/layout";
import MovieListByGenre from "../../components/movieListByGenre";

export default function SingleMovie(props){
    const { id} = useParams();
    const {title,genre_id} = props;
    const [Data,setData] = useState({
        id: 1,
        title: "",
        poster: "",
        year: "",
        rated: "",
        released: "",
        runtime: "",
        director: "",
        writer: "",
        actors: "",
        plot: "",
        country: "",
        awards: "",
        metascore: "",
        imdb_rating: "",
        imdb_votes: "",
        imdb_id: "",
        type: "",
        genres: [
    
        ],
        images: [
        ]
    })
    const [loading, setLoading] = useState(false);
    useEffect(()=>{getApi();
    },[] );
    async function getApi(){
        try {
            setLoading(true);
            // const response = await api.get(`movies/${id}`);
            const response = await api.get(`api/v1/movies/${id}`);
            setData(response.data);
            setLoading(false);
        }
        catch(e){
            setLoading(false);
        }
    }
    
    const {id:MovieId, poster, title:MovieTitle, plot ,rated , year ,imdb_id} = Data
    return(
        <Layout>
    <Style>
  <div className="movie-information">
    <div className="wrapper">
       <div className="movie-information-wrapper">  
            <div className="poster">
                <img src={poster} alt={MovieTitle}/>
            </div>
            <div className="details">
                <h1>{MovieTitle}</h1>
                  <p><b>Year:</b> {year}</p>
                  <p><b>Rating:</b> {rated}</p>
                  <p><b>IMDB ID:</b> {imdb_id}</p>
                  <p>{plot}</p>
                 </div>
         </div>   
    </div>
    <div>
        <h3>More Like This</h3>
        <MovieListByGenre title="" genre_id="13"/>
    </div>
  </div>
    </Style>
    </Layout>);
   
}
