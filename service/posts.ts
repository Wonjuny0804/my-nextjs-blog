import {
  collection,
  getFirestore,
  setDoc,
  addDoc,
  type Firestore,
} from "firebase/firestore";
import serviceInstance from "./service";

class PostService {
  db: Firestore;

  constructor() {
    const app = serviceInstance.getFirebaseApp();
    this.db = getFirestore(app);
  }

  async createNewPost(postData: {
    title: string;
    content: string;
    author?: string;
  }) {
    const { title, content, author } = postData;

    try {
      console.log(this.db);
      await addDoc(collection(this.db, "posts"), {
        title,
        content,
        ...(author ? { author } : { author: "Wonjun Jang" }),
      });

      alert("Saved!");

      // redirect to outside.
    } catch (error) {
      console.dir(error);
    }
  }

  async editPost(postData: {
    title: string;
    content: string;
    author: string;
    postId: string;
  }) {
    // TODO: Add a editing post logic here.
  }

  async deletePost(postId: string) {
    // TODO: add a delete post logic here. (not really delete, but probably just add a true to deleted column)
  }

  async getPost(postId: string) {
    // TODO: get Post logic here
  }

  async getPosts(page: number, pageSize: number) {
    // TODO: get posts from db
  }
}

export default new PostService();
