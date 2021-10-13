const contextMenuItem = {
    id: "spendMoney",
    title: "spendMney",
    contexts: ["selection"]
}

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((clickeddata) => {
    if(clickeddata.menuItemId == "spendMoney" && clickeddata.selectionText)
    {
        let localTotal = parseInt(JSON.parse(localStorage.getItem("expense")));
         let localLimit = parseInt(JSON.parse(localStorage.getItem("limit")));

        let newTotal = 0;

        if(localTotal)
        {
            newTotal = localTotal;
        }

        newTotal += parseInt(clickeddata.selectionText);
        localStorage.setItem("expense" , newTotal);
    }
})
