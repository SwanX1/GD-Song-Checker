var returndata = document.getElementById("SongValue");
document.getElementById("btn").addEventListener("click", () => {
  var str = document.getElementById("Sid").value
  if (!str) {alert('Enter Valid Song Id');}
    else {
      if (!isNaN(str) && !isNaN(parseFloat(str))) {
        var url = `http://www.boomlings.com/database/getGJSongInfo.php`;
        data = {
          "secret": "Wmfd2893gb7",
          "songID": str
        };
        
      }else {
        alert('Enter Valid Song Id');
      }
  }
});
