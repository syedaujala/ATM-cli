// #! /usr/bin/env
// // import inquirer from "inquirer";
// // import chalk from "chalk";
// // import chalkAnimation from "chalk-animation"; 
// // type UserType = {
// //     name : string,
// //     Pin: number,
// //     balance: number,
// // }
// // console.log (chalk.greenBright`░█░█░█▀▀░█░░░█▀▀░█▀█░█▄█░█▀▀░░░█░█░█▀█░█░█░█▀▄░░░█▀█░▀█▀░█▄█
// // ░█▄█░█▀▀░█░░░█░░░█░█░█░█░█▀▀░░░░█░░█░█░█░█░█▀▄░░░█▀█░░█░░█░█
// // ░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░░░░▀░░▀▀▀░▀▀▀░▀░▀░░░▀░▀░░▀░░▀░▀`);
// // let user : UserType = {
// //     name:"Syeda Ujla",
// //     Pin: 1001 ,
// //     balance: 200000,
// // }
// // const resp = await inquirer.prompt([
// //     {
// //         message:"kindly enter your pin",
// //         name:"Pin",
// //         type:"Password"
// //     }
// // ])
// // console.log("resp:",resp);
// // if (Number(resp.Pin) !=user.Pin){
// //     console.log ("you have enter incorrect Pin")
// // }else{
// //     const resp =await inquirer.prompt([
// //         {
// //             name : "SelectType",
// //             message:"please select an option",
// //             type:"list",
// //             choices:["withdraw","Transfer","CheckBalance"]
// //         },
// //         {
// //             name :"Amount",
// //             message :"kindly select amount",
// //             type:"list",
// //             choices:[500,1000,2000,5000,"other Transaction"],
// //             when(resp){
// //                 console.log("resp >>",resp.SelectType);
// //                 return resp.SelectType === 'withdraw'
// //             }
// //         },
// //         {
// //             name:"Transfer",
// //             message:"please enter amount",
// //             when(resp){
// //                 return resp.SelectType == 'Transfer'
// //             }
// //         },
// //         {
// //             name:"Withdraw",
// //             message:"please enter amount",
// //             when(resp){
// //                 return resp.SelectType == 'other Transaction'
// //             }
// //         },
// //         {
// //             name:"Checkbalance",
// //             message:"please enter amount",
// //             when(resp){
// //                 return resp.SelectType == 'Checkbalance'
// //             }
// //         },
// //     ]);
// //     // console.log('SelectType:' , resp )
// //     if(resp.SelectType == "CheckBalance"){
// //         console.log(`your balance is ${user.balance}`)
// //     }else{
// //     user.balance = user.balance - resp.Amount;
// //     }
// //     console.log(`your new balance is ${user.balance}`)
// // }
// import inquirer from "inquirer";
// import chalk from "chalk";
// import chalkAnimation from "chalk-animation";
// type UserType = {
//     name: string,
//     Pin: number,
//     balance: number,
// }
// console.log(chalk.greenBright`░█░█░█▀▀░█░░░█▀▀░█▀█░█▄█░█▀▀░░░█░█░█▀█░█░█░█▀▄░░░█▀█░▀█▀░█▄█
// ░█▄█░█▀▀░█░░░█░░░█░█░█░█░█▀▀░░░░█░░█░█░█░█░█▀▄░░░█▀█░░█░░█░█
// ░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░░░░▀░░▀▀▀░▀▀▀░▀░▀░░░▀░▀░░▀░░▀░▀`);
// let user: UserType = {
//     name: "Syeda Ujla",
//     Pin: 1001,
//     balance: 200000,
// }
// const resp = await inquirer.prompt([
//     {
//         message: "kindly enter your pin",
//         name: "Pin",
//         type: "Password"
//     }
// ])
// console.log("resp:", resp);
// if (Number(resp.Pin) != user.Pin) {
//     console.log("you have enter incorrect Pin")
// } else {
//     const resp = await inquirer.prompt([
//         {
//             name: "SelectType",
//             message: "please select an option",
//             type: "list",
//             choices: ["withdraw", "Transfer", "CheckBalance"]
//         },
//         {
//             name: "Amount",
//             message: "kindly select amount",
//             type: "list",
//             choices: [500, 1000, 2000, 5000, 10000, "other Transaction"],
//             when(resp) {
//                 console.log("resp >>", resp.SelectType);
//                 return resp.SelectType === 'withdraw'
//             }
//         },
//         {
//             name: "OtherAmount",
//             message: "please enter amount",
//             when(resp) {
//                 return resp.Amount == 'other Transaction'
//             }
//         },
//         {
//             name: "Transfer",
//             message: "please enter amount",
//             when(resp) {
//                 return resp.SelectType == 'Transfer'
//             }
//         },
//         {
//             name: "Checkbalance",
//             message: "please enter amount",
//             when(resp) {
//                 return resp.SelectType == 'Checkbalance'
//             }
//         },
//         //    console.log("resp.SelectType")
//     ]);
// }
// if (resp.SelectType == "CheckBalance") {
//     console.log(`your balance is ${user.balance}`)
// }
// else if(resp.SelectType  == "Transfer"){
//         user.balance = user.balance - resp.Transfer;
//         console.log(`your new balance is ${user.balance}`)
// }
// //  else if (resp.SelectType == "Transfer") {
// // console.log(`your balance is ${user.balance}`)
// else {
//     if (resp.OtherAmount) {
//         user.balance = user.balance - resp.OtherAmount;
//     } else {
//         user.balance = user.balance - resp.Amount;
//     }
//     console.log(`your new balance is ${user.balance}`)
// }
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright `░█░█░█▀▀░█░░░█▀▀░█▀█░█▄█░█▀▀░░░█░█░█▀█░█░█░█▀▄░░░█▀█░▀█▀░█▄█
░█▄█░█▀▀░█░░░█░░░█░█░█░█░█▀▀░░░░█░░█░█░█░█░█▀▄░░░█▀█░░█░░█░█
░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░░░░▀░░▀▀▀░▀▀▀░▀░▀░░░▀░▀░░▀░░▀░▀`);
let user = {
    name: "Syeda Ujla",
    Pin: 1001,
    balance: 200000,
};
const resp = await inquirer.prompt([
    {
        message: "kindly enter your pin",
        name: "Pin",
        type: "Password"
    }
]);
console.log("resp:", resp);
if (Number(resp.Pin) != user.Pin) {
    console.log("you have enter incorrect Pin");
}
else {
    const resp = await inquirer.prompt([
        {
            name: "SelectType",
            message: "please select an option",
            type: "list",
            choices: ["withdraw", "Transfer", "CheckBalance"]
        },
        {
            name: "Amount",
            message: "kindly select amount",
            type: "list",
            choices: [500, 1000, 2000, 5000, 10000, "other Transaction"],
            when(resp) {
                console.log("resp >>", resp.SelectType);
                return resp.SelectType === 'withdraw';
            }
        },
        {
            name: "OtherAmount",
            message: "please enter amount",
            when(resp) {
                return resp.Amount == 'other Transaction';
            }
        },
        {
            name: "Transfer",
            message: "please enter amount",
            when(resp) {
                return resp.SelectType == 'Transfer';
            }
        },
        {
            name: "Checkbalance",
            message: "please enter amount",
            when(resp) {
                return resp.SelectType == 'Checkbalance';
            }
        },
        //    console.log("resp.SelectType")
    ]);
    if (resp.SelectType == "CheckBalance") {
        console.log(`your balance is ${user.balance}`);
    }
    else if (resp.SelectType == "Transfer") {
        console.log(resp, '/working');
        user.balance = user.balance - resp.Transfer;
        console.log(`your new balance is ${user.balance}`);
    }
    //  else if (resp.SelectType == "Transfer") {
    // console.log(`your balance is ${user.balance}`)
    else {
        console.log(resp, '/see working');
        if (resp.OtherAmount) {
            user.balance = user.balance - resp.OtherAmount;
        }
        else {
            user.balance = user.balance - resp.Amount;
        }
        console.log(`your new balance is ${user.balance}`);
    }
}
