import { callApprove } from "../web3/approveTokens";

$(document).on("turbo:load", async  () => {
let tokenID = $("#tokenID").html();
  $("#listFormId").on("submit", async () => {
    var values = {};
    $("#listFormId *")
      .filter(":input")
      .each(function () {
        values[this.id] = $(this).val();
      });
       
    callApprove(tokenID);

  });
});



 

 
