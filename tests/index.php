<?php
	require_once 'server.php';
	require_once 'login.php';
	require_once 'balance.php';
	require_once 'withdraw.php';
	require_once 'logout.php';

	require_once 'tools.php';

	$ip = array(
		"ProjectHeist" => array("145.24.222.156", 80, "/"),
		"illumiNatedGroup" => array("145.24.222.103", 8080, "/"),
		"ATM bank" => array("145.24.222.217", 8080, "/"),
		"Skerebank" => array("hro.cwms.cc", 80, "api/"),
		"MLB INC." => array("145.24.222.177", 443, "/"),
		"Bank CorruptCo." => array("145.24.222.150", 80, "/"));

	foreach ($ip as $bank => $ip) {
		echo "<h1>".$bank."</h1>";
		//server
		echo "<h2>server</h2>";
		testServer($ip);
		//login
		echo "<h2>login</h2>";
		testLogin($ip);
		//balance
		echo "<h2>balance</h2>";
		testBalance($ip);
		//withdraw
		echo "<h2>withdraw</h2>";
		testWithdraw($ip);
		//logout
		echo "<h2>logout</h2>";
		testLogout($ip);
	}
?>