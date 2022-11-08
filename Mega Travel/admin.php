<?php
$conn = myDatabase();

$query = "SELECT * FROM client";
$result = mysqli_query($conn, $query);
function myDatabase() {
    $connect = new mysqli("localhost", "root", "", "megatravel");
    if (!$connect) { die("Connection failed: " . mysqli_connect_error()); }
    return $connect;
}
function formatDate($date='') {
    if($date) {
        return date_format(date_create($date),"F j, Y");
    }
    return '';
}
function getDestination($destination='') {
    switch($destination) {
        case 'maldives':
            return 'Maldives, South Asia'; break;
        case 'newzealand':
            return 'New Zealand'; break;
        case 'venice':
            return 'Venice, Italy'; break;
        case 'cancun':
            return 'Cancun, Mexico'; break;
        default:
            return '';
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="description" content="Book travel with Mega Travel">
<title>Mega Travel- Admin</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="css/styles.css" rel="stylesheet">
<script src="welcome.js" defer></script>
<script src="https://kit.fontawesome.com/729516cb4b.js" crossorigin="anonymous"></script>
</head>
<body>

<header>
    <img src="images/mega-travel-logo.png" alt="Mega Travel" class="logo">
</header>
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contact Agent</a></li>
        <li><div class="welcome"><div id="welcomeGreeting"></div></div></li>
        <li><div class="welcome"><div id="welcomeTime"></div></div></li>
    </ul>
</nav>

<main>
    
<h1><center>Admin</center></h1>

<div class="container">
<?php foreach($result as $row) { ?>
<div>              
    <div>
        <strong>Client name:</strong> <?php echo $row['name']; ?>
    </div>
    <div>
        <strong>Client phone number:</strong> <?php echo $row['phone']; ?>
    </div>
    <div>
        <strong>Client email:</strong> <?php echo $row['email']; ?>
    </div>
    <div>
        <strong>Number of adults:</strong> <?php echo $row['adults']; ?>
    </div>
    <div>
        <strong>Number of children:</strong> <?php echo $row['children']; ?>
    </div>
    <div>
        <strong>Destination:</strong> <?php echo getDestination($row['destination']); ?>
    </div>
    <div>
        <strong>Travel dates:</strong> <?php echo formatDate($row['startDATE']) . '&mdash;' . formatDate($row['endDATE']); ?>
    </div>
    <div>
        <strong>Interested activities:</strong> <?php echo $row['activities']; ?>
    </div>
</div>
<?php } ?>
            </div>

            <footer>
         <div style="margin-bottom: 20px;">Copyright Protected. All rights reserved.</div>
             <div> MEGA TRAVELS mega@travels.com </div>
    </footer>
</main>
</body>
</html>