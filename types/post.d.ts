import { DocumentData, Timestamp } from "firebase/firestore";

export interface PostDocument {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
