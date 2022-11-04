import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data) {
  return fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

const data = {
  title: "New Product in course",
  price: 1019,
  description: "A description from paltzi course",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

postData(`${API}/products`, data)
  .then((response) => response.json())
  .then((responseData) => {
    console.log(responseData);
  })
  .catch((error) => {
    console.log(error);
  });
