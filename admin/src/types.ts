import firebase from "firebase";
import firestore = firebase.firestore;

export type Post = {
  title: string;
  authors: string[];
  content: string[];
  designers: string[];
  date_of_publication: firestore.Timestamp;
  sources: string[];
  tags: string[];
};
