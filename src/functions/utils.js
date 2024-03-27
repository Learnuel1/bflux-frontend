
const signUp =  async (e) =>{
try {
  e.preventDefault();
  const firstName = document.getElementById("fname").value;
  const lastName = document.getElementById("lname").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("adr").value;
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm").value;
  let birthDate = document.getElementById("birthDate").value;
  const username = document.getElementById("username").value;
birthDate = new Date(birthDate);
  // if(!confirm || !password) throw new Error("Password is required");
  // if(password !== confirm) throw new Error("Password mismatch");

  const newUser = {
    firstName, 
    lastName, 
    username, 
    password, 
    dob:birthDate,
    email,
    address
  }
  // set url
  const url = `${baseUrl}${routes.register}`;
    const res = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const result = await res.json();
    if(!res.ok){
      throw new Error(result.error)
    }
    window.location.href =("../../html/Sign-In.html");
    console.log("Success:", result); 
} catch (error) {
  alert(error)
  console.log(error)
}
}

const signIn =  async (e) =>{
try {
  e.preventDefault(); 
  const password = document.getElementById("password").value; 
  const username = document.getElementById("username").value;
  const user = {
    username, 
    password, 
  }
  // set url
  const url = `${baseUrl}${routes.login}`;
    const res = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await res.json();
    if(!res.ok){
     throw new Error(result.error)
    }
    window.location.href =("../../html/Dashboard.html");
    console.log("Success:", result); 
} catch (error) {
  alert(error)
  console.log(error)
}
}
let fileData;
const getImage = (e) =>{
  try{
    const profile = document.getElementById("profile");

  const file = e.files[0];
  if(file){
      console.log(file)
      profile.src = URL.createObjectURL(file);
      const reader = new FileReader();
      reader.onloadend = () => {
          fileData = reader.result;
          // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
      };
      reader.readAsDataURL(file);
  }
  }catch(error){
    alert(error);
  }
}
const saveImage = async () =>{
  try{ 
  if(!fileData) throw new Error("Select image")
  const url = `${baseUrl}${routes.profile}`;
const info = {
  fileData,
}
  const res = await fetch(url, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });
  const result = await res.json();
  if(!res.ok){
   throw new Error(result.error)
  }

  console.log("Success:", result); 
         
  }catch(error){
    alert(error);
  }
}
