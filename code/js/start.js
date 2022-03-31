
for (group = 1; group <= 7; group++) {
    const first = document.createElement("div");
    first.style.top = (100 + (60*group)) + "px";
    first.className = "group";
    first.id = group;
    document.body.appendChild(first);

    const icon = document.createElement("img");
    icon.className = "icon";
    icon.src = "ressource/icon/" + group + ".png";
    first.appendChild(icon);

    const name = document.createElement("h1");
    name.className = "name";
    name.textContent = data[group-1].name;
    first.appendChild(name);

    const pointToAdd = document.createElement("div");
    pointToAdd.className = "pointsToAdd";
    pointToAdd.id = "pointsToAdd" + group;
    first.appendChild(pointToAdd);

    const pointToAddText = document.createElement("h1");
    pointToAddText.className = "pointsToAddText";
    pointToAddText.textContent = data[group-1].public_points;
    pointToAdd.appendChild(pointToAddText);

    const second = document.createElement("div");
    second.className = "points";
    first.appendChild(second);

    const points = document.createElement("h1");
    points.className = "groupPoints";
    points.id = "points" + group;
    points.textContent = data[group-1].jurry_points;
    second.appendChild(points);
}

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

const nextButton = document.createElement("img");
nextButton.src = "ressource/image/next-button.png";
nextButton.className = "nextButton";
nextButton.onclick = next;
if (detectMob()) document.body.appendChild(nextButton);

const firstList = sort();

i = firstList.length-1;

setTimeout(() => {
    function showGroups() {
        document.getElementById(firstList[i].index).style.opacity = 1;
        i -= 1
        if (i == -1) clearInterval(showGroupsInterval)
    }

    const showGroupsInterval = setInterval(showGroups, 100);
}, 2000);

stade = firstList.length-1;

function next() {
    if (stade >= 0) {
        setPoints(firstList[stade].index);
        stade -= 1
        if (stade == -1) {
            document.getElementById("background-video").src = "ressource/background/winner-background-video.mp4";
        }
    }
}
