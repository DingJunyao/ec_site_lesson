document.getElementById("logo").onclick = function() {
  window.location.assign("/")
}

document.getElementById("register").onclick = function() {
  window.location.assign("/register")
}

document.getElementById("login").onclick = function() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function (e) {
      if(e.target.readyState === XMLHttpRequest.DONE && e.target.status === 200) {
          switch (httpRequest.responseText) {
              case "0":
                  setCookie("taoshu_user", document.getElementById('username').value, 1)
                  setCookie("taoshu_token", SHA256(document.getElementById('username').value+";"+document.getElementById('password').value), 1)
                  window.location.assign("/")
                  break;
              case "-1":
                  alert("用户名或密码错误！");
                  break;
              default:
                  alert("发生未知错误！");
          }
      }
  };
  httpRequest.open("POST", "/api/login", true)
  httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  httpRequest.send("username="+document.getElementById('username').value+"&password="+document.getElementById('password').value)
}
