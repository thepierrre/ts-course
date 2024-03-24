const User = {
    name: "Piotr",
    email: "piotr@gmail.com",
    isActive: true
}

const createUser = ({name: string, isPaid: boolean}) => {}

let newUser = {name: "Peter", isPaid: false, email: "piotr@gmail.com"};

createUser(newUser);

const createCourse = ():{name: string, price: number} => {
    return {name: "reactjs", price: 399};
}

type User = {
    name: string;
    email: string;
    isActive: boolean
}

const createNewUser = (user: User) => {}

createNewUser({name: "piotr", email: "piotr@gmail.com", isActive: true});

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

type cvvNumber = {
    cvvNumber: number;
}

type cardDetails = cardNumber & cardDate & cvvNumber;


type User2 = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean
    credCardDetails?: number
}

let myUser: User2 = {
    _id: "12345",
    name: "Piotr",
    email: "piotr@gmail.com",
    isActive: true
}

myUser.email = "p@gmail.com";
// myUser._id = "54321" ==> cannot reassign _id because it's read-only