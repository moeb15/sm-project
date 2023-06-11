import { React,useState } from "react";
import "./css/homepage.css";
import { Link } from "react-router-dom";
import axios from "axios";
//import SearchResult from "./usersearch";

const HomePage = () => {
    const [getSearch,setSearch] = useState('');

    const searchPeople = async() =>{
        try{
            const result = await axios.post("http://127.0.0.1:5000/users/search");
            console.log(result);
        }catch(err){
            console.log(err)
        }
    };

    

    return (
        <div className="homepage">
            <div className="home_header">
                <form className="search-people">
                        <input type="text" 
                        placeholder="Find Friends"
                        value={getSearch}
                        onChange={(e)=>{setSearch(e.target.value)}}
                        onKeyDown={(e)=>{
                            if(e.key === 'Enter' && getSearch !== ''){
                                searchPeople(getSearch)
                            }
                        }}/>
                </form>

                <div className="dashboard">
                    <Link>My Account</Link>
                    <Link>Friends</Link>
                    <Link>Posts</Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;