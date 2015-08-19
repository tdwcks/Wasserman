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

  <article class="layout-main-content">

    <div class="element-right-signiture">

        
        <?php
            $first_name = 'James';
            $last_name = 'Clare';
            $job_title = 'Director';
            $company_name = 'Miln Ltd';
            $today = date('m/d/Y', time());

        ?>

        <iframe frameborder="0" height="650" scrolling="no" src="https://rightsignature.com/forms/WMG-NDA-and-Ethic-6576c4/embedded/240c9b45512?height=650&after_sign_location=<?php echo urlencode('http://wmg.miln.co/'); ?>&signer[name]=<?php echo urlencode($first_name.' '.$last_name); ?>&ff[companyname_1]=<?php echo urlencode($company_name); ?>&ff[companyname_2]=<?php echo urlencode($company_name); ?>&ff[companyname_3]=<?php echo urlencode($company_name); ?>&ff[signername_1]=<?php echo urlencode($first_name.' '.$last_name); ?>&ff[signername_2]=<?php echo urlencode($first_name.' '.$last_name); ?>&ff[signertitle_1]=<?php echo urlencode($job_title); ?>&ff[signertitle_2]=<?php echo urlencode($job_title); ?>&ff[date_1]=<?php echo urlencode($today); ?>&ff[date_3]=<?php echo urlencode($today); ?>&ff[date_4]=<?php echo urlencode($today); ?>&ff[date_8]=<?php echo urlencode($today); ?>&ff[date_9]=<?php echo urlencode($today); ?>" width="706"></iframe>

    </div>

  </article> <!-- layout-main-content -->

  <script type="text/javascript" src="MyFontsWebfontsKit.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
  <script src="js/main.js"></script>

</body>
</html>
