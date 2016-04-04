<?php

$host = $_REQUEST['host'];
$user = $_REQUEST['user'];
$password = $_REQUEST['password'];
$base = $_REQUEST['base'];

//echo $host." ".$user." ".$password." ".$base;

if(!mysql_connect("$host", "$user", "$password")) {
    echo "denied";
} else {
    //echo "Подключение к серверу возможно...";
    if (!mysql_select_db($base)) { // если базы данных нет
        echo "denied";
    } else {
        //echo "База данных найдена";
        echo "access";
        //
        $source = "<?php\n \$host='".$host."';\n \$user='".$user."';\n \$password='".$password."';\n \$base='".$base."';\n ?>";
        $file = "access-data.php";
        $Saved_File = fopen($file, 'w+');
        fwrite($Saved_File, $source);
        fclose($Saved_File);
    }
}



?>
