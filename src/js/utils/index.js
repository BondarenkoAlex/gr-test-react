export const localStorageObject = {
    setObject: (key, value) => {
        return new Promise((resolve, reject)=> {
            try {
                let newValue = value;
                if (!key || !value) {return;}

                if (typeof value === "object") {
                    newValue = JSON.stringify(value);
                }
                localStorage.setItem(key, newValue);
                resolve(value);
            }
            catch (e) {
                reject({user: value, e});
            }
        })
    },
    getObject: (key) => {
        return new Promise((resolve, reject)=> {
            try {
                var value = localStorage.getItem(key);

                if (!value) {return;}

                // assume it is an object that has been stringified
                if (value[0] === "{") {
                    value = JSON.parse(value);
                }
                resolve(value);
            }
            catch (e) {
                reject(e);
            }
        })
    },
    removeItem :  (key) => {
        return new Promise((resolve, reject)=> {
            try {
                localStorage.removeItem(key);
                resolve(key);
            }
            catch (e) {
                reject({id: key, e});
            }
        })
    }
};
