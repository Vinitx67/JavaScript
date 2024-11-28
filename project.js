var apiKey = "59952541d301940ff00bed71cefb7229";
window.onload = function () {
    var inpCity = document.querySelector("#inpCity");
    var tblCityData = document.querySelector("#cityData");
    document.querySelector("#btnGetCityData").addEventListener("click", function () {
        var cityName = inpCity.value.trim();
        if (cityName.length < 3) {
            console.error("NAME IS TOO SHORT SER");
            return;
        }
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=10&appid=${apiKey}`)
            .then(function (resp) {
                return resp.json();
            })
            .then(function (data) {
                if (data.length <= 0) return;
                tblCityData.innerHTML = ""; //CLEARS ALL DATA
                var headerRow = document.createElement("tr");
                headerRow.innerHTML = "<th>Sr.No</th><th>NAME</th><th>STATE</th><th>COUNTRY</th><th>LATITUDE</th><th>LONGITUDE</th>"
                tblCityData.appendChild(headerRow);
                data.forEach(function (city, idx) {
                    var row = document.createElement("tr");
                    row.innerHTML = `<td>${idx + 1}</td>
                                    <td><a href="#" data-bs-toggle="modal" data-bs-target="#myModal">${city.name}</a></td>
                                    <td>${city.state}</td>
                                    <td>${city.country}</td>
                                    <td>${city.lat}</td>
                                    <td>${city.lon}</td>`;
                    tblCityData.appendChild(row);
                });
            })
            .catch(function (err) {
                console.error(err);
            });

    });
}