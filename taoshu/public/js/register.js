document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
},false);

document.getElementById("accept").onchange = function() {
  if(document.getElementById("accept").checked == true) {
    document.getElementById("error").style.display = 'none';
    document.querySelector('#register').removeAttribute('disabled');
  } else {
    document.getElementById("error").style.display = 'block';
    document.querySelector('#register').setAttribute('disabled',true);
  }
};
document.getElementById("register").onclick = function() {
  phoneReg = /^1[0-9]{10}$/;
  passReg = /^[A-Za-z0-9]{6,12}$/;
  if(document.getElementById("password").value !== document.getElementById("confirm").value){
      alert('两次密码输入不一致！');
      return;
  }
  if(!phoneReg.test(document.getElementById('phone').value) && !passReg.test(document.getElementById('password').value)){
    alert('输入的手机号和/或密码不合要求！');
    return;
  }
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function (e) {
      if(e.target.readyState === XMLHttpRequest.DONE && e.target.status === 200) {
          switch (httpRequest.responseText) {
              case "0":
                  setCookie("taoshu_user", document.getElementById('phone').value, 1)
                  setCookie("taoshu_token", SHA256(document.getElementById('phone').value+";"+document.getElementById('password').value), 1)
                  window.location.assign("/")
                  break;
              case "1":
                  alert("该用户已被注册！");
                  break;
              default:
                  alert("发生未知错误！");
          }
      }
  };
  httpRequest.open("POST", "/api/register", true)
  httpRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  httpRequest.send("phone="+document.getElementById('phone').value+"&password="+document.getElementById('password').value);
};
