document.getElementById("apply-btn").addEventListener("onclick", display());

async function getData(){
    let res = await fetch("https://apartment-finder-26788-default-rtdb.asia-southeast1.firebasedatabase.app/apartments.json");
    let data = await res.json();

    let apartmentsArr = [];
    for(let key in data){
        apartmentsArr.push({id:key, ...data[key]});
    }
    return apartmentsArr;
}

async function displayAll(){
    let apartmentsArr = await getData();

    let container = document.getElementById("container");
    container.innerHTML = "";

    apartmentsArr.forEach((apartment) => {
        let newApt = document.createElement("div");
        newApt.className = "apt-card";

        newApt.innerHTML = `
           <h2>${apartment.name}</h2>
           <p>City: ${apartment.city}</p>
           <p>Neighborhood: ${apartment.neighborhood}</p>
           <p>Amenities: ${apartment.amenities}</p>
           <p>Size: ${apartment.size}</p>
           <p>Price: ${apartment.price}</p>
        `;

        container.appendChild(newApt);
    });
}
displayAll();

async function filterAndSearch(){
    let apartmentsArr = await getData();

    let searchQuery = document.getElementById("searchInput").value;
    let selectedBedrooms = document.getElementById("bedroomFilter").value;
    let availableOnly = document.getElementById("availableOnly").checked;

    let filtered = apartmentsArr.filter((apt) => {
        let matchedSearch = apt.name.includes(searchQuery) || apt.city.includes(searchQuery) || apt.neighborhood.includes(searchQuery);
        let matchedBedrooms = !selectedBedrooms || (selectedBedrooms === "3" && apt.bedrooms >= 3) || apt.bedrooms == selectedBedrooms;
        let matchedAvailability = !availableOnly || apt.available === true;
        
        return matchedSearch && matchedBedrooms && matchedAvailability;
    })
}

async function display(){

    let filtered = await filterAndSearch();
    console.log(filtered);

    let container = document.getElementById("container");
    container.innerHTML = "";

    filtered.forEach((apartment) => {
        let newApt = document.createElement("div");
        newApt.className = "apt-card";

        newApt.innerHTML = `
           <h2>${apartment.name}</h2>
           <p>City: ${apartment.city}</p>
           <p>Neighborhood: ${apartment.neighborhood}</p>
           <p>Amenities: ${apartment.amenities}</p>
           <p>Size: ${apartment.size}</p>
           <p>Price: ${apartment.price}</p>
        `;

        container.appendChild(newApt);
    });
}
