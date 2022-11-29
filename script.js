const wrapper=document.querySelector(".wrapper"),
      qrInput=wrapper.querySelector(".form input"),
      generateBtn=wrapper.querySelector(".form button"),
      qrImg=wrapper.querySelector(".qr-code img");

let preValue;

generateBtn.addEventListener("click", () => {
      let qrValue=qrInput.value.trim();
  
      if(!qrValue || preValue===qrValue)    return;   //If qrValue or input filed is empty then return from here
      preValue=qrValue;
      generateBtn.innerText="Generating QR Code...";
      //Now Using the QRserver API we will generate the QR code for the url or text entered by the user
      //Once the QR code is fetched by the API we will pass it img src to qrImg
      qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
   
        qrImg.addEventListener("load",  ()  =>{
          wrapper.classList.add("active");
          generateBtn.innerText="Generate QR Code";
        });
                                  
    });


  qrInput.addEventListener("keyup", ()  =>{
    if(!qrInput.value.trim() ){
      wrapper.classList.remove("active");
      preValue="";
    }
  });