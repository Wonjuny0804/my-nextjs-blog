import serviceInstance from "./service";
import {
  getStorage,
  type FirebaseStorage,
  ref,
  uploadBytes,
} from "firebase/storage";

class ImageService {
  storage: FirebaseStorage;

  constructor() {
    const app = serviceInstance.getFirebaseApp();
    this.storage = getStorage(
      app,
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_URL
    );
  }

  async uploadBlogPostThumbnail(imageFile: any) {
    const blogRef = ref(this.storage, "blog");

    const snapShot = await uploadBytes(blogRef, imageFile, {
      contentType: "image/jpeg",
    });
    console.log(snapShot);

    return "success";
  }
}

export default new ImageService();
