<?php
error_reporting(0);
$email_na_podatel = $_POST["email"];
$zaglavie_na_saobshtenie = $_POST["zaglavie"];
$message = $_POST["message"];
$ot_kogo = "From: $email_na_podatel";
mail("rashetoedno@abv.bg", $zaglavie_na_saobshtenie, $message, $ot_kogo);
?>
<html>

<head>
    <meta charset='utf-8'>
    <title>Успешно пратено съобщение</title>
    <link rel="stylesheet" href="radiorashimixiCSS/form.css">
    <link rel="stylesheet" href="radiorashimixiCSS/formMedia.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'></script>
</head>

<body>
    <div class="obuspinchl">
        <div class="usp">
            <div class=obdiv>
                <div class="nchldiv">
                    <a class="nchl" href="kontakti.php">Към началната страница</a>
                </div>
                <h1 class="uspform">Благодарим ви! Вашето съобщение беше изпратено успешно.</h1>
            </div>
        </div>
    </div>
</body>

</html>