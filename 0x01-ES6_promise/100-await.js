import { uploadPhoto, createUser } from './utils';
// import uploadPhoto from './5-photo-reject.js';

export default async function asyncUploadUser() {
  const resultObj = {};
  try {
    const result1 = await uploadPhoto();
    const result2 = await createUser();
    resultObj.photo = result1;
    resultObj.user = result2;
  } catch (err) {
    resultObj.photo = null;
    resultObj.user = null;
  }

  return resultObj;
}
