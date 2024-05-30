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
            },
            error: function() {
               alert("Что-то пошло не так, попробуйте еще раз!");
            }
         });
      });
   });
})();