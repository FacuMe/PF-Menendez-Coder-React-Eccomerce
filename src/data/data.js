import json from "./data.json"

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(json);
        }, 2000);
    });
};

export default getProducts