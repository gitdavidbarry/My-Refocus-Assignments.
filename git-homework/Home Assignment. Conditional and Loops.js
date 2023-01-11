

// Task 1. Pulse oximeter reading (part 1)

let oxygen = 96;

function readPulse(oxygen) {
    if (oxygen >= 96) {
        console.log("Normal reading.")
    } else if (oxygen == 95) {
        console.log("Acceptable to continue home monitoring.")
    } else if (oxygen >= 93 && pulse <= 94) {
        console.log("Seek advice from health professionals.")
    } else if (oxygen <= 92) {
        console.log("Seek urgent medical advice.")
    } else {
        console.log("unable to read")
    }
} readPulse(oxygen);

// Task 2. Pulse oximeter reading (part 2)
// Continue with the last task, and provide more observations based on the pulse rate.

let pulse = 100;

function pulseRate(pulse) {
    if (pulse >= 40 && pulse <= 100) {
        console.log(`Normal reading at ${pulse} pulse rate.`)
    } else if (pulse >= 101 && pulse <= 109) {
        console.log(`Acceptable to continue home monitoring at ${pulse} pulse rate.`)
    } else if (pulse >= 110 && pulse <= 130) {
        console.log(`Seek advice from health professionals at ${pulse} pulse rate.`)
    } else if (pulse >= 131) {
        console.log(`Seek urgent medical advice at ${pulse} pulse rate.`)
    } else {
        console.log("unable to read")
    }
} pulseRate(pulse);


