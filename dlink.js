console.log('d-link');

$(".btn").click(function () {

  var domain = "https://yx55s.app.goo.gl/";
  var cLink = $('.c-link').val();
  var sTitle = $('.s-title').val();
  var sDesc = $('.s-desc').val();
  var sImg = $('.s-img').val();
  var option = "SHORT";

 // var dynamicLink = domain + "?link=" + cLink + "&st=" + sTitle + "&sd=" + sDesc + "&si=" + sImg + "&option=SHORT3";
 // console.log(dynamicLink);

 $.ajax({
   type: "POST",
   url: "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyAsFPNuGZuYfK042x6OBXpMa4TCSfXE5ds",
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

//works

//munal social links
 // "https://yx55s.app.goo.gl/?link=http://www.rewardle.com/business&st=123Test&sd=social_media_test&si=https://media.cdn.gradconnection.com/uploads/5682b86e-59bb-447b-b6a3-3729d569eec4-Rewardle-Banner.png"

//longDynamicLink
//  data: {
  //     "longDynamicLink": "https://yx55s.app.goo.gl/?link=http://www.rewardle.com/business"
// }
