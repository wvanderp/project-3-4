var exec = require('child_process').exec;

var text = "lol lol roffffele coptor delux";

// var cmd = 'java Main'+ text;
// var cmd = 'java Main "' + text + '"'
	var cmd = 'java -classpath java/ Main "' + text + '"';
// var cmd = 'dir';


exec(cmd, function(error, stdout, stderr) {
  // command output is in stdout
  console.log('stdout: ' + stdout);
});