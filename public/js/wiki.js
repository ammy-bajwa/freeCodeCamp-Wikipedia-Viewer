function searchWiki() {
  var search = $("#search").val().trim();
  if(!search){
    return alert('Please Enter A Value')
  }
  $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + search,
      dataType: 'jsonp',
      type: 'POST',
      headers: {
          'Api-User-Agent': 'Example/1.0'
      },
      success: function (data) {
          var searchResult = [];
          searchResult = data.query.search;
          console.log(data);
          var resLength = searchResult.length;
          $('#result').empty();
          for (i = 0; i < resLength; i++) {
              $('#result').append(`<a href="https://en.wikipedia.org/wiki/${searchResult[i].title}" target="_blank"><div><h1>${searchResult[i].title}</h1><p>${searchResult[i].snippet}</p></div></a><hr/>`);
          };

      }})}