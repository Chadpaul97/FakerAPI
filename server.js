const express = require('express');
const app = express ();
const {faker} = require('@faker-js/faker');
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

class User {
    constructor(){
    this._id = faker.datatype.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
    }
}


class Company{
    constructor(){
        this._id = faker.datatype.number();
        this.name = faker.name.findName();
        this.address = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
        }
}


//Gets New User
app.get("/api/users/new", (req,res)=>{
    res.json(new User());
})

// Gets New Company
app.get("/api/companines/new", (req,res)=>{
    res.json(new Company())
})


//Gets Users Comany 

app.get("/api/user/company", (req,res)=>{
    res.json([new User(),new Company()])
})



app.listen(port, () => console.log(`running on port ${port}`))
