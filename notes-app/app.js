const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');





yargs.command({
    command: 'add',
    describe: ' add tool for work',
    builder:{
        title:{
           describe: 'note title',
           demandOption: true,
           type: 'string'
        },
        body:{
            describe: 'body of title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
      //the handler is set up with the notes object that has title, body as properties
    notes.addNote(argv.title, argv.body)
    }
});

yargs.command({
    command:'remove',
    describe:'remove note',
    builder: {
      title: {
          describe: 'remove title',
          demandOption: true,
          type: 'string'
      }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

 
yargs.command({
    command:'list',
    describe:`['play', 'exercise', 'sex']`,
    handler(argv){
       notes.listNotes(argv.title)
       
    }
});
yargs.command({
    command:'read',
    describe:'enjoy the reading',
    builder: {
        title: {
            describe:'read note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       notes.readNotes(argv.title)
    }
});

yargs.parse()