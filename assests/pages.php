<div class="pages" id="middle-section">
      <div class="wrapper"></div>
<?php if($_GET['p'] !== "code" && $_GET['p'] !== "phptask") echo "website is not available"?>
      <iframe src="
      <?php
            if($_GET['p'] == "code") echo "https://darkycoder.000webhostapp.com/";
            else if($_GET['p'] == "phptask") echo "https://phptaskjunior.000webhostapp.com/";
      ?>
      " frameborder="0"></iframe>
     
</div>