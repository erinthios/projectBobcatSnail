<html>
	<head>
		<title>Update Scores</title>
	</head>
	<body>
		<?php
			$bs = $_GET["bs"];
			$ys = $_GET["ys"];
			$contents = "{ \"bs\": ".$bs.", \"ys\": ".$ys." }";
			if (file_put_contents("scores.json", $contents)) {
				echo "<p>Succeeded</p>";
			} else {
				echo "<p>Failed</p>";
			}
		?>
	</body>
</html>