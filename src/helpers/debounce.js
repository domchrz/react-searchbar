export default function debounce() {
  let timeoutID;
  return (timeout, cb, ...cbArgs) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      cb(...cbArgs);
    }, timeout);
  };
}
