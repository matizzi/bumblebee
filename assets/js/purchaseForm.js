// const formDest=document.getElementById('formDest');
// const select=document.getElementById('depcity, packchoice');
// const date=document.getElementById('departure');


function validateFormDest(){
    var depcity=document.formdest.depcity.value;
    var packchoice=document.formdest.packchoice.value;

    if (depcity == "") {
        alert("Please choose an option");
        return false;
    }else if (packchoice == ""){
        alert("Please choose an option");
        return false;
    }
}