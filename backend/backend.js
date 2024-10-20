// this is backend.js file
// here every api code is written and  the functions are called from frontend
// and the data is sent to frontend
// this is the backend of the project
// this is the main file of the project
// alert("backend.js file is loaded");


// list of candidates are made
var candidate=[];
var voter=[];
var votedetails=[];
var nowvoter=0;

candidate=JSON.parse(localStorage.getItem("candidate"));
    voter=JSON.parse(localStorage.getItem("voter"));
    function makelist(){
        for (var i = 0; i < candidate.length; i++){
            var obj={
                id:i,
                name:candidate[i],
                vote:0,
                allvote:0,
                unique:0,
            }
            votedetails.push(obj);
        }

        
    }
    


    // print list function
    function printlist(){
        var a="";
        for (var i = 0; i < candidate.length; i++){
            a=a+'<li>'+candidate[i]+' <input type="num" id="vote'+i+'"   value="0"></li>';
             }
        document.getElementById("showcandidate").innerHTML=a;
        document.getElementById("showvoter").innerHTML=" Voter Name : "+voter[nowvoter];
    }
    

    // continue to next voter
    function next(){
        console.log(votedetails);
        if(nowvoter==voter.length){
            alert("All Voters Voted");
            localStorage.setItem("votedetails",JSON.stringify(votedetails));
            window.location.href="result.html";
            return;
        }
        alert("Welcome "+voter[nowvoter]);
    }
 
    