// sum arr values

let arr = [1, 2, 3, 44, 45, 75, 77];

let sum = arr.reduce((sum, acc) => {
    return sum + acc;
}, 0); // can omit second argument

// concat arr values

let cars = [
     {
        model: ["A4", "A6", "A8"],
        year: '2016'
    },
    {
        model: ["X5", "X6", "X7"],
        year: '2017'
    },
     {
        model: ["C", "E", "S"],
        year: '2018'
    }
]

let concatedArrays = cars.reduce((acc, val) => {
    return acc.concat(val.model);
}, []);

// find max value

const dates = [
    '2019/06/01',
    '2018/06/01',
    '2019/09/01', // This is the most recent date, but how to find it?
    '2018/09/01'
].map(v => new Date(v));

let maxDate = dates.reduce((acc, val) => {
    return acc > val ? acc : val;
});


