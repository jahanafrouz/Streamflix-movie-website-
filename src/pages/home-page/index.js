import { Fragment } from "react";
import Layout from "../../components/layout";
import MovieListByGenre from "../../components/movieListByGenre";
import HeroSection from "../../components/heroSection";


export default function HomePage(){
    return(
        <Layout>
          <HeroSection/>
          <MovieListByGenre title="Family" genre_id="13"/>
          <MovieListByGenre title="Romanc" genre_id="16"/>
          <MovieListByGenre title="Crime" genre_id="1"/>
          <MovieListByGenre title="Action" genre_id="3"/>
          <MovieListByGenre title="Animation" genre_id="15"/>
          <MovieListByGenre title="History" genre_id="5"/>
          <MovieListByGenre title="Fantasy" genre_id="7"/>
          <MovieListByGenre title="War" genre_id="14"/>
          <MovieListByGenre title="Mystery" genre_id="11"/>
         
        </Layout>
    );
}