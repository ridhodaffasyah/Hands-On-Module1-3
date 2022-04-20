import React from 'react';
import { FaSearch } from "react-icons/fa";

function SearchComp({handleInput, fetchData, query}) {

    return (
        <div className='input'>
            <input
                placeholder='Cari gambar kesukaanmu'
                type='text'
                className="search-input"
                value={query}
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
    )

}

export default SearchComp;