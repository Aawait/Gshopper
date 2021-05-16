
// 发送请求获取数据渲染列表页
class RenderData {
    constructor() {
        // 解析地址栏传过来的参数，用来得到请求的数据内容
        this.start = location.search.slice(1).split('&')[0].split('=')[1];
        this.length = location.search.slice(1).split('&')[1].split('=')[1];
        this.h3 = location.search.slice(1).split('&')[2].split('=')[1];
        this.details = document.querySelector('.content');
        this.contentH3 = document.querySelector('.content-h3');
        this.reg = /\d+\.{1}\d{2}/g;
        this.init();
    }

    init() {
     sendAJAX({
            type: 'GET',
            url: '../api/details.php',
            data: {
                start: this.start,
                length: this.length
            }
        }).then(value => {
            value = JSON.parse(value);
            this.renderDetails(value);
        })
    }
    
    renderDetails(data) {
        this.str = '';
        for (let item of data) {
            this.str += `<li class='detail'>
            <div class='link-detail'>
                <i class='glyphicon glyphicon-heart'></i>
                <div class='img-content'>
                    <img src="${item.img}" alt="">
                </div>
                <div class='title-info'>
                    <div class='title-brand'>
                        <img src="${item.head?item.head:'https://ws.izenecdn.com/cms1/library/flags/cn.png'}" alt="">
                        <span class='brand-info'>${item.brand?item.brand:'中国'}</span>
                    </div>
                    <span>${item.title}</span>
                </div>
                <div class='price-info'>
                    <p class='goods-price'>￥ ${item.price.match(this.reg)}</p>
                    <p class='discount'>
                        <span>${item.discount?item.discount:'0%'}</span>
                        <i class='icon-save'></i>
                    </p>
                </div>
                <div class='rate-wrap'>
                    <div class="van-rate">
                        <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item" >
                            <path
                                d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z">
                            </path>
                        </svg>
                        <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                            >
                            <path
                                d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z">
                            </path>
                        </svg>
                        <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                            >
                            <path
                                d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z">
                            </path>
                        </svg>
                        <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                            >
                            <path
                                d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z">
                            </path>
                        </svg>
                        <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"
                            >
                            <path
                                d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z">
                            </path>
                        </svg>
                    </div>
                    <span class='review-num'>${item.review?item.review:0}</span>
                </div>
                <div class='store-warp'>
                    <i class='icon-store'></i>
                    <span class='store-name'>Beauty & Tech</span>
                </div>
            </div>
        </li>`;
        }
        this.details.innerHTML = this.str;
          // decodeURI 解决浏览器解析地址栏中文乱码问题
        this.contentH3.innerHTML = decodeURI(this.h3);
    }
}

new RenderData();


// 点击登录跳转到登录注册页面
class Login {
    constructor() {
        this.btn = document.querySelector('.login');
        this.init(this.btn);
    }

    init(btn) {
        btn.onclick = function () {
            location = "../views/login.html";
        }
    }
}
new Login();

