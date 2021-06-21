const thisWeekNewsBtn1 = document.getElementById("thisweeknews1btn");
const news1 = document.getElementById("newsoverlay1");
const news2 = document.getElementById("newsoverlay2");

console.log(divWhichWeApplyClassChange);

function addClass1(){
    
    news1.classList.add("active");
}

function removeClass1(){
    news1.classList.remove("active");
}

function addClass2(){
    
    news2.classList.add("active");
}

function removeClass2(){
    news2.classList.remove("active");
}