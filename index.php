<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Edit, View and Send a map">
    <meta name="keywords" content="maps, weownit xyz, Universities roads">
    <meta name="author" content="weownit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View, Edit and Send Maps</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"/>
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
    <link rel="stylesheet" href="getLoc.css">
    <!--favi-->
    <link rel="apple-touch-icon" sizes="180x180" href="../../ico/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../../ico/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../../ico/favicon-16x16.png">
    <link rel="manifest" href="../site.webmanifest">
    <!--favi end-->
</head>

<body>
    <div class="cont1">
        <div id="map"></div>
        <div class="cont11" style="display: none;">getLoc</div>
        <div class="cont12">loc will display here</div>
        <div class="cont13">
            <div class="cont13-1"></div>
            <div class="cont13-2">
                <div class="cont13-21">car packs</div>
                <div class="cont13-22">Hostels</div>
                <div class="cont13-23">ATMs</div>
                <div class="cont13-24">Banks</div>
                <div class="cont13-25">Faculties</div>
            </div>
        </div>
        <div class="cont14 popup">
            <canvas class="cont14cvs1"></canvas>
            <canvas class="cont14cvs2"></canvas>
            <span class="popuptext" id="myPopup">menu</span>
        </div>
        <div class="cont15">
            <div class="cont15-1">
                <div class="cont15-11"></div>
                <div class="cont15-12">
                    <div><a href='weownit.xyz'>weownit.xyz</a></div>
                </div>
            </div>
            <div class="cont15-2" style="display:none;">
                <!--<div>name</div>-->
                <!-- <a>notification</a> -->
                <!-- <a>maps</a> -->
                <div class='cont15-2S'>send a location</div>
                <div class="cont15-2me">show me <p>off</p><p class="loader"></p></div>                
                <div class="cont15-2Terin">change view<p class="loader"></p></div>
                <!--<a href='https://weownit.xyz/edit-map'>edit a map</a>-->
                 <div class ='cont15-inviteW'>invite friends</div> 
                <!--<div>FAQ</div>-->
                <!--<a href="https://weownit.xyz/locations/review">send a feedback</a>-->
                <!--<div>settings</div>-->
                <!-- <div onclick="reloadMP();">reload</div> -->
            </div>
        </div>
        <div class="cont16">
            <input type="text" class="input" placeholder="where are you going to?">
            <div class="cont16-1">
                <div>Hostels</div>
                <div>Banks</div>
                <div>Atms</div>
                <div>car parks</div>
                <div>Faculties</div>
                <div>COV ground</div>
                <div>Senate building</div>
                <div>science theater/SLT</div>
                <div>agric faculty</div>
                <div>library</div>
                <div>E.T.F/ ETF</div>
                <div>tetfund</div>
                <div>zenith bank</div>
                <div>first bank</div>
                <div>old girls Hostel</div>
                <div>faculty of engineering</div>
                <div>mid girls Hostel</div>
                <div>new girls Hostel</div>
                <div>Faculty of art</div>
                <div>old Boys Hostel</div>
                <div>new Boys Hostel</div>
                <div>Faculty of law</div>
                <div>management science</div>
                <div>health science</div>
                <div>University Clinic</div>
                <div>car park1</div>
                <div>sport center</div>
                <div>school gate</div>
                <div>Physics complex</div>
                <!--<div>University of Abuja</div>-->
                <div>Faculty of science</div>
                <!-- <div>test</div> -->

            </div>
        </div>
        <div class="cont17">
            <canvas class="cont17cvs1"></canvas>
            <canvas class="cont17cvs2"></canvas>
        </div>
        <div class="cont18">
            <div class="cont18-1">1</div>
            <div class="cont18-2">2</div>
        </div>
        <div class="cont19" style="display: none;">
            <p class='p1p'>click on map to generate a link</p>
            <div class='cont19-1' >
                <input type='text' placeholder='description...' class='imp'>
                <input type = 'submit' value='get' class='lastImp'>
            </div>
            <div class='cont19-2'>
                <input type='text' id ='linkC'>
                <p class = 'imp'>https://weownit.xyz</p>
                <input type='submit' value='copy' class='lastImp'>
            </div>
        </div>
        <div class="cont1-10 popup">
            <span class="popuptext" id="myPopup">show your location</span>
            <div class="loader"></div>
        </div>
    </div>
    
    <script src="getLoc.js"></script>
    <!-- <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAMyA3VTzRgq_FTDBEU7Um0XcKXpTbN_Z0&callback=initMap&libraries=&v=weekly"
      async
    ></script>  -->
</body>

</html>
