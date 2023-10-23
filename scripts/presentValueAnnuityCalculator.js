function myFunction() {
    var text;
    var value = 0.0;
     
    // gets the values from the inputs
    var Payment = document.getElementById("payment").value;
    var Interest = document.getElementById("interest").value;
    var Years = document.getElementById("years").value;
    var period = document.getElementById("period").value;
    var lifespan = 1;
     
    //lifespan variable is the frequency of payments per year
    if (period == "annually") lifespan = 1;
    if (period == "semi annually") lifespan = 2;
    if (period == "quarterly") lifespan = 4;
    if (period == "monthly") lifespan = 12;
    if (period == "bimonthly") lifespan = 24;
    if (period == "weekly") lifespan = 52;
     
    // checks to see if these values are numbers
    if (isNaN(Payment) || isNaN(Interest) || isNaN(Years)) {
    text = "Input not valid";
    }
    else {
    //calculates the present value of the annuity
    var temp = Interest / (100*lifespan);
    var temp2 = Math.pow((1 + temp), (lifespan * Years));
    value = Payment * (1 - 1 / temp2) / (temp);
     
    //if user chooses annuity due
    if(annuitytype == "due") value = value * (1 + temp);
     
    //grammatical cases for the output of the function
    if(lifespan == 1 && Years == 1) text = "The Annuity pays $" + Payment + ", once per year for one year, is worth $" + value.toFixed(3);
    else if(lifespan == 1) text = "The Annuity pays $" + Payment + ", once per year for " + Years + " years, is worth $" + value.toFixed(3);
    else if(Years == 1) text = "The Annuity pays $" + Payment + ", " + lifespan + " times per year for one year, is worth $" + value.toFixed(3);
    else text = "The Annuity pays $" + Payment + ", " + lifespan + " times per year for " + Years + " years, is worth $" + value.toFixed(3);
    }
     
    //outputs either an error message or the value of the annuity
    document.getElementById("demo").innerHTML = text;
    }