import React from 'react';
import { FaSearch } from "react-icons/fa";
import Gif from '../../component/gif/gif';
import { useState } from 'react';


function Search() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    const key = process.env.REACT_APP_GIPHY_KEY;

    const fetchData = async (query) => {
        if (query === "") {
            return;
        }

        const gif = await fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${key}&limit=${12}`).then(response => response.json());
        setData(gif.data);
    }

    const handleInput = (e) => {
        e.preventDefault();
        setQuery(prevState => (prevState = e.target.value))
        fetchData(query)
    }

    return (
        <>
            <h1 className='title'>Search Gif<span>.</span></h1>
            <div className='input'>
                <input
                    placeholder='Cari gambar kesukaanmu'
                    type='text'
                    className="search-input"
                    onFocus={(e) => {e.placeholder=''}}
                    onBlur={(e) => {e.placeholder='Cara gambar kesukaanmu'}}
                    onChange={(e) => handleInput(e)}
                >
                </input>
                <button
                    value='Search'
                    type='submit'
                    className="search-button"
                    onClick={fetchData}
                >
                    <FaSearch />
                </button>
            </div>
            <div className='grid'>
            {data.map((gif, index) => <Gif key={index} title={gif.title} url={gif.images.fixed_width.url}/>)}
            </div>
        </>
    )
}

export default Search;