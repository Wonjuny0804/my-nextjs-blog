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
import { uploadImageData } from "../types/image";
import { convertTitleToURL } from "../utils/convertTitles";
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
    excerpt?: string;
    thumbnailImage?: uploadImageData;
    publish?: boolean;
  }) {
    const { title, content, author, excerpt, thumbnailImage, publish } =
      postData;

    try {
      await addDoc(collection(this.db, "posts"), {
        title,
        content,
        ...(author ? { author } : { author: "Wonjun Jang" }),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        published: publish ?? false,
        excerpt: excerpt ?? "",
        tags: [],
        thumbnailImage: thumbnailImage ?? null,
        url: convertTitleToURL(title),
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
    author?: string;
    postId: string;
    excerpt?: string;
    thumbnailImage?: uploadImageData;
    published?: boolean;
  }) {
    const postRef = doc(this.db, "posts", postData.postId);

    await updateDoc(postRef, {
      title: postData.title,
      content: postData.content,
      author: postData.author,
      updatedAt: serverTimestamp(),
      ...(postData.published !== undefined && {
        published: postData.published,
      }),
    });

    alert("Update complete!");
    return "success";
  }

  async deletePost(postId: string) {
    const postRef = doc(this.db, "posts", postId);
    await updateDoc(postRef, {
      deleted: true,
    });

    return "success";
  }

  async getPost(postId: string) {
    const docRef = doc(this.db, "posts", postId);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      return null;
    }
  }

  async getPostByTitle(title: string) {
    const postsRef = collection(this.db, "posts");
    const q = query(postsRef, where("url", "==", title));
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

  async getPosts(params?: {
    page?: number;
    pageSize?: number;
    published?: boolean;
  }) {
    const posts: Array<{
      id: string;
      data: DocumentData;
    }> = [];
    const q = params?.published
      ? query(collection(this.db, "posts"), where("published", "==", true))
      : query(collection(this.db, "posts"));

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
