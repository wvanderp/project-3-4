<?php
		error_reporting(E_ALL);
		ini_set('display_errors', true);

		$link = mysqli_connect("localhost","root","skere","SkereDB");

		//$pin = $_GET["pin"];
		//$cardId = $_GET["cardId"];

		$pin = 1234;
		$cardId = 1;

		$query = "SELECT `failedattempts` FROM `pas` WHERE `pas_id` = '".$cardId."' LIMIT 1";
		$failResp = mysqli_query($link, $query) or die(mysqli_error($link));
		$failedattempts = mysqli_fetch_array($failResp);
		//var_dump($failedattempts[0]);

		if ($failedattempts[0] > 2) {
			$responce = array(
				"succes"=> array(),
				"error" => array(
					"code" => 16,
					"message" => "pas geblokkeerd",
					"failedAttempts" => $failedattempts
				)
			);

			echo json_encode($responce);
			die();
		}

		$query = "SELECT * FROM `pas` WHERE `pas_id` = '".$cardId."' LIMIT 1";
		$resp = mysqli_query($link, $query) or die(mysqli_error($link));
		$numRow = mysqli_num_rows($resp);

		if ($numRow == 0) {
			$responce = array(
				"succes"=> array(),
				"error" => array(
					"code" => 14,
					"message" => "pas niet bekent",
				)
			);


			echo json_encode($responce);
			die();
		}

		$query = "SELECT * FROM `pas` WHERE `pas_id` = '".$cardId."' AND `pincode` = ".$pin." LIMIT 1";
		$resp = mysqli_query($link, $query) or die(mysqli_error($link));
		$numRow = mysqli_num_rows($resp);

		if ($numRow == 0) {
			$responce = array(
				"succes"=> array(),
				"error" => array(
					"code" => 15,
					"message" => "pin niet bekent",
				)
			);

			echo json_encode($responce);
			die();
		}

		$token = md5(time());
		$responce = array(
			"sucsess" => array("token" => $token ),
			"error" => array()
		);

		echo json_encode($responce);
		die();
?>

