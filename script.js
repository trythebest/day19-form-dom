var ele=document.createElement("div");
ele.innerHTML=`
<label for="fname">First name:</label>
<input type="text" id="fname" name="fname"><br><br>
<label for="lname">Last name:</label>
<input type="text" id="lname" name="lname"><br><br>
<label for="pwd">Password:</label>
<input type="password" id="pwd" name="pwd"><br><br>
<label for="email">Email:</label>
<input type="email" id="email" name="email"><br><br>
<button onclick=foo() class="btn btn-primary type="submit" value="Submit">submit</button>
`
ele.addEventListener=("click",foo);
document.body.append(ele);



function foo(){
    
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let passcode = document.getElementById("pwd").value;
    let mail = document.getElementById("email").value;

    console.log(firstName);
    console.log(lastName);
    console.log(passcode);
    console.log(mail);
}