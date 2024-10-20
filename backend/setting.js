// make candidate details function and store their details from id canno
var candidate=[];
 //create candidate

function makecandidate(){
var canno=document.getElementById("canno").value;
if(canno==""){
    alert("Please Fill The Number Of Candidates");
    return;
}
var a="<hr><hr>";

for (var i = 1; i <= canno; i++){
a=a+'    <input type="text" id="canno'+i+'" required max=10 placeholder=" Name Of Candidate '+i+'"><br>';

}
document.getElementById("showcandidate").innerHTML=a;


 

}


// make voters details function and store their details from id votno



 //create voter
 var voter=[];

 function makevoter(){
    var votno=document.getElementById("votno").value;
    if(votno==""){
        alert("Please Fill The Number Of Voters");
        return;
    }
    var a="<hr><hr>";
    for (var i = 1; i <= votno; i++){
    a=a+'    <input type="text" id="votno'+i+'" required max=10 placeholder=" Name Of voter '+i+'"><br>';
    
    }
    document.getElementById("showvoter").innerHTML=a;
    
    
     document.getElementById("showbutton").style.display="block";
    
    }



    function saveall(){
        var canno=document.getElementById("canno").value;
        var votno=document.getElementById("votno").value;
        for (var i = 1; i <= canno; i++){
            if(document.getElementById("canno"+i).value==""){
                alert("Please Fill All The Candidate Details");
                return;
            }
            candidate.push(document.getElementById("canno"+i).value);
        }
        for (var i = 1; i <= votno; i++){
            if(document.getElementById("votno"+i).value==""){
                alert("Please Fill All The Voter Details");
                return;
            }
            voter.push(document.getElementById("votno"+i).value);
        }
        candidate.push("NOTA");
        console.log(candidate);
        console.log(voter);
        localStorage.setItem("candidate",JSON.stringify(candidate));    
        localStorage.setItem("voter",JSON.stringify(voter));
        document.getElementById("adddetails").style.display="block";
        document.getElementById("setdetails").style.display="none";

       
    }
    function gotovotepage(){
        window.location.href="frontend/voting.html";

    }
    function addcandidate(){
        alert("Candidate Added Successfully");
        var newcandidate = document.getElementById("newcandidate").value;
        candidate.push(newcandidate);
        candidate[candidate.length-1]="NOTA";
        candidate[candidate.length-2]=newcandidate;
        localStorage.setItem("candidate",JSON.stringify(candidate));
        document.getElementById("newcandidate").value="";
    }
    function addvoter(){
        alert("Voter Added Successfully");
        
        var newvoter = document.getElementById("newvoter").value;
        voter.push(newvoter);
        localStorage.setItem("voter",JSON.stringify(voter));
        document.getElementById("newvoter").value="";
    }