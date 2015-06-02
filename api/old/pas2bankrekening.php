<?php
        //deze end point zet een pas nummer om in een rekening nummer.
        include("utils.php");
        require_once 'errorGen.php';

        //zeker weten dat rekening_nr is ingevult
        if(!isset($_GET["pasNr"])){
                $message = "pasnummer not found";
                echo json_encode(array("error" => $message));
                die("no rekening_nr found");
        }

        // if (!is_numeric($_GET["pasNr"])) {
 //                $message = "rekening not legit";
 //                echo json_encode(array("error" => $message));
        //      die("pas nummer is not a number");
        // }

        $link=mysqli_connect("localhost","root","skere","SkereDB");
        // $link=mysqli_connect("localhost","root","","SkereDB");

        $pashouder = mysqli_query($link, "SELECT pashouder FROM `pas` WHERE `pas_id` = '".$pasNr."' LIMIT 1") or die(mysqli_error($link));

        $pashouder = mysqli_real_escape_string($link, $pashouder);

        $pasNr = $_GET["pasNr"];

        $pasNr = mysqli_real_escape_string($link, $pasNr);

        $result = mysqli_query($link, "SELECT rekening_nr FROM `pas` WHERE `pas_id` = '".$pasNr."' LIMIT 1") or die(mysqli_error($link));

        if (mysqli_num_rows($result) == 0) {
                $message = "rekening not found";
                echo json_encode(array("error" => $message));
                die("pas nr niet bekent");
        }else{
                $temp = mysqli_fetch_assoc($result);

                echo json_encode($temp["rekening_nr"]);
        }
?>

