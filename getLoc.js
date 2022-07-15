var cont1 = document.querySelector('.cont1');
var cont11 = document.querySelector('.cont11');
var cont12 = document.querySelector('.cont12');
// var Cbox = null;

cont11.addEventListener('click', () => {
    cont11.style.display = 'none';
    //cont12.style.display = 'block';
    if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(showPosition,showError);
        navigator.geolocation.watchPosition(showPosition);
    } else {
        console.log('browser does not support');
    }

    function showPosition(position) {
        lat = position.coords.latitude.toFixed(5);
        lng = position.coords.longitude.toFixed(5);
        // cont12.innerHTML =lat + '<br>' +lng;
        // console.log(lat);
        // console.log(lng);
    }
    function showError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("Enable location and Click on reload from Your menu box to use this App properly");
        // Cbox = confirm("Enable location and Click on reload from Your menu box to use this App properly");
        // if(Cbox){
        //     Cbox = 1;
        // }else {
        //     Cbox = 1;
        // }
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable refresh page or try using another browser.");
          break;
        case error.TIMEOUT:
          alert("The request to get your location timed out, refresh page or try using another browser.");
          break;
        case error.UNKNOWN_ERROR:
          x.innerHTML = "An unknown error occurred, refresh page or try using another browser."
          break;
      }
    }
});
cont11.click();




var cont13 = document.querySelector('.cont13');
var cont131 = cont13.querySelector('.cont13-1');
var cont132 = cont13.querySelector('.cont13-2');
var cont132div = cont13.querySelectorAll('.cont13-2 div');
var cont17 = document.querySelector('.cont17');

cont13.classList.add('cont13b');
cont17.classList.add('cont17b');

function cont1317chgfunx() {
    cont13.classList.remove('cont13b');
    cont17.classList.remove('cont17b');
}

for (let i = 0; i < cont132div.length; i++) {
    cont132div[i].addEventListener('click', () => {
        cont1317chgfunx();
    });
}

//hover event
cont13.addEventListener('mouseover', () => {
    cont131.style.display = 'none';
    cont132.style.display = 'block';
});
cont13.addEventListener('mouseout', () => {
    cont131.style.display = '';
    cont132.style.display = '';
});

//click event
// var check1 = true;
cont110 = document.querySelector('.cont1-10');
if (window.innerWidth <= 820) {
 // cont13.addEventListener('click', () => {
    // if (check1) {
        // setTimeout(() => {
        // }, 1400);
        cont132.style.display = 'block';
        cont131.style.display = 'none';
        cont110.style.display ='none';
        check1 = false;
        for (let i = 0; i < cont132div.length; i++) {
            cont132div[i].style.display = 'none';
        }
        setTimeout(() => {
            for (let i = 0; i < cont132div.length; i++) {
                cont132div[i].style.display = '';
            }
        }, 5000);
    // }
    // else {
    //     // setTimeout(() => {
    //     // }, 400);
    //         cont131.style.display = '';
    //         cont132.style.display = '';
    //         check1 = true;
    //  }
 // });
}
console.log(cont17);
var cont14 = document.querySelector('.cont14');
var cont14cvs1 = cont14.querySelector('.cont14cvs1');
var cont14cvs2 = cont14.querySelector('.cont14cvs2');
var cont15 = document.querySelector('.cont15');

function reloadMP(){
    pathAndOri = location.origin+location.pathname;
    location.assign(pathAndOri)
}

cvs1 = cont14cvs1.getContext('2d');
cvs1.strokeStyle = 'gray';
cvs1.lineWidth = 10;
cvs1.moveTo(50, 50);
cvs1.lineTo(250, 50);
cvs1.moveTo(50, 80);
cvs1.lineTo(250, 80);
cvs1.moveTo(50, 110);
cvs1.lineTo(250, 110);
cvs1.stroke();

cvs2 = cont14cvs2.getContext('2d');
cvs2.strokeStyle = 'gray';
cvs2.lineWidth = 12;
cvs2.moveTo(50, 50);
cvs2.lineTo(150, 80);
cvs2.lineTo(50, 110);
cvs2.moveTo(250, 50);
cvs2.lineTo(150, 80);
cvs2.lineTo(250, 110);
cvs2.stroke();

function cont14changefunx(a) {
    if (a) {
        cont14cvs1.style.display = 'none';
        cont14cvs2.style.display = 'block';
        check2 = false;
        cont14.classList.add('cont14b');
        cont15.style.marginLeft = 0;
    } else {
        cont14cvs1.style.display = '';
        cont14cvs2.style.display = '';
        check2 = true;
        cont14.classList.remove('cont14b');
        cont15.style.marginLeft = '';
    }
}

var check2 = true;
var cont14falsebol = false;
cont14.addEventListener('click', () => {
    cont14changefunx(check2);
    cont131.style.display = '';
    cont132.style.display = '';
});

var cont16 = document.querySelector('.cont16');
var search = cont16.querySelector('.input');
var cont161 = cont16.querySelector('.cont16-1');
var cont161div = cont16.querySelectorAll('.cont16-1 div');
search.addEventListener('input', () => {
    if (!search.value) {
        cont161.style.display = 'none';
    } else {
        cont161.style.display = '';
        for (let i = 0; i < cont161div.length; i++) {
            if (cont161div[i].innerHTML.toLowerCase().includes(search.value.toLowerCase())) {
                cont161div[i].style.display = 'block';

             }else {
                cont161div[i].style.display = 'none';
            }
            cont161div[i].addEventListener('click', () => {
                cont161.style.display = 'none';
                search.value = cont161div[i].innerText;
                cont152mefunx();
            });
        }
    }
});

search.addEventListener('click', () => {
    search.value = '';
    cont131.style.display = 'none';
    cont132.style.display = 'block';
    cont14changefunx(cont14falsebol);
});


//maps
 var mapOptions = {
    center: [8.9788, 7.1795],
    zoom: 12,
    maxZoom: 17,
    zoomSnap: 0.2,
}
if (window.innerWidth <= 300) {
    //mapOptions.zoom = 14.4;
    mapOptions.zoom = 17;
}else if (window.innerWidth <= 420) {
    //mapOptions.zoom = 14.5;
    mapOptions.zoom = 16.5;
} else if (window.innerWidth <= 850) {
    mapOptions.zoom = 16;
}else {
    mapOptions.zoom = 17;
    cont14cvs1.click();
}

var map;
map = new L.map('map', mapOptions);


var layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');


// var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 	maxZoom: 19,
// 	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// });

var layer1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');

layer1.setOpacity(0.8);


map.addLayer(layer);
map.addLayer(layer1);

map.removeLayer(layer1);

function Tlayer(a){
    if(a){
        map.addLayer(layer1);
        // cont14cvs1.style.color ='white';
        cvs1.strokeStyle = 'white';
        cvs1.stroke();
        cont131.style.background = 'white';
        for(var i=0;i < cont132div.length; i++){
         cont132div[i].style.color = 'white'; 
        }
        for(var i=0;i < cont161div.length; i++){
         cont161div[i].style.color = 'white'; 
        }
        cvs171.strokeStyle = 'white';
        cvs171.stroke();
        cont17cvs2.style.background ='white';
        cont181.style.color ='white';
        cont182.style.color ='white';
        cont181.style.borderColor ='white';
    }else{
        map.removeLayer(layer1);
        cvs1.strokeStyle = 'gray';
        cvs1.stroke();
        cont131.style.background = '';
        for(var i=0;i < cont132div.length; i++){
         cont132div[i].style.color = ''; 
        }
        for(var i=0;i < cont161div.length; i++){
         cont161div[i].style.color = 'gray'; 
        }
        cvs171.strokeStyle = '';
        cvs171.stroke();
        cont17cvs2.style.background ='';
        cont181.style.color ='';
        cont182.style.color ='';
        cont181.style.borderColor ='';
    }
}


var leafletControl = document.querySelector('.leaflet-control');
leafletControl.classList.add('leaflet-controlb');



map.addEventListener('click', () => {
    // console.log('get longitude and latt when click and draw polyline around map');
    cont161.style.display = 'none';
    cont132.style.display = 'block';
    cont131.style.display = 'none';
    cont14changefunx(cont14falsebol);
});
cont13.addEventListener('click', () => {
    cont14changefunx(cont14falsebol);
});

mainOfAllLoc = [8.9788, 7.1787];


// picks =[];
// roads = [];
//
// map.addEventListener('click',(e)=>{
//     lat = e.latlng.lat.toFixed(4);
//     lng = e.latlng.lng.toFixed(4);
//     picks.push(lat);
//     picks.push(lng);
//     // L.marker(e.latlng).addTo(map);
//     if (picks.length == 4) {
//         var latlngs = [
//             [picks[0], picks[1]],
//             [picks[2], picks[3]]
//         ];
//         roads.push(latlngs);
// var polyline = L.polyline(latlngs, {color: 'green'}).addTo(map);
// picks = [];
//     };
// });
//
// var agricR=[[8.9827,7.1764],[8.9837,7.1769]];
//
// function polyliner(a){
//     var polyline = L.polyline(a, {color: 'green'}).addTo(map);
// }
//
// polyliner(agricR);

var covGround = [8.9803,7.1801],
senBuilding = [8.9813,7.1795],
sciencetheater =[8.9807, 7.1778],
agricfaculty = [8.9827,7.1765],
library =[8.9794,7.1793],
etf =[8.9768,7.1783],
tetfund = [8.9770,7.1773],
zenithbank=[8.9791, 7.1788],
firstbank = [8.9781, 7.1773],
oldgirlsHostel =[8.9748, 7.1767],
engineeringfaculty =[8.9777, 7.1758],
middlegirlsHostel =[8.9745, 7.1776],
newgirlsHostel =[8.9723, 7.1789],
artfaculty =[8.9742, 7.1820],
oldboysHostel =[8.9738, 7.1865],
newboysHostel =[8.9761, 7.1875],
lawfaculty =[8.9763, 7.1815],
managementscience =[8.9793, 7.1825],
Healthscience = [8.9795, 7.1746],
uniClinic = [8.9791, 7.1716],
carPack1 =[8.9804, 7.1815],
sportcenter =[8.9835, 7.1857],
schoolGate=[8.9888, 7.1868],
physicscomplex =[8.9805, 7.1776],
// UofA =[8.9788, 7.1787],
sciencefaculty = [8.9818, 7.1784]/*,
test = [8.9810, 7.1781]*/;

var box = [covGround, senBuilding, sciencetheater, agricfaculty,
library, etf, tetfund, zenithbank, firstbank, oldgirlsHostel,
engineeringfaculty, middlegirlsHostel, newgirlsHostel, artfaculty,
oldboysHostel, newboysHostel, lawfaculty, managementscience, Healthscience,
uniClinic, carPack1, sportcenter,schoolGate,physicscomplex, /*UofA,*/ sciencefaculty, /*test*/];

var boxForNames = [];

for(var i = 5; i < cont161div.length; i++){
  boxForNames.push(cont161div[i].innerHTML.toUpperCase());
}

//console.log(boxForNames);

var boxndNames = box.concat(boxForNames);

var cont17 = document.querySelector('.cont17');
var cont17cvs1 = cont17.querySelector('.cont17cvs1');
var cont17cvs2 = cont17.querySelector('.cont17cvs2');

var cont18 = document.querySelector('.cont18');
var cont181 = cont18.querySelector('.cont18-1');
var cont182 = cont18.querySelector('.cont18-2');

cvs171 = cont17cvs1.getContext('2d');
cvs171.strokeStyle = 'darkgray';
cvs171.lineWidth = 12;
cvs171.moveTo(160, 50);
cvs171.lineTo(110, 75);
cvs171.lineTo(160, 100);
cvs171.stroke();

cvs172 = cont17cvs2.getContext('2d');
cvs172.strokeStyle = 'brown';
cvs172.lineWidth = 12;
cvs172.moveTo(160, 50);
cvs172.lineTo(210, 75);
cvs172.lineTo(160, 100);
cvs172.stroke();


var markers = [];
var mapPan = [];
var checkH = true;
//var show, endShow;

// L.circle(Healthscience, {
//        color: 'blue',
//        // fillColor: '#f03',
//       fillOpacity: 0.5,
//         radius: 50,
//     }).addTo(map).bindPopup("I am a circle.");


function markerAdd(a, b) {
    // marker = L.marker(a);//.addTo(map);
    marker = L.circle(a, {
        color: 'lightblue',
        fillColor: 'blue',
        fillOpacity: 0.4,
        radius: 50,
    });
    marker.bindPopup(b);
    markers.push(marker);
    mapPan.push(a);
    map.panTo(mapPan[0]);
}
function layerDel() {
    for (let i = 0; i < markers.length; i++) {
        map.removeLayer(markers[i]);
    }
    markers.length = 0;
    checkH = true;
    checkB = true;
    checkA = true;
    checkCP = true;
    checkF = true;
}
function markerShow() {
//console.log(markers);
    markers[0].addTo(map);
    markers[0].openPopup();
    map.panTo(mapPan[0]);
    var show = 1;
    var endShow = markers.length;
    cont17cvs1.style.opacity= .3;
    cont182.innerHTML = endShow;
    cont181.innerHTML = show;
    cont18.classList.add('cont18b');
    showeqal1();
    endShweqalSh();
    function showeqal1() {
       if(show == 1) {
         cont17cvs1.style.opacity= .3;
     } else {
         cont17cvs1.style.opacity= '';
     }
    }
    function endShweqalSh() {
        if (endShow == show) {
            cont17cvs2.style.opacity= .3;
        } else {
            cont17cvs2.style.opacity = '';
        }
    }
    function shgr1() {
        if (show > 1) {
            for (let i = 0; i < markers.length; i++) {
                map.removeLayer(markers[i]);
            }
            markers[show - 2].addTo(map);
            markers[show - 2].openPopup();
            map.panTo(mapPan[show-2]);
            show--;
        }
    }
    function endShgrSh() {
        if (endShow > show) {
            for (let i = 0; i < markers.length; i++) {
                map.removeLayer(markers[i]);
            }
            if (markers[show]) {
                markers[show].addTo(map);
                markers[show].openPopup();
                map.panTo(mapPan[show]);
                show++;
            }else{
                show++;
                markers[show].addTo(map);
                markers[show].openPopup();
                map.panTo(mapPan[show]);
            }
        }
    }
    if (endShow === 1) {
        cont18.classList.remove('cont18b');
        cont13.classList.add('cont13b');
        cont17.classList.add('cont17b');
    }
    cont17cvs1.addEventListener('click', () => {
        shgr1();
        showeqal1();
        endShweqalSh();
        cont181.innerHTML = show;
        if(screen.width < 600){
            cont131.style.display = 'none';
            cont132.style.display = 'block';
        }
    });
    cont17cvs2.addEventListener('click', () => {
        endShgrSh();
        showeqal1();
        endShweqalSh();
        cont181.innerHTML = show;
        if(screen.width < 600){
            cont131.style.display = 'none';
            cont132.style.display = 'block';
        }
    });
    cont17.addEventListener('click', () => {
        cont18.classList.add('cont18b');
        setTimeout(() => {
            cont18.classList.remove('cont18b');
        }, 100000);
    });
    map.addEventListener('click',()=>{
        cont18.classList.remove('cont18b');
        cont13.classList.add('cont13b');
        cont17.classList.add('cont17b');
    });
}

function checkHostel() {
    layerDel();
    mapPan = [];
    cont1317chgfunx();
    if (checkH) {
        markerAdd(newboysHostel, boxForNames[15]);
        markerAdd(oldboysHostel, boxForNames[14]);
        markerAdd(newgirlsHostel, boxForNames[12]);
        markerAdd(middlegirlsHostel, boxForNames[11]);
        markerAdd(oldgirlsHostel, boxForNames[9]);
        markerShow();
        checkH = false;
    } else {
        checkH = true;
    }
}
cont161div[0].addEventListener('click', checkHostel);

var checkB = true;
function checkBank() {
    layerDel();
    mapPan = [];
    cont1317chgfunx();
    if (checkB) {
        markerAdd(zenithbank, boxForNames[7]);
        markerAdd(firstbank, boxForNames[8]);
        markerShow();
        checkB = false;
    } else {
        checkB = true;
    }
}
cont161div[1].addEventListener('click', checkBank);
var checkA = true;
function checkAtm() {
    layerDel();
    mapPan = [];
    cont1317chgfunx();
    if (checkA) {
        markerAdd(zenithbank, boxForNames[7]);
        markerAdd(firstbank, boxForNames[8]);
        markerShow();
        checkA = false;
    } else {
        checkA = true;
    }
}
cont161div[2].addEventListener('click', checkAtm);

var checkCP = true;
function checkCarPark() {
    layerDel();
    mapPan = [];
    cont1317chgfunx();
    if (checkCP) {
        markerAdd(carPack1, boxForNames[20]);
        markerShow();
        checkCP = false;
    } else {
        checkCP = true;
    }
}
cont161div[3].addEventListener('click', checkCarPark);

var checkF = true;
function checkFaculty() {
    layerDel();
    mapPan = [];
    cont1317chgfunx();
    if (checkF) {
        markerAdd(agricfaculty, boxForNames[3]);
        markerAdd(lawfaculty, boxForNames[16]);
        markerAdd(sciencefaculty, boxForNames[24]);
        markerAdd(engineeringfaculty, boxForNames[10]);
        markerAdd(artfaculty, boxForNames[13]);
        markerAdd(Healthscience, boxForNames[18]);
        markerAdd(managementscience, boxForNames[17]);
        markerShow();
        checkF = false;
    } else {
        checkF = true;
    }
}

cont161div[4].addEventListener('click', checkFaculty);
//lower navs
cont132div[0].addEventListener('click', checkCarPark);
cont132div[1].addEventListener('click', checkHostel);
cont132div[2].addEventListener('click', checkAtm);
cont132div[3].addEventListener('click', checkBank);
cont132div[4].addEventListener('click', checkFaculty);


function cont161divfunx(b, a, c) {
    if(b){
        b.addEventListener('click',()=> {
        layerDel();
        mapPan = [];
        markerAdd(a, c);
        markerShow();
        });
    }
}
clickToShowArr = [];
// box2 from 1-26 = cont161div and the rest are box;
box2 = [];

for (var q = 5; q < cont161div.length+1; q++) {
    box2.push(q);
}
for (var i = 0; i < box.length; i++) {
    box2.push(i);
}
     box2h = (box2.length-1)/2;
for (var i = 0; i < box2h; i++) {
    cont161divfunx(cont161div[i+5], box[i], boxForNames[i]);
    Show(box[i], boxForNames[i]);
}
for(var i = 0; i < clickToShowArr.length;i++ ){
        clickToShowArrfun(clickToShowArr[i]);
}
function Show(a,b){
    cir = L.circle(a, {
            color: 'lightgray',
            fillColor: 'lightgreen',
            fillOpacity: 0.4,
            radius: 40,
        });
        cir.addTo(map).bindPopup(b);
        clickToShowArr.push(cir);
}
function clickToShowArrfun(a){
    a.addEventListener('click',()=>{
        cont14changefunx(cont14falsebol);
        if(screen.width < 600){
            cont18.classList.remove('cont18b');
            cont13.classList.add('cont13b');
            cont17.classList.add('cont17b');
        }
    })
}


// console.log(mapOptions.center);

// map = new L.map('map', mapOptions);



var facultyico = L.icon({
    iconUrl: '../assets/images/facultyfull.png',
    // shadowUrl: 'assets/images/shadow.png',

    iconSize:     [70/4, 95/4], // size of the icon
    // shadowSize:   [50/4, 64/4], // size of the shadow
    iconAnchor:   [22/2.5, 94/6.8], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4/4, 62/4],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
function facultyicoAdd(a){
    L.marker(a, {icon: facultyico}).addTo(map);
}

        // facultyicoAdd(agricfaculty);
        // facultyicoAdd(lawfaculty);
        // facultyicoAdd(sciencefaculty);
        // facultyicoAdd(engineeringfaculty);
        // facultyicoAdd(artfaculty);
        // facultyicoAdd(Healthscience);
        // facultyicoAdd(managementscience);


var hostelico = L.icon({
    iconUrl: '../assets/images/hostelbunk.png',
    // shadowUrl: 'assets/images/shadow.png',

    iconSize:     [70/4, 95/5], // size of the icon
    // shadowSize:   [50/4, 64/4], // size of the shadow
    iconAnchor:   [22/2.5, 94/8.5], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4/4, 62/4],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
function hostelicoAdd(a){
    L.marker(a, {icon: hostelico}).addTo(map);
}
        // hostelicoAdd(newboysHostel);
        // hostelicoAdd(oldboysHostel);
        // hostelicoAdd(newgirlsHostel);
        // hostelicoAdd(middlegirlsHostel);
        // hostelicoAdd(oldgirlsHostel);


var bankico = L.icon({
    iconUrl: '../assets/images/dollar2.png',
    // shadowUrl: 'assets/images/shadow.png',

    iconSize:     [70/4, 95/5], // size of the icon
    // shadowSize:   [50/4, 64/4], // size of the shadow
    iconAnchor:   [8, 94/9], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4/4, 62/4],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
function bankicoAdd(a){
    L.marker(a, {icon: bankico}).addTo(map);
}

        // bankicoAdd(zenithbank);
        // bankicoAdd(firstbank);


var carPico = L.icon({
    iconUrl: '../assets/images/carP.png',
    // shadowUrl: 'assets/images/shadow.png',

    iconSize:     [70/2, 95/6], // size of the icon
    // shadowSize:   [50/4, 64/4], // size of the shadow
    iconAnchor:   [22/1.3, 94/10], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4/4, 62/4],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
function carPicoAdd(a){
    L.marker(a, {icon: carPico}).addTo(map);
}
        // carPicoAdd(carPack1);

var libraryico = L.icon({
    iconUrl: '../assets/images/library3.png',
    // shadowUrl: 'assets/images/shadow.png',
    iconSize:     [70/3, 95/3.5], // size of the icon
    // shadowSize:   [50/4, 64/4], // size of the shadow
    iconAnchor:   [22/2, 94/4], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4/4, 62/4],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

    // L.marker(library, {icon: libraryico}).addTo(map);


var clinicico = L.icon({
    iconUrl: '../assets/images/clinick3.png',
    // shadowUrl: 'assets/images/shadow.png',

    iconSize:     [70/2.8, 95/3.5], // size of the icon
    // shadowSize:   [50/4, 64/4], // size of the shadow
    iconAnchor:   [22/2, 94/4], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4/4, 62/4],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

    // L.marker(uniClinic, {icon: clinicico}).addTo(map);





//send a location

var cont152S = document.querySelector('.cont15-2S');
var cont19 = document.querySelector('.cont19');
var cont191 = document.querySelector('.cont19-1');
var cont191LA = document.querySelectorAll('.cont19 .lastImp');
var cont192 = document.querySelector('.cont19-2');
var p1p = document.querySelector('.p1p');
var impS = document.querySelectorAll('.cont19 .imp');
var latL,lngL,latlngName,newLink;
var locationN = `https://weownit.xyz${location.pathname}`;


cont152S.addEventListener('click',()=>{
    map.addEventListener('click', (e)=>{
        latL = e.latlng.lat.toFixed(4);
        lngL = e.latlng.lng.toFixed(4);
        // console.log(`${latL}, ${lngL}`);
        for (let i = 0; i < markerOb.length; i++) {
            map.removeLayer(markerOb[i]);
        }
        lat = e.latlng.lat;
        lng = e.latlng.lng;
        marker = L.marker([lat, lng]).addTo(map);
        markerOb.push(marker);
        mpClicked();
        impS[0].value ='';
    });
    for(var i = 0; i < clickToShowArr.length;i++ ){
        sendQ(clickToShowArr[i], box[i], boxForNames[i]);
    }
    function sendQ(a,b,c){
        a.addEventListener('click',()=>{
            mpClicked();
            latL = b[0];
            lngL = b[1];
            impS[0].value = c;
            for (let i = 0; i < markerOb.length; i++) {
                map.removeLayer(markerOb[i]);
            }
        });
    }
    function mrkrfunx(){
    for(let i = 0; i < markers.length; i++){
      afunx(markers[i]);
    }

    function afunx(a){
      a.addEventListener('click',()=>{
            mpClicked();
            latL = a._latlng.lat;
            lngL = a._latlng.lng;
            impS[0].value = a._popup._content;
            for (let i = 0; i < markerOb.length; i++) {
                map.removeLayer(markerOb[i]);
            }
      });
    }
    }
    setInterval(()=>{
        mrkrfunx();
    },100);
    function con1323No(){
        cont132.style.display = 'none';
        cont131.style.display = 'none';
    }
    con1323No();
    cont14changefunx(cont14falsebol);
    cont19.style.display = 'flex';
    var markerOb = [];
    var copyText = document.getElementById("linkC");

    function mpClicked(){
         cont191.style.display = 'flex';
         p1p.style.display = 'none';
         cont191LA[1].style.background='';
         cont191LA[1].value = 'copy!';
         con1323No();
    }
    function clearS(){
        map.addEventListener('click',()=>{
            cont192.style.display = 'none';
        });
        for(var i = 0; i < clickToShowArr.length;i++ ){
            delQ(clickToShowArr[i])
        }
        function delQ(a){
            a.addEventListener('click',()=>{
               cont192.style.display = 'none'; 
            });
        }
    }
    cont191LA[0].addEventListener('click',()=>{
           reall = impS[0].value.toUpperCase();
            latlngName = reall.replace(" ", "-");
            for(var i = 0;i < 3;i++){
                if(latlngName.includes(" ")){
                    latlngName = latlngName.replace(" ", "-");
                    i--;
                }
            }
            newLink = locationN+`?lat=${latL}?lng=${lngL}?name=${latlngName}`;
            impS[1].innerText = newLink;
            impS[1].style.display = 'none';
            copyText.value = newLink;
            cont191.style.display = 'none';
            cont192.style.display = 'flex';
            console.log(latL);
            console.log(lngL);
            console.log(newLink);
            clearS();
            // mrkrfunx();
        });
    cont191LA[1].addEventListener('click',()=>{
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
        cont191LA[1].style.background='seagreen';
        cont191LA[1].value = 'copied...';
        clearS();
        // mrkrfunx();
        location.replace(`https://weownit.xyz/${location.pathname}?al=copiedSL${latlngName}`);
    });
});

//copied to clipboard alert funx
if(location.search.substr(4,8) == 'copiedSL'){
    alert(`successfully copied ${location.search.substr(12)} to clipboard`);
}

cont14changefunx(cont14falsebol);
// cont14changefunx(true);
if(location.search.substr(1,3) == 'lat'){
    b = location.search.substr(5,6);
    c = location.search.substr(16,6);
    d = location.search.substr(28);

        markerS = L.circle([b,c], {
            color: 'lightblue',
            fillColor: 'blue',
            fillOpacity: 0.4,
            radius: 50,
        });
        e=[b,c];
    markerS.addTo(map);
    map.panTo(e);
    markerS.bindPopup(d).openPopup();
}

//show my location
cont152me = document.querySelector('.cont15-2me');
cont152meP = document.querySelector('.cont15-2me p');
cont152mePL = document.querySelector('.cont15-2me .loader');
cont152Terin = document.querySelector('.cont15-2Terin');
cont152TerinL = document.querySelector('.cont15-2Terin .loader');
cont15inviteW = document.querySelector('.cont15-inviteW');
checkmeP = true;
myPos = '';
myPosA = [];
var showPosInterval;

    invitee = document.querySelector('.invitee');
    if(invitee){
        invitee = invitee.innerHTML.substr(1);
        link = `https://api.whatsapp.com/send?text=*Go Check out the WebApp made by a University of Abuja Student* %0D%0A %0D%0A %0D%0Ait an App that let's you View, Send and Edit mapped locations Around the University  %0D%0A %0D%0Aweownit.xyz${location.pathname}?invitee=${invitee}`;
        console.log(link);
    }
    
cont15inviteW.addEventListener('click',()=>{
    location.assign(link);
});

function cont152mefunx(){
    cont152mePL.style.display='block';
        cont152meP.style.display='none';
        setTimeout(()=>{
            cont152mePL.style.display ='';
            cont152meP.style.display='';
            cont110L.style.display = 'none';
            if (!checkmeP) {
                cont152meP.style.color = 'red';
                cont152meP.innerText = 'off';
                cont110.style.display ='';
                cont110.style.background ='red';
                myPosDel();
                clearInterval(showPosInterval);
                map.panTo(mainOfAllLoc);
                checkmeP = true;
                cont14changefunx(cont14falsebol);
                if(screen.width < 800){
                    cont131.style.display = 'none';
                    cont132.style.display = 'block';
                }
            } else {
                cont152meP.style.color = 'lightgreen';
                cont152meP.innerText = 'On';
                cont110.style.display ='';
                cont110.style.background ='lightgreen';
                showPos();
                checkmeP = false;
                cont14changefunx(cont14falsebol);
                if(screen.width < 800){
                    cont131.style.display = 'none';
                    cont132.style.display = 'block';
                }
            }
            cont132.addEventListener('click',()=>{
                cont152meP.style.color = 'red';
                cont152meP.innerText = 'off';
                myPosDel();
                clearInterval(showPosInterval);
                checkmeP = true;
                cont14changefunx(cont14falsebol);
            });
        },3500);
    }

cont152me.addEventListener('click', cont152mefunx);

if(screen.width < 800){
    cont131.style.display = 'none';
    cont132.style.display = 'block';
}

    tLayerCh = true;
cont152Terin.addEventListener('click',()=>{
   if(tLayerCh){
            // cont4.style.background ='none';
            cont152TerinL.style.display ='block';
            setTimeout(()=>{
                Tlayer(true);
                cont152TerinL.style.display ='none';
                // cont4.style.background ='white';
                tLayerCh = false;    
                cont14changefunx(cont14falsebol);
            },3500);
        }else{
            // cont4.style.background ='none';
            cont152TerinL.style.display ='block';
            setTimeout(()=>{
                Tlayer(false);
                cont152TerinL.style.display ='none';
                // cont4.style.background ='';
                tLayerCh = true;
                cont14changefunx(cont14falsebol);
            },3500);
        } 
});




//show my position
function showPos(){
        myPosDel();
        myPosA =[];
        myPos = L.circle([lat,lng], {
            color: 'whitesmoke',
            fillColor: 'brown',
            fillOpacity: 0.5,
            // radius: 100,
            radius: 50,
        });
        myPosA.push(myPos);
        myPosA[0].addTo(map);
        myPosA[0].bindPopup("Your Location");
        map.panTo([lat,lng]);
        
    showPosInterval = setInterval(()=>{
        myPosDel();
        myPosA =[];
        myPos = L.circle([lat,lng], {
            color: 'whitesmoke',
            fillColor: 'brown',
            fillOpacity: 0.5,
            // radius: 100,
            radius: 50,
        });
        myPosA.push(myPos);
        myPosA[0].addTo(map);
        myPosA[0].bindPopup("Your Location");
        map.panTo([lat,lng]);
    },5000);
}
function myPosDel(){
    for(var i = 0;i < myPosA.length; i++){
        map.removeLayer(myPosA[i]);
    }
}

popupAll = document.querySelectorAll(".popup");
popupS = document.querySelectorAll("#myPopup");
// console.log(popupAll[0]);

for (var i = 0; i < popupS.length; i++) {
    popUpMH(popupAll[i], popupS[i]);
    popUpMO(popupAll[i], popupS[i]);
}


function popUpMH(a,b) {
  a.addEventListener('mouseover',()=>{
        b.classList.add("show");
  });
}
function popUpMO(a,b){
    a.addEventListener('mouseleave',()=>{
          b.classList.remove("show");
    });
}
cont110 = document.querySelector('.cont1-10');
cont110L = document.querySelector('.cont1-10 .loader');
cont110.addEventListener('click',()=>{
    cont110.style.background ='transparent';
    cont110L.style.display = 'block';
    cont152me.click();
});

if((location.search.substr(1) == 'successEdMap')||(location.search.substr(1) == 'success2EdMap')){
    alert('details suceessfully submited');
}
nottruebutton = document.querySelector('.not-true button');
    
    if(nottruebutton){
        if(location.search.substr(1,7) == 'invitee'){
            nottruebutton.addEventListener('click',()=>{
                location.assign(`https://weownit.xyz/login?${location.search.substr(1)}`);
            });
        }else
        nottruebutton.addEventListener('click',()=>{
            location.assign('https://weownit.xyz/login/?linkfrm='+location.pathname);  
        });
    }
    
    
    // map.zoomOut(1,1);
    
    
    