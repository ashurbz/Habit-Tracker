// getting no. of habits in list 
//if no habit found then display a  error notification 
if(document.getElementsByTagName("li").length<=1)
     {
        $.notify("Add Some Habits","success");
    
     }


// adding a onclick listener to status toggle button
function change(e){
     console.log( e.children[0].value);
//if class is ban then do it check
    if(e.children[0].value==" "){
        $.notify("Done!",{ autoHideDelay: 500});
      e.children[0].value="done";
    
    e.className="fa fa-check";
    console.log( e.children[0].value);

    

    }
//if class is check then do it times

   else if(e.children[0].value=="done"){
    $.notify("Not Done!",{ autoHideDelay: 500});
   e.children[0].value="notDone";
    
    e.className="fa fa-times";
    console.log( e.children[0].value);

   }

//   if class is times then do it ban
  else  if(e.children[0].value=="notDone"){
    $.notify("No Action",{ autoHideDelay: 500});
   e.children[0].value=" ";
    e.className="fa fa-ban";
    console.log( e.children[0].value);


  
    

   }

}

