<!--Kayla Gervais
  Final Project
  Great Race-->

<?php
$connect = myDatabase();
$query = "SELECT * FROM raceresults ORDER BY Timestamp DESC LIMIT 5";
$result = mysqli_query($connect, $query, );

function myDatabase() {
    $connect = new mysqli("localhost", "root", "", "greatestrace");
    if (!$connect) { die("Connection failed: " . mysqli_connect_error()); }
    return $connect;
}
?>

  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="styles.css">
  
      <title>The Greatest Race</title>
    </head>
    <body style="background-color:black">
     <header>
      <h1 class="display-1">The Greatest Race Statistics</h1>
      <h2 class="display-6">Last 5 Races</h2>
    </header>
    <main>
    <table id="raceresults" class="stats">
                    <thead>
                        <tr>
                            <th>Racer 1</th>
                            <th>Racer 2</th>
                            <th>Winner</th>
                            <?php foreach($result as $row) { 
                                echo "<tr>";
                                echo "<td>".$row['racer1']."</td>";
                                echo "<td>".$row['racer2']."</td>";
                                echo "<td>".$row['winner']."</td>";
                                echo "</tr>";
                            }    
                            ?>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
    <h2 class="display-6">Search Races</h2>
    <form method="POST" action="">
    <div id="search">
                    <div>
                        <select name="racerSelection1">
                            <option value="">Choose First Racer</option>
                            <option value="nyan">Nyan Cat</option>
                            <option value="pusheen">Pusheen</option>
                            <option value="hamtaro">Hamtaro</option>
                            <option value="boo">King Boo</option>
                        </select>
                    </div>
                    <div>
                        <select name="racerSelection2">
                            <option value="">Choose Second Racer</option>
                            <option value="nyan">Nyan Cat</option>
                            <option value="pusheen">Pusheen</option>
                            <option value="hamtaro">Hamtaro</option>
                            <option value="boo">King Boo</option>
                        </select>
                    </div>
                    <input type="submit" name="searchButton" value="Search" class="SearchButton">
                </div>
                        </form>
                <table id="searchresult" class="stats">
                    <thead>
                        <tr>
                            <th>Racer 1</th>
                            <th>Racer 2</th>
                            <th>Winner</th>
                            <?php
                            if(isset($_POST['racerSelection1']) && isset($_POST['racerSelection2'])) {
                                $racer1 = $_POST['racerSelection1'];
                                $racer2 = $_POST['racerSelection2'];
                                $search = "SELECT * FROM raceresults WHERE racer1 = '$racer1' and racer2 = '$racer2' ORDER BY Timestamp ASC LIMIT 10";
                                $searchresult = mysqli_query($connect, $search, );
                                foreach($searchresult as $row) { 
                                    echo "<tr>";
                                    echo "<td>".$row['racer1']."</td>";
                                    echo "<td>".$row['racer2']."</td>";
                                    echo "<td>".$row['winner']."</td>";
                                    echo "</tr>";
                                }    
                            }
                            ?>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>          

<footer class="fixed-bottom">
    <div style="margin-bottom: 20px;"><a href="index.html">The Greatest Race</a></div>
</footer>
</main>
</body>
</html>