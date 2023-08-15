var submit = document.getElementById("btn");
var SongId = document.getElementById("Sid");
var returndata = document.getElementById("SongValue");
// Get Song Data
function getSong(id) {
  var url = `http://www.boomlings.com/database/getGJSongInfo.php`;
  data = {
    "secret": "Wmfd2893gb7",
    "songID": id
  }
}
// Click Detector
submit.addEventListener("click", () => {
  var str = SongId.value;
  if (!str) {alert('Enter Valid Song Id');}
    else {
      if (!isNaN(str) && !isNaN(parseFloat(str))) {
        get(str)
      }else {
        alert('Enter Valid Song Id');
      }
  }
});
