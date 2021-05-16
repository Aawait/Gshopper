// footer-search输入框获取焦点事件

class FooterSearch {
    constructor() {
        this.ele = document.querySelector('.footer-search .search-input');
        this.inp = this.ele.querySelector('input');
        this.btn = this.ele.querySelector('.search-btn');
        this.init(this.ele, this.inp);
    }

    init(change, ele) {
        ele.onfocus = () => {
            change.style.borderColor = "#ff5224";
            this.btn.style.backgroundColor = "#ff5224";
           
        }
        ele.onblur = () =>{
            change.style.borderColor = "#eaeaea";
            this.btn.style.backgroundColor = "#333";
        }
    }
}

new FooterSearch();


// 改变footer-wecat 二维码  鼠标滑入显示 滑出隐藏

class FooterWecat{
    constructor(){
        this.ele = document.querySelector('.footer-wecat');
        this.change = this.ele.querySelector('.footer-wecat-qrcode');
        this.key = this.ele.querySelector('.icon-wecat');
        this.init(this.key,this.change);
    }
    init(ele,change){
       ele.onmouseover = () =>{
           change.style.opacity = 1;
       }
       ele.onmouseout = () =>{
           change.style.opacity = 0;
       }
    }
}
new FooterWecat();


// 改变back to top按钮回到顶部事件

class DownloadBtn{
     constructor(){
        this.ele = document.querySelector('.back-top');
        this.init(this.ele);
     }
     init(ele){
        window.onscroll = e=>{
          if(scrollY >= 1800){
              ele.style.opacity = 1;
          }else{
              ele.style.opacity = 0;
          }
        }

        ele.onclick = () =>{
            window.scrollTo({top:0,behavior:"smooth"});
        }
     }
}

new DownloadBtn();