

async function editButtonSong(id) {

    try {
        const token = localStorage.getItem('token')
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        const res = await axios.get(`http://localhost:3000/songs/?id=${id}`);
        let data = res.data[0];
        console.log(data)

        let main = `
           <form>
    <input type="text" id="id" value="${data.id}" hidden>
    <label for="name">Tên bài hát:</label>
    <input type="text" id="name" value="${data.name}">
    <label for="singer">Ca sĩ:</label>
    <input type="text" id="singer" value="${data.singer}">
    <label for="musician">Nhạc sĩ:</label>
    <input type="text" id="musician" value="${data.musician}">
    <label for="songUrl">Link bài hát:</label>
    <input type="text" id="songUrl" value="${data.songUrl}">
    <label for="imageUrl">Link ảnh:</label>
    <input type="text" id="imageUrl" value="${data.imageUrl}">
    <label for="albumId">Album:</label>
    <select id="albumId"></select>
    <button onclick="editStudent()">Lưu</button>
</form>
        `
        const album = await axios.get('http://localhost:3000/album');
        let albumData = album.data;

        let optionAlbum = ``
        for (const item of albumData) {
            optionAlbum += `    
                    <option value="${item.id}">${item.name}</option>
                     `
        }
        document.getElementById(`display`).innerHTML = main;
        document.getElementById(`albumId`).innerHTML = optionAlbum;

    }
    catch (error) {
        console.error(error);
    }
}

async function editStudent() {
    let id = document.getElementById('id').value;
    console.log(id)
    let data = {
        name: document.getElementById('name').value,
        singer: document.getElementById('singer').value,
        musician: document.getElementById('musician').value,
        songUrl: document.getElementById('songUrl').value,
        imageUrl: document.getElementById('imageUrl').value,
        album: {
            id: document.getElementById('albumId').value,
        }
    };

    try {
        const token = localStorage.getItem('token')
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        const res = await axios.put(`http://localhost:3000/songs/${id}`, data);
        console.log(res);
        loadHome();
    } catch (error) {
        console.error(error);
    }
}
