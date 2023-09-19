// code your solution here

function saturdayFun(activity = "roller-skate") {
return `This Saturday, I want to ${activity}!`

}
saturdayFun()
saturdayFun('bathe my dog')

function mondayWork(newActivity = "go to the office") {
return `This Monday, I will ${newActivity}.`
}
mondayWork()
mondayWork('work from home')

function wrapAdjective(otherHighlight = '*') {
    return function (highlight = 'special') {
        return `You are ${otherHighlight}${highlight}${otherHighlight}!`
    }
}
wrapAdjective()('a hard worker')
wrapAdjective('||')("a dedicated programmer")