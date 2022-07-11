var textarea_ids = ["player_name","slime"]
;function check_marks(){
    for(var i = 0; i < textarea_ids.length; i++){
        let textarea = document.getElementById("textarea_"+ textarea_ids[i]);
        if(textarea.value != ""){
            document.getElementById("img_"+ textarea_ids[i]).src = "images/slimeV.png";
            //console.log(textarea.text);
        }
        else{
            document.getElementById("img_"+ textarea_ids[i]).src = "images/slime1.png";
        }
    }
}