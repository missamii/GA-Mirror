window.onload = function() {
  console.log("app.js");

var contact = {
  'name': 'Tiffany',
  'age': '25'
}
$.post('http://localhost:3000/contacts', contact, function(responeServer){
  console.log(responeServer);

});
$.ajax({
 url:'http://localhost:3000/contacts/5787d9a8dce4380bd69c686b',
 type: 'DELETE',
 sucess: function (result){
   console.log(result);
 }
})

}
