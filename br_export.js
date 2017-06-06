console.log("br export");

var eDate = "2017-05-30";

$.ajax ({
  url: "https://api.branch.io/v2/export/" + b_key,

  data: {
    branch_secret : b_secret,
    export_date : eDate
  }
}).done(function (data){
  console.log(data)
})
