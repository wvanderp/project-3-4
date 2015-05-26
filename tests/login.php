<?php 
	function testLogin($ip){
		no404Login($ip);
	}

	function no404Login($ip){
		$handle = curl_init(buildUrl($ip, "login"));
		curl_setopt($handle,  CURLOPT_RETURNTRANSFER, TRUE);
		curl_setopt($handle, CURLOPT_CONNECTTIMEOUT ,6); 
		curl_setopt($handle, CURLOPT_TIMEOUT, 3); //timeout in seconds
		/* Get the HTML or whatever is linked in $url. */
		$response = curl_exec($handle);

		/* Check for 404 (file not found). */
		$httpCode = curl_getinfo($handle, CURLINFO_HTTP_CODE);
		if($httpCode == 404) {
		    echo "<h3>login NOT found</h3>";
		}

		curl_close($handle);

		/* Handle $response here. */
	}
?>