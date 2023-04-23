function add(num: number) {
    return num + 2;
}

add(5);

function upper(val: string): string {
    return val.toUpperCase();
}

const loginUser = (name: string, email: string) => {
    return name + " " + email;
};

function val(myVal: number): number {
    if (myVal > 5) {
        return myVal * 8;
    } else {
        return myVal;
    }
}

console.log(upper("kudez"));

export {};
