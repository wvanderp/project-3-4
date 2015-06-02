<!DOCTYPE html>
<html>
	<head>
		<title>skere bank index</title>
		<style type="text/css">
			#main{
				text-align:center;
			}
		</style>
	</head>
	<body>
		<div id="main">
			<h1>welkom bij de skere bank</h1>
			<img src="https://raw.githubusercontent.com/wvanderp/project-3-4/master/logo.png"></img><br/>
			Bent u opzoek naar onze pin api: <a href="api/">/api/</a></br>
			Bent u opzoek naar de test die wij draaien: <a href="tests/">/tests/</a></br>
			<!-- bent u opzoek naar aanvallen op ons netwerk: <a href="attacks.php">list</a></br> -->
			Bent u opzoek naar iets anders: <a href="http://google.com">google.com</a></br>
		</div>
	</body>
</html>

<?php
	$link = mysqli_connect("localhost","root","skere","attacks") or die(mysqli_error($link));
	$userAgent = mysqli_real_escape_string($link, $_SERVER["HTTP_USER_AGENT"]);
	$ipAddr = mysqli_real_escape_string($link, $_SERVER["REMOTE_ADDR"]);

	$query = "INSERT INTO connections(`id`, `ipAddr`, `userAgent`, `date` ) VALUES(NULL, '".$ipAddr."', '".$userAgent."', '".time()."');";
	//echo $query;
	mysqli_query($link, $query) or die(mysqli_error($link));
?>
