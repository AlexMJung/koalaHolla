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
      $('#viewKoalas').prepend(
        '<tr><td>' + koalaKnapper.name + '</td>' +
        '<td>' + koalaKnapper.age + '</td>' +
        '<td>' + koalaKnapper.gender + '</td>' +
        '<td>' + koalaKnapper.ready_for_transfer + '</td>' +
        '<td>' + koalaKnapper.notes + '</td><tr>'
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