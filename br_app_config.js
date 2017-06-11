//Getting Current Branch App Config
// https://github.com/BranchMetrics/branch-deep-linking-public-api
var info;
$.ajax ({
  url: "https://api.branch.io/v1/app/" + bDKey,

  data: {
    branch_secret : bDSecret
  }
}).done(function (data){
  info = data;
  console.log("Current Branch App Config \n");
  console.log(info);
})
