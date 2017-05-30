console.log('branch');

$.ajax({
  type: "POST",
  url: "https://api.branch.io/v1/url",
  contentType: "application/json",
  processData: false,
  data:JSON.stringify({
  	"branch_key": b_key,
    "alias" : "alias test",
  	"campaign": "ajax: test0502 | with alias",
  	"channel" : "facebook",
  	"data" : {
      "$og_title": "deep linking",
          }
  })
}).done(function(data){
    console.log(data);

})

//
// \"$og_description\": \" description for social media\",
// \"$og_image_url\": \"https://amazingslider.com/wp-content/uploads/2012/12/dandelion.jpg \",
// \"$desktop_url\": \"http://blog.rewardle.com/\"
