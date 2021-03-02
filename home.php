<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>PORTFOLIO - MAIN</title>

      <!-- FONTS -->
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;800&display=swap" rel="stylesheet">

      <!-- reset.css -->
      <link rel="stylesheet" href="css/resets/reset.css">
      <!-- styles -->
      <link rel="stylesheet" href="css/home.css">
      <link rel="stylesheet" href="css/animation/animations.css">
      <link rel="stylesheet" href="css/responsive.css">

      <link rel="stylesheet" href="css/timeline/timeline.css">

      <link rel="stylesheet" href="css/counter/counter.css">
      
      <link rel="stylesheet" href="css/counter/button.css">
      <!-- Favicons -->
      
      <link rel="stylesheet" href="./fa/css/font-awesome.min.css">

</head>
<body>
      <div class="container">
            <div class="left-side">
                  <div class="profile">
                        <!-- Profile image/CV photo -->
                        <div class="profile-img"></div>
                        <div class="active"></div>

                        <!-- Profile description -->
                        <div class="profile-top-description">
                              <h4>Giorgi Dzigoshvili</h4>
                              <p class="specialty">Full-Stack Developer</p>
                              <p>UI/UX Designer</p>
                        </div>
                  </div>
                  <!-- Main description -->
                  <div class="main-profile-description">
                        <!-- Country, Age, City -->
                        <div class="main-profile-description-personal-info">
                              <ul>
                                    <div class="personal-info">
                                          <li class="residence-li">Residence -></li>
                                          <li class="city-li">City -></li>
                                          <li class="age-li">Age -></li>
                                    </div>
                                    <div class="personal-info-answer">
                                          <li> Greece</li>
                                          <li> Athens</li>
                                          <li> 14</li>
                                    </div>
                              </ul>
                        </div>
                        <hr class="hr">
                        <!-- Languages -->
                        <div class="main-profile-my-lang">
                              <div class="main-profile-my-langs-skill">
                                    <li>Greek -></li>
                                    <li>Georgian -></li>
                                    <li>English -></li>
                                    <li>French -></li>
                              </div>
                              <div class="main-profile-my-langs-answer">
                                    <li> Native</li>
                                    <li> Native</li>
                                    <li> C2</li>
                                    <li> A2</li>
                              </div>
                        </div>
                        <hr class="hr">
                        <!-- Programming languages -->
                        <div class="main-profile-programming-langs">
                              <div class="main-profile-programming-langs-skills">
                                    <li>HTML -></li>
                                    <li>CSS -></li>
                                    <li>JavaScript -></li>
                                    <li>PHP -></li>
                                    <li>MySQL -></li>
                              </div>
                              <div class="main-profile-programming-langs-skills-answer">
                                    <li> Advanced</li>
                                    <li> Advanced</li>
                                    <li> Advanced</li>
                                    <li> Advanced</li>
                                    <li> Advanced</li>
                              </div>
                        </div>
                        <hr class="hr">
                        <!-- Frameworks -->
                        <div class="main-profile-framework">
                              <div class="main-profile-framework-skills">
                                    <li><img src="./images/timeline/frameworksCheckMark/check.png" class='checkmark'><span>NodeJS, Ajax</span></li>
                                    <li><img src="./images/timeline/frameworksCheckMark/check.png" class='checkmark'><span>React, React Native</span></li>
                                    <li><img src="./images/timeline/frameworksCheckMark/check.png" class='checkmark'><span>JSON, JQuery</span></li>
                                    <li><img src="./images/timeline/frameworksCheckMark/check.png" class='checkmark'><span>VueJS, Angular</span></li>
                              </div>
                        </div>
                        <hr class="hr">
                        <!-- CV DOWNLOAD -->
                        <div class="main-profile-cv">
                              <a href="./cv/cv.pdf" class="main-profile-cv-a" download><b><span>DOWNLOAD CV <i class="fa fa-download"></i></span></b></a>
                        </div>

                        <!-- Social Media -->
                        <div class="social-media">
                              <!-- Linkedin -->
                              <div class="social-media-in">
                                   <a href="https://www.linkedin.com/in/giorgi-dzigoshvili-415a571b5/" target="_blank" style="color:#2867B2;"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                              </div>
                              <!-- GitHub -->
                              <div class="media-gh">
                                   <a href="https://github.com/GeorgeDzigo" target="_blank" style="color: #333;"><i class="fa fa-github" aria-hidden="true"></i></a>
                              </div>
                              <!-- Instagram -->
                              <div class="ig">
                                   <a href="https://www.instagram.com/x._xgeorgex_.x/" target="_blank" style="color: #8a3ab9;"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                              </div>
                              <!-- Facebook -->
                              <div class="fc">
                                   <a href="https://www.facebook.com/profile.php?id=100008718216788" target="_blank" style="color: #3b5998;"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                              </div>
                        </div>
                  </div>
            </div>
         <!-- Right Side Menu -->
            <div class="menu">
                  <div class="menu-burger-button" onclick="menuB()">
                        <span class="bar1"></span>
                        <span class="bar2"></span>
                        <span class="bar3"></span>
                  </div>
                  <div class="menu-content">
                        <div class="menu-content-div">
                              <li class="menu-content-div-li"><a href="home.php#home" class="menu-content-div-li-a">HOME</a></li>
                        </div>
                        <div class="menu-content-div">
                              <li class="menu-content-div-li"><a href="home.php#services" class="menu-content-div-li-a">SERVICES</a></li>
                        </div>
                        <div class="menu-content-div">
                              <li class="menu-content-div-li"><a href="home.php#projects" class="menu-content-div-li-a">WORKS</a></li>
                        </div>
                        <div class="menu-content-div">
                              <li class="menu-content-div-li"><a href="home.php#storyline" class="menu-content-div-li-a">RESUME</a></li>
                        </div>
                        <!-- <div class="menu-content-div">
                              <li class="menu-content-div-li"><a href="#" class="menu-content-div-li-a">BLOG</a></li>
                        </div> -->
                        <div class="menu-content-div">
                              <li class="menu-content-div-li"><a href="home.php#contact-info" class="menu-content-div-li-a">CONTACT</a></li>
                        </div>
                   </div>
            </div>

      <?php 
            if(isset($_GET['tab']) && $_GET['tab'] ==  "counter") require_once './assests/counter.html';
            else if(isset($_GET['p'])) require_once './assests/pages.php';
            else require_once './assests/timeline.html';
      ?>
      <!-- SCRIPTS -->
      <script src="js/main.js"></script>
</body>
</html>