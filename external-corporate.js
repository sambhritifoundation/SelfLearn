/* Shortcut from the free company course feature to the matching directory filter. */
document.getElementById('browse-corporate').addEventListener('click',()=>{
 document.querySelector('[data-category="skills"]').click();
 document.getElementById('provider-type').value='corporate';
 document.getElementById('fee').value='free';
 document.getElementById('provider-type').dispatchEvent(new Event('change',{bubbles:true}));
});
