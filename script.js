let rateBox = document.getElementById("rate-box");
let rateBtn = rateBox.getElementsByClassName("rate");

for (let i = 0; i < rateBtn.length; i++) {
    let rateValue = rateBtn[i].innerHTML = (i + 1);
    rateBtn[i].addEventListener("click", function() {

        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        document.querySelector(".rating-value").innerHTML = `You selected ${rateValue} out of 5`;
      });
  }

  document.querySelector(".btn").addEventListener("click",()=>{
        document.getElementById('submit-rated').style.display= 'flex';
        document.getElementById('rating-box').style.display = 'none';
})