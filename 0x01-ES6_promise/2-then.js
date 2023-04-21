export default function handleResponseFromAPI(promise) {
  // Append resolve handler
  /* eslint-disable  no-unused-vars */
  promise.then((response) => {
    console.log('Got a response from the API');
    return {
      status: 200,
      body: 'success',
    };
  });
  /* eslint-disable  no-unused-vars */
  promise.catch((error) => {
    console.log('Got a response from the API');
    return new Error();
  });
}
