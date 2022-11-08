<?php
$client = getClient();
$connect = myDatabase();
dbAdd($connect, $client);

function getName() {
    if (isset($_POST['firstname']) && isset($_POST['lastname'])) {
        return $_POST['firstname'] . ' ' . $_POST['lastname'];
    }
    return '';
}
function getClient() {
    $client = array(
        'name' => getName(),
        'phone' => (isset($_POST['phone'])) ? $_POST['phone'] : '',
        'email' => (isset($_POST['email'])) ? $_POST['email'] : '',
        'adults' => (isset($_POST['tAdult'])) ? $_POST['tAdult'] : '',
        'children' => (isset($_POST['tChild'])) ? $_POST['tChild'] : '',
        'destination' => (isset($_POST['destination'])) ? $_POST['destination'] : '',
        'startDATE' => (isset($_POST['startDATE'])) ? $_POST['startDATE'] : '',
        'endDATE' => (isset($_POST['endDATE'])) ? $_POST['endDATE'] : '',
        'activities' => getActivity()
    );
    return $client;
}
function getDestination() {
    switch($_POST['destination']) {
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
function formatDate($date='') {
    if($date) {
        return date_format(date_create($date),"F j, Y");
    }
    return '';
}
function getActivity() {
    $activities = '';
    for($i=1;$i<=5;$i++) {
        if(isset($_POST['activity' . $i]) && $_POST['activity' . $i]) {
            $activities .= $_POST['activity' . $i] . ', ';
        }
    }
    if($activities) {
        return rtrim($activities, ', ');
    }
    return '';
}
function myDatabase() {
    $connect = new mysqli("localhost", "root", "", "megatravel");
    if (!$connect) { die("Connection failed: " . mysqli_connect_error()); }
    return $connect;
}
function dbAdd($connect='',$client=array()) {
    if($connect && count($client)) {
        $insert = sprintf(
            'INSERT INTO client (%s) VALUES ("%s")',
            implode(',', array_keys($client)),
            implode('","', array_values($client))
        );
        mysqli_query(myDatabase(), $insert);
    }
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="Book travel with Mega Travel">
        <title>Mega Travel- Confirmation</title>
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
        <h1><center>Thank you!</h1></center>
            
            <p><center>Thank you for submitting your travel agent contact request! Here is the information you submitted:
</center>
            <div class="container">            
                <div class="clientTable">
                    <p><strong>Client name:</strong> <?php echo $client['name']; ?></p>
                    <p><strong>Client phone number:</strong> <?php echo $client['phone']; ?></p>
                    <p><strong>Client email:</strong> <?php echo $client['email']; ?></p>
                    <p><strong>Number of adults:</strong> <?php echo $client['adults']; ?></p>
                    <p><strong>Number of children:</strong> <?php echo $client['children']; ?></p>
                    <p><strong>Destination:</strong> <?php echo getDestination($client['destination']); ?></p>
                    <p><strong>Travel dates:</strong> <?php echo formatDate($client['startDATE']) . ' to ' . formatDate($client['endDATE']); ?></p>
                    <p><strong>Interested activities:</strong> <?php echo $client['activities']; ?></p>
                </div>
            </div>
            <center><p>An agent will be in touch with you soon!</p></center>

        <footer>
         <div style="margin-bottom: 20px;">Copyright Protected. All rights reserved.</div>
             <div> MEGA TRAVELS mega@travels.com </div>
    </footer>
</main>
</body>
</html>