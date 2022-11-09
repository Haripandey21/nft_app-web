import { callApprove } from "../web3/approveTokens";

$(document).on("turbo:load", async  () => {
  console.log(" you are in list-form ")
let tokenID = $("#tokenID").html();
console.log("before clk, token ID: ",tokenID);
  $("#listFormId").on("submit", async () => {
    var values = {};
    $("#listFormId *")
      .filter(":input")
      .each(function () {
        values[this.id] = $(this).val();
      });
      console.log("after clk, token ID: ",tokenID);     
    callApprove(tokenID);

  });
});


 

 
