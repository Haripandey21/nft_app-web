import { uploadImage } from "./ipfs-Uploader";

$(document).on("turbo:load", async  () => {
  let file = document.querySelector('input[type="file"]');
  $("#formId").on("submit", async () => {
    var values = {};
    $("#formId *")
      .filter(":input")
      .each(function () {
        values[this.id] = $(this).val();
      });
    uploadImage(file, values);
  });
});
 

 
