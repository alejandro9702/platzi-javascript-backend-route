import fetch from "node-fetch";

const API = "https://api.escuelajs.co/api/v1";

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    return await response.json();
}

const anotherFunction = async (urlApi) => {

    try {
        const products = await fetchData(`${urlApi}/produts`);
        const product = await fetchData(`${urlApi}/products/${products[1].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category?.id}`);

        console.log("products: ", products);
        console.log("product: ", product.title);
        console.log("category ", category.name);

    } catch (error) {
        console.error(error)
    }


}

anotherFunction(API);