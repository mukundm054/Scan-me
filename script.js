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
    setTimeout(() => {
      let img = document.querySelector(".qr img");
      let src = img.src;
      let download = document.getElementById("download_button");
      download.href = src;
      download.style.display = "block";
      // Mobile: open in new tab instead
      if (window.innerWidth <= 768) {
        download.target = "_blank";
      }
    }, 1000);
  });
}

qr_genrator();
