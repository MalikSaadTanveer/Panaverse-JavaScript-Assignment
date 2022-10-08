// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


const show_magicians = (Magicians) => {
    Magicians.forEach(magician => {
        console.log(magician);
    })
}

const Magicians = ["malik","saad","baqar","ali"];
show_magicians(Magicians);