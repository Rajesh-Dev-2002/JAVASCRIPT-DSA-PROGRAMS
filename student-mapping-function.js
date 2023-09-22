// let num =[1,2,3,4,5,6];

// let x = num.map((ar)=>{
//     return ar*2;
// })

// console.log(x);

let student = [
    {
        name:'Rajesh',
        marks:96
    },
    {
        name:'Rakesh',
        marks:85
    },
    {
        name:'Tony Stark',
        marks:78
    },
]

let mapping = student.map((er)=>{
    return er.marks/10;
})

console.log(mapping);
