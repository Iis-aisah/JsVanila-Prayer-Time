async function prayerTime (latitude, longtitude){
      const data = await fetch(`http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longtitude}&method=2`)
      const dataJson = await data.json();
      let waktu = new Date()
      let today = waktu.getDate() - 1;
      console.log(dataJson.data[today])
}

index()
function index () {
      let app = document.getElementById('app');
      let h3 = document.createElement("h3");
      h3.innerHTML = 'Prayer Time'
      app.appendChild(h3)
      userLocation()
     
      // prayerTime()
}
function userLocation(){
      if(!navigator.geolocation){
            alert('geolocation tidak didukung didalam browser and, silahkan gunakan browser lain')
      }else{
            navigator.geolocation.getCurrentPosition(succes , error)
      }
}

function succes(position){
      prayerTime(position.coords.latitude , position.coords.latitude);
}

function error (){
      alert('posisi tidak dapat di akses')
}