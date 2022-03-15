
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

    const pointToAdd = document.createElement("h2");
    pointToAdd.className = "pointsToAdd";
    pointToAdd.id = "pointsToAdd" + group;
    first.appendChild(pointToAdd);

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
nextButton.src = "ressource/next-button.png";
nextButton.className = "nextButton";
nextButton.onclick = next;
if (detectMob()) document.body.appendChild(nextButton);
