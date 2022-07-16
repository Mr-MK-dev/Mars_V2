const axios = require('axios')
 
const payloadregister = {
    firstname : "himan",
    lastname:"ali",
    username :"hi777man1234",
    email :"hello777monster@yahoo.com",
    password :"1234mkmk",
    gender : "male"
}

const register = ()=>{
    axios.post('http://localhost:5000/api/register',payloadregister)
    .then((res)=>{
        console.log(res);
    }).catch(function (error) {
        console.log(error.message);
    })
}

// postuser()
payloadLogin={
    email : "hellomonster@yahoo.com",
     password :"1234mkmk" 
}
const login = ()=>{
    axios.post('http://localhost:5000/api/login',payloadLogin ).then((res)=>{
        console.log(res);
    }).catch(function (error) {
        console.log(error.message);
    })
}

// login()

const logout= ()=>{
    axios.post('http://localhost:5000/api/logout').then((res)=>{
        console.log(res);
    }).catch(function (error) {
        console.log(error.message);
    })
}
// logout()






