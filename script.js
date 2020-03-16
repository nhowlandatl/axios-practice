document.getElementById("myButton").addEventListener("click", function() {

    document.getElementById("myButton").innerHTML = "Generating doggo";
    axios.get('https://dog.ceo/api/breed/hound/images/random') 
        .then((response) => {
            console.log(response.data.message);
            var dogImg = document.createElement('img')
            dogImg.src = response.data.message;
            document.getElementById('dogBody').appendChild(dogImg)
            setTimeout(() => {
                return document.getElementById("myButton").innerHTML = " Generate doggo"; 
            }, 200 )
        });
});

