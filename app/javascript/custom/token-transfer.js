import { transferToken} from "../web3/buyToken";

$(document).on("turbo:load", async  () => {

let tokenID = $("#tokenID").html();
let listed_price= $("#listedPrice").html(); 
console.log("in the buying page ...")

  $("#buyBtnId").on("click", async () => {
           
    await transferToken(tokenID,parseFloat(listed_price));

  });
});








 

 
