function loadLogin(){
    let str = `<div class="container">
    <div class="nav">
            <div class="nav-left">Logo</div>
            <div class="nav-right"></div>
    </div>
    <div class="body">
        <div class="mid">
            <div class="name"><h1>Dang nhap vao Spotify</h1></div>
            <div class="login-item">
            <ul class="option-login">
                <li class="item">
                    <button data-testid="google-login" class="Button-sc-y0gtbx-0 jJyUnh sc-jIRcFI kytqHe" data-encore-id="buttonSecondary">
                        <i class="bi bi-google"></i>
                        <span class="Type__TypeElement-sc-goli3j-0 kwLSIj sc-eDvSVe sc-hBxehG sc-fEXmlR itlAHd gjBoil kRrvbG" data-encore-id="type">Tiếp tục bằng Google</span></button>
                </li>
            </ul>
            </div>
            <div class="login-item">
                <ul class="option-login">
                    <li class="item">
                        <button data-testid="google-login" class="Button-sc-y0gtbx-0 jJyUnh sc-jIRcFI kytqHe" data-encore-id="buttonSecondary">
<!--                            <ion-icon name="logo-google"></ion-icon>-->
                            <span class="Type__TypeElement-sc-goli3j-0 kwLSIj sc-eDvSVe sc-hBxehG sc-fEXmlR itlAHd gjBoil kRrvbG" data-encore-id="type">Tiếp tục bằng Apple</span></button>
                    </li>
                </ul>
            </div>
            <div class="login-item">
                <ul class="option-login">
                    <li class="item">
                        <button data-testid="google-login" class="Button-sc-y0gtbx-0 jJyUnh sc-jIRcFI kytqHe" data-encore-id="buttonSecondary">
                            <ion-icon name="logo-google"></ion-icon>
                            <span class="Type__TypeElement-sc-goli3j-0 kwLSIj sc-eDvSVe sc-hBxehG sc-fEXmlR itlAHd gjBoil kRrvbG" data-encore-id="type">Tiếp tục bằng số điện thoại</span></button>
                    </li>
                </ul>
            </div>
            <hr class="hr">


            <div class="login-form">
                <div class="input">
              
                    <div class="name-input">
                    <label for="email">Email hoặc tên người dùng</label>
                    </div>
                    <input  class="input-item" type="text" id="email" placeholder="Email hoặc tên người dùng" style="color: white;          /* Thiết lập màu chữ là trắng */background-color: black;">

                </div>
                <div class="input">
                    <div class="name-input">
                    <label for="password">Password</label>
                    </div>
                <input class="input-item" type="password" id="password" placeholder="Mat khau" style="color: white;          /* Thiết lập màu chữ là trắng */background-color: black;">
                </div>

                <div class="submit-login">
                    <button class="button-login" type="submit" onclick="login()"><span>Dang nhap</span></button>
                </div>
                
                <div class="login">
                    <h3>Ban chua co tai khoan? <a  class="link"  onclick="loadRegister()">Dang ky</a></h3>
                </div>
            </div>
        </div>

    </div>
</div>`
    document.getElementById("display").innerHTML = str
}



function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    LoginCheck(email, password)
        .then((token) => {
            if(token === "User is not exist" || token === "Password is wrong") {
                alert('Đăng nhập không thành công');
            }else {
                // Lưu trữ token vào localStorage hoặc sessionStorage
                localStorage.setItem('token', token);
                // Hoặc sessionStorage.setItem('token', token);
                loadHome();
            }
        })
    // .catch((error) => {
    //     console.error(error);
    //     alert('Đăng nhập thất bại');
    // });

}
async function LoginCheck(username, password) {
    // console.log(username,password)
    try {

        const response = await axios.post('http://localhost:3000/login', {
            username : username,
            password : password });




        const token = response.data;
        let a = {username,password}


        if( a === "User is not exist" || a === "Password is wrong") {
            return alert("dang nhap ko thanh cong")

        }else {
            return token;
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error logging in');
    }
}