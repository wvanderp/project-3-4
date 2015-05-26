<?php
	// dit script genereert de errors voor de endpoints.

	//error numbers
	// 0 -> no errors
	//  1-10 input errors 
	// 1 -> var not found error
	// 2 -> wrong type;
	
	//  11-20 database errors.
	// 11 conection error.
	// 12 query error

	//  21-30 data errors
	//	21 no data  found
	//	

	function notFound($text){

		$message = $text." not found in the url";
		echo json_encode(array("error" => $message, "errornum" => 1));
		die();
	}

	function wrongType($varname, $type){

		$message = $varname." is expected to be a ".$type;
		echo json_encode(array("error" => $message, "errornum" => 2));
		die();
	}

	// DATABASE ERRORS

	function databaseConnection(){
		$message = "cant connect to the database";
		echo json_encode(array("error" => $message, "errornum" => 11));
		die();
	}

	function errorQuery($text){
		$message = "error in query ".$text;
		echo json_encode(array("error" => $message, "errornum" => 11));
		die();
	}

	//DATA ERROR

	function noDataFound($text=""){
		$message = "noDataFound ".$text;
		echo json_encode(array("error" => $message, "errornum" => 21));
		die();
	}	
?>
