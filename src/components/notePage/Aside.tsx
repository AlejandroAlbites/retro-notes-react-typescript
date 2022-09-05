import React, { useContext, useEffect, useState } from "react";
import { NoteContext } from "../../context/NoteContext";
import { Note, NoteState } from "../../interfaces/interfaces";
import "./aside.scss";
import { NoteSpace } from "./NoteSpace";
import arrow1 from "../../styles/images/arrow1.png";
import arrow2 from "../../styles/images/arrow2.png";

export const Aside = () => {
  const [showAsideMenu, setShowAsideMenu] = useState(false);

  const { noteState, noteId, noteSpaceView } = useContext(NoteContext);
  const [data, setData] = useState<NoteState["notes"]>([]);
  const [newFilter, setNewFilter] = useState("");
  const [favoriteFilter, setFavoriteFilter] = useState<boolean>(false);

  const noteCurrent: Note | undefined = noteState.notes.find(
    (note) => note.id === noteState.noteId
  );

  const search = noteState.notes.filter((note) =>
    note.name.toLowerCase().includes(newFilter.toLowerCase())
  );
  const searchFavorite = data.filter((note) => !!note.favorite === true);
  useEffect(() => {
    favoriteFilter ? setData(searchFavorite) : setData(search);
  }, [noteState.notes, newFilter, favoriteFilter]);

  const handleClick = () => {
    noteSpaceView("showCreateNote");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFavoriteFilter(e.target.checked);
  };

  const handleMenu = () => {
    setShowAsideMenu(!showAsideMenu);
    console.log(showAsideMenu);
  };
  return (
    <>
      <svg
        className={`img-action-aside-hidden ${!showAsideMenu && "active"}`}
        onClick={() => handleMenu()}
        width="24"
        height="24"
      >
        <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 7 19.091V4.909z"></path>
      </svg>
      <aside className={`aside-container ${showAsideMenu && "active"}`}>
        <section className="aside-options">
          <div>
            <svg
              className="img-action-aside"
              onClick={() => handleMenu()}
              width="24"
              height="24"
            >
              <path d="M18.464 2.114a.998.998 0 0 0-1.033.063l-13 9a1.003 1.003 0 0 0 0 1.645l13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-.536-.886zM17 19.091 6.757 12 17 4.909v14.182z"></path>
            </svg>
            <button
              type="button"
              className="nes-btn is-primary"
              onClick={handleClick}
            >
              Crear Nota
            </button>
          </div>
          <div className="nes-field">
            <input
              type="text"
              id="name_field"
              className="nes-input input-form input-search"
              placeholder="Buscar Nota"
              value={newFilter}
              onChange={(e) => setNewFilter(e.target.value)}
            />
          </div>
          <label>
            <input
              type="checkbox"
              className="nes-checkbox input-check"
              onChange={handleChange}
            />
            <span>Filtra tus Favoritos</span>
          </label>
        </section>

        <section className="notes-list">
          {data.length > 0 &&
            data.map((item) => (
              <div
                key={item.id}
                className={
                  noteCurrent?.id === item.id ? "note-name-select" : "note-name"
                }
                onClick={() => {
                  noteId(item.id);
                  noteSpaceView("showCurrentNote");
                }}
              >
                <div className="list-note-container">
                  {!!item.favorite === true && (
                    <div className="favorite-star-container">
                      <i
                        className="nes-icon is-small star"
                        onClick={handleClick}
                      ></i>
                    </div>
                  )}
                  <h1>{item.name}</h1>
                </div>
              </div>
            ))}
        </section>
      </aside>
    </>
  );
};
