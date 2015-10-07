const get = (date, rent) => {
  return new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('GET', `/rent/${date}/${rent}`);
    req.onload = () => {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = () => reject(Error('Network Error'));
    req.send();
  });
};

export default get;
