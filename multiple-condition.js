var gotJob = true;
var moneySaved = 50000;
var hasFlat = false;
var hasHouse = true;
if (gotJob == true && moneySaved > 200000) {
    console.log('want to marry')
}
else {
    console.log('no marry')
}


//multiple and condition

if (gotJob == true && moneySaved > 200000 && hasFlat == true) {
    console.log('want to marry')
}
else {
    console.log('no marry')
}

//or condition
if (gotJob == true || moneySaved > 200000) {
    console.log('want to marry')
}
else {
    console.log('no marry')
}
// && ||
if ((gotJob == true && moneySaved > 200000) || hasHouse == true) {
    console.log('want to marry')
}
else {
    console.log('no marry')
}