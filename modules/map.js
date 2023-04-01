function map(array, key) {
    let res = {};

    for (let i = 0; i < array.length; i++) {
        res[array[i][key]] = array[i];
    }

    return res
};

export default map;