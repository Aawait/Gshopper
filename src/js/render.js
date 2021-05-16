
// 请求数据渲染列表
class Render {
    constructor(name, url, start, length) {
        this.box = document.querySelector(name);
        this.url = url;
        this.start = start;
        this.length = length;

        this.reg = /\d+\.{1}\d{2}/g;
        this.init();
    }

    init() {
        sendAJAX({
            url: this.url,
            type: "POST",
            data: {
                start: this.start,
                length: this.length
            }
        }).then(value => {
            value = JSON.parse(value);
            this.renderList(value);
        })
    }

    renderList(data) {
        let str = '';
        data.forEach(item => {
            str += `<li class='floor-item'>
           <div class='floor-img'><img src="${item.img}"></div>
           <div class='floor-info'>
              <p class='good-name'>${item.title}</p>
              <div class='good-price'>
                  <span class='floor-good-price'>¥ ${item.price.match(this.reg)}</span>
                  <span class='floor-discount'>
                      <span>${item.discount?item.discount:'0%'}</span>
                      <i></i>
                  </span>
              </div>
           </div>
           <div class='rate-wrap'>
               <span class='van-tate'>
                <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"><path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path></svg>
                <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"><path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path></svg>
                <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"><path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path></svg>
                <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"><path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path></svg>
                <svg fill="#bdbdbd" viewBox="0 0 32 32" class="van-rate__item"><path d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"></path></svg>
               </span>
               <span class='review-num'>${item.review?item.review:0}</span>
           </div>
       </li>`
        })

        this.box.innerHTML = str;
    }
}


// 1.爆品专区数据渲染 floor-hot-list
new Render('.floor-hot-list',"./api/hot-list.php",0,6);

// 2.香水专区数据渲染 floor-Perfume-list
new Render('.floor-Perfume-list',"./api/hot-list.php",76,6);

// 3.洗护个护专区数据渲染 floor-wash-list
new Render('.floor-wash-list',"./api/hot-list.php",118,6);

// 4.乐高专区数据渲染 floor-lego-list
new Render('.floor-lego-list',"./api/lego-list.php",0,6);

// 5.营养保健专区数据渲染 floor-heaithy-list
new Render('.floor-healthy-list',"./api/lego-list.php",15,6);

// 6.母婴专区数据渲染 floor-infant-list
new Render('.floor-infant-list',"./api/lego-list.php",48,6);

// 7.环球美食专区数据渲染 floor-food-list
new Render('.floor-food-list',"./api/lego-list.php",72,6);

// 8.推荐专区数据渲染 floor-relevant-list
new Render('.floor-relevant-list',"./api/relevant-list.php");



// 点击各类商品标题跳转到相应的列表页
bottom.onclick = e => {

    if (e.target.classList.contains('burst-goods')) {

        location = "./views/details.html?start=0&length=76&h3=爆品专区";
    };

    if (e.target.classList.contains('makeup-goods')) {

        location = "./views/details.html?start=76&length=42&h3=香水彩妆专区";
    }

    if (e.target.classList.contains('wash-goods')) {

        location = "./views/details.html?start=118&length=40&h3=洗护个护专区";
    }
    if (e.target.classList.contains('lego-goods')) {

        location = "./views/details.html?start=158&length=15&h3=乐高专区";
    }
    if (e.target.classList.contains('health-goods')) {

        location = "./views/details.html?start=173&length=23&h3=营养保健专区";
    }
    if (e.target.classList.contains('infant-goods')) {

        location = "./views/details.html?start=196&length=24&h3=母婴专区";
    }
    if (e.target.classList.contains('food-goods')) {

        location = "./views/details.html?start=220&length=24&h3=环球美食专区";
    }

}


// 点击登录跳转到登录注册页面
class Login {
    constructor() {
        this.btn = document.querySelector('.login');
        this.init(this.btn);
    }

    init(btn) {
        btn.onclick = function () {
            location = "./views/login.html";
        }
    }
}
new Login();