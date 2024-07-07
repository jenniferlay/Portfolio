function send(){
    Email.send({
        SecureToken: "ef1cadec-130e-4f31-a0be-f4b9663561c1",
        To: "jennierlay@gmail.com",
        From: "jennierlay@gmail.com",
        Subject: "Email Inquiry",
        Body: "Email: " + document.getElementById("Email").value + "<br>" + "Subject: " + document.getElementById("Subject").value + "<br>" + "Name: " + document.getElementById("FirstName").value + " " + document.getElementById("LastName").value + "<br>" + "Message: " + document.getElementById("Message").value
    }).then(
        message => alert(message)
    )
}

function showNav(){
    const navbar = document.querySelector(".linksMobile")

    if (navbar.classList.contains("showNav")){
        navbar.classList.remove("showNav")
    }
    
    else{
        navbar.classList.add("showNav")
    }

    const navbartext = document.querySelectorAll(".headerLinksMobile");

    navbartext.forEach((each)=>{
        if(each.classList.contains("showNavText")){
            each.classList.remove("showNavText")
        }
        else{
            each.classList.add("showNavText")
        }
    })
    
}