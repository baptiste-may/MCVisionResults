
function reverse(element1, element2) {
    e1 = document.getElementById(element1);
    e2 = document.getElementById(element2);
    y1 = e1.style.top
    y2 = e2.style.top
    e1.style.top = y2
    e2.style.top = y1
}

function setPoints(element) {
    document.getElementById("points" + element).textContent = data[element-1].final_points;
    getGroup(element).style.backgroundColor = "rgba(255, 0, 0, 0.7)";
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
        sort();
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
