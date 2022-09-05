import React, {
  Children,
  useCallback,
  useMemo,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { Note, NoteState } from "../interfaces/interfaces";
import { NoteContext } from "./NoteContext";
import { noteReducer } from "./noteReducer";

const BASE_URL = process.env.REACT_APP_URL_BACKEND;
interface Props {
  children: JSX.Element | JSX.Element[];
}

const initial_state: NoteState = {
  notes: [],
  noteId: "",
  notification: [],
  isLogin: false,
  dataUser: {},
  NoteSpaceView: "hidden",
  avatarImage: "mario",
  isLoginValidate: false,
};

export const NoteProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token")
  );

  const [noteState, dispatch] = useReducer(noteReducer, initial_state);

  const noteId = (id: string) => {
    dispatch({ type: "noteId", payload: id });
  };
  const notification = (isNotification: boolean, type: string) => {
    dispatch({ type: "notification", payload: [isNotification, type] });
  };

  const noteSpaceView = (view: string) => {
    dispatch({ type: "NoteSpaceView", payload: view });
  };

  const avatar = (avatarImage: string) => {
    dispatch({ type: "avatarImage", payload: avatarImage });
  };

  const loginValidate = (isLoginValidate: boolean) => {
    dispatch({ type: "isLoginValidate", payload: isLoginValidate });
  };

  const logout = useCallback(function () {
    window.localStorage.removeItem("token");
    setIsAuthenticated(null);
    dispatch({ type: "isLogin", payload: { isLogin: false } });
    dispatch({ type: "dataUser", payload: { dataUser: {} } });
    dispatch({ type: "NoteSpaceView", payload: "hidden" });
  }, []);

  const loginUser = useCallback(async (data: any) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/user/login`, {
        email: data.email,
        password: data.password,
      });

      if (response.data.ok) {
        window.localStorage.setItem("token", response.data.token);
        setIsAuthenticated(response.data.token);
        dispatch({ type: "isLogin", payload: { isLogin: true } });
        dispatch({ type: "dataUser", payload: response.data.data });
      }
    } catch (error: any) {
      if (!error.response.data.ok) {
        loginValidate(true);
      }
    }
  }, []);

  const registerUser = useCallback(async (data: any) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/user/`, {
        name: data.fullName,
        email: data.email,
        password: data.password,
        avatar: data.avatar,
      });
      if (response.data.ok) {
        window.localStorage.setItem("token", response.data.token);
        setIsAuthenticated(response.data.token);
        dispatch({ type: "isLogin", payload: { isLogin: true } });
        dispatch({ type: "dataUser", payload: response.data.data });
      }
    } catch (error: any) {
      if (!error.response.data.ok) {
        loginValidate(true);
      }
    }
  }, []);

  const valuesAuth = useMemo(
    () => ({
      loginUser,
      registerUser,
      logout,
      isAuthenticated,
    }),
    [loginUser, registerUser, logout, isAuthenticated]
  );

  // notes

  const getNotes = async () => {
    try {
      const token = localStorage.getItem("token") || "";
      if (!token) {
        return false;
      }
      const response = await axios.get(`${BASE_URL}/api/note/`, {
        headers: {
          "x-token": token,
        },
      });

      dispatch({ type: "notesByUser", payload: response.data.data });
    } catch (error) {
      console.log(error);
    }
  };

  const createNote = useCallback(async (data: any) => {
    try {
      const token = localStorage.getItem("token") || "";
      if (!token) {
        return false;
      }
      const response = await axios.post(
        `${BASE_URL}/api/note/`,
        {
          name: data.name,
          text: data.text,
          favorite: data.favorite,
        },
        {
          headers: {
            "x-token": token,
          },
        }
      );
      if (response.data.ok) {
        notification(true, "note created");
        noteId(response.data.data._id);
        noteSpaceView("showCurrentNote");
        dispatch({ type: "addNote", payload: response.data.data });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getNoteById = useCallback(async (id: string) => {
    try {
      const token = localStorage.getItem("token") || "";
      if (!token) {
        return false;
      }
      const response = await axios.get(`${BASE_URL}/api/note/${id}`, {
        headers: {
          "x-token": token,
        },
      });
      if (response.data.ok) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getUserById = useCallback(async () => {
    try {
      const token = localStorage.getItem("token") || "";
      if (!token) {
        return false;
      }
      const response = await axios.get(`${BASE_URL}/api/user/userId`, {
        headers: {
          "x-token": token,
        },
      });
      if (response.data.ok) {
        dispatch({ type: "isLogin", payload: { isLogin: true } });
        dispatch({ type: "dataUser", payload: response.data.data });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const updateNote = useCallback(async (data: any, id: string) => {
    try {
      const token = localStorage.getItem("token") || "";
      if (!token) {
        return false;
      }
      const response = await axios.put(
        `${BASE_URL}/api/note/update/${id}`,
        {
          name: data.name,
          text: data.text,
          favorite: data.favorite,
        },
        {
          headers: {
            "x-token": token,
          },
        }
      );

      if (response.data.ok) {
        dispatch({ type: "updateNote", payload: response.data.data });
        notification(true, "note updated");
        noteSpaceView("showCurrentNote");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteNote = useCallback(async (id: string) => {
    try {
      const token = localStorage.getItem("token") || "";
      if (!token) {
        return false;
      }

      const response = await axios.delete(`${BASE_URL}/api/note/delete/${id}`, {
        headers: {
          "x-token": token,
        },
      });

      if (response.data.ok) {
        dispatch({ type: "deleteNote", payload: response.data.data });
        notification(true, "note deleted");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <NoteContext.Provider
      value={{
        noteState,
        noteId,
        notification,
        logout,
        loginUser,
        registerUser,
        valuesAuth,
        getNotes,
        noteSpaceView,
        createNote,
        updateNote,
        deleteNote,
        avatar,
        loginValidate,
        getUserById,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
