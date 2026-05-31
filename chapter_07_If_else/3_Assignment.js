let score = 11;

if (score >= 9 && score <= 10) {
    console.log("Critical");
}
else if (score >= 7 && score <= 8) {
    console.log("High");
}
else if (score >= 4 && score <= 6) {
    console.log("Medium");
}
else if (score >= 1 && score <= 3) {
    console.log("Low");
}
else {
    console.log("Invalid score");
}