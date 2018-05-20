// Include the cluster module
var cluster = require('cluster');

// Code to run if we're in the master process
if (cluster.isMaster) {

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // Listen for terminating workers
    cluster.on('exit', function (worker) {

        // Replace the terminated workers
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();

    });

// Code to run if we're in a worker process
} else {

	const express = require('express');
	const path = require('path');

	const app = express();

	// Serve only the static files form the dist directory
	app.use(express.static(__dirname + '/dist'));

	app.get('/*', function(req,res) {
	    
	res.sendFile(path.join(__dirname+'/dist/index.html'));
	});

	// Start the app by listening on the default Heroku port
	app.listen(process.env.PORT || 3000);

}
