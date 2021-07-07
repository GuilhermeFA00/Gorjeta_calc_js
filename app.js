//Function for calculute the value of tip

function tip_calc() {
    var value_tot = document.getElementById('value_tot').value;
    var ratingService = document.getElementById('RatingServ').value;
    var people = document.getElementById('hm_people').value;

    if (value_tot === " " || ratingService == 0) {
        alert("!Input the values!")
        throw new Error("!Input the values!")
    }

    if (people === " " || people <= 1) {
        people = 1;
        document.getElementById('for_each').style.display = "none";
    } else {
        document.getElementById('for_each').style.display = "block";
    }

    //Math calcs for value of tip
    var price = (value_tot * ratingService) / people;
    price = Math.round(price * 100) / 100;
    price = price.toFixed(2);
    document.getElementById('price_FE').style.display = "block";
    document.getElementById('tip').innerHTML = price;
};


document.getElementById('price_FE').style.display = "none";
document.getElementById('for_each').style.display = "none";


document.getElementById('calcule').onclick = function () {
    tip_calc()
};