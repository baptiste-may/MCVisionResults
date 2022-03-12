
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
    name.textContent = data[group-1][0];
    first.appendChild(name);

    const second = document.createElement("div");
    second.className = "points";
    first.appendChild(second);

    const points = document.createElement("h1");
    points.className = "groupPoints";
    points.id = "points" + group;
    points.textContent = data[group-1][1];
    second.appendChild(points);
}
