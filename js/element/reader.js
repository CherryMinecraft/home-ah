function bannedPlayers(arr) {
  var out = "";
  var i;
  for(i = 0; i<arr.length; i++) {
    out += '<div class="lis">' + arr[i].name + '</div>';
  }
  document.getElementById("topBan").innerHTML = out;
}
function topDonatorsList(arr) {
  var out = "";
  var i;
  for(i = 0; i<arr.length; i++) {
    out += '<div class="lis">' + arr[i].name + '</div>';
  }
  document.getElementById("topDonators").innerHTML = out;
}
function ownerList(arr) {
  var out = "";
  var i;
  for(i = 0; i<arr.length; i++) {
    out += '<div class="staffbox"><div class="staffpic"><img class="staffi" src="' + arr[i].head + '"></div><div class="stafftext"><div class="condd">' +
	arr[i].name + '<div class="stafftext2">' + arr[i].role + '</div></div></div></div>';
  }
  document.getElementById("ownerDisplay").innerHTML = out;
}
function staffList(arr) {
  var out = "";
  var i;
  for(i = 0; i<arr.length; i++) {
    out += '<div class="staffbox"><div class="staffpic"><img class="staffi" src="' + arr[i].head + '"></div><div class="stafftext"><div class="condd">' +
	arr[i].name + '<div class="stafftext2">' + arr[i].role + '</div></div></div></div>';
  }
  document.getElementById("staffDisplay").innerHTML = out;
}
function desktopMenuList(arr) {
  var out = "";
  var i;
  for(i = 0; i<arr.length; i++) {
    out += '<a class="menua" href="' + arr[i].url + '"' + arr[i].extra + '>' +
	'<div class="menue">' + arr[i].title + '</div></a>';
  }
  document.getElementById("desktopMenu").innerHTML = out;
}
function mobileMenuList(arr) {
  var out = "";
  var i;
  for(i = 0; i<arr.length; i++) {
    out += '<a class="menua" href="' + arr[i].url + '"' + arr[i].extra + '>' +
	'<div class="menue2">' + arr[i].title + '</div></a>';
  }
  document.getElementById("mobileMenu").innerHTML = out;
}