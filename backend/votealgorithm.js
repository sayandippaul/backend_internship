
function vote(){
    var countvotes=0;
    var n=candidate.length;
    for (var i = 0; i < n; i++){
        var votevalue=parseInt(document.getElementById("vote"+i).value);
        if(document.getElementById("vote"+i).value=="")  votevalue=0;
        if(votevalue<0 ||votevalue>7){
            alert("You Can give vote maximum 7 and total vote should be 10");
            return;
        }

        countvotes=countvotes+votevalue;

    }
    if(countvotes!=10){
        alert("Please Fill The Votes Correctly");
        return;
    }
    else{
        for (var i = 0; i < n; i++){
            var last=n-1;
            if(parseInt(document.getElementById("vote"+last).value)==3 && document.getElementById("vote"+i).value==7){
                votedetails[i].allvote=votedetails[i].allvote+1;
            votedetails[i].vote=votedetails[i].vote+parseInt(document.getElementById("vote"+i).value*8/10);

            }
            else{
                
            votedetails[i].vote=votedetails[i].vote+parseInt(document.getElementById("vote"+i).value);
                

            }
            if(document.getElementById("vote"+i).value!=0)
            votedetails[i].unique=votedetails[i].unique+1;
           
        }
        alert("Thank You For Voting");
    nowvoter++;
        printlist();
        next();
       }
}

// a person can maximum vote 7 to any single candidate and total vote should be 10
// if the person does not want to vote others then he can give 3 votes to NOTA
// if the person wants to vote others then he can give all 10 votes to others splitting all the votes
// if any candidate gets all 7 votes and the other 3 votes to NOTA then only 80% votes will be counted this is only for removing the act for bad actors
