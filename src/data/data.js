import json from "./data.json"

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(json)
        }, 3000);
    });
};

export default getProducts