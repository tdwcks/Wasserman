<!DOCTYPE html>
<html>
<head>
  <meta charset=utf-8 />
  <meta name="description" content="description">

  <title>Wasserman Experience Intranet</title>

  <link rel="stylesheet" media="screen" href="style.css" />

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">

  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable="no"">

  <!--[if IE]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->

</head>

<body>

  <?php include 'includes/top-message.php';?>

  <?php include 'includes/sidebar.php';?>

  <article class="layout-main-content">

    <header class="header-type-three">

      <div class="layout-container">

        <ul class="element-top-options-left">

          <li><a href="#" class="link-icon-white js-trigger-sidebar"><i class="material-icons md-18">menu</i></a></li>

        </ul>

        <h1 class="type-style-heading">Register</h1>

        </div> <!-- layout-container -->

    </header> <!-- header-type-three -->

    <div class="element-content-box-two">

      <div class="element-content-box-header">

        <h2>Your Address</h2>

        <div class="element-percentage">

            <div class="c100 p52 small">

              <span>52%</span>

              <div class="slice">

                <div class="bar"></div>

                <div class="fill"></div> 

              </div> <!-- slice -->

          </div> <!-- c100 p1 small -->

        <span class="type-super-small">You're already <span>52%</span> complete.</span>

        </div> <!-- element-percentage -->

      </div>

      <!-- PCA Postcode-->
      <link rel="stylesheet" type="text/css" href="http://services.postcodeanywhere.co.uk/css/captureplus-2.30.min.css?key=rz92-up37-rb37-ex99" /><script type="text/javascript" src="http://services.postcodeanywhere.co.uk/js/captureplus-2.30.min.js?key=rz92-up37-rb37-ex99"></script>

      <form class="form-register">

        <fieldset>

          <label>Enter Your Postcode:</label>

          <input type="text" name="postcode" placeholder="Your First Name"/>

        </fieldset>

        <fieldset>

          <label>Your Address:</label>

          <input class="form-address" type="text" name="line-1" placeholder="Your First Name"/>

          <input class="form-address" type="text" name="line-2" placeholder="Your First Name"/>

          <input class="form-address" type="text" name="city" placeholder="Your First Name"/>

        </fieldset>


        <div class="element-content-box-two-bottom">

          <a class="link-style-three"><i class="material-icons">keyboard_arrow_left</i>Back</a>

          <input type="submit" value="Next">

        </div>

      </form> <!-- form-login -->

    </div> <!-- element-content-box-two -->

  </article> <!-- layout-main-content -->

  <script type="text/javascript" src="MyFontsWebfontsKit.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
  <script src="js/main.js"></script>

</body>
</html>
