let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);
console.log(browser);

browser.pop();  //remove the last element
console.log(browser);

let removed = browser.shift();
console.log(browser);
console.log(removed);

for (let i = 0; i <= browser.length; i++) {
    console.log(browser[i]);
    if (browser === "opera") {
        console.log("Opera is removed from the selenium!")
    }
}


