window.addEventListener('load', loadHandler)


function loadHandler(){
    const buttonsDelete = document.querySelectorAll('button')
    buttonsDelete.forEach(b => b.addEventListener('click', deleteTaskHandler))
}

function deleteTaskHandler(){
    const id = this.id.split('_')[1]
    const row = document.getElementById("taskrow_" + id)
    console.log("vendo row ")
    console.log(row)
    const options = {
        method : "DELETE",
        headers : {"Accept" : "application/json"}
    }
    //row.remove()
    fetch(`/groupDelete/${id}`, options)
    .then(res =>{
        console.log(res.status)
        return res.json()
    } )
    .then(body => {
        console.log(body)
        row.remove()
    })
    .catch(error => console.log(error))
    
}
