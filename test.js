var modeMap = {
        '김영춘': 10,
        '손혜림':30,
        '오리':2,
        '거북이': 9,
        '야옹': 80,
    };
console.log(modeMap);

var sortMap = [];
for (var person in modeMap){
    sortMap.push([person, modeMap[person]]);
};

sortMap.sort(function(a,b) {
    return a[1]-b[1];
});

console.log(sortMap);

console.log(sortMap[0][0]);
console.log(sortMap.slice(-2)[0][0]);
    // let sortMap = [];
    // for (let candidate in modeMap) {
    //     sortMap.push([candidate, modeMap[candidate]]);
    //     };
    // sortMap.sort(function(a,b) {
    //     return a[1] - b[1];})
    // return console.log(sortMap);
    // 