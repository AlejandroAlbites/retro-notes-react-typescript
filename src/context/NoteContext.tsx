import { createContext } from "react";
import { NoteState } from "../interfaces/interfaces";

export type NoteContexProps = {
    noteState: NoteState,
    noteId: (id: string) => void,
}
export const NoteContext = createContext<NoteContexProps>({} as NoteContexProps);