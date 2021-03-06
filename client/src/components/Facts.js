// imports from react
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Facts page component, displaying all the entries on one page
export default function Facts(props) {
  //Set results from the fetch to be displayed on the page
  const [results, setResults] = useState([]);

  //Fetches all the entry from the til MongoDB
  useEffect(() => {
    if (results.length === 0) {
      fetch("/api")
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
    //JSX HTML
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
      {/* Displays the journal results fetched from MongoDB */}
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
  );
}
