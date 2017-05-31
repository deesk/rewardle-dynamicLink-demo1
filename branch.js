console.log('branch');

$(".btn-brw").click(function () {

  var alias = $('.alias').val();
  var camp = $('.camp').val();
  var chan = $('.channel').val();
  var ogTitle = $('.og-t').val();
  var ogDesc = $('.og-d').val();
  var ogIU = $('.og-iu').val();
  var ogDU = $('.og-du').val();

  $.ajax({
    type: "POST",
    url: "https://api.branch.io/v1/url",
    contentType: "application/json",
    processData: false,
    data:JSON.stringify({
    	"branch_key": b_key,
      "alias" : alias,
    	"campaign": camp,
    	"channel" : chan,
    	"data" : {
        "$og_title": ogTitle,
        "$og_description": ogDesc,
        "$og_image_url": ogIU,
        "$android_deeplink_path": "rewardle://07A200212032AINYY",
        "$ios_deeplink_path": "rewardle://07A200212032AINYY"
        

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
