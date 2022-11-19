import { useDispatch, useSelector } from "react-redux";
import { addNote } from "./actions";
import "./App.css";
import Note from "./Note";
import { NotesState } from "./notesReducer";

const App = () => {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <div className="App">
        <Note addNote={onAddNote} />
      </div>
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
