(function () {
   "use strict";

   const tableCells = document.querySelectorAll('.scene__table')
   const tableInfo = {};
   const obj = {};
   const obj1 = {};
   // const items = Array.from(tableCells);
   const arr = [];
   tableCells.forEach((node) => {
      arr.push(node);
   })
   console.log(arr);
   // const items = Array.prototype.slice.call( document.querySelectorAll('.scene__table') )
   var items2 = Array.prototype.slice.call( document.querySelectorAll('.reserve__check__input ') )
   // const prs = document.querySelectorAll('.reserve__qty');
   // console.log(items);
   // console.log(items2);
   // items.forEach((key, i) => obj[key] = items2[i]);
   // console.log(obj);   
   // console.log(tableCells)
   const a1 = ['one', 'two'];
   const a2 = [1, 2];
   const res = {};
   const a3 = [];
   a1.forEach((key, i) => res[key] = a2[i]);
   console.log(res); 
   const v1 = document.querySelector('div');
   console.log(v1.dataset.price='1250')
   // const v2 = document.querySelector('div[data-price="1400"]');
   // const v2 = document.querySelector('div');
   // console.log(v2.dataset.price='1400');

   // a3.push(v1.dataset.price=1250);
   // a3.push(v1.dataset.price=1400);
   // a3.push(v2.dataset.price=1400);
   // a3.push(v2.dataset.price=1250);
   // a3.push(v2.dataset.price=1400);
   // a3.push(v2.dataset.price=1400);
   // a3.push(v2.dataset.price=1250);
   // a3.push(v2.dataset.price=1250);
   // a3.push(v2.dataset.price=1250);
   // a3.push(v2.dataset.price=1400);
   // a3.push(v2.dataset.price=1400);
   // console.log(a3)

   // arr.forEach((key, i) => obj[key] = a3[i]);
   // console.log(obj)
   // let element = document.querySelector(".checks__1");
   // let el = document.querySelector("#table1");
   // let arr = [];
   // $('.reserve').on('change', 'input[type="checkbox"]', function() {
   //    if($(this).is(':checked')) {
   //       el.style.fill = "#a51505";
   //       el.querySelector("path").style.fill = "#1f1e1e";
   //       console.log('Чекбокс 1 выбран');
   //    } else {
   //       el.style.fill = "transparent";
   //       el.querySelector("path").style.fill = "#BC3324";
   //       console.log('Чекбокс 1 не выбран');
   //    }
   // })
   // element.addEventListener('change', function() {
   //    if (element.checked) {
   //       el.style.fill = "#a51505";
   //       el.querySelector("path").style.fill = "#1f1e1e";
   //       console.log('Чекбокс 1 выбран');
   //    } else {
   //       el.style.fill = "transparent";
   //       el.querySelector("path").style.fill = "#BC3324";
   //       console.log('Чекбокс 1 не выбран');
   //    }
   // });
   
      // let form = document.querySelector('form');
   // console.log(form);
   
   // $('#s1').on("click", function() {
   //    if( $('#table-1').css('fill') == "rgb(255, 0, 0)"){
   //       $('#table-1').css({ fill: "#ffffff" });
   //    }else{
   //       $('#table-1').css({ fill: "#ff0000" });
   //       console.log('Чекбокс 1 выбран');
   //    }    
   // });


      
})();
