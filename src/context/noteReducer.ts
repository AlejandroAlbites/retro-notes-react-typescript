import { act } from 'react-dom/test-utils';
import { isDoStatement } from 'typescript';
import { NoteSpace } from '../components/notePage/NoteSpace';
import { Note, NoteState } from './../interfaces/interfaces';

type TodoAction =
    | { type: 'notesByUser', payload: any }
    | { type: 'addNote', payload: Note }
    | { type: 'notification', payload: Array<any> }
    | { type: 'updateNote', payload: Note }
    | { type: 'deleteNote', payload: Note }
    | { type: 'noteId', payload: any }
    | { type: 'isLogin', payload: any }
    | { type: 'dataUser', payload: any }
    | { type: 'NoteSpaceView', payload: string }
    | { type: 'avatarImage', payload: string }
export const noteReducer = (state: NoteState, action: TodoAction) => {

    switch (action.type) {
        case 'notesByUser':
            return {
                ...state,
                notes: action.payload
            }
        case 'addNote':
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case 'notification':
            return {
                ...state,
                notification: action.payload
            }
        case 'updateNote':
            const notes = state.notes.map(note => note.id === action.payload.id ? action.payload : note)
            return {
                ...state,
                notes
            }
        case 'deleteNote':
            const deleteNotes = state.notes.filter(note => note.id !== action.payload.id)
            return {
                ...state,
                notes: deleteNotes
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
        case 'NoteSpaceView':
            return {
                ...state,
                NoteSpaceView: action.payload
            }
        case 'avatarImage':
            return {
                ...state,
                avatarImage: action.payload
            }
    }

}
