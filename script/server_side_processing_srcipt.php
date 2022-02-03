<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation with JavaScript</title>
    <link rel="stylesheet" href="../styles/styles.css">
</head>
<body>
<div class="wrapper">
<header>
    <h1>Form Validation with JavaScript</h1>
</header>
<main>
    
	<?php
		
		//this is where a server side script like PHP
		//would perform the form data validation and processing
		
	?>
		
	<h2>Thanks for filling out the form!</h2>
	<p>Typically this page would include server side scripting instructions to handle the actual processing of the form data.</p>
    <p>When Javscript pre-vaildates the data on the client side, we can ensure that if the form was not filled out correctly, we would not attempt to send data to this page, which over HTTP would only be a waste of bandwidth, adding to network congestion, being an unneccessary request/response, and extra load on the server.</p>

    <p class='important'>Since we can never be absolutely certain that Javascript was enabled on the client side, this server side processing script would need to run it's own form data validation procedures on the data, an essential redundancy of all form processing.</p>
    <small>Note: Server side scripting is not a part of this course</small>		
		
</main>
<footer>
    <p>COMP 2132</p>
</footer>
</div>

</body>
</html>