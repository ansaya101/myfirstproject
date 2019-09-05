let accnumber = 50449921;
const cashWithdrawal = (amount, accnum) => {
 console.log(`Withdrawing ${amount} from account ${accnum}`);
}
cashWithdrawal(300, accnumber);

const whichAcc = (acc) => {
    console.log(`the account number is ${acc}`)
}
whichAcc(accnumber)