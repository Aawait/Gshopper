// 1.登录页面切换邮箱和手机号
class Tab {
    constructor() {
        this.email = document.getElementsByName('email')[0];
        this.phone = document.getElementsByName('phone')[0];
        this.phoneBox = document.querySelector('.el-phone');
        this.emailBox = document.querySelector('.el-email');
        this.init(this.email, this.phone, this.phoneBox, this.emailBox);
    }
    init(email, phone, phoneBox, emailBox) {
        email.onclick = () => {
            phone.classList.remove('active');
            email.classList.add('active');
            phoneBox.style.display = "none";
            emailBox.style.display = "block";
        }

        phone.onclick = () => {
            email.classList.remove('active');
            phone.classList.add('active');
            phoneBox.style.display = "block";
            emailBox.style.display = "none";
        }
    }
}
new Tab();

// 2.输入框获取焦点/失去焦点事件
class Focus {
    constructor() {
        // 获取输入框
        this.ele = document.querySelectorAll('.el-input-inner');
        // 获取占位符
        this.place = document.querySelectorAll('.el-input-place');
        this.init(this.ele, this.place);
    }
    init(ele, change) {
        this.index = 0;
        for (let item of ele) {
            this.index++;
            item.index = this.index;
            let changePlace = item.parentNode.nextElementSibling;
            item.onfocus = () => {
                item.style.borderColor = "#ff5224";
                changePlace.style.top = '6px';
                changePlace.style.fontSize = '12px';
            }
            item.onblur = () => {
                item.style.borderColor = "#dcdfe6";
                if (item.value) {
                    changePlace.style.top = '6px';
                    changePlace.style.fontSize = '12px';
                } else {
                    changePlace.style.top = '20px';
                    changePlace.style.fontSize = '14px';
                }

                // 失去焦点判断内容是否符合规范
                let error = changePlace.nextElementSibling;
                let emailReg = /^\w{1,16}@(126|163|qq)\.(com|cn)$/i;
                let phoneReg = /^1[3-9]\d{9}$/;
                let passWordReg = /^\S{6,14}$/;

                // 封装一个正则成功与失败的执行的事件
                function regRex(reg) {

                    if (reg.test(item.value)) {
                        error.style.display = 'none';
                        item.style.borderColor = "#dcdfe6";
                    } else {
                        error.style.display = 'block';
                        item.style.borderColor = "#ff5224";
                    }
                }

                // error.style.display = emailReg.test(item.value)?"none":"block";
                if (item.classList.contains('inp-email')) regRex(emailReg);

                if (item.classList.contains('phone-num-inp')) regRex(phoneReg);

                if (item.classList.contains('inp-password')) regRex(passWordReg);

            }
        }

    }
}

new Focus();

// 3.密码框密码加密点击可视
class SeePassword {
    constructor() {
        this.ele = document.querySelectorAll('.see-password');
        this.change = document.querySelectorAll('.inp-password');
        this.init(this.ele, this.change);
    }
    init(ele, change) {
        this.index = 0;
        ele.forEach(ele => {
            ele.index = this.index;
            this.index++;
            ele.onclick = () => {
                if (ele.classList.contains('glyphicon-eye-close')) {
                    ele.classList.remove('glyphicon-eye-close');
                    ele.classList.add('glyphicon-eye-open');
                    change[ele.index].type = 'text';
                } else {
                    ele.classList.remove('glyphicon-eye-open');
                    ele.classList.add('glyphicon-eye-close');
                    change[ele.index].type = 'password';
                }

            }
        })
    }
}
new SeePassword();

// 4.单选框勾选功能
class Checkbox {
    constructor() {
        this.ele = document.querySelectorAll('.van-checkbox p');
        this.init(this.ele);
    }

    init(eles) {

        for (let ele of eles) {
            ele.onclick = () => {
                ele.classList.toggle('glyphicon-ok');
                if (ele.classList.contains('glyphicon-ok')) {
                    ele.style.backgroundColor = "#ff5224";
                    ele.style.color = "#fff";
                } else {
                    ele.style.backgroundColor = "transparent";

                }
            }
        }

    }
}
new Checkbox();

// 5.注册邮箱/手机号Tab切换功能
class RegistTab {
    constructor() {
        this.box = document.querySelector('.regist-content');
        this.place = this.box.querySelectorAll('.el-input-error');
        this.input = this.box.querySelectorAll('.el-input-inner');
        this.checkbox = this.box.querySelector('.email-checkbox');

        this.email = this.box.querySelector('.regist-email-tab');
        this.phone = this.box.querySelector('.regist-phone-tab');

        // 获取几个input
        this.registPhone = this.box.querySelector('.regist-phone');
        this.registTesting = this.box.querySelector('.regist-testing');
        this.registSend = this.box.querySelector('.regist-send');
        this.registEmail = this.box.querySelector('.regist-email');

        this.init({
            email: this.email,
            phone: this.phone,
            rp: this.registPhone,
            rt: this.registTesting,
            rs: this.registSend,
            re: this.registEmail,
            place: this.place,
            input: this.input,
            check: this.checkbox
        });
    }

    init(obj) {

        obj.email.onclick = () => {
            obj.email.classList.add('active');
            obj.phone.classList.remove('active');
            obj.rp.style.display = "none";
            obj.rt.style.display = "none";
            obj.rs.style.display = "none";
            obj.re.style.display = "block";
            obj.check.style.display = "block";

            for (let errors of obj.place) {
                errors.style.display = "none";
            }

            for (let inputs of obj.input) {
                inputs.style.borderColor = "#dcdfe6";
            }
        }
        obj.phone.onclick = () => {
            obj.phone.classList.add('active');
            obj.email.classList.remove('active');
            obj.rp.style.display = "block";
            obj.rt.style.display = "block";
            obj.rs.style.display = "block";
            obj.re.style.display = "none";
            obj.check.style.display = "none";

            for (let errors of obj.place) {
                errors.style.display = "none";
            }

            for (let inputs of obj.input) {
                inputs.style.borderColor = "#dcdfe6";
            }
        }

    }
}
new RegistTab();

// 6.注册点击验证码区域刷新验证码

class Testing {
    constructor() {
        this.ele = document.querySelector('.testing');
        this.imgSrc = this.ele.querySelector('img');
        this.start = 0;
        this.init(this.ele, this.imgSrc);
    }
    init(ele, imgSrc) {
        ele.onclick = () => {
            sendAJAX({
                    url: "../api/test-img.php",
                    type: "GET",
                    data: {
                        start: this.start,
                        length: 1
                    }
                })
                .then(value => {
                    value = JSON.parse(value);
                    imgSrc.src = value.img;
                });

            this.start++;
            if (this.start >= 20) this.start = 0;
        }

    }
}

new Testing();

// 7.点击注册按钮弹出隐藏的注册页面

class Regist {
    constructor() {
        this.btn = document.querySelector('.regist-btn');
        this.box = document.querySelector('.regist-content');
        this.init(this.btn, this.box);
    }
    init(btn, box) {
        btn.onclick = function () {
            box.style.display = "block";
            document.body.style.backgroundColor = "#ccc";
        }
    }
}

new Regist();


// 8.点击注册页面关闭按钮，关闭注册框

class RegistClose {
    constructor() {
        this.btn = document.querySelector('.regist-close');
        this.box = document.querySelector('.regist-content');
        this.place = this.box.querySelectorAll('.el-input-error');
        this.input = this.box.querySelectorAll('.el-input-inner');

        this.init(this.btn, this.box, this.place, this.input);
    }
    init(btn, box, place, input) {
        btn.onclick = function () {
            box.style.display = "none";
            document.body.style.backgroundColor = "#fff";

            for (let errors of place) {
                errors.style.display = "none";
            }

            for (let inputs of input) {
                inputs.style.borderColor = "#dcdfe6";
            }

        }

    }
}

new RegistClose();


// 8.点击注册按钮，把数据提交到数据库保存
class Submit {
    constructor(form) {
        this.btn = form.querySelector('.login-btn');
        this.user = form.querySelector('.inp-email');
        this.pass = form.querySelector('.inp-password');
        this.init(this.btn);
    }
    init(btn) {
        btn.onclick = () => {
            if(!(this.user.value || this.pass.value)){
                alert("用户名和密码不能为空！！");
                return;
            }
            sendAJAX({
                url: "../api/regist.php",
                type: "GET",
                data: {
                    username: this.user.value,
                    password: this.pass.value
                }
            }).then(value => {
                alert(value);
                location = "../views/login.html";
               
            })

        }
    }
}

const registForm = document.querySelector('.regist-content');
new Submit(registForm);

// 9.点击登录按钮，发送请求登录数据到数据库，判断数据库是否有该用户

class Login {
    constructor(form){
       this.btn = form.querySelector('.login-btn');
       this.user = form.querySelector('.inp-email');
       this.pass = form.querySelector('.inp-password');
       this.init(this.btn);
    }
    init(btn){
       btn.onclick = () =>{
           if(!(this.user.value || this.pass.value)){
               alert("用户名和密码不能为空!!");
               return;
           }

           sendAJAX({
               url: "../api/login.php",
               type: "GET",
               data: {
                   username : this.user.value,
                   password : this.pass.value
               }
           }).then(value=>{
               alert(value);
               if(value == '登录成功！！'){
                   location = "../views/Gshopper.html";
               }else{
                   confirm('账号密码错误请重新输入');
               }
           })
       }
    }
}

const loginForm = document.querySelector('.login-form');
new Login(loginForm);