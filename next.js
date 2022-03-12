
function reverse(element1, element2) {
    e1 = document.getElementById(element1);
    e2 = document.getElementById(element2);
    y1 = e1.style.top
    y2 = e2.style.top
    e1.style.top = y2
    e2.style.top = y1
}

function setPoints(element) {
    document.getElementById("points" + element).textContent = data[element-1][2];
}

function sort() {
    for (i = 6; i > 0; i--) {
        j = i;
        while (j > 0 && parseInt(document.getElementById("points" + j).textContent) < parseInt(document.getElementById("points" + j-1).textContent)) {
            reverse(j,j-1);
            j = j+1;
        }
    }
}

stade = 7;

document.body.onkeyup = function(e){
    if(e.keyCode == 32 && stade > 0){
        
        setPoints(stade);
        stade -= 1;
        setTimeout(() => {
            sort()
            setTimeout(() => {
                sort()
            }, 1000);
        }, 500);

    }
}
