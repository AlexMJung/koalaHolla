console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // load existing koalas on page load
  getKoalas();

  // add koala button click
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    var newKoala = {
      name: $('#nameIn').val(),
      age: $('#ageIn').val(),
      gender: $('#genderIn').val(),
      ready_for_transfer: $('#readyForTransferIn').val(),
      notes: $('#notesIn').val()
    };
    // call saveKoala with the new obejct
    saveKoala( newKoala );
  }); //end addButton on click


$('#viewKoalas').on('click','.delete', function(){
console.log('delete button works, Holla!!!!');
  var koalaID = $(this).parent().parent().data().id;
  //var newMessage = $(this).val();
  console.log(koalaID);
  
$.ajax ({
  method: 'DELETE',
  url: '/koalas/' + koalaID,
  success: function(response){
    clearKoala();
    getKoalas();
  }
})

});//end of deleteButton

}); // end doc ready
function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  $.ajax({
    type: 'GET',
    url: '/koalas',
    success: function( response){
      console.log( 'got some koalas: ', response );
      for (var i = 0; i < response.length; i++) {
        var koalaKnapper = response[i];
        var $koalaTr = $('#viewKoalas')
        //$koalaTr.children.data('id', koalaKnapper.id);
        $koalaTr.append(
        '<tr id=' + koalaKnapper.id +'>' +
        '<td>' + koalaKnapper.name + '</td>' +
        '<td>' + koalaKnapper.age + '</td>' +
        '<td>' + koalaKnapper.gender + '</td>' +
        '<td>' + koalaKnapper.ready_for_transfer + '</td>' +
        '<td>' + koalaKnapper.notes + '</td>' +
        '<td> <button class="delete">Delete</button>'+
        '</tr>'
      )//end of prepend
      }//end of for loop
    } // end success
  }); //end ajax
  // display on DOM with buttons that allow edit of each
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
  $.ajax({
    url: '/koalas',
    type: 'POST',
    data: newKoala,
    success: function( response){
      console.log( 'got some koalas: ', response );
      clearKoala();
      getKoalas();
    } // end success
  }); //end ajax
}

function clearKoala(){
  $('#viewKoalas').empty();
}