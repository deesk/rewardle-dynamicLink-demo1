console.log('d-link');

$(".btn").click(function () {
  var domain = "https://yx55s.app.goo.gl/";
  var cLink = $('.c-link').val();
  var sTitle = $('.s-title').val();
  var sDesc = $('.s-desc').val();
  var sImg = $('.s-img').val();
  var option = "SHORT";

 $.ajax({
   type: "POST",
   url: "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=" + api_key,
   contentType: "application/json",
   processData: false,

    data:JSON.stringify({
      "dynamicLinkInfo": {
      "dynamicLinkDomain": "yx55s.app.goo.gl",
      "link": cLink,
        "socialMetaTagInfo": {
          "socialTitle": sTitle,
          "socialDescription": sDesc,
          "socialImageLink": sImg
        }
      },
      "suffix": {
       "option": option
      }
    })
  }).done(function(links){
    console.log(links);
    $('.response').text(links.shortLink);
  });
})
