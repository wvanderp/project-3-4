<?php
    function testServer($ip){
        $ping = pingDomain($ip);
        if ($ping == -1) {
            echo "<h3>server not found</h3>";
            echo "<h4>ping not succeeded</h4>";
        }else{
            echo "<p>server found! ping: ".$ping."</p>";
        }

    };

    // Function to check response time
    function pingDomain($ip){
        $starttime = microtime(true);
        $file      = fsockopen ($ip[0], $ip[1], $errno, $errstr, 10);
        $stoptime  = microtime(true);
        $status    = 0;

        if (!$file) $status = -1;  // Site is down
        else {
            fclose($file);
            $status = ($stoptime - $starttime) * 1000;
            $status = floor($status);
        }
        return $status;
    }
?>