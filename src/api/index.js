
export const setStorage = (key,value) => {
    localStorage.setItem(key,value);
}

export const setStorageObject = (key,value) => {
    localStorage.setItem(key, JSON.stringify(value));
} 

export const getStorage = (key) => {
   const items = JSON.parse(localStorage.getItem(key));
   return items;
} 