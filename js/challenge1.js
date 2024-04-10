var divs = document.getElementsByTagName("h1");  
for(var i = 0; i < divs.length; i++) {   
  var div = divs[i];                     
  div.style.color = 'purple';
  div.style.textAlign = 'center';             
}
document.addEventListener('dblclick', function() {
    var currentTime = new Date();
    alert(currentTime);
});
var checkbox = document.querySelector("#toggle")
var emailbox = document.querySelector("#emailBox")
checkbox.addEventListener('change', function() {
    if (checkbox.checked){
        emailbox.classList.remove('hidden');

    }else{
        emailbox.classList.add('hidden');
    }

});