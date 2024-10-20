var votedetails=[];
votedetails=JSON.parse(localStorage.getItem("votedetails"));
function showresult(){
    var obj={
        name:votedetails[0].name,
        vote:votedetails[0].vote,
    }
    for(var i=1;i<votedetails.length-1;i++){
        if(votedetails[i].vote>obj.vote){
            obj.name=votedetails[i].name;
            obj.vote=votedetails[i].vote;
        }
    }
    
    document.getElementById("showresult").innerHTML="The Winner is "+obj.name+" with "+obj.vote+" votes";   
}