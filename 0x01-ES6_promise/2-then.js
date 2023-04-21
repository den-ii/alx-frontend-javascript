export default function handleResponseFromAPI(promise) {
  promise
    .then(() => { 
      const response = {}
      response.status = 200;
      response.body = 'success';
      return response
    })
    .catch(() => {
      return new Error(); 
    }).finally(() => {
      console.log('Got a response from the API');
    });
}