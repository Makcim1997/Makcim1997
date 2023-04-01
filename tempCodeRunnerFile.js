function numberOfPairs(gloves) {
    let n = 0;
    const obj = gloves.reduce((acc, e) => {
        acc[e] = (acc[e] || 0) + 1;
        return acc
    }, {});

    for (let key in obj) {
        if (obj[key] === 1) {
            return 0
        }
        n += obj[key]
    };

    if  (n % 2 === 0) {
        return n / 2
    } else {
        return (n - 1) / 2 
    } 
}

console.log(numberOfPairs(['gray','black','purple','purple','gray','black', 'gray','purple','gray','black']));
