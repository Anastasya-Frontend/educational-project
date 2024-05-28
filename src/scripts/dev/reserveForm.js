(function () {
   "use strict";
   const reserve = $("#js-reserve");
   const check = Array.from(document.querySelectorAll('input[type="checkbox"]'));
   const total = document.querySelector(".reserve__total");
   const tables = Array.from(document.querySelectorAll(".scene__table-group"));
   const table1 = document.querySelector('#table1 > g');
   
   
   
   
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
         // table1.setAttribute("stroke", "#1f1e1e");
         
      } else {
         let index = currentSet.check.indexOf(e.target.id);
         currentSet.check.splice(index, 1);
         // table1.setAttribute("stroke", "#BC3324"); 
      }
      updatePrice();
   }
   
   
   function updatePrice() {
      let checkPrice = currentSet.getCheckPrice();
      let totalPrice = checkPrice;
      total.value = totalPrice;
      total.textContent = ` ${total.value}`;
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
   
//    const tableInfo = {
//       table: {

//       }
//    }
//    const checkbox1 = document.getElementById('check1');
//    const table1 = document.getElementById('table1');
//    checkbox1.addEventListener('change', function() {
//       if (checkbox1.checked) {
//           table1.querySelector('.scene__table-group').setAttribute("fill", "#BC0024");
//           table1.querySelector('path').setAttribute("fill", "#1f1e1e"); // Красный цвет

//       } else {
//           // Вернуть цвет по умолчанию
//           table1.querySelector('.scene__table-group').setAttribute("fill", "#transparent");
//           table1.querySelector('path').setAttribute("fill", "#BC3324");
//       }
//   });

})();