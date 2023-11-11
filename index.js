const input = document.querySelector("#guess");
const button = document.querySelector(".btn");
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        play();
    }
})

button.addEventListener("click", play);

function play() {
    const userNumber = document.querySelector("#guess").value;

    if (userNumber < 1 || userNumber > 20) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter number from 1 to 20!",
          })
    }

    else if (isNaN(userNumber)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter number!",
          }) 
    }


    else {
        if (userNumber < answer) {
            Swal.fire('Computer is winning for now!', 
            'Enter number higher!')
        }

        else if (userNumber > answer) {
            Swal.fire('Computer is winning for now!',
            'Enter number lower!')
        }

        else {
            Swal.fire({
                title: 'Victory!',
                text: "Hugs and congratulations!",
                imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Victory'
              })
        }
    }
}
