

var votedetails = [];
votedetails = JSON.parse(localStorage.getItem("votedetails"));

function showresult() {
    if (votedetails.length === 0) {
        document.getElementById("showresult").innerHTML = "No votes available.";
        return;
    }

    var highest = {
        name: votedetails[0].name,
        vote: votedetails[0].vote,
        id: votedetails[0].id
    };

    var secondHighest = {
        name: "",
        vote: -1,
        id: -1
    };

    for (var i = 1; i < votedetails.length; i++) {
        if (votedetails[i].vote > highest.vote || (votedetails[i].vote === highest.vote && votedetails[i].id > highest.id)) {
            secondHighest = highest;
            highest = {
                name: votedetails[i].name,
                vote: votedetails[i].vote,
                id: votedetails[i].id
            };
        } else if (votedetails[i].vote > secondHighest.vote || (votedetails[i].vote === secondHighest.vote && votedetails[i].id > secondHighest.id)) {
            secondHighest = {
                name: votedetails[i].name,
                vote: votedetails[i].vote,
                id: votedetails[i].id
            };
        }
    }

    document.getElementById("showresult").innerHTML = "The Winner is " + highest.name + " with " + highest.vote + " votes. The Runner-up is " + secondHighest.name + " with " + secondHighest.vote + " votes.";
}
