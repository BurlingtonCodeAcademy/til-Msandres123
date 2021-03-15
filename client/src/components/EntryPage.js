// imports from react
import React from "react";
import { useEffect, useState } from "react";
// Components used to delete and edit entry
import Edit from "./Edit";
import Delete from "./Delete";
//Entry page function
export default function EntryPage(props) {
  //State properties used to set the content of the pagfe based upon the specific Entry ID
  const [entry, setEntry] = useState({});
  const [entryId, setEntryId] = useState("");
  const [editClick, setEditClick] = useState(false);
  const [deleteClick, setDeleteClick] = useState(false);
  //Displays edit entry form allowing user to edit the entry when edit entry button is clicked
  function editClickHandler() {
    setEditClick(!editClick);
  }
  // Displays the modal box asking user to confirm that they want to delete the post or cancel
  function deleteClickHandler() {
    setDeleteClick(!deleteClick);
  }

  // Fetch used to gather and display the entry information and content
  useEffect(() => {
    if (entry.id !== props.match.params.id)
      fetch(`/api/${props.match.params.id}`)
        .then((res) => res.json())
        .then((entryContent) => {
          setEntryId(props.match.params.id);
          setEntry(entryContent);
        });
  });

  return (
    // JSX HTML
    <div>
      {/* Entry page header  */}
      <h2 id="entry-header">TIL Entry</h2>
      {/* Displays single entry on the entry page */}
      <div id="entry-container">
        {/* Delete Entry modal allows user to delete the entry from MongoDB */}
        {deleteClick && (
          <Delete entry={entry} deleteClickHandler={deleteClickHandler} />
        )}
        <h3>{entry.title}</h3>
        <h4>By: {entry.author}</h4>
        <p>{entry.content}</p>
        <h6>{entry.date}</h6>
        <h6>{entry.tags}</h6>
        {/* Displays the Edit Entry Component when clicked */}
        <button onClick={editClickHandler}>Edit Entry</button>
        {editClick && <Edit entry={entry} />}
        {/* Displays the Delete Entry Component when clicked */}
        <button onClick={deleteClickHandler}>Delete Entry</button>
      </div>
    </div>
  );
}
