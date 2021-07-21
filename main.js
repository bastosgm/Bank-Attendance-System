// Shows into the display the current corresponding ticket and counter
const displayTicket = document.querySelector(".displayTicket")
const displayCounter = document.querySelector(".displayCounter")

// "For customers" buttons
const commonButton = document.querySelector(".clientsbuttonC")
const quickButton = document.querySelector(".clientsbuttonQ")
const priorityButton = document.querySelector(".clientsbuttonP")

// Last ticket generated
const lastTicket = document.querySelector(".lastTicket")

// "For counters" buttons
const counter1sButton = document.querySelector(".counter1sButton")
const counter2sButton = document.querySelector(".counter2sButton")
const counter3sButton = document.querySelector(".counter3sButton")
const counter4sButton = document.querySelector(".counter4sButton")

// Queues
var commonQueue = []
var quickQueue = []
var priorityQueue = []

// For console testing only
const wholeQueue = {
    commonQueue, quickQueue, priorityQueue
} 

let queue = 0

// Adding to queue
function addToQueue(event) {
    
    switch (event.target.innerText) {
        case "Common":
            queue++
            commonQueue.push(`C-${queue}`)
            lastTicket.innerText = `C-${queue}`
            break
        case "Quick":
            queue++
            quickQueue.push(`R-${queue}`)
            lastTicket.innerText = `R-${queue}`
            break
        case "Priority":
            queue++
            priorityQueue.push(`P-${queue}`)
            lastTicket.innerText = `P-${queue}`
            break
    }

    console.log(wholeQueue)

}


// leaving the queue
function leaveQueue(event) {
    
    //COUNTER 1 - Priority, Quick, Common 
    
    if(event.target.innerText === "COUNTER #1") {
        
        if(priorityQueue.length > 0) { 
            const displayCounter1 = "counter 1"
            const displayTicket1 = priorityQueue.shift()
            displayTicket.innerText = displayTicket1
            displayCounter.innerText = displayCounter1
        } else if(quickQueue.length > 0) {
            const displayCounter1 = "counter 1"
            const displayTicket1 = quickQueue.shift()
            displayTicket.innerText = displayTicket1
            displayCounter.innerText = displayCounter1
        } else if(commonQueue.length > 0) {
            const displayCounter1 = "counter 1"
            const displayTicket1 = commonQueue.shift()
            displayTicket.innerText = displayTicket1
            displayCounter.innerText = displayCounter1
        } else {
            displayTicket.innerText = "-"
            displayCounter.innerText = "-"
            lastTicket.innerText = ""
        }
    
    //COUNTER 2 -  Quick, Priority, Common

    } else if(event.target.innerText === "COUNTER #2"){
        
        if(quickQueue.length > 0) {
            const displayCounter2 = "counter 2"
            const displayTicket2 = quickQueue.shift()
            displayTicket.innerText = displayTicket2
            displayCounter.innerText = displayCounter2
        } else if(priorityQueue.length > 0) { 
            const displayCounter2 = "counter 2"
            const displayTicket2 = priorityQueue.shift()
            displayTicket.innerText = displayTicket2
            displayCounter.innerText = displayCounter2
        } else if(commonQueue.length > 0) {
            const displayCounter2 = "counter 2"
            const displayTicket2 = commonQueue.shift()
            displayTicket.innerText = displayTicket2
            displayCounter.innerText = displayCounter2
        } else {
            displayTicket.innerText = "-"
            displayCounter.innerText = "-"
            lastTicket.innerText = ""
        }

    //COUNTER 3 -  Quick, Priority, Common

    } else if(event.target.innerText === "COUNTER #3" ) {
        
        if(quickQueue.length > 0) {
            const displayCounter3 = "counter 3"
            const displayTicket3 = quickQueue.shift()
            displayTicket.innerText = displayTicket3
            displayCounter.innerText = displayCounter3
        } else if(priorityQueue.length > 0) { 
            const displayCounter3 = "counter 3"
            const displayTicket3 = priorityQueue.shift()
            displayTicket.innerText = displayTicket3
            displayCounter.innerText = displayCounter3
        } else if(commonQueue.length > 0) {
            const displayCounter3 = "counter 3"
            const displayTicket3 = commonQueue.shift()
            displayTicket.innerText = displayTicket3
            displayCounter.innerText = displayCounter3
        } else {
            displayTicket.innerText = "-"
            displayCounter.innerText = "-"
            lastTicket.innerText = ""
        }    
      
    // COUNTER 4 - Common, Priority, Quick    

    } else if(event.target.innerText === "COUNTER #4") {
        
        if(commonQueue.length > 0) {
            const displayCounter4 = "counter 4"
            const displayTicket4 = commonQueue.shift()
            displayTicket.innerText = displayTicket4
            displayCounter.innerText = displayCounter4 
        } else if(priorityQueue.length > 0) { 
            const displayCounter4 = "counter 4"
            const displayTicket4 = priorityQueue.shift()
            displayTicket.innerText = displayTicket4
            displayCounter.innerText = displayCounter4
        } else if(quickQueue.length > 0) {
            const displayCounter4 = "counter 4"
            const displayTicket4 = quickQueue.shift()
            displayTicket.innerText = displayTicket4
            displayCounter.innerText = displayCounter4
        } else {
            displayTicket.innerText = "-"
            displayCounter.innerText = "-"
            lastTicket.innerText = ""
        }
    }
}

// Listener - Customers

commonButton.addEventListener("click", function(event) {
    addToQueue(event)
})

quickButton.addEventListener("click", function(event) {
    addToQueue(event)
})

priorityButton.addEventListener("click", function(event) {
    addToQueue(event)
})


// Listener - Counters

counter1sButton.addEventListener("click", function(event) {
    leaveQueue(event)
})

counter2sButton.addEventListener("click", function(event) {
    leaveQueue(event)
})

counter3sButton.addEventListener("click", function(event) {
    leaveQueue(event)
})

counter4sButton.addEventListener("click", function(event) {
    leaveQueue(event)
})
