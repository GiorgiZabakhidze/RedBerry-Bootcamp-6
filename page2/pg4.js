degrees = 1;
function createNewHr()
{
    degrees++;
    var newExperience = document.querySelector('#Degree1');

    var clone = newExperience.cloneNode(true);

    topPxs = (degrees - 1) * 560;

    clone.style.top = topPxs + "px";

    clone.id = "Degree" + degrees;

    clone.classList.add('Experience');

    newExperience.after(clone);

    var button = document.querySelector('#ButtonAddDegree');

    button.style.top = (topPxs + 719) + "px";

    var prevButton = document.querySelector('#buttonBack2');

    prevButton.style.top = (topPxs + 980) + "px";

    var finishButton = document.querySelector('#ButtonFinish');

    finishButton.style.top = (topPxs + 980) + "px";
}