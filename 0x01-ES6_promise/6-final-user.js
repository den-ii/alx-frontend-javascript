// Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.
import { signUpUser } from "./4-user-promise.js";
import { uploadPhoto } from "./5-photo-reject.js";

// Write and export a function named handleProfileSignup. It should accept three arguments firstName (string), lastName (string), and fileName (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:
export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);
  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then(
    (results) => {
      const resultArray = [];
      results.forEach((result) => {
        const status = result.status;
        const value = status === "fulfilled" ? result.value : result.reason;

        // Push the result object to the resultArray
        resultArray.push({ status, value });
      });
    }
  );
}
