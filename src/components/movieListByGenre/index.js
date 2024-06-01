import { Fragment, useEffect, useState } from "react";
import Style from "./style";
import api from "../../helpers/api";
import { Link } from "react-router-dom";

export default function MovieListByGenre(props){
    const {title,genre_id} = props;
    const [moviesData,setMoviesData] = useState({
        dtat:[],
    })
    const [loading, setLoading] = useState(false);
    useEffect(()=>{getApi();
    },[] );
    async function getApi(){
        try {
            setLoading(true);
            // const response = await api.get(`/genres/${genre_id}/movies`);
            const response = await api.get(`api/v1/genres/${genre_id}/movies?page={page}`);
            setMoviesData(response.data);
            setLoading(false);
        }
        catch(e){
            setLoading(false);
        }
    }
    
    function renderFarm(){
            if (!moviesData.data) {
              return <p>Loading...</p>;
            }
        
        return moviesData.data.map(({id ,poster,title}) => {
            return (
                <li key={id}>
                    <Link to={`/m/${id}`}>
                        <img src={poster} alt={title}/>
                        <h3>{title}</h3>
                    </Link>
                </li>
            );
        });
    }; 
    return(<Style>
        <h2>{title}</h2>
        <ul>{renderFarm()}</ul>
    </Style>);

}
