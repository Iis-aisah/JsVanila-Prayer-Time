index()
function index () {
      let app = document.getElementById('app');
      let h3 = document.createElement("h3");
      h3.innerHTML = 'Prayer Time'
      app.appendChild(h3)
      userLocation()
}
function userLocation(){
      if(!navigator.geolocation){
            alert('geolocation tidak didukung didalam browser and, silahkan gunakan browser lain')
      }else{
            navigator.geolocation.getCurrentPosition(succes , error)
      }
}

function succes(position){
      console.log(position);
}

function error (){
      alert('posisi tidak dapat di akses')
}