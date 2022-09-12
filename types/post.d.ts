import { DocumentData, Timestamp } from "firebase/firestore";
import { uploadImageData } from "./image";

export interface PostDocument {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  thumbnailImage: uploadImageData;
  published: boolean;
  deleted?: boolean;
  deletedAt?: number;
}
