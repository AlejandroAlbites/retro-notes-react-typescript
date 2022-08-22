import { createContext } from "react";
import { NoteState } from "../interfaces/interfaces";

export type NoteContexProps = {
    noteState: NoteState,
    noteId: (id: string) => void,
    loginUser: (data: any) => Promise<void>
    registerUser: (data: any) => Promise<void>
}
export const NoteContext = createContext<NoteContexProps>({} as NoteContexProps);