
function reverse(element1, element2) {
    e1 = document.getElementById(element1);
    e2 = document.getElementById(element2);
    y1 = e1.style.top
    y2 = e2.style.top
    e1.style.top = y2
    e2.style.top = y1
}

function setPoints(element) {
    const pointsToAdd = document.getElementById("pointsToAdd" + element).style;
    pointsToAdd.opacity = 1;
    pointsToAdd.top = "0px"
    pointsToAdd.width = "50px";
    pointsToAdd.height = "50px";
    setTimeout(() => {
        pointsToAdd.right = 0;
        pointsToAdd.opacity = 0;
        setTimeout(() => {
            document.getElementById("points" + element).textContent = (getPoints(element) + data[element-1].public_points);
            sort()
            setTimeout(() => {
                getGroup(element).style.backgroundColor = "rgba(255, 50, 0, 0.7)";
            }, 1500);
        }, 500);
    }, 2250);
    setTimeout(() => {
        pointsToAdd.top = "5px"
        pointsToAdd.width = "40px";
        pointsToAdd.height = "40px";
    }, 750);
}

function getPoints(element) {
    return parseInt(document.getElementById("points" + element).textContent);
}
function getGroup(element) {
    return document.getElementById(element);
}

function sort() {
    let list = [];
    for (i = 7; i > 0; i--) {
        list.push({index:i, points:getPoints(i)});
    }
    list.sort(function (x, y) {
        return y.points - x.points;
    });
    y = 160;
    for (i = 0; i < 7; i++) {
        document.getElementById(list[i].index).style.top = y + "px";
        y += 60;
    }
}

stade = 7;

function next() {
    if (stade > 0) {
        setPoints(stade);
        stade -= 1
        if (stade == 0) {
            document.getElementById("background-video").src = "ressource/winner-background-video.mp4";
        }
    }
}

document.body.onkeyup = function(e) {
    if(e.key == " "){
        next();
    }
}
