var contextMenus = {};

contextMenus.createCounterString = 
    chrome.contextMenus.create(
        {"title": "Contador de caracteres", 
        "contexts": ["editable"]
    },
        function(){
            if(chrome.runtime.lastError){
                console.error(chrome.runtime.lastError.message);
            }
        }
    );

chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info, tab){
    
    if(info.menuItemId===contextMenus.createCounterString){
        chrome.tabs.executeScript({
            file: 'js/1asir.js'
        });
    }
}
