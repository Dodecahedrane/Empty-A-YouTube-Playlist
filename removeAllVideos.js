var deleted = 0;
setInterval(function () {
  deleted++;
  if(deleted%64 === 0){
    document.getElementById("spinner").scrollIntoView();
  }
  document.querySelector('#primary button[aria-label="Action menu"]').click();
  var rmv = document.evaluate(
    '//span[contains(text(),"Remove from")]',
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );
  rmv.snapshotItem(0).click();
  
}, 100);
