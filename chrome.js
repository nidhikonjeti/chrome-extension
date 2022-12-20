let myLead=[]
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
let inputBtn=document.getElementById("input-btn")
const leadlocalStorage=JSON.parse(localStorage.getItem("myLead"))
const deleteEl=document.getElementById("del-btn")
let tab=document.getElementById("save-tab")
if(leadlocalStorage){
    myLead=leadlocalStorage
renderLeads(myLead)
}


tab.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        
    
    myLead.push(tabs[0].url)
    localStorage.setItem("myLead",JSON.stringify(myLead))
    renderLeads(myLead)
})
})
function renderLeads(leads){
    let lisItem=""
    for(let i=0;i<leads.length;i++){
        lisItem+=   `
        <li>
        <a target='_blank' href='${leads[i]}'>
            ${leads[i]}</a>
    </li>
            `
            
    }
    ulEl.innerHTML=lisItem
    }
deleteEl.addEventListener("click",function(){
    localStorage.clear()
    myLead=[]
    renderLeads(myLead)
})
inputBtn.addEventListener("click",function(){
   
    myLead.push(inputEl.value)

    inputEl.value=""
    localStorage.setItem("myLead",JSON.stringify(myLead))
        
    })
    renderLeads(myLead)
    

