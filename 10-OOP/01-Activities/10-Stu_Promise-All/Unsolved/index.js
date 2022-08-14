const apiCallDurations = [3000, 4000, 5000, 6000];
const maxDuration = 2000;

const callAPI = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (duration > maxDuration) {
        reject(new Error("This request timed out"));
      } else {
        resolve(`Response received: ${duration} ms`);
      }
      // TODO: If the duration is longer than maxDuration, reject() the promise
      // TODO: Otherwise resolve() the promise
    }, duration);
  });

const promises = apiCallDurations.map((duration) => callAPI(duration));
console.log('Promises array before the timeouts have finished: ', promises);


// TODO: Use Promise.all() to capture when the array of promises has been resolved or if any of them were rejected
Promise.all(promises)
  .then((response) => console.log("Respons from Promise.all()", response))
  .catch((err) => new Error(err));