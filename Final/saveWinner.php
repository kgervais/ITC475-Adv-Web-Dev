<?php
$racer1 = $_POST['racer1'];
$racer2 = $_POST['racer2'];
$winner = $_POST['winner'];

$connect = myDatabase();
dbAdd($connect, $racer1, $racer2, $winner);

function myDatabase() {
    $connect = new mysqli("localhost", "root", "", "greatestrace");
    if (!$connect) { die("Connection failed: " . mysqli_connect_error()); }
    return $connect;
}

function dbAdd($connect='',$racer1,$racer2,$winner) {
    if($connect) {
        $currentDateTime = date("Y-m-d H:i:s", time());
        $insert = sprintf(
            'INSERT INTO raceresults (Timestamp, racer1, racer2, winner) VALUES ("%s", "%s", "%s", "%s")', 
            $currentDateTime, $racer1, $racer2, $winner
        );
        mysqli_query(myDatabase(), $insert);
    }
}
mysqli_close($connect);
?>