/**
 * @param {*} data must be an object 
 * @returns Blob
 */

function createFileInBrowser (data = {}) {
  return new Promise((res) => {
    const json = JSON.stringify(data, null, 2);
    setTimeout(() => {
      res(new Blob([json], { type: "application/json" }));
    }, 4000)
  })
}

export default createFileInBrowser