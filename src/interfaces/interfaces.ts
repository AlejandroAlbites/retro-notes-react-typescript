export interface Note {
    id: string;
    name: string;
    text: string;
    favorite: boolean;
}

export interface NoteState {
    notes: Note[],
    noteId: any,
    isLogin: boolean,
    dataUser: object,
}