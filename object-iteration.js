// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/


/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    return Object.keys(someObject).join();
}


/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    let x = {};
    for(let key in someObject) {
        let value = someObject[key];
        let screamKey = key.toUpperCase();
        x[screamKey] = value;
    }
    return x;
}

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    let finalArray = [];
    // let x = [Object.keys(someObject)[0], Object.values(someObject)[0]];
    // let y = [Object.keys(someObject)[1], Object.values(someObject)[1]];
    // let z = [Object.keys(someObject)[2], Object.values(someObject)[2]];
    // finalArray = [x, y, z];
    finalArray = Object.entries(someObject);
    return finalArray;
}
