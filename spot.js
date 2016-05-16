var util = require('util');
var exec = require('child_process').exec;

process.chdir(__dirname);


function buildCmd() {
    process.argv.indexOf('spot');

    if (process.argv.indexOf('play')) {
        var preBuilt = '';
        for (var i = process.argv.indexOf('play'); i < process.argv.length; i++) {
            preBuilt = preBuilt + process.argv[i] + ' ';
            if (i === process.argv.length - 1) {
                console.log(preBuilt);
                factoryCmd(preBuilt);
            }
        }
    } else {
        factoryCmd('');
    }

}

buildCmd();

function factoryCmd(parts) {
    var tools = './sp ' + parts;
    execCmd(tools);
}

function execCmd(built) {
    child = exec(built, function(error, childOut, childErr) {

        if (!error) {
            console.log(childOut);
            console.log(childErr);
        } else {
            console.log('there was an error ' + error);
        }
    });
}
