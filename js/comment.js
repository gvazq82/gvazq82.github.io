(function() {
  var newForm = document.getElementsByName('newCommentForm')[0];
  if (newForm) {
    newForm.onsubmit = function submitComment() {
      var xReq = new XMLHttpRequest();
      xReq.open("POST", "https://api.staticman.net/v2/entry/gvazq82/gvazquez82.github.io/gh-pages/data/", true);
      xReq.onreadystatechange = function () {
        if (xReq.readyState != 4 || xReq.status != 200) return;
        alert("Success: " + xReq.responseText);
      };
      xReq.send({
        'fields': []
      });
      return false;
    };
  }
})();