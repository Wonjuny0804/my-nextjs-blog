import serviceInstance from "./service";
import {
  getStorage,
  type FirebaseStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { uploadImageData } from "../../types/image";

class ImageService {
  storage: FirebaseStorage;

  constructor() {
    const app = serviceInstance.getFirebaseApp();
    this.storage = getStorage(
      app,
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET_URL
    );
  }

  async uploadBlogPostThumbnail(imageFile: File) {
    const blogRef = ref(this.storage, `blog/${imageFile?.name}`);

    const snapShot = await uploadBytes(blogRef, imageFile, {
      contentType: "image/jpeg",
    });

    const downloadUrl = await getDownloadURL(snapShot.ref);
    const imageData: uploadImageData = {
      imageUrl: downloadUrl,
      contentType: snapShot.metadata.contentType ?? "image/png",
      contentDisposition:
        snapShot.metadata.contentDisposition ?? "inline; filename*=utf-8",
      name: snapShot.metadata.name,
      bucket: snapShot.metadata.bucket,
    };

    return imageData;
  }
}

export default new ImageService();
