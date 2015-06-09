<?php
        $link = mysqli_connect("localhost","root","skere","SkereDB");

        $pin = $_GET["pin"];

        $cardId = $_GET["cardId"];

        $query = "SELECT `pas_id` FROM `pas` WHERE `pas_id` = ".$pasnr." LIMIT 1";
        mysqli_query($link, $query);

        $query2 = "SELECT `pincode` FROM `pas` WHERE `pincode` = '".$pin."' LIMIT 1";
        mysqli_query($link, $query2);

        $failedattempts = "SELECT `failedattempts` FROM `pas` WHERE `pas_id` = '".$cardId."' LIMIT 1") or die(mysqli_error($link));

        if ($cardId == $query && $pin == $query2){
                $succes = 1234;
                mysqli_query($link, "UPDATE `validatie` SET `validatieToken` = '".$succes."' WHERE `pas_id` = '".$cardId."' LIMIT 1") or die(mysqli_error($link));

		mysqli_query($link, "UPDATE `pas` SET `failedattempts` = 0 WHERE `pas_id` = '".$cardId."' LIMIT 1") or die(mysqli_error($link));


        if ($pasnr == $query && $pin == $query2){
                $token = md5(time());
                $responce = array(
                        "sucsess" => array("token" => $token ),
                        "error" => array()
                )

        }else {
                $error = 201;
                if($cardId == $query){
                        $failedattempts = $failedattempts+1;
                        mysqli_query($link, "UPDATE `pas` SET `failedattempts` = '".$failedattempts."' LIMIT 1") or die(mysqli_error($link));
                }
        }


        $json = json_encode($responce);
?>

