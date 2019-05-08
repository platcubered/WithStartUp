$(function () {
  var $setElem = $('.switch'),
      pcName = '_pc',
      spName = '_sm',
      replaceWidth = 641;
  $setElem.each(function () {
      var $this = $(this);

      function imgSize() {
          if (window.innerWidth > replaceWidth) {
              $this.attr('src', $this.attr('src').replace(spName, pcName)).css({
                  visibility: 'visible'
              });
          } else {
              $this.attr('src', $this.attr('src').replace(pcName, spName)).css({
                  visibility: 'visible'
              });
          }
      }
      $(window).resize(function () {
          imgSize();
      });
      imgSize();
  });
});

$('#formSubmit').on("submit", function() {
    event.preventDefault();
    $.ajax({
        type: 'POST',
        url: '/form',
        data: {
                name: $('#InputName').val(),
                age: $('#InputAge').val(),
                school: $('#InputSchool').val(),
                carrier: $('#InputCarrier').val(),
                phone: $('#InputPhone').val(),
              }
    }).then(window.location = "/").then(alert("제출이 완료되었습니다."));
    
})