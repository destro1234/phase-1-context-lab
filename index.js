/* Your Code Here */

function createEmployeeRecord(array) {
    let newRecord = {}
    newRecord.firstName = array[0]
    newRecord.familyName = array[1]
    newRecord.title = array[2]
    newRecord.payPerHour = array[3]
    newRecord.timeInEvents = []
    newRecord.timeOutEvents = []
    return newRecord
}

function createEmployeeRecords(records) {
    let newEmployees = []
        records.forEach(record => {
            let newRecord= createEmployeeRecord(record) 
            newEmployees.push(newRecord)
        });
        
        
        return newEmployees
     
}

function createTimeInEvent(date) {
    let [day, time] = date.split(" ")
    
    let obj = {
        type: "TimeIn",
        hour: parseInt(time), 
        date: day
    }
    this.timeInEvents.push(obj)
    return this
    
}

function createTimeOutEvent(date) {
    let [day, time] = date.split(" ")

    let obj = {
        type: "TimeOut", 
        hour: parseInt(time),
        date: day

    }
    this.timeOutEvents.push(obj)
    return this
}

function hoursWorkedOnDate(date) {
    let timeIn =  this.timeInEvents.find(element => element.date == date)
    let timeOut = this.timeOutEvents.find(element => element.date == date)
    return timeOut.hour/100 - timeIn.hour/100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(array, firstName) {
    return array.find(record => record.firstName == firstName)
    
}

function calculatePayroll(records) {
    const payRoll = []
    records.forEach(record => {
        let wages = allWagesFor.call(record)
        payRoll.push(wages)
    })
    return payRoll.reduce((previousValue, currentValue) => previousValue + currentValue)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

