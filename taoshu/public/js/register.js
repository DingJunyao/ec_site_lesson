function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

document.getElementById("accept").onclick = function() {
  if(document.getElementById("accept").checked !== true) {
    document.getElementById("error").style.display = 'block';
    document.getElementById("register").disabled = false;
  } else {
    document.getElementById("error").style.display = 'none';
    document.getElementById("register").disabled = true;
  }
};
document.getElementById("register").onclick = function() {
    if(document.getElementById("password").value !== document.getElementById("confirm").value){
        alert('两次密码输入不一致！')
    }
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function (e) {
        if(e.target.readyState === XMLHttpRequest.DONE && e.target.status === 200) {
            switch (httpRequest.responseText) {
                case "0":
                    //success

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
    httpRequest.send("phone="+document.getElementById('phone').value+"&password="+document.getElementById('password').value)
};
