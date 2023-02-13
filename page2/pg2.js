validationArray = [
                    {name : "number", validation : false},
                    {name : "email", validation : false},
                    {name : "surname", validation : false},
                    {name : "name", validation : false}
                ]
globalValidation = 0;
window.onload = function() {
    onPageOpen();
  };
function onPageOpen()
{
    for(i = 0; i < 4; i++)
    {
        validationArray[i].validation = false; 
    }
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
        window.location.href = "pg3.html";
}
function checkInputVar(inputRef, labelRef)
{
    setTimeout(() => {
        prevValidation = true;
        id = 0;
        for(i = 0; i < 4; i++)
        {
            if(inputRef == validationArray[i].name)
                prevValidation = validationArray[i].validation,
                id = i; 
        }
        val = document.getElementById(inputRef).value;

        validate = true;

        if(val.length < 2)
        {
            validate = false;
        }

        else
        {
            for(i = 0; i < val.length; i++)
            {
                if(val[i] < 'ა' || val[i] > 'ჰ')
                {
                    validate = false;
                    break;
                }
            }
        }

        validationArray[id].validation = validate;
        if(validate)
        {
            if(inputRef == "name")
            {
                localStorage.setItem("name", document.getElementById(inputRef).value);
            }
            if(inputRef == "surname")
            {
                localStorage.setItem("surname", document.getElementById(inputRef).value);
            }
            document.getElementById(labelRef).style.borderColor = "lime";
        }
        else
        {
            document.getElementById(labelRef).style.borderColor = "red";
        }
    }, 50);
    
}
function notRequired(labelRef)
{
    document.getElementById(labelRef).style.borderColor = "lime";
}

function validatePhoneNumber()
{
    setTimeout(() => { 
        prevValidation = validationArray[0].validation; 
        num = document.getElementById("number").value; 
        validate = true;
        spaces = [4, 8, 11, 14];
        if(num.length < 17)
            validate = false;
        if(num[0] != '+')
            validate = false;
        if(validate)
        {
            for(i = 0; i < 4; i++)
            {
                if(num[spaces[i]] != ' ')
                {
                    alert("1")
                    validate = false;
                    break;
                }
            }
        }
        if(validate)
        {
            j = 0;
            for(i = 1; i < 17; i++)
            {
                if(j < 4 && i == spaces[j])
                {
                    j++;
                }
                else
                {
                    if(num[i] > '9' || num[i] < '0')
                    {
                        validate = false;
                        break;
                    }
                }
            }
        }
        if(validate)
        {
            localStorage.setItem("number", document.getElementById("number").value);
            for(i = 17; i < num.length; i++)
            {
                if(num[i] != ' ')
                    validate = false;
            }
        }
        validationArray[0].validation = validate;
        if(validate)
        {
            document.getElementById("numberLabel").style.borderColor = "lime";
        }
        else
        {
            document.getElementById("numberLabel").style.borderColor = "red";
        }
    }, 50);
}
function checkEmail()
{
    setTimeout(() => { 
        prevValidation = validationArray[1].validation;
        email = document.getElementById("email").value;
        j = 0;
        str = "eg.yrrebder@";
        validate = true;
        if(email.length < 12)
            validate = false;
        else
        {
            for(i  = email.length-1; i>=0; i--)
            {
                if(j == 12)
                    break;
                if(str[j] != email[i])
                {
                    validate = false;
                    break;
                }
                j++;
            }
        }
        validationArray[1].validation = validate;
        if(validate)
        {
            localStorage.setItem("email", document.getElementById("email").value);
            document.getElementById("emailLabel").style.borderColor = "lime";
        }
        else
        {
            document.getElementById("emailLabel").style.borderColor = "red";
        }
    }, 50);
    
}