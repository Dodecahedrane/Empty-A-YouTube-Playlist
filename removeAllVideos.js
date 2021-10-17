setInterval(function () {
  deleted++;
  document.querySelector('#primary button[aria-label="Action menu"]').click();
  var rmv = document.evaluate(
    '//span[contains(text(),"Remove from")]',
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );
  rmv.snapshotItem(0).click(); 
}, 350);
