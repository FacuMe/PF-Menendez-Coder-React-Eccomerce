import json from "./data.json"

const getProducts = () => {
    return new Promise((resolve, reject) => {
        resolve(json)
    });
};

export default getProducts