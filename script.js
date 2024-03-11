const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn");
options = wrapper.querySelector(".options");
searchInp = wrapper.querySelector("input");

let assets = ["Chair","Mini chair","Sitting Bench","Lecture Hall",
            "Classroom Podium","Projector","Whiteboard","Blackboard","Student Desks","Teacher's Desk",
            "Chairs","Computer Lab Workstations","Library Shelves","Study Tables","Study Chairs","Laboratory Equipment",
            "Microscopes","Lab Benches","Test Tubes","Bunsen Burners","Chemical Storage Cabinets","Art Easels","Art Supplies",
            "Gym Equipment","Basketball Hoop","Volleyball Net","Tennis Court","Football Goalpost","Auditorium Seating","Stage",
            "Lighting Equipment","Musical Instruments","Piano","Music Stands","Cafeteria Tables","Food Serving Stations",
            "Refrigerators","Dishwashers","Library Computers","Bookshelves","Filing Cabinets","Microfilm Readers","Wheelchairs",
            "Bicycle Racks","Bike Share Bikes","Vending Machines","Water Fountains","Security Cameras","Access Control Systems",
            "Campus Signage","Trash Cans","Recycling Bins","Emergency Exits"
            ];
function addasset(){
    options.innerHTML = "";
    assets.forEach(asset =>{
        let li = `<li onclick="updateName(this)">${asset}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}     

addasset();

function updateName(selectedLi){
    searchInp.value = "";
    addasset();
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;


}

searchInp.addEventListener("keyup",()=>{
    let arr = [];
    let searchedVal = searchInp.value.toLowerCase();
    arr = assets.filter(data =>{
        return data.toLowerCase().startsWith(searchedVal);
    }).map(data => `<li onclick="updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr ? arr :`<p>Asset not found</p>` ;
});

selectBtn.addEventListener("click", ()=>{
    wrapper.classList.toggle("active");
});

