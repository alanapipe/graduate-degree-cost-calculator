// //Declare variables
var tuition;
var scholarship;
var rent;
var transportation;
var uber;
var computer;
var phone;
var fines;
var lunch;
var internet;
var phonebill;
var utilities;
var groceries;
var coffee;
var hydration;
var alcohol;
var onlineshopping;
var weddings;
var birthdays;
var additional;
var healthcare;
var extrahealthcare;
var fun;
var living;
var grandTotal; //final cost


//Tell the DOM to wait for the click to do calculations
$(document).ready(function() {
	
    $("#button_magic").on("click", function(e) {
        //Then disable button's default behavior for ms users
        e.preventDefault();


//Now, inside document.ready, store ALL the input values of all the expensive costs of grad school
        
        transportation = 0;
        coffee = 0;
        hydration = 0;
        rent = parseFloat($("#rent_cost").val()) * 16;
        scholarship = parseFloat($("#scholarship_cost").val());
        uber = parseFloat($("#uber_cost").val()) * 16;
        internet = parseFloat($("#internet_cost").val()) * 16;
        phonebill = parseFloat($("#phonebill_cost").val()) * 16;
        utilities = parseFloat($("#utilities_cost").val()) * 16;
        fines = parseFloat($("#fines_cost").val()) *16;
        weddings = parseFloat($("#weddings_cost").val()); 
        birthdays = parseFloat($("#birthdays_cost").val());
        alcohol = parseFloat($("#alcohol_cost").val())*16;
        hygene = parseFloat($("#hygene_cost").val())*16;
        additional = parseFloat($("#additional_cost").val());
        healthcare = parseFloat($("#healthcare_cost").val()) *16;
        groceries = parseFloat($("#groceries_cost").val())*52;
        extrahealthcare = parseFloat ($("#extrahealthcare_cost").val())*16;

        //get answer from dropdowns and radio buttons
        tuition = parseFloat($("#tuition_cost").find("select").val());
        onlineshopping = parseFloat($("#onlineshopping_cost").find("select").val()) *16;
        computer = parseFloat($("#computer_cost").find("select").val());
        phone = parseFloat($("input[name='phone']:checked").val());
        lunch = parseFloat($("#lunch_cost").find("select").val()) * 16;


        //parse data from checkbox inputs
        $("#transportation_cost").find("input[type='checkbox']:checked").each(function() {
            var checkbox = $(this);
            var checkbox_value = parseFloat(checkbox.val());
            transportation = transportation + checkbox_value *16;
        });

		$("#coffee_cost").find("input[type='checkbox']:checked").each(function(){
			var checkbox = $(this);
			var checkbox_value = parseFloat(checkbox.val());
			coffee = coffee + checkbox_value;
		}); 

        $("#hydration_cost").find("input[type='checkbox']:checked").each(function(){
            var checkbox = $(this);
            var checkbox_value = parseFloat(checkbox.val());
            hydration = hydration + checkbox_value;
        });

    //write a function that shows and stores the value of slider

		runMath();
	    showMath();
        runFun();
        showFun();
        runLiving();
        showLiving();
	 }); //close on click
}); //close on ready

//Now define the math functions outside of (document).ready
/*function fun_cost() {
    fun = uber + fines + alcohol + onlineshopping + weddings + birthdays + additional;
}*/

function runMath() {
	
    grandTotal = tuition - scholarship + rent + transportation + uber 
    			+ computer + phone + fines + healthcare + extrahealthcare + internet + phonebill + utilities
    			+ lunch + groceries + coffee +hydration + alcohol + hygene + onlineshopping 
                + weddings + birthdays + additional ; // + all other expenses 
}

function runFun() {
    fun = fines + uber + alcohol + onlineshopping + weddings + birthdays + additional;
}

function runLiving() {
    living = rent + transportation + computer + phone + internet + phonebill + utilities + hygene +
    lunch + groceries + coffee + hydration + healthcare + extrahealthcare;

}

function showMath() {
    $("#tuition_cost").text(tuition);
    $("#rent_cost").text(rent);
    $("#transportation_cost").text(transportation);
    $("#uber_cost").text(uber);
    $("#computer_cost").text(computer);
    $("#phone_cost").text(phone);
    $("#fines_cost").text(fines);
    $("#internet_cost").text(internet);
    $("#phonebill_cost").text(phonebill);
    $("#utilities_cost").text(utilities);
    $("#lunch_cost").text(lunch);
    $("#coffee_cost").text(coffee);
    $("#hydration_cost").text(hydration);
    $("#alcohol_cost").text(alcohol);
    $("#onlineshopping_cost").text(onlineshopping);
    $("#weddings_cost").text(weddings);
    $("#birthdays_cost").text(birthdays);
    $("#addional_cost").text(additional);
    $("#hygene_cost").text(hygene);
    $("#groceries_cost").text(groceries);
    $("#healthcare_cost").text(healthcare);
    $("#extrahealthcare_cost").text(extrahealthcare);

    $("#show-tuition_cost").text(numberWithCommas(tuition));
    
    $("#show-grandTotal").text(numberWithCommas(grandTotal));
    //invoke class from css to show the answer
    $("#final-results").addClass('results-show');
}

function showFun() {
    $("#fines_cost").text(fines);
    $("#uber_cost").text(uber);
    $("#alcohol_cost").text(alcohol);
    $("#onlineshopping_cost").text(onlineshopping);
    $("#weddings_cost").text(weddings);
    $("#birthdays_cost").text(birthdays);
    $("#addional_cost").text(additional);

    $("#show-fun-cost").text(numberWithCommas(fun));
    $("#final-results").addClass('results-show');
}

function showLiving () {
    $("#rent_cost").text(rent);
    $("#transportation_cost").text(transportation);
    $("#computer_cost").text(computer);
    $("#phone_cost").text(phone);
    $("#internet_cost").text(internet);
    $("#phonebill_cost").text(phonebill);
    $("#utilities_cost").text(utilities);
    $("#lunch_cost").text(lunch);
    $("#coffee_cost").text(coffee);
    $("#hydration_cost").text(hydration);
    $("#hygene_cost").text(hygene);
    $("#groceries_cost").text(groceries);
    $("#healthcare_cost").text(healthcare);
    $("#extrahealthcare_cost").text(extrahealthcare);

    $("#show-livingCosts").text(numberWithCommas(living));
    $("#final-results").addClass('results-show');
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
