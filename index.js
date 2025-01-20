// code your solution here
function saturdayFun(activity ="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun('bathe my dog'))
function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(string='*'){
    return function (adj='special'){
        return `You are ${string}${adj}${string}!`;
    }
}
console.log(wrapAdjective('An')('AMAZING'))
