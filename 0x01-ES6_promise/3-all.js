import { uploadPhoto, createUser } from "util.js";

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      const [uploadPhoto, createUser] = response;
      const { body } = uploadPhotoResponse;
      const { firstName, lastName } = createUserResponse;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch((error) => {
      console.log("Signup system offline");
    });
}
