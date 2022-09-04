import {
  collection,
  getFirestore,
  setDoc,
  doc,
  getDoc,
  addDoc,
  where,
  getDocs,
  query,
  type Firestore,
  DocumentData,
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
    const docRef = doc(this.db, "posts", postId);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return null;
    }
  }

  async getPosts(page: number, pageSize: number) {
    const posts: Array<{
      id: string;
      data: DocumentData;
    }> = [];
    const q = query(collection(this.db, "posts"));
    try {
      const querySnapShot = await getDocs(q);

      querySnapShot.forEach((doc) => {
        const postData = {
          id: doc.id,
          data: doc.data(),
        };
        posts.push(postData);
      });

      return posts;
    } catch (error: unknown) {
      console.dir(error);
      // FIXME: probably do something here where it redirects to another page..?
    }
  }
}

export default new PostService();
