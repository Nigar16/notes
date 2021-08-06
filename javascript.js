let neww;
let current;
let arr;

window.addEventListener('DOMContentLoaded',function(e){
    current=JSON.parse(localStorage.getItem("notes"));

    if(current!=null){
        for (let i=0;i<current.length;i++){
            addNote(i,current[i]);
        }
    }
});

document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault();
    let take=document.querySelector("#note").value;
   
    if(localStorage.getItem("notes")===null){
        neww=[];
    }else{
        neww=JSON.parse(localStorage.getItem("notes"));
    };

    neww.push(take);
    localStorage.setItem("notes",JSON.stringify(neww));

    addNote(neww.length-1,neww[neww.length-1]);
    

});



function addNote(k,i){
    let div=document.createElement("div");
    div.className="note";
    let btn=document.createElement("button");
    btn.className="btn btn-danger";
    btn.addEventListener("click",function(e){
        arr=JSON.parse(localStorage.getItem("notes"));
        arr.splice(k,1);
        localStorage.setItem('notes', JSON.stringify(arr));
    });
    btn.innerHTML=`<i class="fas fa-trash"></i>`;
    div.innerHTML=`<span>${i}</span>`;
    div.appendChild(btn);   
    document.body.appendChild(div);
}
