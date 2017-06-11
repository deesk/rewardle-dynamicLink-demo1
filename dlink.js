console.log('d-link');

$(".btn-fb").click(function () {
  // api reqest domain name
  var domain = "https://yx55s.app.goo.gl/";
  //content link
  var cLink = $('.c-link').val();
  // social media title
  var sTitle = $('.s-title').val();
  // social media description
  var sDesc = $('.s-desc').val();
  // social media image
  var sImg = $('.s-img').val();
  // suffix (length of link)
  var option = "SHORT";

  $.ajax({
    type: "POST",
    url: "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=" + api_key,
    contentType: "application/json",
    processData: false,
    data:JSON.stringify({
      "dynamicLinkInfo": {
        "dynamicLinkDomain": "yx55s.app.goo.gl",
        "link": "https://www.rewardle.com/s/scan?qrcode=" + cLink,
        "androidInfo": {
          "androidPackageName": "com.rewardle.rewardle",
          "androidFallbackLink": "http://www.rewardle.com/"
        },
        "socialMetaTagInfo": {
          "socialTitle": sTitle,
          "socialDescription": sDesc,
          "socialImageLink": sImg
        },
        "analyticsInfo": {
          "googlePlayAnalytics": {
            "utmSource": "webSite",
            "utmMedium": "Facebook",
            "utmCampaign": "test"
          }
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
