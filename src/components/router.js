import { RouterProvider, createBrowserRouter } from "react-router-dom"
import HomePage from "../pages/home-page"
import SingleMovie from "../pages/singleMovie";
import Movies from "../pages/movies";
import Search from  "../pages/search";


export default function Router(){
    const router = createBrowserRouter([
        {
            path:"/", 
            element:<HomePage/>,
        },
        {
            path:"/m/:id", 
            element:<SingleMovie/>,
        },
        {
            path:"/movies", 
            element:<Movies/>,
        },
        {
            path:"/search", 
            element:<Search/>,
        },
    
    
    ]);
    return(
      <RouterProvider router={ router}/>);
    
}