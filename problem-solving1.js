// #number grade code
var number = 10;
if (number < 0 || number > 100) {
    console.log("Invalid Input");
}
else if (number >= 90 && number <= 100) {
    console.log("grade A+");
}
else if (number >= 80 && number <= 89) {
    console.log("grade A");
}
else if (number >= 70 && number <= 79) {
    console.log("grade B");
}
else if (number >= 60 && number <= 69) {
    console.log("grade C");
}
else if (number >= 50 && number <= 59) {
    console.log("grade D");
}
else {
    console.log("grade F");
}
// trafic signal code
var trafficSignal = 'green';
if (trafficSignal == 'red') {
    console.log("Danger");
}
else if (trafficSignal == 'yellow') {
    console.log("stop");
}
else {
    console.log("go now ");
}