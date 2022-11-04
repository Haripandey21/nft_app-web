import { uploadImage } from "./ipfs-Uploader";

$(document).on("turbo:load", async  () => {
//   let file = document.querySelector('input[type="file"]');
  $("#listFormId").on("submit", async () => {
    var values = {};
    $("#listFormId *")
      .filter(":input")
      .each(function () {
        values[this.id] = $(this).val();
      });

    // uploadImage(file, values);

    function listNft( )
    {
        for(i=0;i<length;i++)
        {
        
        }

    }

  });
});
 

 
