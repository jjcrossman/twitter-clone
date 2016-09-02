$(document).ready( function() {
    //hidden on load
    function displayNone() {
      $( '#tweet-controls, .stats, .reply' ).css( "display", "none" );
      $( '.tweet-actions' ).animate( {opacity: 0}, 0 );
    };

    displayNone();

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

    var newTweet = "<div class=\"tweet\">      <div class=\"content\">        <img class=\"avatar\" src=\"img/alagoon.jpg\" />        <strong class=\"fullname\">My BFF</strong>        <span class=\"username\">@mybff</span>        <p class=\"tweet-text\">Today is an amazing day.</p>   <div class=\"tweet-actions\">          <ul>            <li><span class=\"icon action-reply\"></span> Reply</li>            <li><span class=\"icon action-retweet\"></span> Retweet</li>            <li><span class=\"icon action-favorite\"></span> Favorite</li>            <li><span class=\"icon action-more\"></span> More</li>          </ul>        </div>        <div class=\"stats\">          <div class=\"retweets\">            <p class=\"num-retweets\">30</p>            <p>RETWEETS</p>          </div>          <div class=\"favorites\">            <p class=\"num-favorites\">6</p>            <p>FAVORITES</p>          </div>          <div class=\"users-interact\">            <div>              <img src=\"img/alagoon.jpg\" />              <img src=\"img/vklimenko.jpg\" />            </div>          </div> <div class=\"time\">1:04 PM - 19 Sep 13</div></div>        <div class=\"reply\">          <img class=\"avatar\" src=\"img/alagoon.jpg\" />          <textarea class=\"tweet-compose\" placeholder=\"Reply to @mybff\"/></textarea></div></div></div>"

    $( '#tweet-submit' ).click( function () {
      $( '#stream' ).append( newTweet );
      displayNone();

    });







});
