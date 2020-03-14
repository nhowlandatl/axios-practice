document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("myButton").innerHTML = "Generating doggo";
    axios.get('https://dog.ceo/api/breed/hound/images/random') 
        .then((response) => {
            console.log(response.data);
        });
});