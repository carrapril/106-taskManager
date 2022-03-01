var nonImportantClass = "far fa-star";
var ImportantClass = "fas fa-star";
var isImportant = false;
var hideShowForm = true;



function toggleImportant(){
    console.log("icon clicked!");
    if(isImportant){
        //non important
        isImportant = false;
        $("#iconImportant").removeClass(ImportantClass);
        $("#iconImportant").addClass(nonImportantClass);
       
    }
    else{
        //important
        $("#iconImportant").removeClass(nonImportantClass);
        $("#iconImportant").addClass(ImportantClass);
        isImportant = true;
    }   
}

function hideForm(){
    console.log("form button clicked");
    if(hideShowForm){
        hideShowForm = false;
        $("#form").hide();

    }
    else{
        hideShowForm = true;
        $("#form").show();
    }
}

function init() {

    //events
    $("#iconImportant").click(toggleImportant);{
        
    }
    $("#hideshow").click(hideForm);{

    }

    //load data

}

window.onload = init;