<?php
	error_reporting(E_ALL);
	ini_set('display_errors', true);

        //$token = $_HEADER["token"];
        $link = mysqli_connect("localhost","root","skere","SkereDB");
        //$cardId = $_GET["cardId"];
        //$token = $_GET["token"];
        //$amount = $_GET["amount"];
	$cardId = 1;
	$token = 005971f6a02808c02c7d02fb4dc87903;
	$amount = 1;

        $query = "SELECT * FROM `tokens` WHERE `token` = '".$token."' LIMIT 1";
        $resp = mysqli_query($link, $query) or die(mysqli_error($link));
        $numRow = mysqli_num_rows($resp);


        if($numRow == 0) {
                $responce = array(
                        "success" => array(),
                        "error" => array(
                                "code" => 4,
                                "message" => "auth token niet in db",
                        )
                );
                //e($responce);
		echo json_encode($responce);
                die();
        }

	$query = "SELECT `saldo` FROM `rekening` WHERE `rekening_nr` = (SELECT `rekening_nr` FROM `pas` WHERE `pas_id` = '".$cardId."') LIMIT 1";
	$balance = mysqli_query($link, $query) or die(mysqli_error($link));
	$saldo=$balance-$amount

	$query = "UPDATE `rekening` SET `saldo` = '".$saldo."' WHERE `rekening_nr` = (SELECT `rekening_nr` FROM `pas` WHERE `pas_id` = '".$cardId."')";
        mysqli_query($link, $query) or die(mysqli_error($link));

	$query = "SELECT `saldo` FROM `rekening` WHERE `rekening_nr` = (SELECT `rekening_nr` FROM `pas` WHERE `pas_id` = '".$cardId."') LIMIT 1";
        $balance = mysqli_query($link, $query) or die(mysqli_error($link));


	if($saldo==$balance){
		$responce = array(
       	                 "success" => array(
				"code" => 1337,
       	                 	"message" => "Saldo updated",
			 ),
       	                "error" => array()
	        );
		//e($responce);
		echo json_encode($responce);
		die();
	} else {
		$responce = array(
			"success" => array(),
			"error" => array(
				"code" => 201,
				"message" => "?saldo niet bekend?",
			)
		);
		echo json_encode($responce);
		die();
	}

?>
