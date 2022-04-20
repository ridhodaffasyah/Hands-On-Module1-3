import Gif from '../../component/gif/gif';
import React from 'react';
import SearchComp from '../../component/gif/search';
import {useState} from 'react';


function Search() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    const key = process.env.REACT_APP_GIPHY_KEY;

    const fetchData = async () => {
        if (!query) {
            console.log("aa")
            return
        }

        const gif = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=${12}`)
        .then(response => response.json());
        setData(gif.data);
    }

    const handleInput = (e) => {
        e.preventDefault();
        setQuery(prevState => (prevState = e.target.value))
    }

    return (
        <>
            <h1 className='title'>Search Gif<span>.</span></h1>
            <SearchComp handleInput={handleInput} fetchData={fetchData} query={query}/>
            <div className='grid'>
            {data.map((gif, index) => <Gif key={index} title={gif.title} url={gif.images.fixed_width.url}/>)}
            </div>
        </>
    )
}

export default Search;