<!DOCTYPE html>
<html>
<head>
	<title>tests</title>
	<style type="text/css">
		body{
			background: black;
			color: green;
		}
		.bad{
			background-color: red;
			color: white;
			padding: 4px;
			width: 20%;
		}
	</style>
	<?php
		$hosts = json_decode(file_get_contents("data.json"));
	?>
</head>
<body>
<?php
	foreach ($hosts as $host) {
		$report = $host->report;
		echo "<div id='host'>";
		echo "<h1>".$host->name."</h1>";
		if ($report->ping == false) {
			echo "<p class='bad'>no ping resieved from server</p>";
			continue;
		}

		//making the result of the login endpoint
		login($report);

		//making the result of the balance endpoint
		balance($report);

		//making the result of the withdraw endpoint
		withdraw($report);

		//making the result of the logout endpoint
		logout($report);

		echo "</div>";
	}
?>
</body>
</html>

<?php
	function login ($report) {
		if ($report->login == false) {
			echo "<p class='bad'>/login gave an 404</p>";
			return;
		}
	}

	function balance ($report) {
		if ($report->balance == false) {
			echo "<p class='bad'>/balance gave an 404</p>";
			return;
		}
	}

	function withdraw ($report) {
		if ($report->withdraw == false) {
			echo "<p class='bad'>/withdraw gave an 404</p>";
			return;
		}
	}

	function logout ($report) {
		if ($report->logout == false) {
			echo "<p class='bad'>/logout gave an 404</p>";
			return;
		}
	}
?>