const panels = document.querySelectorAll('[role="tabpanel"]');
const tabs = document.querySelectorAll('li a');

tabs.forEach((tab) =>{
    //check for click event on each tab
    tab.addEventListener('click', ()=>{
        //when any tab is clicked
        //begin by removing class visbile from all elements
        tabs.forEach((t) =>{t.classList.remove('active')});
        panels.forEach((p) =>{p.classList.remove('active')});
        //add active to tab that has been clicked
        tab.classList.add('active');
        //get the text written in clicked tabs href attribute
        currentTab = tab.getAttribute('href');
        //go through all panels
        panels.forEach((panel) =>{
            /*if the resulting string from concatonating # and the panel id is
            equal to href text, add class active*/
            if(currentTab === '#' + panel.id){
                //add class active to it
                panel.classList.add('active');
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