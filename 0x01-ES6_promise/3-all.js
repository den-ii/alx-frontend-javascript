import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [uploadPhotoResponse,
      createUserResponse] = await Promise.all([uploadPhoto(), createUser()]);
    const { body } = uploadPhotoResponse;
    const { firstName, lastName } = createUserResponse;
    console.log(`${body} ${firstName} ${lastName}`);
  } catch (err) {
    console.log('Signup system offline');
  }
}
