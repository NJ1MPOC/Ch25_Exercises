

window.addEventListener("load", function(){
    const testName = document.getElementsByName("testName");
    const testDate = document.getElementsByName("testDate");
    const rocketType = document.getElementsByName("rocketType");
    const boosterCount = document.getElementsByName("boosterCount");
    const windRating = document.getElementsByName("windRating");
    const productionServers = document.getElementsByName("productionServers");
    const form = document.getElementById("runSimulation");
    const errorMessage = document.getElementById("errorMessage");
    form.addEventListener("submit", function (event){
        event.preventDefault();
        if(testName.value === "" || testDate.value === "" || rocketType.value === "" || boosterCount.value === "" || windRating.value === "" || productionServers.value === ""){
            errorMessage.innerHTML="All fields required";
        }
    })
}) 



