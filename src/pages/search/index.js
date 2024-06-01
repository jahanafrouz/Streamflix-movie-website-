
import search from "../../assets/images/Search.svg";
import Style from "./style";
import Layout from "../../components/layout";
import api from "../../helpers/api"
import  { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSearchParams,createSearchParams } from "react-router-dom";

export default function Search(){
    const [data,  setData] = useState({data:[]});
    const [loading, setLoading] = useState(false);
    const[searchParams,setSearchParams] = useSearchParams();
    const onType = async(event) => {
        request(event.target.value);
    };
    useEffect(()=>{
        if(searchParams.get('q') ) {
            request(searchParams.get("q"));
        }
    },[]);
    const request = async(value) =>{
        try{
            setLoading(true)    
            // const response = await api.get("movies", {
            //     params: {
            //         q: value
            //     }
            // });
            const response = await api.get("/api/v1/movies", {
              params: {
                  q: value
              }
          });
            setSearchParams(createSearchParams({q: value}));
            setLoading(false);
            setData(response.data);
        } catch(e){
            setLoading(false);
        }};
    
    function renderFarm(){
        return data.data.map(function({id,poster,title}){
            return(
                <li className="results" key={id}>
                <Link to={`/m/${id}`} >
                <img className="results" src={poster}/>
                <h3  className="results" >{title}</h3>
                </Link>
                </li>
            )
        })
    }
    return(
        <Style>
            <Layout>
            <div className="wrapper">
                <h1>search</h1>
                 
                <Input  onChange={onType}  defaultValue={searchParams.get('q')} size="small" placeholder="Titles,genres,people..." prefix={<SearchOutlined />} />
    <br />
            </div>
            <div>
          {data.data.length > 0 && (
            <ul className="results">
              {renderFarm()}
            </ul>
          )}
          {data.data.length === 0 && (
            <div className="explain">
              {searchParams.get('q') && (
                <div>
                  <h5 className="undefined">Your search for "{searchParams.get('q')}" did not match any movie</h5>
                  <h5 className="undefined">Suggestions:</h5>
                  <ol className="undefined">
                    <li><h5>Try different keywords</h5></li>
                    <li><h5>Try using a movie or TV show title</h5></li>
                  </ol>
                </div>
              )}
            </div>
          )}
        </div>
            </Layout>
        </Style>
    );
      }