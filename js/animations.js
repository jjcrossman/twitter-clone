$(document).ready( function() {
    //hidden on load
    $( '#tweet-controls, .stats, .reply' ).css( "display", "none" );
    $( '.tweet-actions' ).animate( {opacity: 0}, 0 );

    //variables
    var newTweetHeight = $( '#tweet-content > .tweet-compose' ).height();

    //functions

        //As user types in compose, reduce character counter
    function updateCharCount () {
        charCountVal = 140 - $( '.tweet-compose' ).val().length;
        if ( charCountVal <= 10 ) {
          $( '#char-count' ).css( "color", "red" );
        } else {
          $( '#char-count' ).css( "color", "black" );
        };
        $( '#char-count' ).text( function(){
          return charCountVal;
        })
        if ( charCountVal <= 0 ) {
          var maxChars = $( '.tweet-compose' ).val().slice( 0, 139 );
          $( '.tweet-compose' ).val( maxChars );
        }
  };

    $( document ).keydown( updateCharCount );

    //If click anywhere on document, do these:


    //When click in compose new tweet field, double size of text field and reveal word count and tweet button
    $( '#tweet-content > .tweet-compose' ).click( function() {

        if ( $(this).height() === newTweetHeight ) {
            $(this).height( function() {
                return $(this).height() * 2;
            })
        }

        $( '#tweet-controls' ).css( "display", "block");

    });

    //When hover over tweet div, show tweet actions
    $( '.tweet' ).hover( function() {
        $( this )
            .find(".tweet-actions")
            .animate( {opacity: 1}, 400, "linear" );
    }, function() {
        $( this )
            .find(".tweet-actions")
            .animate( {opacity: 0}, 200, "linear" );
    });

    //On click, show .stats and .reply
    $( '.tweet' ).click( function () {
      $( this )
        .find( '.stats, .reply' ).css( "display", "block");
    });











});
