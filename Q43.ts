// 43. Unchanged Magicians: Start with your work from Exercise 41. Call the function make_great() with a copy of the 
// array of magicians names. Because the origunal array will be unchanged, return the new array and store it in a 
// seperate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with 
// the great added to each magician's name

function showMagicians(magicians: string[]): void {
    
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}

function makeGreat(magicians: string[]): void {
    for (let i=0; i< magicians.length; i++) {
    magicians[i] = magicians[i] + ' the great'
}
}

const magicians3: string[] = ["jack", "alonso", "lau"]
makeGreat(magicians3)
showMagicians(magicians3)