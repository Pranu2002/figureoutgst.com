function calculate() {
    var price = document.getElementById("price").value;
    var rate = document.getElementById("rate").value;
    var gst = price * (rate / 100);
    var total = Number(price) + Number(gst);
    var result = "GST Amount: " + gst.toFixed(2) + "<br>Total Price (including GST): " + total.toFixed(2);
    document.getElementById("result").innerHTML = result;
  }