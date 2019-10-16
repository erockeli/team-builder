import React, { useState } from "react";

const Form = props => {
  // console.log("this is our props",props);
  const [note, setNote] = useState({
    title: "",
    body: ""
  });
  const changeHandler = event => {
    setNote({ ...note, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };
  const submitForm = event => {
    event.preventDefault();
    props.addNewNote(note);
    setNote({ title: "", body: "" });
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        id="title"
        type="text"
        placeholder="title"
        onChange={changeHandler}
        value={note.title}
      />
      <label htmlFor="body">Description</label>
      <textarea
        name="body"
        id="body"
        placeHolder="Type your note here"
        onChange={changeHandler}
        value={note.body}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;