import { useState, useEffect } from 'react';

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  handleOnline = () => {
    setIsOnline(true);
  };

  handleOffline = () => {
    setIsOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffline);

    return(() => {
      window.removeEventListener("online",handleOnline);
      window.removeEventListener("offline", handleOffline);
    })
  },[]);

  //in javascript
  //event listener is called once when page load
  // window.addEventListener("online", () => {

  // })

  // window.addEventListener("offline", () => {

  // })



  return isOnline; //return true or false
};

export default useOnline;