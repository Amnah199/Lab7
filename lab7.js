$(document).ready(function() {
	var JSONobj;
	
	function LabelInput() {
    var namein = prompt("Please enter the label", "");
    
    if (namein != null) {
		return namein;
        
    }
	
	
	
	
}

var formArea=$("#formArea");

var name = $("#namebutton");
var checkbox = $("#checkboxbutton");
var radiobutton = $("#radioaddbutton");
var password= $("#passwordbutton");
var select= $("#selectbutton");
var datalist=$("#db");
var ta=$("#ta");

$(ta).click(function() {

$(formArea).append('<div>'+'<div class="ta" >'+'<textarea>' + LabelInput()  +'</textarea>'+ '<br>' + '</div>' + '</div>');

});


$(datalist).click(function() {
	$(formArea).append('<div class="datalist" >' + '<label >'+LabelInput()+': </label>' + window.alert("NOW ENTER THE 3 VALUES FOR DATALIST")+
'<input list="list" name="list">' + '<datalist id="datalistid">'+'<option value=option1>'+LabelInput()+'</option>' +'<option value=option2>'+LabelInput()+'</option>' +
'<option value=option3>'+LabelInput()+'</option>' +'</datalist>');
});

$(select).click(function() {
window.alert("You have to enter name and 4 values for label in prompt box");
$(formArea).append('<div class="select" >' + '<label >'+LabelInput()+': </label>' + window.alert("NOW ENTER THE 4 VALUES")+
'<select>' +'<option value=option1>'+LabelInput()+'</option>' +
'<option value=option2>'+LabelInput()+'</option>' +
'<option value=option3>'+LabelInput()+'</option>' +
'<option value=option4>'+LabelInput()+'</option>' +'</select>' + '<button class="remove">remove</button>'  + '<br>' + '</div>' + '</div>');

});



$(name).click(function() {

$(formArea).append('<div>'+'<div class="name" >' + '<label >'+LabelInput()+': </label>' +
'<input type="text" name="usertext" id="myname" />' + '<button class="remove">remove</button>'  + '<br>' + '</div>' + '</div>');

});
$(checkbox).click(function() {

$(formArea).append('<div class="checkbox" >' + '<label >'+LabelInput()+': </label>' +
'<input type="checkbox" name="checkbox" id="mycheck" />' + '<button class="remove">remove</button>'  + '<br>' + '</div>' );

});
$(radiobutton).click(function() {
	

$(formArea).append('<div>' +'<div class="radiobutton" >' + '<label >'+LabelInput()+': </label>' +
'<input type="radio" name="radio" id="myradio" />' + '<button class="remove">remove</button>'  + '<br>' + '</div>' + '</div>');

});
$(password).click(function() {
	

$(formArea).append('<div>' +'<div class="password" >' + '<label >'+LabelInput()+': </label>' +
'<input type="password" name="password" id="mypass" />' + '<button class="remove">remove</button>'  + '<br>' + '</div>' + '</div>');


$(formArea).append(passwordx);
});




});
