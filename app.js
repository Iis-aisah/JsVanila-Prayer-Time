async function prayerTime (latitude, longtitude){
      const data = await fetch(`http://api.aladhan.com/v1/calendar?latitude=${latitude}&longitude=${longtitude}&method=4`)
      const dataJson = await data.json();
      let waktu = new Date()
      let today = waktu.getDate() - 1;
      let datanya = dataJson.data[today].timings;
      console.log(datanya)
      
      let app = document.getElementById('app')
      let table = document.createElement('table');
      let tableBody = document.createElement('tbody');

      for (i in datanya){
            let row = table.insertRow();
            let name = row.insertCell(0);
            let time = row.insertCell(1);

            name.innerHTML = i;
            time.innerHTML = datanya[i];

            tableBody.appendChild(row);
            
      }
      table.appendChild(tableBody)
      app.appendChild(table)
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
      prayerTime(-7.797068 , 110.370529);
}

function error (){
      alert('posisi tidak dapat di akses')
}