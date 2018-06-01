document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
},false);

document.getElementById('search-button').onclick = function(){
  window.location.assign("/search/" + document.getElementById('search-book').value);
}
