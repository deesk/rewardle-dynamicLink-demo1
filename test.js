console.log('d-link22');

$.ajax({
  type: "POST",
  url: "https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=AIzaSyAsFPNuGZuYfK042x6OBXpMa4TCSfXE5ds",
  contentType: "application/json",
  processData: false,
  data:JSON.stringify({
    "dynamicLinkInfo": {
    "dynamicLinkDomain": "yx55s.app.goo.gl",
    "link": "http://www.rewardle.com/termsconditions"
    }
  })
}).done(function(links) {
  console.log(links);
});


//works

//munal social links
 // "https://yx55s.app.goo.gl/?link=http://www.rewardle.com/business&st=123Test&sd=social_media_test&si=https://media.cdn.gradconnection.com/uploads/5682b86e-59bb-447b-b6a3-3729d569eec4-Rewardle-Banner.png"

//longDynamicLink
//  data: {
  //     "longDynamicLink": "https://yx55s.app.goo.gl/?link=http://www.rewardle.com/business"
// }
