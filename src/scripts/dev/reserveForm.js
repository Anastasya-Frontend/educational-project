
(function () {
   "use strict";

   const checkboxesData = [
      { price: 1400, qty: 5 }, // красные билеты
      { price: 1250, qty: 7 }, // черные билеты
      { price: 1250, qty: 7 }, // черные билеты
      { price: 1400, qty: 5 }, // красные билеты
      { price: 1250, qty: 7 }, // черные билеты
      { price: 1250, qty: 7 }, // черные билеты
      { price: 1400, qty: 4 }, // красные билеты
      { price: 1400, qty: 3 }, // красные билеты
      { price: 1400, qty: 3 }, // красные билеты
      { price: 1250, qty: 4 }, // черные билеты
      { price: 1250, qty: 7 } // черные билеты
   ];
   
   const ticketsData = { red: { qty: 0, totalCost: 0 }, black: { qty: 0, totalCost: 0 }};
   
   const redTicketsElement = document.querySelector('#redTickets');
   const redTotalCostElement = document.querySelector('#redTotalCost');
   const blackTicketsElement = document.querySelector('#blackTickets');
   const blackTotalCostElement = document.querySelector('#blackTotalCost');
   const totalCostElement = document.querySelector('#totalCost');
   const tables = Array.from(document.querySelectorAll(".scene__table-group"));
   const numbers = Array.from($('.scene__table-num'));
   const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
   
   checkboxes.forEach((checkbox, index) => {
      checkbox.addEventListener('change', () => {
         // Сброс значений перед пересчётом
         ticketsData.red.qty = 0;
         ticketsData.red.totalCost = 0;
         ticketsData.black.qty = 0;
         ticketsData.black.totalCost = 0;

         checkboxes.forEach((innerCheckbox, innerIndex) => {
            if (innerCheckbox.checked) {
               const data = checkboxesData[innerIndex];
               if (data && data.qty !== undefined && data.price !== undefined){
                  // Определяем тип билета на основе индекса в массиве checkboxesData
                  if (innerIndex === 0 || innerIndex === 3 || innerIndex === 6 || innerIndex === 7 || innerIndex === 8) {
                     ticketsData.red.qty += data.qty;
                     ticketsData.red.totalCost += data.price * data.qty;
                  } else {
                     ticketsData.black.qty += data.qty;
                     ticketsData.black.totalCost += data.price * data.qty;
                  }
               }
            }
         });
         
         redTicketsElement.textContent = ticketsData.red.qty;
         redTotalCostElement.textContent = ticketsData.red.totalCost.toLocaleString();
         blackTicketsElement.textContent = ticketsData.black.qty;
         blackTotalCostElement.textContent = ticketsData.black.totalCost.toLocaleString();

         totalCostElement.textContent = (ticketsData.red.totalCost + ticketsData.black.totalCost).toLocaleString();

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
      });
      
      function table1Up () {
         if(checkboxes[0].checked ) {
            tables[0].style.fill = "#a51505";
            numbers[0].classList.add('scene__table-num1');
         } else {
            tables[0].style.fill = "transparent";
            numbers[0].classList.remove('scene__table-num1');
         }
      }
      function table2Up () {
         if (checkboxes[1].checked) {
            tables[1].style.fill = "#1F1E1E";
            numbers[1].classList.add('scene__table-num1');
         } else {
            tables[1].style.fill = "transparent";
            numbers[1].classList.remove('scene__table-num1');
         }
      }
      function table3Up () {
         if (checkboxes[2].checked) {
            tables[2].style.fill = "#1F1E1E";
            numbers[2].classList.add('scene__table-num1');
         } else {
            tables[2].style.fill = "transparent";
            numbers[2].classList.remove('scene__table-num1');
         }
      }
      function table4Up () {
         if(checkboxes[3].checked ) {
               tables[3].style.fill = "#a51505";
               numbers[3].classList.add('scene__table-num1');
         } else {
            tables[3].style.fill = "transparent";
            numbers[3].classList.remove('scene__table-num1');
         }
      }
      function table6Up () {
         if (checkboxes[5].checked) {
            tables[5].style.fill = "#1F1E1E";
            numbers[5].classList.add('scene__table-num1');
         } else {
            tables[5].style.fill = "transparent";
            numbers[5].classList.remove('scene__table-num1');
         }
      }
      function table7Up () {
         if (checkboxes[6].checked) {
            tables[6].style.fill = "#a51505";
            numbers[6].classList.add('scene__table-num1');
         } else {
            tables[6].style.fill = "transparent";
            numbers[6].classList.remove('scene__table-num1');
         }
      }
      function table8Up () {
         if(checkboxes[7].checked ) {
               tables[7].style.fill = "#a51505";
               numbers[7].classList.add('scene__table-num1');
         } else {
            tables[7].style.fill = "transparent";
            numbers[7].classList.remove('scene__table-num1');
         }
      }
      function table9Up () {
         if(checkboxes[8].checked ) {
               tables[8].style.fill = "#a51505";
               numbers[8].classList.add('scene__table-num1');
         } else {
            tables[8].style.fill = "transparent";
            numbers[8].classList.remove('scene__table-num1');
         }
      }
      function table10Up () {
         if (checkboxes[9].checked) {
            tables[9].style.fill = "#1F1E1E";
            numbers[9].classList.add('scene__table-num1');
         } else {
            tables[9].style.fill = "transparent";
            numbers[9].classList.remove('scene__table-num1');
         }
      }
      function table11Up () {
         if (checkboxes[10].checked) {
            tables[10].style.fill = "#1F1E1E";
            numbers[10].classList.add('scene__table-num1');
         } else {
            tables[10].style.fill = "transparent";
            numbers[10].classList.remove('scene__table-num1');
         }
      }
   });
   
})();