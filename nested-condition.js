var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var myBudget = 100;
var packedWell = false;


// if (danishPrice < myBudget) {
//     console.log('danish khabo');
// }
// else if (butterBreadPrice < myBudget) {
//     console.log('butter khabo');
// }
// else if (toastBiscuitPrice < myBudget) {
//     console.log('toast khabo');
// }
// else {
//     console.log('batash khabo');
// }
if (danishPrice < myBudget) {
    if (packedWell == true) {
        console.log('i eat this danish');
    }
    else {
        console.log('i dont eat this danish cause of this is not well packed');
    }
}