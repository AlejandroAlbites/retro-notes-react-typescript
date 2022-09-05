import React, { useContext } from "react";
import { NoteContext } from "../../context/NoteContext";
import "./navBar.scss";
import mario from "../../styles/images/mario.png";
import ash from "../../styles/images/ash.png";
import pokeball from "../../styles/images/pokeball.png";
import bulbasaur from "../../styles/images/bulbasaur.png";
import squirtle from "../../styles/images/squirtle.png";
import charmander from "../../styles/images/charmander.png";
import kirby from "../../styles/images/kirby.png";

type User = {
  createdAt?: string;
  email?: string;
  id?: number;
  name?: string;
  password?: string;
  updatedAt?: string;
  avatar?: string;
};

const arrayAvatar = [
  {
    name: "charmander",
    img: charmander,
  },
  {
    name: "mario",
    img: mario,
  },
  {
    name: "ash",
    img: ash,
  },
  {
    name: "pokeball",
    img: pokeball,
  },
  {
    name: "bulbasaur",
    img: bulbasaur,
  },
  {
    name: "squirtle",
    img: squirtle,
  },
  {
    name: "kirby",
    img: kirby,
  },
];

export const NavBar = () => {
  const { logout, noteState } = useContext(NoteContext);

  const user: User = noteState.dataUser;

  const avatar = arrayAvatar.find((item) => item.name === user.avatar);
  console.log(avatar);
  const handleClick = () => {
    logout();
  };

  return (
    <nav className="nes-container nav-bar-container">
      <div>
        <h1> {user.name} </h1>
        <img className="nes-avatar-img" src={avatar?.img} />
      </div>

      <button
        type="button"
        className="nes-btn is-warning btn-logout"
        onClick={handleClick}
      >
        Salir
      </button>
    </nav>
  );
};
