var countDownDate=  new  Date("Dec 21,2022 15:37:25").getTime();

var x = setInterval(() => {
    
    var now = new Date().getTime();

    var distance = countDownDate - now ;

    var days = Math.floor(distance / (1000 * 60 *60 *24));
    var hours = Math.floor((distance % (1000 * 60 *60 *24)) / (1000 * 60 *60));
    var mins = Math.floor((distance % (1000 * 60 *60 ))/ (1000 * 60));
    var secs = Math.floor(distance % (1000 * 60 ) / 1000);

    document.getElementById("demo").innerHTML = days +" d "+hours +" h "+mins+" m "+secs+" s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = " EXPIRED"
    }


}, 1000);
