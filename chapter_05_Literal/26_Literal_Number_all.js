// JavaScript Number Literals - All Types
// In JavaScript, numbers are always of type 'number' (except BigInt).

// 1. Integer Literals (Decimal)
let count = 100;
let zero = 0;
console.log("Integer:", count, typeof count);

// 2. Floating-Point Literals
let price = 19.99;
let pi = 3.14159;
console.log("Float:", price, typeof price);

// 3. Negative Numbers
let temperature = -42;
let debt = -1500.50;
console.log("Negative:", temperature, typeof temperature);

// 4. Exponential (Scientific) Notation
let bigNumber = 1e5;    // 100000
let smallNumber = 1e-5; // 0.00001
console.log("Exponential:", bigNumber, smallNumber);

// 5. Hexadecimal (Base 16) - prefix 0x or 0X
let hexColor = 0xFF0000; // 16711680 in decimal
let hexByte = 0xFF;      // 255 in decimal
console.log("Hexadecimal:", hexColor, hexByte);

// 6. Octal (Base 8) - prefix 0o or 0O
let octalPermissions = 0o755; // 493 in decimal
let octalValue = 0o77;        // 63 in decimal
console.log("Octal:", octalPermissions, octalValue);

// 7. Binary (Base 2) - prefix 0b or 0B
let binaryFlags = 0b1010; // 10 in decimal
let binaryByte = 0b11111111; // 255 in decimal
console.log("Binary:", binaryFlags, binaryByte);

// 8. Special Numeric Values
let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;
console.log("Infinity:", positiveInfinity, typeof positiveInfinity);
console.log("-Infinity:", negativeInfinity);
console.log("NaN:", notANumber, typeof notANumber);

// 9. BigInt (Arbitrary precision integers) - suffix n
let hugeNumber = 9007199254740991n;
let bigZero = 0n;
console.log("BigInt:", hugeNumber, typeof hugeNumber);
