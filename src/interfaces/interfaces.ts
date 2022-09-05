export interface Note {
  _id: string;
  name: string;
  text: string;
  favorite: boolean;
}

export interface NoteState {
  notes: Note[];
  noteId: any;
  notification: Array<any>;
  isLogin: boolean;
  dataUser: object;
  NoteSpaceView: string;
  avatarImage: string;
  isLoginValidate: boolean;
}
