let accountNumber = 72499
let accountPin = 1234
let cashinAccount = 300
let cashWithdrawn = 250
let accountPin2 = 1234
if (cashWithdrawn < cashinAccount && accountPin == accountPin2){
 console.log(`Withdrawing ${cashWithdrawn} from account ${accountNumber}`);
}
else if (cashWithdrawn > cashinAccount){
    console.log (`Insufficent Funds`) 
}
else if ( accountPin2 > accountPin || accountPin2 < accountPin){
    console.log (`incorrect pin`)
}