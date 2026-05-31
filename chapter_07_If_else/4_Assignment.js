let build = 90;

if (build === 100) {
    console.log("Green Build");
}
else if (build >= 90 && build <= 99) {
    console.log("Stable");
}
else if (build >= 70 && build <= 89) {
    console.log("Unstable");
}
else if (build >= 70 && build <= 89) {
    console.log("Broken Build");
}
else {
    console.log("Invalid percentage");
}