// function pow(a,b){

// }

// const add = function(){
//     console.log();
    
// }

// const divide = () => {

// }

// function element(tag){
//     const element = document.createElement(tag);
//     element.append("Hello!")
//     return element;
// }
// const root = document.getElementById('root');
// root.append(element("h1"))
// root.append(element("h2"))
// root.append(element("h3"))
// root.append(element("div"))



/////////////       09 11 2026 
////////////



// const itb28Obj = {
//     1: {
//         name: 'Imran'
//     },
//     2: {
//         name: 'Samuel'
//     },
//     3: {
//         name: 'Beksultan'
//     },
//     4: {
//         name: 'Nurbol'
//     },
//     5: {
//         name: 'Stalbek'
//     },
//     6: {
//         name: 'Maksatbek'
//     },
// }
const itb28Arr = ['Imran', 'Samuel', 'Beksultan', 'Nurbol', 'Stalbek', 'Maksatbek', 'Danil']

// console.log(itb28Arr[0]);
// console.log(itb28Arr[5]);


// itb28Arr.map((el, index, array) => {
//     console.log(index+1  + '. ' + el)
//     // console.log(array);
    
// })

// itb28Arr.filter((item, idx) => {
//     if(item !== 'Danil'){
//         console.log(idx+1  + '. ' + '"' + item + '"')
//     }
// })

// itb28Arr.filter((item, idx) => {
//     console.log(item !== 'Danil')
// })

// itb28Arr.filter((item, idx) => {
//     if(item !== 'Danil'){
//         console.log(item);
        
//     }
// })



// console.log(itb28Arr.some((el) => el == 'Nurbol'))


// console.log(itb28Arr.findIndex((el) => el == 'Nurbol'))

// console.log(itb28Arr.every((el) => el == 'Nurbol'))


// console.log(itb28Arr.reduce((el) => el == 'Nurbol'))



let nums = [1,2,3,4,5]
function Reduce(){
    return nums.reduce((sum, el) => sum + el, 0)
}

console.log(Reduce());
