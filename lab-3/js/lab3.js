const panels = document.querySelectorAll('[role="tabpanel"]');
const tabs = document.querySelectorAll('li a');

tabs.forEach((tab) =>{
    //check for click event on each tab
    tab.addEventListener('click', ()=>{
        //when any tab is clicked
        //begin by removing class visbile from all elements
        tabs.forEach((t) =>{t.classList.remove('visible')});
        panels.forEach((p) =>{p.classList.remove('visible')});
        //add visible to tab that has been clicked
        tab.classList.add('visible');
        //get the text written in clicked tabs href attribute
        currentTab = tab.getAttribute('href');
        //go through all panels
        panels.forEach((panel) =>{
            /*if the resulting string from concatonating # and the panel id is
            equal to href text, add class visible*/
            if(currentTab === '#' + panel.id){
                //add class visible to it
                panel.classList.add('visible');
            };
            /*
            Alternatively, whilst trying to figure out how to do this within the 
            scope of the course I learned I can also use the built in methods 
            .includes, or .endsWith
            example:
                currentTab.includes(panel.id)
                currentTab.endsWith(panel.id)
            Ultimately the same results are achieved in this case
            */
        });
    });
});


//203625