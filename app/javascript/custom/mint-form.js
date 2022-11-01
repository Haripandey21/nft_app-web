console.log("you are here : ")
import { uploadImage } from "./ipfs-Uploader";

$(document).on("turbo:load", async  () => {

    console.log("you are inside  : ")
  let file = document.querySelector('input[type="file"]');
  $("#formId").on("submit", async () => {
    console.log("you are here after clicking : ")
    var values = {};
    $("#formId *")
      .filter(":input")
      .each(function () {
        values[this.id] = $(this).val();
      });

    uploadImage(file, values);
  });
});
 

 
