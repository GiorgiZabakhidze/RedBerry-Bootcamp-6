experiences = 1;
window.onload = function() {
    onPageOpen();
  };

function onPageOpen()
{
    var name = localStorage.getItem("name");

    var surname = localStorage.getItem("surname");
    
    var email = localStorage.getItem("email");

    var number = localStorage.getItem("number");

    document.getElementById('rezumeName').innerText = name + " " + surname;

    document.getElementById('rezumeEmailVal').innerText = email;

    document.getElementById('rezumeNumberVal').innerText = number;

}
function createNewHr()
{
    experiences++;

    var newExperience = document.querySelector('#Experience1');

    alert("good");

    var children = parent.childNodes;

    alert("not sure");

    for(i = 0; i < children.length; i++)
    {
        alert(children[i].id);
    }

    var clone = newExperience.cloneNode(true);

    topPxs = (experiences - 1) * 645;

    clone.style.top = topPxs + "px";

    clone.id = "Experience" + experiences;

    clone.classList.add('Experience');

    newExperience.after(clone);

    var button = document.querySelector('#Button4');

    button.style.top = (topPxs + 804) + "px";
    
    var nextButton = document.querySelector('#Next2');

    nextButton.style.top = (topPxs + 980) + "px";

    var prevButton = document.querySelector('#buttonBack1');

    prevButton.style.top = (topPxs + 980) + "px";
}
function onNextPage()
{
    validate = true;
    // for(i = 0; i < 4; i++)
    // {
    //     if(!validationArray[i].validation)
    //     {
    //         if(validationArray[i].name == "number")
    //             validatePhoneNumber();
    //         else if(validationArray[i].name == "email")
    //             checkEmail();
    //         else if(validationArray[i].name == "name")
    //             checkInputVar("name","nameLabel");
    //         else if(validationArray[i].name == "surname")
    //             checkInputVar("surname","surnameLabel");
    //     }
    //     validate &= validationArray[i].validation;
    // }
    if(validate)
        window.location.href = "pg4.html";

    
}