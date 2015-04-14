<?php
	// dit script genereert de errors voor de endpoints.

	//error numbers
	// 0 -> no errors
	// 1 -> var not found error
	function notFound($var){
		echo "{";
		echo 'error: "'+$var+' not found in url",';
		echo "errornum: 1";
		echo "}";
		die();
	}	
?>