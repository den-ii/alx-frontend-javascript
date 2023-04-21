import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const resultObj = {};
  const result1 = await uploadPhoto();
  resultObj.photo = result1;
  const result2 = await createUser();
  resultObj.user = result2;

  return resultObj;
}
