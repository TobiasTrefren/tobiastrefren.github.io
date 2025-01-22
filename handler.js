const school = document.getElementById('school')

school.addEventListener('mouseover', () =>{
    school.innerHTML = "Western Governors University";
});

school.addEventListener('mouseout', () =>{
    school.innerHTML = "School: WGU";
});