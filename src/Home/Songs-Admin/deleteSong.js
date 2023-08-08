
function deleteSong(id) {

        let text = "Bạn có chắc muốn xóa bài hát  ?."
        if (confirm(text) == true){
            axios.delete(`${apiUrl}/${id}`).then(res => {
                axios.get(apiUrl).then((res) => {
                    loadHome()
                })
            })
        }else {
            console.log("ko thanh cong")
        }


}