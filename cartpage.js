var cartpage = JSON.parse(localStorage.getItem("items")) || [];
var total = 0;
var quantity = 1;
var totfinal = 0;
displaydata(cartpage);

displayprice(cartpage);

function displaydata(cp) {
  document.getElementById("container").innerText = "";
  cp.map(function (elem, index) {
    var namediv = document.createElement("div");
    namediv.setAttribute("id", "namediv");
    var name = document.createElement("h5");
    var pricediv = document.createElement("div");
    var plusminusdiv = document.createElement("div");
    var plus = document.createElement("p");
    var minus = document.createElement("p");
    var num = document.createElement("p");
    var divforprice = document.createElement("div");
    var price = document.createElement("p");
    var sp = document.createElement("p");
    var hr = document.createElement("hr");
    name.innerText = elem.name;
    plus.innerText = "+";
    num.innerText = quantity;
    minus.innerText = "-";
    price.innerText = "₹" + elem.price;
    console.log(elem.strikeprice);
    sp.innerText = "₹" + elem.strikeprice;
    plusminusdiv.append(minus, num, plus);
    divforprice.append(price, sp);
    pricediv.append(plusminusdiv, divforprice);
    plusminusdiv.setAttribute("id", "price");
    namediv.append(name, pricediv);
    // quantity plus and minus
    plus.addEventListener("click", function () {
      plusItem(elem, num);
    });

    minus.addEventListener("click", function () {
      minusItem(elem, num, index);
    });
    var seconddiv = document.createElement("div");
    seconddiv.setAttribute("id", "list");

    var thread1p = document.createElement("p");
    if (elem.thread1 != "") {
      thread1p.innerText = "• " + elem.thread1 + " x1";
    } else {
      thread1p.innerText = elem.thread1;
    }

    var thread2p = document.createElement("p");
    if (elem.thread2 != "") {
      thread2p.innerText = "• " + elem.thread2 + " x1";
    } else {
      thread2p.innerText = elem.thread2;
    }

    var thread3p = document.createElement("p");
    if (elem.thread3 != "") {
      thread3p.innerText = "• " + elem.thread3 + " x1";
    } else {
      thread3p.innerText = elem.thread3;
    }

    var thread4p = document.createElement("p");
    if (elem.thread4 != "") {
      thread4p.innerText = "• " + elem.thread4 + " x1";
    } else {
      thread4p.innerText = elem.thread4;
    }

    var thread5p = document.createElement("p");
    if (elem.thread5 != "") {
      thread5p.innerText = "• " + elem.thread5 + " x1";
    } else {
      thread5p.innerText = elem.thread5;
    }

    var edit = document.createElement("button");
    edit.innerText = "Edit package";
    edit.setAttribute("class", "edit");
    seconddiv.append(thread1p, thread2p, thread3p, thread4p, thread5p, edit);

    document.getElementById("container").append(namediv, hr, seconddiv);
  });
}

function displayprice(dp) {
  total = 0;
  dp.map(function (elem) {
    total = parseInt(total) + parseInt(elem.price);
  });
  localStorage.setItem("totalvalue", total);
  document.getElementById("total").innerText = "₹" + total;

  var discount = 50;
  document.getElementById("discount").innerText = "₹ -" + discount;

  var fee = 49;
  document.getElementById("confee").innerText = "₹" + fee;

  var tfinal = parseInt(total) - parseInt(discount) + parseInt(fee);
  document.getElementById("totalfinal").innerText = "₹" + tfinal;

  ////imp
  totfinal = tfinal;
}

function plusItem(elem, num) {
  console.log(elem);
  var quant = num.innerText;
  quant++;
  var tot = localStorage.getItem("totalvalue");
  tot = parseInt(tot) + parseInt(elem.price);
  localStorage.setItem("totalvalue", tot);
  num.innerText = quant;
  document.getElementById("total").innerText =
    localStorage.getItem("totalvalue");

  var discount = 50;
  document.getElementById("discount").innerText = "₹ +" + discount;

  var fee = 49;
  document.getElementById("confee").innerText = "₹" + fee;

  var tfinal = parseInt(tot) - parseInt(discount) + parseInt(fee);
  document.getElementById("totalfinal").innerText = "₹" + tfinal;
  //////imp
  totfinal = tfinal;
}

function minusItem(elem, num, index) {
  console.log(elem);
  var quant = num.innerText;
  quant--;
  if (quant >= 1) {
    var tot = localStorage.getItem("totalvalue");
    tot = parseInt(tot) - parseInt(elem.price);
    localStorage.setItem("totalvalue", tot);
    num.innerText = quant;
    document.getElementById("total").innerText =
      localStorage.getItem("totalvalue");

    var discount = 50;
    document.getElementById("discount").innerText = "₹ +" + discount;

    var fee = 49;
    document.getElementById("confee").innerText = "₹" + fee;

    var tfinal = parseInt(tot) - parseInt(discount) + parseInt(fee);
    document.getElementById("totalfinal").innerText = "₹" + tfinal;
    //////imp
    totfinal = tfinal;
  } else if (quant == 0) {
    removefromcart(elem, index);
  }
}

function removefromcart(elem, index) {
  cartpage.splice(index, 1);
  console.log(elem);
  var tot = localStorage.getItem("totalvalue");
  tot = parseInt(tot) - parseInt(elem.price);
  localStorage.setItem("totalvalue", tot);
  // num.innerText =  quant;
  document.getElementById("total").innerText =
    localStorage.getItem("totalvalue");

  var discount = 50;
  document.getElementById("discount").innerText = "₹ +" + discount;

  var fee = 49;
  document.getElementById("confee").innerText = "₹" + fee;

  var tfinal = parseInt(tot) + parseInt(discount) + parseInt(fee);
  document.getElementById("totalfinal").innerText = "₹" + tfinal;
  //////imp
  totfinal = tfinal;

  // var tot = localStorage.getItem("total");
  // tot = tot - elem.price;
  // localStorage.setItem("total", tot);
  localStorage.setItem("items", JSON.stringify(cartpage));
  displaydata(cartpage);

  displayprice(cartpage);
}

// *****Proceed to pay ********
document.getElementById("OrderPlace").addEventListener("click", proceed);
function proceed() {
  localStorage.setItem("totalvalue", totfinal);
}
