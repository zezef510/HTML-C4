function loadHome() {
    // const token = localStorage.getItem('token')
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axios.get("http://localhost:3000/songs").then((res) => {
        let data = res.data
       let str = `  <thead>
   <tbody ><tr>
     

   
        <th> Id <span class="icon-arrow">&UpArrow;</span></th>
        <th> Name Music <span class="icon-arrow">&UpArrow;</span></th>
        <th> Singer <span class="icon-arrow">&UpArrow;</span></th>
        <th> Musical<span class="icon-arrow">&UpArrow;</span></th>
        <th> Album<span class="icon-arrow">&UpArrow;</span></th>
        <th> Play <span class="icon-arrow">&UpArrow;</span></th>
        <th> Edit <span class="icon-arrow">&UpArrow;</span></th>
        <th> Delete <span class="icon-arrow">&UpArrow;</span></th>
      </tr>
         </tbody>
      </thead>`
        data.map(item=>{
        str += `  <tr id="songs">
        <td> ${item.id} </td>
        <td> <img src="https://www.oca.edu.vn/uploads/images/info/am-nhac-trong-tieng-trung-la-gi.png" alt="">${item.name}</td>
        <td>${item.singer} </td>
        <td> ${item.musician}</td>
        <td>
          
        </td>
        <td> <strong> $128.90 </strong></td>
        <td> <strong><button onclick="editButtonSong(${item.id})"  class="custom-btn btn-12"><span>Click!</span><span>Edit</span></button></strong></td>
        <td> <strong> <button onclick="delete()" class="custom-btn btn-12"><span>Click!</span><span>Delete</span></button></strong></td>
      </tr>`
        })


        document.getElementById("display").innerHTML = str
    })
}