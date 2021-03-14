//imports from react
import React from "react";
import { useState } from "react";
//Edit Entry Functional Component
export default function Edit(props) {
  // State properties display the entry information in inputs and allows user to alter them
  const [editAuthor, setEditAuthor] = useState(props.entry.author);
  const [editTitle, setEditTitle] = useState(props.entry.title);
  const [editContent, setEditContent] = useState(props.entry.content);
  return (
    //   JSX HTML
    <div>
      {/* form allows user to edit the entry displayed on the pager */}
      <form method="POST" action={`/api/${props.entry._id}`}>
        {/* Author is displayed in text input and user is able to alter the author's name */}
        <input
          type="text"
          name="author"
          placeholder="author"
          value={editAuthor}
          onChange={(evt) => setEditAuthor(evt.target.value)}
        />
        <br />
        {/* Title is displayed in text input and user is able to alter the titles's name */}
        <input
          type="text"
          name="title"
          value={editTitle}
          onChange={(evt) => setEditTitle(evt.target.value)}
        />
        <br />
        {/* The content of the entry is displayed in the text are and user is able to alter the content of the entry */}
        <textarea
          name="content"
          placeholder="Write Your Entry Here"
          style={{ width: "25vw", height: "15vh" }}
          value={editContent}
          onChange={(evt) => setEditContent(evt.target.value)}
        ></textarea>
        <br />
        {/* User is able to select tags to be attached to the entry */}
        <label>Select Tags:</label>
        <div id="tag-container">
          <div id="tags-left">
            <label>
              <input type="checkbox" name="tags" value="Dungeons and Dragons" />
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
        {/* Once user clicks the submit button the edits made on page are saved to the MongoDB */}
        <input type="submit" />
      </form>
    </div>
  );
}
