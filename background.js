chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        name: "Antara"
    })
}); //runs only once per install
//saves on local hardrive 

chrome.storage.local.get('name', data => {

});

//could have an array of strings if there is more than
//one property ex: 
// ['name', 'age'], data=>