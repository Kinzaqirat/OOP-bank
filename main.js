import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.hex("#6482AD")(`WELCOME TO OOP BANK`));
class PersonalInfo {
    firstName;
    lastName;
    age;
    gender;
    phone;
    constructor(firstName, lastName, age, gender, phone) {
        this.firstName = firstName,
            this.lastName = lastName,
            this.age = age,
            this.gender = gender,
            this.phone = phone;
    }
    put() {
        console.log(chalk.hex("F5EDED")(`First Name: ${this.firstName}`));
        console.log(chalk.hex("F5EDED")(`Last Name: ${this.lastName}`));
        console.log(chalk.hex("F5EDED")(`Age: ${this.age}`));
        console.log(chalk.hex("F5EDED")(`Gender: ${this.gender}`));
        console.log(chalk.hex("F5EDED")(`Phone Number: ${this.phone}`));
    }
}
let userAnswer = await inquirer.prompt([{
        name: "firstname",
        type: "input",
        message: chalk.hex("E2DAD6")("Enter your first name.")
    }, {
        name: "lastname",
        type: "input",
        message: chalk.hex("E2DAD6")("Enter your last name.")
    }, {
        name: "age",
        type: "number",
        message: chalk.hex("E2DAD6")("Enter your age.")
    }, {
        name: "gender",
        type: "list",
        choices: ["Male", "Female"],
        message: chalk.hex("E2DAD6")("Enter your gender.")
    }, {
        name: "Phone",
        message: chalk.hex("E2DAD6")("Enter your Phone Number."),
        type: "number"
    }
]);
// console.log(`\n`);
let { firstname, lastname, age, gender, Phone } = userAnswer;
let ins = new PersonalInfo(firstname, lastname, age, gender, Phone);
ins.put();
// console.log(ins);
let defualtAmount = 100;
console.log(`Your bank balance is ${defualtAmount}$`);
let cardinfo = await inquirer.prompt([{
        name: "card",
        type: "list",
        message: "Choose card.",
        choices: ["Debit", "Credit"]
    }]);
if (cardinfo.card === "Debit") {
    let info = await inquirer.prompt([{
            name: "amount",
            message: "Enter your amount",
            type: "number"
        }]);
    if (defualtAmount - info.amount > 0) {
        console.log(`Your bank amount is ${defualtAmount - info.amount}`);
    }
    else if (defualtAmount - info.amount < 0) {
        console.log(`Invalid amount`);
    }
}
else if (cardinfo.card === "Credit") {
    let info = await inquirer.prompt([{
            name: "amount",
            message: "Enter your amount",
            type: "number"
        }]);
    console.log(`Your bank amount is ${defualtAmount + info.amount}`);
}
;
