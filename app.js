window.addEventListener('mousemove', (event) => {
    console.log(event.offsetX);
})

// function formatDuration (seconds) {
//     const minutes = seconds / 60;
//     console.log(minutes);
// }

// console.log(formatDuration(3662));


// function numberOfPairs(gloves) {
//     let n = 0;
//     const obj = gloves.reduce((acc, e) => {
//         acc[e] = (acc[e] || 0) + 1;
//         return acc
//     }, {});

//     for (let key in obj) {
//         if (obj[key] === 1) {
//             return 0
//         }
//         n += obj[key]
//     };

//     if  (n % 2 === 0) {
//         return n / 2
//     } else {
//         return (n - 1) / 2 
//     } 
// }

// console.log(numberOfPairs(['gray','black','purple','purple','gray','black', 'gray','purple','gray','black']));


// function deepCount(arr){
//     let count = 0;
//       arr.forEach(element=>{
//           if (Array.isArray(element)) {
//             count + deepCount(element)
//           }
//         count ++
//     })
//     return count
  
// }
// console.log(deepCount([1, 2, 3, 4, 5, []]));




// function fib(n){

//     let current = 0;
//     let next = 1;
//   for(;n>1;n--) {
//     next = current + next;
//     current = next - current;
//   }
//   return current;
// }

// console.log(fib(2));



// function formatDuration (seconds) {
//     let sec = seconds % 60
//     let minutes = Math.round(seconds / 60) % 60;
//     let hours = Math.round(seconds / 60 / 60) % 24;
//     let day = Math.round(seconds / 60 / 60 / 24) % 365
//     let years = Math.round(seconds / 60 /60 / 24 / 365)
    
//     if (seconds === 0) {
//         return 'now'
//     }

//     return `${years} years, ${day} days and ${hours} hour and ${minutes} minutes and ${sec} seconds`;
// }


// console.log(formatDuration(120000000));













// function Wave(str) {
//     let stringLength = str.length;
//     let result = [];
//     for(let i = 0; i < stringLength; i++) {
//         let strBegin = str.slice(0,i);
        
//         let strEnd = str.slice(i+1);
//         result[i] = strBegin + str.charAt(i).toUpperCase() + strEnd; 
//     }
//     return result;

// }
// console.log(Wave("hello"));