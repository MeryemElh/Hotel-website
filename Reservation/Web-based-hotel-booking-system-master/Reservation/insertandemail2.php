<?php
session_start();

$_SESSION['firstname'] = $_POST["firstname"];
$_SESSION['lastname'] = $_POST["lastname"];
$_SESSION['email'] = $_POST["email"];
$_SESSION['phone'] = $_POST["phone"];
$_SESSION['addressline1'] = $_POST["addressline1"];

$_SESSION['postcode'] = $_POST["postcode"];
$_SESSION['city'] = $_POST["city"];
$_SESSION['state'] = $_POST["state"];
$_SESSION['country'] = $_POST["country"];

if(isset($_POST["addressline2"]))
{
$_SESSION['addressline2'] = $_POST["addressline2"];
}else{

$_SESSION['addressline2'] = "";
}
if(isset($_POST["specialrequirements"]))
{
$_SESSION['special_requirement'] = $_POST["specialrequirements"];
}else{

$_SESSION['special_requirement'] = "";
}

include './auth.php';
mysql_query("INSERT INTO `unleashe_hotel`.`guest` 
(`guest_id`, `first_name`, `last_name`, `email`, `telephone_no`, `add_line1`, `add_line2`, `city`, `state`, `postcode`, `country`) 
VALUES (NULL, '".$_SESSION['firstname']."', '".$_SESSION['lastname']."', '".$_SESSION['email']."', '".$_SESSION['phone']."', '".$_SESSION['addressline1']."', '".$_SESSION['addressline2']."', '".$_SESSION['city']."', '".$_SESSION['state']."', '".$_SESSION['postcode']."', '".$_SESSION['country']."');
");
$id = mysql_insert_id();
mysql_query("INSERT INTO `unleashe_hotel`.`booking` (`booking_id`, `room_id`, `totalroombook`, `guest_id`, `total_adult`, `total_children`, `checkin_date`, `checkout_date`, `special_requirement`, `payment_status`, `total_amount`, `deposit`, `booking_date`) 
VALUES (NULL, '".$_SESSION['room_id']."', '".$_SESSION['totalroombook']."', '".$id."', '".$_SESSION['adults']."', '".$_SESSION['childrens']."', '".$_SESSION['checkin_db']."', '".$_SESSION['checkout_db']."', '".$_SESSION['special_requirement']."', 'pending', '".$_SESSION['total_amount']."', '".$_SESSION['deposit']."', CURRENT_TIME());");
$_SESSION['booking_id'] = mysql_insert_id();

$to      = $_SESSION['email'];
$subject = 'Confirmation de la reservation';
$message = '<html><body>';
$message .= '<h3>Bonjour'.$_SESSION['firstname'].',<br> Votre réservation est confirmée</h3>';
$message .='<p>' ;
$message .='<br>Type de chambre :' .$_SESSION['roomname'];
$message .='<br> Totale des chambres résérvées:'  .$_SESSION['totalroombook'];
$message .='<br>Check In :'  .$_SESSION['checkin_date'];
$message .='<br>Check Out :'  .$_SESSION['checkout_date'];
$message .='<br>Adultes :'  .$_SESSION['adults'];
$message .='<br>Enfants :'  .$_SESSION['childrens'];
$message .='<br>Invités:' .$_SESSION['firstname']. ',' .$_SESSION['lastname'];
$message .='<br>Addresse :' .$_SESSION['addressline1'].', '.$_SESSION['addressline2'].','.$_SESSION['postcode'].' '.$_SESSION['city'].','.$_SESSION['state'].' '.$_SESSION['country'];
$message .='<br>Email :'.$_SESSION['email'];
$message .='<br>Téléphone :'.$_SESSION['phone'];
$message .='<br>Exigences particulières'.$_SESSION['special_requirement'];
$message .='</p>';
$message .='';
$message .='</body></html>';
$headers .='From: meryem1999elh@gmail.com';
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

if(mail($to, $subject, $message, $headers)){
    echo 'Votre message a bien été envoyé ';
}
else // Non envoyé
{
    echo "Votre message n'a pas pu être envoyé";
};

header("location: reservationcomplete.php");


?>