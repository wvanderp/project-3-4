<?php
        error_reporting(E_ALL);
        ini_set('display_errors', true);

        $link = mysqli_connect("localhost","root","skere","SkereDB");

	$headers = apache_request_headers();

	if(isset($headers["token"])){
                $token = $headers["token"];
        } else {
                 $responce = array(
                    "success" => array(),
                    "error" => array(
                         "code" => 3,
                         "message" => "auth token niet ontvangen",
                     )
                 );
        echo json_encode($responce, JSON_FORCE_OBJECT);
        die();
        }

        $query = "SELECT * FROM `tokens` WHERE `token` = '".$token."' LIMIT 1";
        $resp = mysqli_query($link, $query) or die("1".mysqli_error($link));
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
                echo json_encode($responce, JSON_FORCE_OBJECT);
                die();
        }


        if($numRow > 0){
                $responce = array(
                         "success" => array(
                                "code" => 1337
                         ),
                        "error" => array()
                );
                
		$query = "DELETE FROM `tokens` WHERE `token` = '".$token."' LIMIT 1";
		mysqli_query($link, $query) or die("2".mysqli_error($link));
                //e($responce);
                echo json_encode($responce, JSON_FORCE_OBJECT);
                die();
        }

?>
