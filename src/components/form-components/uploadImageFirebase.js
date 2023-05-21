import { storage } from "./firebase.js";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

export default function uploadImageFirebase(
  uploadImage,
  setUploadImage,
  imageName
) {
  if (uploadImage == null) return;
  const imageRef = ref(storage, `images/${imageName}`);
  uploadBytes(imageRef, uploadImage).then(() => {
    setUploadImage(null);
  });
}
