
 if (algabsvalprogress == 0) {
    algabsvalprogress = 1;
    var algabsvalbar = document.getElementById("algabsvalprogress");
    var algabsvalwidth = 1;
    var algabsvalid = setInterval(algabsvalframe, 10);
    function algabsvalframe() {
      if (algabsvalwidth >= algabsvalprogressmax) {
        clearInterval(algabsvalid);
        algabsvalprogress = 0;
      } else {
        algabsvalwidth++;
        algabsvalbar.style.width = algabsvalwidth + "%";
      }
    }
  }









