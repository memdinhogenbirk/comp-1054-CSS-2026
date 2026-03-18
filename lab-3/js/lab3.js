const panels = document.querySelectorAll('[role="tabpanel"]');
const tabs = document.querySelectorAll('[role="tab"]');

tabs.forEach((tab) =>{
    tab.addEventListener('click', ()=>{
        tabs.forEach((t) =>{t.classList.remove('visible')});
        panels.forEach((p) =>{p.classList.remove('visible')});
        tab.classList.add('visible');
    })
})



const tab1 = document.querySelector('[href="#tabpanel1"]');
const tab2 = document.querySelector('[href="#tabpanel2"]');
const tab3 = document.querySelector('[href="#tabpanel3"]');

const panel1 = document.getElementById('tabpanel1');
const panel2 = document.getElementById('tabpanel2');
const panel3 = document.getElementById('tabpanel3');


tab1.addEventListener("click", () =>{
    panel1.classList.add('visible');
    tab1.classList.add('visible');
    panel2.classList.remove('visible');
    tab2.classList.remove('visible');
    panel3.classList.remove('visible');
    tab3.classList.remove('visible');
});
tab2.addEventListener("click", () =>{
    panel2.classList.add('visible');
    tab2.classList.add('visible');
    panel1.classList.remove('visible');
    tab1.classList.remove('visible');
    panel3.classList.remove('visible');
    tab3.classList.remove('visible');
});
tab3.addEventListener("click", () =>{
    panel3.classList.add('visible');
    tab3.classList.add('visible');
    panel1.classList.remove('visible');
    tab1.classList.remove('visible');
    panel2.classList.remove('visible');
    tab2.classList.remove('visible');
});

//203625