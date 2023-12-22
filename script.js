const scores = document.querySelectorAll('.json');

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(xhttp.responseText);
        console.log(response);

        
        const populateScores = (score) => {
            for (let i = 0; i < score.length; i++) {
                console.log(score);
                score[i].innerHTML = response[i].score;
            }
        }
        populateScores(scores);
    }
};
xhttp.open("GET", "data.json", true);
xhttp.send();



