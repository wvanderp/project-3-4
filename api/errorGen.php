<?php
	// dit script genereert de errors voor de endpoints.

	//error numbers
	// 0 -> no errors
	// 1 -> var not found error
	function notFound($var){
		vardump(array("errors" => $var+" not found in the url", "errornum" => 1));
		die();
	}
?>
