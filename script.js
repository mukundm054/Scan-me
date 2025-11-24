function qr_genrator() {
  let button = document.getElementsByTagName("button")[0];
  button.addEventListener("click", () => {
    let input = document.getElementsByClassName("input")[0].value;
    document.getElementsByClassName("qr")[0].innerHTML = "";

    new QRCode(document.getElementsByClassName("qr")[0], {
      text: input,
      width: 200,
      height: 200,
    });
  });
}

qr_genrator()
