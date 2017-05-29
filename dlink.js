console.log('d-link');

$(".btn").click(function () {
  var domain = "https://yx55s.app.goo.gl/";
  var cLink = $('.c-link').val(); //content link
  var sTitle = $('.s-title').val(); // social media title
  var sDesc = $('.s-desc').val(); // social media description
  var sImg = $('.s-img').val(); // social media image
  var option = "SHORT"; // suffix (length of link)

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
        },
        "androidInfo": {
          "androidPackageName": "com.example.android"
        },
        "iosInfo": {
          "iosBundleId": "com.example.ios"
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
