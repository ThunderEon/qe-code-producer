const input = document.querySelector("form input[type=text]");
const button = document.querySelector("form button");
const qrBox = document.querySelector(".qr-code-box");
const qrImg = document.querySelector(".qr-code-box img");

button.addEventListener("click", () => {
  let qrValue = input.value;
  if (!qrValue) return alert("لطفا متن یا آدرس را بنویسید");

  qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
  button.innerHTML = "در حال دریافت QR";

  qrImg.addEventListener("load", () => {
    qrBox.classList.remove("hidden");
    button.innerHTML = "تولید QR";
  });
});

input.addEventListener("keyup" , ()=>{
    if(!input.value) return qrBox.classList.add("hidden");
})