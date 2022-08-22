import { isDoStatement } from 'typescript';
import { Note, NoteState } from './../interfaces/interfaces';

type TodoAction =
    | { type: 'addNote', payload: Note }
    | { type: 'noteId', payload: any }
    | { type: 'isLogin', payload: any }
    | { type: 'dataUser', payload: any }
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
        case 'isLogin':
            return {
                ...state,
                isLogin: action.payload
            }
        case 'dataUser':
            return {
                ...state,
                dataUser: action.payload
            }
    }

}
