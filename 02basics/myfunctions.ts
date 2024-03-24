function addTwo(num: number): number {
    return num + 2;
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

const loginUser = (name: string, email: string, isPaid: boolean = false) => {}

const getValue = (myVal: number): boolean | string => {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}

const consoleError = (errmsg: string): void => {
    console.log(errmsg);
}

const handleError = (errmsg: string): never => {
    throw new Error(errmsg);
}

const heroes = ["thor", "spiderman", "ironman"];

heroes.map(hero => {
    return `The hero is ${hero}`;
})

addTwo(5);
loginUser("piotr", "piotr@gmail.com");