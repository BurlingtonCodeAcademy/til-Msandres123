//imports from react
import React from 'react'
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";

// functoinal component used to display specific search results 
export default function SearchResults(props) {
    //Set results from the fetch to be displayed on the page
    const [results, setResults] = useState([]);
    //Takes query params from frontend and uses them to fetch specific search results
    let searchParams = window.location.href.split("/search/") 
    
    //Fetch displays specific entries based upon the key value pairs entered into the search form
    useEffect(() => {
        if (results.length === 0) {
          fetch(`/searchs/${searchParams[1]}`)
            .then((res) => res.json())
            .then((entryList) => {
              setResults(entryList);
            });
        }
      });
      //Used to put objects fetched from backend into an array which allows them to be properly displayed on Facts page
      let entryArr = [];
    
      results &&
        results.forEach((entry) => {
          entryArr.push(entry);
        });
    
    return (
        // JSX HTML 
        <div id="facts-style">
      <h1>Browser Entries</h1>
      {/* Form used to define search category (dropdown lets the user select the ) */}
      <form method="GET" action="/search/">
        <select name="searchType" >
          <option value="not-selected">Search By Category</option>
          <option value="author">Author</option>
          <option value="title">Title</option>
        </select>
        <input type="text" name="searchValue" />
        <input type="submit" value="search" />
      </form>
       {/* Displays the journal results fetched from MongoDB that match search results (not currently working)*/}
      {entryArr.map((entry, index) => {
        return (
          <div id="entry-container">
            <Link to={`/facts/${entry._id}`}>
              <h3 key={index}>{entry.title}</h3>
            </Link>
            <h4>By: {entry.author}</h4>
            <p>{entry.content}</p>
            <h6>{entry.date}</h6>
            <h6>{entry.tags} </h6>
          </div>
        );
      })}
    </div>
    )
}
