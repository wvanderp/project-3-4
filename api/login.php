<?php
		error_reporting(E_ALL);
		ini_set('display_errors', true);

		$link = mysqli_connect("localhost","root","skere","SkereDB");


		$pin = $_GET["pin"];
		$cardId = $_GET["cardId"];

		$query = "SELECT `failedattempts` FROM `pas` WHERE `pas_id` = '".$cardId."' LIMIT 1";
		$failResp = mysqli_query($link, $query) or die(mysqli_error($link));
		$failedattempts = mysqli_fetch_array($failResp);
		$failedattempts=$failedattempts[0];

		if ($failedattempts[0] > 2) {
			$responce = array(
				"success"=> array(),
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
				"success"=> array(),
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
				"success"=> array(),
				"error" => array(
					"code" => 15,
					"message" => "pin niet bekent",
				)
			);
			$failedattempts++;
			$query = "UPDATE `pas` SET `failedattempts` = '".$failedattempts."' WHERE `pas_id` = ".$cardId." LIMIT 1";
			mysqli_query($link, $query) or die(mysqli_error($link));
			echo json_encode($responce);
			die();
		} else {
			$failedattempts=0;
			$query = "UPDATE `pas` SET `failedattempts` = '".$failedattempts."' WHERE `pas_id` = ".$cardId." LIMIT 1";
                        mysqli_query($link, $query) or die(mysqli_error($link));
		}

		$token = md5(time()+microtime());
		$responce = array(
			"success" => array("token" => $token ),
			"error" => array()
		);

		$query = "INSERT INTO `SkereDB`.`tokens` (`token`, `date`, `pas`) VALUES ('".$token."', '".time()."', '".$cardId."');";
		mysqli_query($link, $query) or die(mysqli_error($link));

		echo json_encode($responce);
		die();

?>

