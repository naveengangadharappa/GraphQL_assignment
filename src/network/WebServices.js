
const Url = "https://graphqlzero.almansi.me/api"

export function Graphql(query) {
  return new Promise((resolve, reject) => {
    fetch(Url, {
      "method": "POST",
      "headers": { "content-type": "application/json" },
      "body": JSON.stringify({
        query
      })
    }).then((response) => response.json())
      .then(response => {
        console.log(response);
        if (response.errors) {
          resolve({ stats: false, error: response.errors, Message: "Server Not Responding" });
        } else {
          resolve({ status: true, data: response.data, Message: "Response received Successfull" })
        }
      }).catch(error => {
        console.error(error);
        reject(error);
      });
  });
}






