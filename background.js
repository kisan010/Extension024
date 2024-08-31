console.log("from backgroundscript");



// Listen for changes in DNR rules
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
  console.log("DNR rule matched:", info);
});



