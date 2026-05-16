// JavaScript Strings: Single vs Double vs Backtick

/*
 * SINGLE ('') & DOUBLE ("") QUOTES: Both are same — just choose one style.
 * BACKTICK (``): Supports VARIABLES (${name}) and MULTI-LINE text.
 */

const name = "John";

// Single and Double quotes - plain text only
const single = 'Hello ' + name;      // Hello John
const double = "Hello " + name;      // Hello John

// Backtick (template literal) - supports interpolation & multi-line
const backtick = `Hello ${name}`;     // Hello John
const multiLine = `
  Line 1
  Line 2
`;

console.log(single);
console.log(double);
console.log(backtick);
console.log(multiLine);
