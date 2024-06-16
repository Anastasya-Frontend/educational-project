//AJAX-запрос на форму
(function () {
   "use strict";

   $(document).ready(function() {
      $("#js-reserve").submit(function(e) {
         e.preventDefault();
         
         const reserveForm = $(this);
         const reserveAction = reserveForm.attr("action");
         const checkOption = reserveForm.find('input[type="checkbox"]:checked');
         if (!checkOption.length) {
            alert("Пожалуйста, выберите столик!");
            return;
         }
         
         $.ajax({
            url: reserveAction,
            data: reserveForm.serialize(),
            success: function() {
               alert("Столик успешно забронирован!");
               reserveForm[0].reset();

               const redTotalCostEl = $('#redTotalCost');
               const redTicketsItem = $('#redTickets');
               const blackTotalCostEl = $('#blackTotalCost');
               const blackTicketsItem = $('#blackTickets');
               const totalCostElement = $('#totalCost');
               const tables = Array.from(document.querySelectorAll(".scene__table-group"));
               const numbers = Array.from($('.scene__table-num'));

               totalCostElement.text('0'); 
               redTotalCostEl.text('0');
               blackTotalCostEl.text('0');
               redTicketsItem.text('0');
               blackTicketsItem.text('0');

               tables[0].style.fill = "transparent";
               tables[1].style.fill = "transparent";
               tables[2].style.fill = "transparent";
               tables[3].style.fill = "transparent";
               tables[5].style.fill = "transparent";
               tables[6].style.fill = "transparent";
               tables[7].style.fill = "transparent";
               tables[8].style.fill = "transparent";
               tables[9].style.fill = "transparent";
               tables[10].style.fill = "transparent";
               numbers[0].classList.remove('scene__table-num1');
               numbers[1].classList.remove('scene__table-num1');
               numbers[2].classList.remove('scene__table-num1');
               numbers[3].classList.remove('scene__table-num1');
               numbers[5].classList.remove('scene__table-num1');
               numbers[6].classList.remove('scene__table-num1');
               numbers[7].classList.remove('scene__table-num1');
               numbers[8].classList.remove('scene__table-num1');
               numbers[9].classList.remove('scene__table-num1');
               numbers[10].classList.remove('scene__table-num1');
            },
            error: function() {
               alert("Что-то пошло не так, попробуйте еще раз!");
            }
         });
      });
   });
})();