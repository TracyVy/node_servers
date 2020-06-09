$(document).ready(function () {
  $("#btnSubmit").on("click", () => {
    $.ajax({
      type: "GET",
      url: "/api/test",
    }).then((res) => {
      console.log(res);
    });
  });
});
