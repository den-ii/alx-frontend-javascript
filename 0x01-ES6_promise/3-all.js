import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      const [uploadPhoto, createUser] = response;
      const { body } = uploadPhoto;
      const { firstName, lastName } = createUser;
      console.log(`${body} ${firstName} ${lastName}`);
    })
  /* eslint-disable  no-unused-vars */
    .catch((error) => {
      console.log('Signup system offline');
    });
}
