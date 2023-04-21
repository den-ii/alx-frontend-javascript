import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const resultObj = {};
  try {
    const result = await uploadPhoto();
    resultObj.photo = result;
  } catch (err) {
    resultObj.photo = {};
  }
  try {
    const result = await createUser();
    resultObj.user = result;
  } catch (err) {
    resultObj.user = {};
  }

  return resultObj;
}
