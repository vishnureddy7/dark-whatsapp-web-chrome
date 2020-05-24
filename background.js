chrome.browserAction.onClicked.addListener(function(tab) {
  if(tab.url.startsWith("https://web.whatsapp.com")){
    chrome.tabs.executeScript({
      code: `
if(document.body.classList.contains("dark")){
  document.body.classList.remove("dark");
}
else{
  document.body.classList.add("dark");
}
`
    });
  }
});