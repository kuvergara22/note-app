const fs = require('fs');
const chalk = require('chalk');


// addNote is in charge of adding note the application
const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicate = notes.filter( (note) => note.title === title 
    //   const duplicate = notes.filter( function (note)  {
    //     return note.title === title
    )
      if(duplicate.length === 0){
          //here we are pushing a note into the array as an object
          notes.push({
               title: title,
               body: body
            })
            saveNotes(notes);
            console.log(chalk.green.inverse('added a new note'));
        }
        else
        {
            console.log(chalk.red.inverse('already taken'));
        }
}


 const removeNote =  (title) => {
    const notes = loadNotes();
    const removeNote = notes.filter( (note) => note.title !== title);
    
    if(notes.length > removeNote.length){
        console.log(chalk.green.inverse('remove note'));
        saveNotes(removeNote)
    } else{
        console.log(chalk.red.inverse('no note found'))
    }
};

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach( (item) => {
     console.log(item)
   })
};

const readNotes = (title) => {
    const notes = loadNotes();
    const readnotes = notes.find( (note) =>  note.title === title);
    
    if(readnotes){
        console.log(chalk.green.inverse(readnotes.title));
       
    } 
    else{
        console.log(chalk.red.inverse('note does not exist'))
    }
    
}

  
//saves data and brings in notes object as an argument, notes
// object is describe above which takes in the title and body
const saveNotes = (notes) => {
    
    // stringify the notes object
    const dataJson = JSON.stringify(notes);
    
    //write to the file notes.json , we are writing anything tha is in the dataJson
    fs.writeFileSync('notes.json', dataJson)

}

//loadNotes is charge of loading notes so they wont be overwritten
const loadNotes = () => {
    try{
            //dataBuffer will read the notes.json file
    const dataBuffer = fs.readFileSync('notes.json');
   
    //dataString converts dataBuffer into a string
    const dataString = dataBuffer.toString();
   
    // parses data from dataString and returns it
    return JSON.parse(dataString);

    } catch (error){
       return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes ,
    readNotes:  readNotes
}