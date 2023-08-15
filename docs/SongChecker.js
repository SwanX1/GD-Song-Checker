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
        // Send Request
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
        
      }else {
        alert('Enter Valid Song Id');
      }
  }
});
