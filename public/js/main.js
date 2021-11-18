const cityName = document.getElementById('cityname');
const subbtn = document.getElementById('subbtn');
const city_name = document.getElementById('city_name');
const temprealval = document.getElementById('temprealval');
const temp_status = document.getElementById('temp_status');
const datahide= document.querySelector('.middle_layer');
const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.Value;
    if (cityVal == 0) {
        city_name.innerText = `plz write the name before search`;
   datahide.classList.add('data_hide');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=feeae6ecdb6c8745e42c278218da8096`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
          console.log(arrData[0].main.temp); 

            city_name.innerText = `${arrData[0].name},${arrData[0].country}`;
            temprealval.innerText = arrData[0].main.temp;
       
           const tempmood = arrData[0].weather[0].main;
            if(tempmood =="Clear"){
                temp_status.innerHTML = 
                    "<i class='fas fa-sun' style='color: #eccc68;'></i>"
            }else if(tempmood =="CloudS"){
                temp_status.innerHTML = 
                    "<i class='fas fa-cloud' style='color: #eccc68;'></i>"
            }else if(tempmood =="Rain"){
                temp_status.innerHTML = 
                    "<i class='fas fa-cloud-rain' style='color: #eccc68;'></i>"
            
            }else
                temp_status.innerHTML = 
                    "<i class='fas fa-sun' style='color: #eccc68;'></i>"
                    datahide.classList.aremove('data_hide');
             }catch {
            city_name.innerText = `plz enter city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}

subbtn.addEventListener('click', getInfo);