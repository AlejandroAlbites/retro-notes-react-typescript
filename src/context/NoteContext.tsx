import { createContext } from "react";
import { NoteState } from "../interfaces/interfaces";

export type NoteContexProps = {
  noteState: NoteState;
  noteId: (id: string) => void;
  notification: (isNotification: boolean, type: string) => void;
  logout: () => void;
  loginUser: (data: any) => Promise<void>;
  registerUser: (data: any) => Promise<void>;
  getUserById: () => Promise<any>;
  createNote: (data: any) => Promise<any>;
  updateNote: (data: any, id: string) => Promise<any>;
  deleteNote: (id: string) => Promise<any>;
  getNotes: () => Promise<any>;
  noteSpaceView: (view: string) => void;
  avatar: (avatarImage: string) => void;
  loginValidate: (isLoginValidate: boolean) => void;
  valuesAuth: any;
};
export const NoteContext = createContext<NoteContexProps>(
  {} as NoteContexProps
);
