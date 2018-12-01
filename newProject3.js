$(document).ready(function () {

    //get todays date
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    
    //pass todays date to checkin min and value
    let checkinElement = document.getElementById("checkin");
    checkinElement.setAttribute("min", today);
    checkinElement.setAttribute("value", today);
    
    //pass tomorrows date to checkout min and value
    let checkoutElement = document.getElementById("checkout");
    checkoutElement.value=checkinElement.value;
    checkoutElement.stepUp(1);
    checkoutElement.min = checkoutElement.value;
    
    //pass checkin input date to checkout min and value
    checkinElement.addEventListener("input", function () {
        let date = checkinElement.value;
        checkoutElement.value = date;
        checkoutElement.stepUp(1);
        checkoutElement.min = checkoutElement.value;

    })
    
    //pass slidervalue to label
    let sliderValue = document.getElementById("maxprice-input");
    let sliderPrice = document.getElementById("sliderPrice");
    sliderValue.addEventListener("input", function () {
        sliderPrice.innerHTML = "max $" + sliderValue.value;
    });
    
    //red heart on hover
    $(".heart").mouseover((e) => {
        $(e.target).attr("src", "heart.png");
    });
    $(".heart").mouseout((e) => {
        $(e.target).attr("src", "emptyheart.png");
    });


    //pass hotel price to deal
    let siteClicked = document.getElementsByClassName("sites1");
    for (let site of siteClicked) {
        site.addEventListener("click", function () {
            let info = site.innerHTML;
            document.getElementById("deal1").innerHTML = info;
        });
    }
    let siteClicked2 = document.getElementsByClassName("sites2");
    for (let site of siteClicked2) {
        site.addEventListener("click", function () {
            let info = site.innerHTML;
            document.getElementById("deal2").innerHTML = info;
        });
    }

})