
function deleteAlbum(id) {
    axios.delete(`${apiUrlAlbums}/${id}`).then(res =>{
        axios.get(apiUrlAlbums).then((res)=>{
            loadHome()
        })
    })
}