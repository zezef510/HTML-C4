function save(){
    let data = {
        id  : document.getElementById("id").value,
        name : document.getElementById("name").value,
        singer : document.getElementById('singer').value,
        musician : document.getElementById('musician').value,
        songUrl : document.getElementById('songUrl').value,
        imageUrl : document.getElementById('imageUrl').value,

        album : {
            id : document.getElementById('albumId').value},
        // userId : document.getElementById('userId').value,


    }
    console.log(data)


    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    axios.post(apiUrl,data).then(res => {
        axios.get(apiUrl).then((res)=>{
            getAll()
        })
    })
}
async function showFromSave(){

    const resSong = await axios.get('http://localhost:3000/songs');
    let data = resSong.data;
    let lastId = data[data.length - 1].id;
    console.log(lastId)
    let str = `
           <label for="id"></label>
           <input type="hidden" id="id" value="${lastId + 1}">
        <label for="name">Ten bai hat</label>
        <input type="text" id="name">
        <label for="singer">Singer</label>
        <input type="text" id="singer">
        <label for="musician">Nhac si</label>
        <input type="text" id="musician">
        <label for="songUrl"> Bai hat</label>
        <input type="text" id="songUrl">
        <label for="imageUrl">Anh bai hat</label>
        <input type="text" id="imageUrl">
        
        <select id="albumId"></select>
        
        

    
        <button onclick="save()">Save</button>`

    const album = await axios.get('http://localhost:3000/album');
    let albumData = album.data;

    let optionAlbum = `<option value="">Select Album</option>`
    for (const item of albumData) {
        optionAlbum += `    
                    <option value="${item.id}">${item.name}</option>
                     `
    }

    document.getElementById('display').innerHTML = str
    // document.getElementById(`playlistId`).innerHTML = optionClass;
    document.getElementById(`albumId`).innerHTML = optionAlbum;


}