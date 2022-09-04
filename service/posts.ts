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
  serverTimestamp,
  updateDoc,
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
      await addDoc(collection(this.db, "posts"), {
        title,
        content,
        ...(author ? { author } : { author: "Wonjun Jang" }),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        published: false,
        excerpt: "",
        tags: [],
        thumbnailImageUrl: "",
      });

      alert("Saved!");
      return "success";
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
    const postRef = doc(this.db, "posts", postData.postId);

    await updateDoc(postRef, {
      title: postData.title,
      content: postData.content,
      author: postData.author,
      updatedAt: serverTimestamp(),
    });

    alert("Update complete!");
    return "Success";
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

  async getPostByTitle(title: string) {
    const postsRef = collection(this.db, "posts");
    const q = query(postsRef, where("title", "==", title));
    const querySnapShot = await getDocs(q);

    const posts: Array<{
      id: string;
      data: DocumentData;
    }> = [];

    querySnapShot.forEach((doc) =>
      posts.push({
        id: doc.id,
        data: doc.data(),
      })
    );

    return posts;
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
