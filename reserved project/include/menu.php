<?php include('nocache.php') ?>
<?php
 header("Access-Control-Allow-Origin: *"); ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />

        <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-storage.js"></script>
  

        <title>Eaterly Admin</title>

        <link rel="stylesheet" href="../css/admin.css">
    </head>
    <body>
        <!--  Menu start -->
        <div class="menu">
            <div class="wrapper">
                <ul>
                    <li><a href="../index.php">Home</a></li>
                    <li><a href="../admin/manage-admin.php">Admin</a></li>
                    <li><a href="../admin/manage-category.php">Category</a></li>
                    <li><a href="../admin/manage-food.php">Food</a></li>
                    <li><a href="../admin/manage-order.php">Order</a></li>
                    <li><a href="../admin/manage-canteen.php">Canteen</a></li>
                    <li><a href="../admin/manage-splash.php">Splash Screen</a></li>
                </ul>
            </div>
        </div>