const school = document.getElementById('school')
const degree = document.getElementById('degree')

school.addEventListener('mouseover', () =>{
    school.innerHTML = "Western Governors University";
    school.style.fontSize = "18px";
});

school.addEventListener('mouseout', () =>{
    school.innerHTML = "School: WGU";
    school.style.fontSize = "24px";
});

degree.addEventListener('mouseover', () =>{
    degree.innerHTML = "Bachelors in Computer Science";
    degree.style.fontSize = "18px";
});

degree.addEventListener('mouseout', () =>{
    degree.innerHTML = "Degree: BSCS";
    degree.style.fontSize = "24px";
});