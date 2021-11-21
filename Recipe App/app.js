




let box = document.querySelector(".box");
let colorBtn = document.querySelector("#colorBtn");

colorBtn.onclick = function () {
    box.classList.toggle("dark-mode");
}



let toggleBtn = document.querySelector(".sidebar-toggle");
let sliderBar = document.querySelector(".sliderBar");

toggleBtn.addEventListener("click", function () {
    console.log(sliderBar.classList);
    sliderBar.classList.toggle("show-sliderBar");
});





function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let sessions = "AM";
  
    
    if(h == 0){
      h = 12;
    }
    
    if(h > 12) {
      h = h - 12;
      sessions = "PM"
    }
     
    
    h = (h < 10 ) ? "0" + h : h;
    m = (m < 10 ) ? "0" + m : m;
    s = (s < 10)  ? "0" + s : s;
    
    let time = h + ":" + m + ":" + s + " " + sessions;
    
    document.querySelector("#MyClock").innerHTML = time;
    
    document.querySelector("#MyClock").textContent = time;
    
    
   setTimeout(showTime, 1000)
    
    
  }
  
  showTime();
  
