const courses=[
    {
        name:"Harshaj Singh Parihar",
        price:"9.75"
    },
    {
        name:"Harshit Nigdikar",
        price:"9.80"
    },
    {
        name:"Mihir Pesswani",
        price:"9.85"
    },
    {
        name:"Cabin John",
        price:"8.75"
    }
];

function generateLIST(){
    const ul=document.querySelector(".list-group");
    // courses.push({name:"Complete JS Course",price:"2.0"});
    ul.innerHTML="";
    courses.forEach(course=>{
        const li=document.createElement("li");
        li.classList.add("list-group-item");

        const name=document.createTextNode(course.name);
        li.appendChild(name);

        const span=document.createElement("span");
        span.classList.add("float-right");
        const price=document.createTextNode(course.price+" SGPA");
        
        span.appendChild(price);
        li.appendChild(span);
        ul.appendChild(li);
    })
}
// generateLIST();
window.addEventListener("load",generateLIST);

const button=document.querySelector(".sort-btn");
button.addEventListener("click",()=>{
    courses.sort((a,b) => a.price-b.price);
    generateLIST();
})

const button2=document.querySelector(".btn-primary");
button2.addEventListener("click",()=>{
    courses.sort((a,b)=>b.price-a.price);
    generateLIST();
})
