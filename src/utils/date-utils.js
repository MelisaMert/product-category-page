
export const sortedAsc = (array) => array.sort((datea,dateb) => new Date(datea.date) - new Date(dateb.date));

export const sortedDesc = (array) => array.sort((datea,dateb) => new Date(dateb.date) - new Date(datea.date));