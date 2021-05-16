// 切换国家模块
const country = document.querySelector('.country');
const ul = document.querySelector('.dropdown-menu');
const lis = ul.querySelectorAll('li');
const spans = ul.querySelectorAll('span');
const img = country.querySelector('.country>img');

country.onmouseover = function () {
    ul.style.display = 'block';

}

country.onmouseout = function () {
    ul.style.display = 'none';

}

spans.forEach(function (item) {
    item.classList.add('country-span');
})

lis.forEach(function (item) {
    item.classList.add('country-li')
})

ul.onclick = function (e) {

    if (e.target.className == 'country-span') {
        return;
    }
    if (e.target.parentNode.className != 'country-li') {
        return;
    }
    lis[0].innerHTML = e.target.parentNode.innerHTML;
    let imgSrc = e.target.firstChild.getAttribute('src');
    img.src = imgSrc;
    ul.style.display = 'none';

}

// 简体中文模块
const lang = document.querySelector('.lang');
const langUl = lang.querySelector('ul');
lang.onmouseover = function () {
    langUl.style.display = 'block'
}

lang.onmouseout = function () {
    langUl.style.display = 'none'
}

lang.onclick = function (e) {
    lang.firstElementChild.innerHTML = e.target.innerHTML;
    langUl.style.display = 'none'

}

// 下拉菜单模块
const sreachBox = document.querySelector('.sreachBox');
const select = sreachBox.querySelector('.sreachBox-select');
const sreachBoxUl = sreachBox.querySelector('.sreachBox-ul');

class Select {
    constructor(ele, ul) {
        this.ele = ele;
        this.ul = ul;
        this.flag = true;
        this.init();
    }
    init() {
        this.ele.onclick = e => {
            e.cancelBubble = true;
            if (this.flag) {
                this.ul.style.display = 'block';
                this.flag = false;
            } else {
                this.ul.style.display = 'none';
                this.flag = true;
            }
        }
        document.onclick = e => {
            if (e.target.className != this.ul.className) {
                this.ul.style.display = 'none';
                this.flag = true;
            }
        }

        this.ul.onclick = e => {
            e.cancelBubble = true;
            this.ele.firstElementChild.innerText = e.target.innerText;
            this.ul.style.display = 'none';
            this.flag = true;
        }

    }
}
new Select(select, sreachBoxUl);


// banner图模块
let mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 水平方向切换选项
    loop: true, // 循环模式选项

    // 淡入
    effect: 'fade',
    // 自动轮播
    autoplay:{
        disableOnInteraction: false,  // 操作banner后是否继续轮播，ture为停止，false为继续轮播
        delay:4000,        // 设置自动轮播时间
    },
    speed: 1500,  // 过渡时长

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable :true,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 鼠标移入显示按钮，移除影藏按钮
mySwiper.el.onmouseover = function () {
    mySwiper.navigation.$nextEl.removeClass('hide');
    mySwiper.navigation.$prevEl.removeClass('hide');
}
mySwiper.el.onmouseout = function () {
    mySwiper.navigation.$nextEl.addClass('hide');
    mySwiper.navigation.$prevEl.addClass('hide');
}



// 封装一个 返回promise对象的AJAX请求

function sendAJAX(obj){
     
    return new Promise((resolve,reject)=>{

        function test(test){
            return Object.prototype.toString.call(test);
         };  
            let option = {
            url:obj.url,  
            type:obj.type || 'GET',     // 如果没有传入请求方式，那么设默认值为get
            async:obj.async || true,    // 如果没有传入异步或者同步方式，默认异步
            data:obj.data || "", // 如果没有携带参数，就让他默认为''
          }
            // url路径必须填写
            if(!option.url){
                throw Error('请求路径不可为空');
            }
            // 判断请求方式是否为get或post
            if(!(option.type == 'GET' || option.type == 'POST')){
                throw Error('请求方式为get或post')
            }
            // 如果异步的参数不是布尔值，抛出一个错误
            if(test(option.async)!="[object Boolean]"){
                throw Error('异步取值为布尔值(true或false)');
                }
            // 如果携带参数不是对象或字符串，抛出一个错误
            if(!(test(option.data) =="[object Object]" || test(option.data) == "[object String]")){
                throw Error('携带的参数必须为对象或者字符串');
            }
            // post请求参数的规范是：key=value&key=value
            if(test(option.data) == "[object Object]"){
                let str = '';
               for(let key in option.data){
                     str += key+'='+option.data[key]+'&';
                    }       
                    option.data = str.slice(0,-1);              
            }
            // 判断携带参数如果是个字符串的格式
            if(test(option.data) == "[object String]"){
                // 如果参数存在，并且参数里没有=的时候，抛出一个错误
                 if(option.data && option.data.indexOf('=')== -1){
                     throw Error('data的格式只能为key=value');
                 }              
            }           
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                // ajax状态码为4的时候并且http状态码为2或3开头的时候
                if(xhr.readyState == 4 && /^[23]\d{2}$/.test(xhr.status)){
                    resolve(xhr.responseText); 
                }
                // http状态码为4或5 的时候
                if(/^[45]\d{2}$/.test(xhr.status)){
                    reject(xhr.status);
                }
            }
            if(option.type == 'GET'){                
                xhr.open(option.type,`${option.url}?${option.data}`,option.async);
                xhr.send();
                return;
            }
                
                xhr.open(option.type,option.url,option.async);
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');              
                xhr.send(option.data);              
    })

 }


