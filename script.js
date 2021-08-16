var file_name_cfg;
var file_name_dat;
var file_type_cfg;
var file_type_dat;

function upload_function(){


    var x = document.getElementById("myFile_cfg");
    var txt = "";
    if(x.files.length == 0){
        txt = "Select one cfg file.";

    }else{
        for (var i = 0; i < x.files.length; i++) {
            var file = x.files[i];
            if ('name' in file) {
                type_file = file.name.split(".")[1]
                file_type_cfg = type_file;
                if(type_file == 'cfg'){
                    txt = file.name ;
                    file_name_cfg = txt
                    document.getElementById("comtrade_cfg").value = txt;
                }else{
                    console.log("ll")
                }
            }
        }
    }

    var y = document.getElementById("myFile_dat");

    var txt_d = "";
    if(y.files.length == 0){
        txt_d = "Select one dat file.";

    }else{
        for (var i = 0; i < y.files.length; i++) {
            var file = y.files[i];
            if ('name' in file) {
                type_file = file.name.split(".")[1]
                file_type_dat = type_file;
                if(type_file == 'dat'){
                    txt_d = file.name ;
                    file_name_dat = txt_d;
                    document.getElementById("comtrade_dat").value = txt_d

                }else{
                    console.log("ll")
                }
                

            }
        }
    }
}

function click_paso1(){
    if(file_type_cfg == "cfg" && file_type_dat == "dat"){
        document.getElementById("paso1").style.display = "none";
        document.getElementById("paso2").style.display = "block"
        document.getElementById("steps").innerHTML ="STEP 2. SIGNALS SELECTION"
        document.getElementById("loaded_files").innerHTML ="<ul><li> "+ file_name_cfg + "</li> <li>" +  file_name_dat + "</li></ul>";

    }else{
        document.getElementById("lberror").innerHTML = "<strong>ERROR: </strong>tipo de datos no validos";
        document.getElementById("error").style.display = "block";
        //location.hash = "bandera";
    }
}

function click_paso2(){
   
    var els = document.getElementsByClassName("chp");
    var list_check = "<ul>";
    var contar = 0;
    for(var i = 0; i < els.length; i++){

        if(els[i].checked){
            list_check = list_check + "<li>" + els[i].value + "</li>";
            contar = contar+1;
        }
    }

    if (contar ==0){
        document.getElementById("lberror").innerHTML = "<strong>ERROR: </strong>No signal selected";
        document.getElementById("error").style.display = "block";
        //location.hash = "bandera";


    }else{
        document.getElementById("steps").innerHTML ="STEP 3. ANALYSIS OF RESULTS"
        document.getElementById("error").style.display = "none";
        list_check = list_check + "</ul>";
        document.getElementById("signals").innerHTML = list_check;
        document.getElementById("loaded_files_3").innerHTML ="<ul><li> "+ file_name_cfg + "</li> <li>" +  file_name_dat + "</li></ul>";
        document.getElementById("paso2").style.display = "none";
        document.getElementById("paso3").style.display = "block";

    }

}

function show_team(){
    document.getElementById("team_names").style.display = "block";
}

function hide_team(){
    document.getElementById("team_names").style.display = "none";
}
    
function hide_3(){
    document.getElementById("paso3").style.display = "none";
    document.getElementById("paso2").style.display = "block";

}


