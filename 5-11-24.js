//Browser Object Model
           // Locations :---

//1.href
window.location.href="https://www.youtube.com";

//2.assign
window.location.assign("https://www.instagram.com");

//3.host
location.host

//4.protocol
location.protocol

//5.path
location.pathname

                  // History :---

//1.back()
history.back()

//2.forward()
history.forward()

             //  Popups :---

//1.alert
alert("Hello there")

//2.prompt()
window.prompt("Enter the name")

//3.confirm()
window.confirm()

//4.open()
window.open()

//5.close()
window.close()

//6.console
window.console()

//7.warn()
window.console.warn("be careful")

//8. debug()
window.console.debug(a)

//9.table()
window.console.table("id:1","vandy")

//10.open()
window.open("https://www.instagram.com")

//11.close
window.close("https://www.instagram.com")

//document
document

backgroundColor
document.body.style.backgroundColor="blue";

      // Some examples :---

//1. alert and confirm mail
alert("Welcome to our site!");

if (confirm("Would you like to subscribe to our newsletter?")){
    let email=prompt("Enter your email address:")
    if (email){
        alert("Thank you for subscribing!");
    }else{
        alert("Subscription canceled.");
    }
}else{
    alert("May be next time!");
}


//2. sreen size
if(screen.pixelDepth > 24){
    console.log("High-resolution screen detected.");
    document.body.style.backgroundColor="green"
}else{
    console.log("Portait orientation detected.");
    document.body.style.backgroundColor="orange"
}


//3. screen width
if(screen.width < 600){
    alert("You are using a small-screen device.Some features might be a limited.");
    document.body.style.backgroundColor="brown";
}else{
    document.body.style.backgroundColor="pink";
}


//4. pixelDepth
screen.pixelDepth

//5. innerHeight
innerHeight

//6. innerWidth
innerWidth

//7. outerHeight
outerHeight

//8. outerWidth
outerWidth