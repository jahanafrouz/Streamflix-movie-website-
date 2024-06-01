import { Fragment, useEffect, useState } from "react";
import Style from "./style";
import Layout from "../../components/layout";
import { Link } from "react-router-dom";
import api from "../../helpers/api";
import { Pagination } from 'antd';


export default function Movies(props){
    const [Loading,setLoading] = useState(false);
    const [data,setData] = useState({
        data:[],
        metadata: {
            current_page: 1,
            per_page: 2,
            page_count: 25,
            total_count: 250
            }
    })
    useEffect(
        ()=>{
            getApi()
        }
        ,[]
    );
    async function getApi(page="1"){
        try{
            setLoading(true);
            // const response = await api.get(`movies?page=${page}`);
            const response = await api.get(`api/v1/movies?page=${page}`);
            setData(response.data);
            setLoading(false);
        }catch(e){
            setLoading(false);
        }
    }
    function renderFarm(){
       return data.data.map(({id, title, poster})=>{
        return(
            <li key={id}>
                <Link to={`/m/${id}`}>
                    <img src={poster}/>
                    <h3>{title}</h3>
                 </Link>
                </li>
        )
       }
       ); 
    }
    function onChange(page, pageSize){
        getApi(page);
    }
    return(
        <Layout>
    <Style>
        <h1>Movies</h1>
        <ul className="list">{renderFarm()}</ul>
            <Pagination
             defaultCurrent={1}
             defaultPageSize={10}
             total={data.metadata.total_count} 
             showSizeChanger={false}
             onChange={onChange}
             />
    
    </Style>
    </Layout>);
   
}
