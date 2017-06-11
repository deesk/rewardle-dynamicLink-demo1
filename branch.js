console.log('branch');

$(".btn-brw").click(function () {
  console.log("branch app name: rewdaleDemo");

  var alias = $('.alias').val();
  var camp = $('.camp').val();
  var chan = $('.chan').val();
  var ogTitle = $('.og-t').val();
  var ogDesc = $('.og-d').val();
  var ogIU = $('.og-iu').val();
  // var ogDU = $('.og-du').val();

  $.ajax({
    type: "POST",
    url: "https://api.branch.io/v1/url",
    contentType: "application/json",
    processData: false,
    data:JSON.stringify({
    	branch_key: rDBranchKey,
      alias : alias,
      type: 2, //show up under quick link
    	campaign: camp,
    	channel : "Facebook",
      feature: "api",
      tags: [alias],
    	"data" : {
        "name": alias,// appears in android hello_world app
        "address": ogIU,// appears in hello_world android app
        "$marketing_title": "apitest02", // title appears in quick view
        // social media
        "$og_title": ogTitle,
        "$og_description": ogDesc,
        "$og_image_url": ogIU,

        "$one_time_use": "false",
        "$android_deepview": "default_template",
        "$ios_url": "http://www.rewardle.com/"

      }
    })
  }).done(function(data){
      console.log(data);
  })
})

//
// \"$og_description\": \" description for social media\",
// \"$og_image_url\": \"https://amazingslider.com/wp-content/uploads/2012/12/dandelion.jpg \",
// \"$desktop_url\": \"http://blog.rewardle.com/\"
