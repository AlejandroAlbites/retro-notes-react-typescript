import { isDoStatement } from 'typescript';
import { Note, NoteState } from './../interfaces/interfaces';

type TodoAction =
    | { type: 'addNote', payload: Note }
    | { type: 'noteId', payload: any }
export const noteReducer = (state: NoteState, action: TodoAction) => {

    switch (action.type) {
        case 'addNote':
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case 'noteId':
            return {
                ...state,
                noteId: action.payload
            }
    }

}
