let score: number | string = 33;

type normalUser = {
    name: string;
    id: number;
}

type admin = {
    username: string;
    id: number;
}

let piotr: normalUser | admin = {name: "piotr", id: 243};

piotr = {username: "peter", id: 4533};

const getDbId = (id: number | string) => {
    // id.toLowerCase();
    if (typeof id === "string") {
        id.toLowerCase();
    } else {
        id++;
    }
}

const data: string[] | number[] = [2, "3", 7];
