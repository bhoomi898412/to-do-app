let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let dltbtn = document.querySelector(".delete")

btn.addEventListener("click" , function(){
    let item = document.createElement("li");
    let dlbt = document.createElement("button");

    item.innerText = inp.value;
    console.log(`${inp.value} is added`);

    ul.appendChild(item);
    dlbt.innerText = "delete";
    dlbt.classList.add("delete");
    item.appendChild(dlbt);
    
    inp.value = "";
});

ul.addEventListener("click" , function(event){
    if(event.terget.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted");
    }
});

// let dltbtns = document.querySelectorAll(".delete");
// for(dlt of dltbtns){
//     dlt.addEventListener("click" , function(){
//         let par = this.parentElement;
//         par.remove();
//         console.log("element deleted");
//     });
// }