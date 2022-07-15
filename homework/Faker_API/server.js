const express = require("express");
const {faker} = require ("@faker-js/faker");

const app = express();
const port = 8000;

const createUser = () => {
    const fakeUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    return fakeUser;
};

const createCompany = () => {
    return {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get("/api", (req, res) =>{
    res.json({message: "yep it works"});
});

app.get("/api/users/new", (req, res) =>{
    const person = createUser();
    res.json(person);
});

app.get("/api/companies/new", (req, res) =>{
    const company = createCompany();
    res.json(company);
});

app.get("/api/user/company/", (req, res) =>{
    const company = createCompany();
    const user = createUser();
    res.json({
        company: {company},
        user: {user}
    });
});

app.listen(port, () => {
    console.log(`listening on ${port} from faker-api`);
})
