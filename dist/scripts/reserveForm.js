(function () {
   "use strict";
   const reserve = $("#js-reserve");
   const check = Array.from(document.querySelectorAll('input[type="checkbox"]'));
   const total = document.querySelector(".reserve__total");
   const tables = Array.from(document.querySelectorAll(".scene__table-group"));
   const numbers = Array.from($('.scene__table-num'));
   
   
   let currentSet = {
      check: [],
      getCheckPrice() {
         let checkPrice = 0;
         if (!this.check.length == 0) {
            this.check.forEach((el) => {
               checkPrice += priceInfo.check[el];
            });
         }
         return checkPrice;
      },
   };

   check.forEach((el) => {
      el.addEventListener("change", checkUpdate);
   });
   
   function checkUpdate(e) {
      e.stopPropagation();
      if (e.target.checked) {
         currentSet.check.push(e.target.id);
      } else {
         let index = currentSet.check.indexOf(e.target.id);
         currentSet.check.splice(index, 1);
      }
      
      updatePrice();
      table1Up ();
      table2Up ();
      table3Up ();
      table4Up ();
      table6Up ();
      table7Up ();
      table8Up (); 
      table9Up (); 
      table10Up (); 
      table11Up (); 
   }
   function table1Up () {
      if(check[0].checked ) {
         tables[0].style.fill = "#a51505";
         numbers[0].classList.add('scene__table-num1');
      } else {
         tables[0].style.fill = "transparent";
         numbers[0].classList.remove('scene__table-num1');
      }
   }
   function table2Up () {
      if (check[1].checked) {
         tables[1].style.fill = "#1F1E1E";
         numbers[1].classList.add('scene__table-num1');
      } else {
         tables[1].style.fill = "transparent";
         numbers[1].classList.remove('scene__table-num1');
      }
   }
   function table3Up () {
      if (check[2].checked) {
         tables[2].style.fill = "#1F1E1E";
         numbers[2].classList.add('scene__table-num1');
      } else {
         tables[2].style.fill = "transparent";
         numbers[2].classList.remove('scene__table-num1');
      }
   }
   function table4Up () {
      if(check[3].checked ) {
            tables[3].style.fill = "#a51505";
            numbers[3].classList.add('scene__table-num1');
      } else {
         tables[3].style.fill = "transparent";
         numbers[3].classList.remove('scene__table-num1');
      }
   }
   function table6Up () {
      if (check[5].checked) {
         tables[5].style.fill = "#1F1E1E";
         numbers[5].classList.add('scene__table-num1');
      } else {
         tables[5].style.fill = "transparent";
         numbers[5].classList.remove('scene__table-num1');
      }
   }
   function table7Up () {
      if (check[6].checked) {
         tables[6].style.fill = "#a51505";
         numbers[6].classList.add('scene__table-num1');
      } else {
         tables[6].style.fill = "transparent";
         numbers[6].classList.remove('scene__table-num1');
      }
   }
   function table8Up () {
      if(check[7].checked ) {
            tables[7].style.fill = "#a51505";
            numbers[7].classList.add('scene__table-num1');
      } else {
         tables[7].style.fill = "transparent";
         numbers[7].classList.remove('scene__table-num1');
      }
   }
   function table9Up () {
      if(check[8].checked ) {
            tables[8].style.fill = "#a51505";
            numbers[8].classList.add('scene__table-num1');
      } else {
         tables[8].style.fill = "transparent";
         numbers[8].classList.remove('scene__table-num1');
      }
   }
   function table10Up () {
      if (check[9].checked) {
         tables[9].style.fill = "#1F1E1E";
         numbers[9].classList.add('scene__table-num1');
      } else {
         tables[9].style.fill = "transparent";
         numbers[9].classList.remove('scene__table-num1');
      }
   }
   function table11Up () {
      if (check[10].checked) {
         tables[10].style.fill = "#1F1E1E";
         numbers[10].classList.add('scene__table-num1');
      } else {
         tables[10].style.fill = "transparent";
         numbers[10].classList.remove('scene__table-num1');
      }
   }
   
   function updatePrice() {
      let checkPrice = currentSet.getCheckPrice();
      let totalPrice = checkPrice;
      total.value = parseInt(totalPrice);
      total.textContent = ` ${total.value.toLocaleString()}`;
   }
   
   const priceInfo = {
      check: {
         check1: 7000,
         check2: 8750,
         check3: 8750,
         check4: 7000,
         check5: 0,
         check6: 8750,
         check7: 5600,
         check8: 4200,
         check9: 4200,
         check10: 5000,
         check11: 8750,
      }
   }
   
})();