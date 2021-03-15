import React from "react";
//Delete Modal Functional Component
export default function Delete(props) {

  return (
    // JSX HTML
    // Style for the delete modal box
    <div
      style={{
        textAlign: "center",
        height: "100px",
        width: "500px",
        border: "1px solid black",
        backgroundColor: "gray",
        position: "absolute",
        float: "left",
        marginLeft: 100,
        marginTop: 30,
        zIndex: 500,
      }}
    >
      {/* Ask user if they are sure they want to delete the entry */}
      <h5>Are you Sure you want to delete this entry?</h5>
      {/* Cancel and delte buttons */}
      <div id="delete-modal-buttons">
        {/* form deletes entry displayed on the page */}
        <form action={`/delete/${props.entry._id}`} Method="POST">
          <input id="delete-modal-button-style" type="submit" value="Delete" />
        </form>
        {/* Cancel button makes delete modal disappear */}
        <button
          id="delete-modal-button-style"
          onClick={props.deleteClickHandler}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
