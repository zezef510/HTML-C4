function loadRegister() {
 let str = `
 <div class="container-register">
    <div class="top-register"></div>
    <div class="mid-register">
        <div class="nav-register">
            <div class="logo-register">
                <i class="bi bi-vinyl-fill"></i>
                Mu xịc
            </div>
            <div style="text-align: center ; margin-top: 20px">
            <h2>Dang ky de bat dau nghe</h2>
            </div>
            <hr class="hr-register">
            <div class="input-register">
                <div class="item-register">
                <label for="username" >Nhap vao UserName cua ban</label>
                <input type="text" id="username" class="input-item-register" placeholder="Nhap vao email cua ban">
                </div>

                <div class="item-register">
                    <label for="password">Tao mat khau</label>

                <input type="password" id="password"  class="input-item-register" placeholder="Nhap vao mat khau">
                </div>
            </div>
            <div class="checkbox-register">
                <input type="checkbox" id="checkbox">
                <label for="checkbox"><span>Tôi không muốn nhận tin nhắn tiếp thị từ C03</span></label>
            </div>
            <div class="checkbox-register">
                <input type="checkbox" id="checkMail">
                <label for="checkMail">
                    <span>Chia sẻ dữ liệu đăng ký của tôi với các nhà cung cấp nội dung của C03 cho mục đích tiếp thị.</span></label>
            </div>
            <div class="text-register">
                <p><span>Bằng việc nhấp vào nút Đăng ký, bạn đồng ý với Điều khoản và điều kiện sử dụng của chúng tôi</span> </p>
                <p><span>Để tìm hiểu thêm về cách thức Spotify thu thập, sử dụng, chia sẻ và bảo vệ dữ liệu cá nhân của bạn, vui lòng xem
                    Chính sách quyền riêng tư của cc</span></p>
            </div>
            <div class="submit-register">
                <button class="button-register" onclick="Register()">Đăng ký</button>
                <div class="login-item-register">
                    <h3>Ban da co tai khoan? <a  class="link-register" onclick="loadLogin()">Đăng nhập</a></h3>
                </div>
            </div>
        </div>
    </div>
    <div class="bot"></div>
</div>`

    document.getElementById("display").innerHTML = str
}
function Register(){
    let data = {
        username : document.getElementById("username").value,
        password : document.getElementById('password').value,

    }
    axios.post('http://localhost:3000/register', data)
        .then(function (response) {
            const confirmed =  window.confirm("Registration successful! Do you want to proceed to the login page?");
            // Registration successful, redirect to login page
            if (confirmed){
            loadLogin();
                }
        })
        .catch(function (error) {
            // Registration failed, display an error message
            console.error("Registration failed. Error: " + error.response.data);
            // You can display an error message on the page or handle it in any other way
        });

}