//static vars
//vars for pinInVullen
var atempts = 0;
//var for load pass
var pasNr;
//var for other api calls
var validateCode = null;
//var for geldvragen
var amount = 0;

var state = "mainMenu";
var h = {};


$(document).ready(function () {
	loadView("mainMenu");
	// loadCard(1);
});


var restart = function() {
            var child,
            child_process = require("child_process"),
            gui = require('nw.gui'),
            win = gui.Window.get();
            if (process.platform == "darwin")  {
                child = child_process.spawn("open", ["-n", "-a", process.execPath.match(/^([^\0]+?\.app)\//)[1]], {detached:true});
           } else {
                child = child_process.spawn(process.execPath, [], {detached: true});
           }
            child.unref();
            win.hide();
            gui.App.quit();
}
