
  document.getElementById("flex1").addEventListener("click", p1);
  document.getElementById("flex2").addEventListener("click", p2);
  document.getElementById("flex3").addEventListener("click", p3);
   document.getElementById("flex4").addEventListener("click", p4);
   document.getElementById("flex5").addEventListener("click", p5);
   document.getElementById("flex6").addEventListener("click", p6);
  document.getElementById("flex7").addEventListener("click", p7);
   document.getElementById("flex8").addEventListener("click", p8);
   document.getElementById("flex9").addEventListener("click", p9);
    // ***********Estimated Saving********

  document.getElementById("two").addEventListener("click", two);
  document.getElementById("four").addEventListener("click", four);
  document.getElementById("six").addEventListener("click", six);
  document.getElementById("eight").addEventListener("click", eight);
  document.getElementById("ten").addEventListener("click", ten);
  document.getElementById("twelve").addEventListener("click", twelve);



  let clickforp1 = 0;
  let clickforp2 = 0;
  let clickforp3 = 0;
  let clickforp4 = 0;
  let clickforp5 = 0;
  let clickforp6 = 0;
  let clickforp7 = 0;
  let clickforp8 = 0;
   let clickforp9 = 0;

  function p1() {
    if (clickforp1 == 0) {
      document.getElementById("p1").innerText =
        "Plus members save 15% on every order. Additionally, they get access to top-rated Plus professionals. UC Plus professionals are a curated set of professionals who are top-rated, specially trained, and experts in their field. UC Plus members also get discounts up to *150. The fee for repairs will be charged as per actuals.";
      clickforp1++;
    } else {
      document.getElementById("p1").innerText = "";
      clickforp1--;
    }
  }

 
  function p2() {
    if(clickforp2==0){ 
    document.getElementById("p2").innerText =
      " if a subscriber saves less than the membership price at the end of the membership period, he/she will automatically get a refund worth members price - total discount availed as UC cash can be used while booking any service across any category";
    clickforp2++;
    }else{
        document.getElementById("p2").innerText ="";
        clickforp2--;
    }
}
  

  function p3() {
    if(clickforp3==0){
        document.getElementById("p3").innerText =
        "Yes, maximum discount per transaction is limited to ₹150 ";
        clickforp3++;
    }else{
        document.getElementById("p3").innerText ="";
        clickforp3--;
    }
    
  }
 
  function p4() {
    if(clickforp4==0){
        document.getElementById("p4").innerText =
        "No, there's no number of transactions under the membership. But as per our fair usage policy. the total discount you can avail is limited to 7 times the membership price.";
        clickforp4++;
    }else{
        document.getElementById("p4").innerText ="";
        clickforp4--; 
    }
   
  }


 
  function p5() {
    if(clickforp5==0){
        document.getElementById("p5").innerText =
        "Yes, as per our fair usage policy, the total discount you can avail is limited to 7 times the membership price you paid";
        clickforp5++;
    }else{
        document.getElementById("p5").innerText ="";
        clickforp5--;
    }
      }
 
  function p6() {

    if(clickforp6==0){
        document.getElementById("p6").innerText =
        "UC Plus professionals are a curated set of professionals who are top-rated, specially trained, and experts in their field.";
    clickforp6++;
    }else{
        document.getElementById("p6").innerText ="";
        clickforp6--;
    }
    
  }
  
  function p7() {
    if(clickforp7==0){
        document.getElementById("p7").innerText =
        "Membership can only be bought by paying online. For all the subsequent bookings, you have the option of paying in cash or online";
        clickforp7++;
    }else{
        document.getElementById("p7").innerText ="";
        clickforp7--;
    }
   
  }
 
  function p8() {
    if(clickforp8==0){
        document.getElementById("p8").innerText =
        "No, the membership cannot be cancelled or transferred";
        clickforp8++;
    }else{
        document.getElementById("p8").innerText="";
        clickforp8--;
    }
    
  }
 
  function p9() {
    if(clickforp9==0){
        document.getElementById("p9").innerText =
        "No Membership discount is applicable only on services booked via UC app and not on any extra services taken directly from the professional";
        clickforp9++;
    }else{
        document.getElementById("p9").innerText=""
        clickforp9--
    }
   
  }

     // ***********Estimated Saving********
  function two() {
    document.querySelector("h1").innerText = "₹288";
  }
  function four() {
    document.querySelector("h1").innerText = "₹576";
  }
  function six() {
    document.querySelector("h1").innerText = "₹864";
  }
  function eight() {
    document.querySelector("h1").innerText = "₹1152";
  }
  function ten() {
    document.querySelector("h1").innerText = "₹1440";
  }
  function twelve() {
    document.querySelector("h1").innerText = "₹1728";
  }

  document.getElementById("total").innerText =
    "₹" + (localStorage.getItem("totalvalue") || 0);

  document.getElementById("sprice").innerText =
    "₹" + (parseInt(localStorage.getItem("totalvalue")) - 150);
