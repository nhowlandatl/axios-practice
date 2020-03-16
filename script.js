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


axios.get('https://dog.ceo/api/breeds/list') 
        .then((response) => {
            response.data.message.map(dog => {
               var opt = document.createElement('option')
               opt.innerHTML = dog;
               opt.value = dog
               select.appendChild(opt);
        })
});




// document.getElementById("select").addEventListener("change", function() {
//     axios.get('https://dog.ceo/api/breed/{what?}/images/random')
    
// });