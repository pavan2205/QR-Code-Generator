const container = document.querySelector(".container");
const input = document.querySelector("#input");
const button = document.querySelector(".button");
const qr_block = document.querySelector(".generated-qr");
const qr_img = document.getElementById("qr_img");
const color = document.getElementById("color-picker");
const qr_download = document.getElementById("qr-download");

button.addEventListener("click", () => {
  let qr_value = input.value;
  let color_value = color.value;
  let colors = color_value.slice(1);
  if (!input.value) return;
  qr_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qr_value}&color=${colors}`;
  console.log(qr_img.src);
  qr_download.href = qr_img.src;
  console.log(qr_download.href);
  container.classList.add("active");
  qr_block.classList.add("active");
});
