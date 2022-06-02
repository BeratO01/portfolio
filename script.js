// jQuery smooth scroll

$('.navbar a').on('click', function(e){
    if(this.hash!== ''){
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {scrollTop: $(hash).offset().top}

        );
    }
})

function sui(){
    document.getElementById('demo').style.display='block';
}

const switchTheme = document.querySelector("#switch");
switchTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});


function PC() {
  var x = document.getElementById("demo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  } }
 
