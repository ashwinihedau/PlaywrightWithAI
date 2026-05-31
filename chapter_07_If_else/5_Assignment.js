let attempts = 3;

if (attempts === 0) {
    console.log("Login successful");
}
else if (attempts === 1) {
    console.log("2 attempt left before lockout");
}
else if (attempts === 2) {
    console.log("1 attempt left before lockout");
}
else if (attempts >= 3) {
    console.log("🔒 Account Locked — Contact support"); // Safer: locks for 3 or any number higher
}
else {
    console.log("Invalid attempt count");
}