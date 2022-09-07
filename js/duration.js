!(function () {
  function update() {
    var now = new Date();
    var grt = new Date("2022-04-02 00:00:01");  /** 此处是计时的起始时间 **/
    now.setTime(now.getTime() + 250);
    years = (now - grt) / 1000 / 60 / 60 / 24 / 365;
    ynum = Math.floor(years);
    days = (now - grt) / 1000 / 60 / 60 / 24 - 365 * ynum;
    dnum = Math.floor(days);
    hours = (now - grt) / 1000 / 60 / 60 - (24 * (365 * ynum + dnum));
    hnum = Math.floor(hours);
    if (String(hnum).length === 1) {
      hnum = "0" + hnum;
    }
    minutes = (now - grt) / 1000 / 60 - (365 * 24 * 60 * ynum) - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes);
    if (String(mnum).length === 1) {
      mnum = "0" + mnum;
    }
    seconds = (now - grt) / 1000 - (365 * 24 * 60 * 60 * ynum) - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds);
    if (String(snum).length === 1) {
      snum = "0" + snum;
    }
    document.getElementById("timeDate").innerHTML = "本站已安全运行&nbsp" + ynum + "&nbsp年&nbsp" + dnum + "&nbsp天&nbsp";
    document.getElementById("times").innerHTML = hnum + "&nbsp时&nbsp" + mnum + "&nbsp分&nbsp" + snum + "&nbsp秒";
  }
  setInterval(update, 1000);
})();