<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    Quantidade de funcionários


    <?php
//Mysqli --> improved
//PDO --> PHP Data Objects
//PDO will work on 12 different database systems, whereas MySQLi will only work with MySQL databases.
$servername = "localhost:3306";
$username = "root";
$password = "root";
$dbname = "arh";
// Create connection
$connection = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}
echo "Connected successfully</br>";
// $connection->close();
// mysqli_close($connection);



//phpinfo();
$conn;
try {
    $conn = new \PDO("mysql:host={$servername};dbname=arh", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
    echo "PDO ---> Connected successfully";
} catch (\PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
} finally {
    echo "finalizando a conexao";
}
/*
    Example (MySQLi Object-Oriented)
$conn->close();

Example (MySQLi Procedural)
mysqli_close($conn);

Example (PDO)
$conn = null;
}
*/
//executar insert ==> $conn->query($sql) (mysqli) || $conn->exec($sql)
//select
$sql = "select * from FUNCIONARIO";
$result = $connection->query($sql); // mysqlLi
#$resultado = $conn->query($sql); // mysqlLi


// $stmt = $conn->prepare("select * from FUNCIONARIO");
// $stmt->execute();
// $result = $stmt->setFetchMode(\PDO::FETCH_ASSOC);
// echo $result;

echo "<h3>resultados do select</h3>";
if ($result->num_rows > 0) {
    echo "<table><th>Name</th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>".$row["NOME"]." - ".$row["TIPO"]."</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}
?>
</body>
</html>