function send(){
    Email.send({
        SecureToken: "D56CCB5795433D190003BB41C2FD949DEC7E",
        To: "jennierlay@gmail.com",
        From: "jennier.lay@gmail.com",
        Body: "acbbjchdsbhjcbsh"
    }).then(
        message => alert(message)
    )
}