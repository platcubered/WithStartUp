$(document).ready(function(){
  $('#goForm').click(function(){
    alert("test");
  })
});

var goForm =function () {
  axios.get('/form');
  alert("hello");
}
function submitForm() {
  axios.post('/form',{
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    id : 'hong',

    }
  );
  alert("post Test");
}

