console.log(score); //ReferenceError: Cannot access 'score' before initialization
let score = 100;

{
    // ---TDZ for "score" starts here
    // onsole.log(score); //ReferenceError
    // score = 100; //ReferenceError
    // typeof.score; //ReferenceError
    // ---TDZ for "score" ends here


    let score = 100;
    console.log(score);
}