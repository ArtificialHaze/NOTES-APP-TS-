import React, { ChangeEvent, useState } from "react";

type Props = {
  addNote(note: string): void;
};

const Note = ({ addNote }: Props) => {
  const [note, setNote] = useState("");

  const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const addNoteOnClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Note.."
      />
      <button onClick={addNoteOnClick}>ADD</button>;
    </>
  );
};

export default Note;
