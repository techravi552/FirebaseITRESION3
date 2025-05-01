
    table = document.getElementById("table")
    fetch('https://userdata-179e0-default-rtdb.asia-southeast1.firebasedatabase.app/users.json')



.then(response => response.json())
.then((data) => {
    const usersp = Object.entries(data)


    let fusers = usersp.map(([id , user])=>({id ,...user}))
    // console.log(fusers)

    fusers.map((e)=>{
        let tr=document.createElement("tr")
        tr.innerHTML=`<td>${e.name}</td>
            <td>${e.email}</td>
            <td><button onclick="Edit('${e.id}')">Edit</button></td>`
            console.log(e.id , "rrrrrrrr")
            table.append(tr)
        console.log(e.name)
    })
})
function Edit(id){
     

    
    localStorage.setItem("userid", id);
    window.location.href = "edit.html";
    
}



