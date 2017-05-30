console.log('branch');

$.ajax({
  type: "POST",
  url: "https://api.branch.io/v1/url",
  contentType: "application/json",
  processData: false,
  data:JSON.stringify({
  	"branch_key": b_key,
  	"campaign": "Rewardle | ajax: test0501",
  	"channel" : "facebook",
  	"data" : "{ \"$og_title\": \"deep linking\" }"
  })
}).done(function(data){
    console.log(data);

})
