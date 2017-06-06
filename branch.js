console.log('branch');

$(".btn-brw").click(function () {

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
    	branch_key: bDKey,
      alias : alias,
    	campaign: camp,
    	channel : "Facebook",
      test: "deesk/Success",
      feature: "dashboard",
    	"data" : {
        "$og_title": ogTitle,
        "$og_description": ogDesc,
        "$og_image_url": ogIU,
        "$one_time_use": "false",
        "$android_deepview": "branch_default",
        "$ios_url": "http://www.rewardle.com/"
        // "$android_url": "rewardle://07A200212032AINYY",
        // "$custom_sms_text" : "test test {{link}}"
        // "$desktop_url":ogDU,
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
