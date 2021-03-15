// import from react
import React from "react";
// function for the home page
export default function Home() {
  return (
    //JSX HTML
    <div id="home-style">
      {/* Header for the Home Page */}
      <h2>Submit Your Entry Here:</h2>
      <div>
        {/* Form to allow user to submnit a new Entry and adds it to mongoDB storage */}
        <form method="POST" action="/api" id="entry-form-container">
          {/* Author input */}
          <input
            type="text"
            name="author"
            placeholder="author"
            style={{ width: "6vw" }}
          />
          <br />
          {/* Title input */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            style={{ width: "15vw" }}
          />
          <br />
          {/* Text area for user to enter content of the post */}
          <textarea
            name="content"
            placeholder="Write Your Entry Here"
            style={{ width: "25vw", height: "15vh" }}
          ></textarea>
          <br />
          {/* Collection of tags for user to select from */}
          <label>Select Tags:</label>
          {/* Tag containers allow for CSS styling to display them as in 2x3 grid style */}
          <div id="tag-container">
            <div id="tags-left">
              <label>
                <input
                  type="checkbox"
                  name="tags"
                  value="Dungeons and Dragons"
                />
                Dungeons and Dragons
              </label>
              <label>
                <input type="checkbox" name="tags" value="Mountain Biking" />
                Mountain Biking
              </label>
              <label>
                <input type="checkbox" name="tags" value="Sending It" />
                Sending It
              </label>
            </div>
            <div id="tags-right">
              <label>
                <input type="checkbox" name="tags" value="Coding" />
                Coding
              </label>
              <label>
                <input type="checkbox" name="tags" value="Sunshine" />
                Sunshine
              </label>
              <label>
                <input type="checkbox" name="tags" value="Dogs" />
                Dogs
              </label>
            </div>
          </div>
          <br />
          {/* When Submit button is clicked the entry is added to MongoDB */}
          <input type="submit" value="Submit Entry" style={{ width: "15vw" }} />
        </form>
      </div>
    </div>
  );
}
