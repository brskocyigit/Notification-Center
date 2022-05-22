var jq = document.createElement('script'); jq.src = 'https://code.jquery.com/jquery-3.5.0.js';
document.head.appendChild(jq);

var fontAwesome = document.createElement('script'); fontAwesome.src = 'https://kit.fontawesome.com/89074a9e9c.js';
document.head.appendChild(fontAwesome);

var link = document.createElement("link");
link.rel = "stylesheet";
link.href =
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap";
document.head.appendChild(link);


window.onload = function () {
    var currentPage = window.location.href;
    var previousPage = document.referrer;

    var visitedArr = [];

    var visited = {
        title: '',
        info: '',
        link: '',
        img: ''
    }



    for (var i = 0; i < 3; i++) {
        if (visitedArr[i] == null && (currentPage != previousPage)) {

            var visitedProduct = Object.create(visited);

            if (currentPage.includes('urun')) {
                var imgData = document.getElementById('OptionImage0').getAttribute('src');
                var title = document.querySelector('.product-title').innerHTML;
                var info = document.querySelector('.panel-body .row .col-xs-12 ul li').innerHTML;
                var link = currentPage;

                localStorage.setItem("imgData", imgData);
                localStorage.setItem("title", title);
                localStorage.setItem("info", info);
                localStorage.setItem("link", link);
            }

            visitedProduct.img = localStorage.getItem('imgData');
            visitedProduct.title = localStorage.getItem('title');
            visitedProduct.info = localStorage.getItem('info');
            visitedProduct.link = localStorage.getItem('link');
        };
        visitedArr.push(visitedProduct);
    };

    console.log(visitedArr);




    if (window.location.href.includes('urun')) {
        console.log("Urun sayfası");
    } else {
        document.body.innerHTML += `
    <div id="cButton"><i class="fa-solid fa-xmark close"></i></div>
    
    <div class="generalContainer" id="panel" >
        <div class="notificationTitle">
            <h1>TEKRAR GÖZ ATIN</h1>
        </div>
    
        <div>
            <div id="firstProduct" class="notificationProducts">
                <div class="notificationIcon"><img style="object-fit:cover;" src="${visitedArr[0].img}"></div>
                <div class="notificationProductInfo">
                    <h1>${visitedArr[0].title}</h1>
                    <h3>${visitedArr[0].info}</h3>
                    <a type="button" href="${visitedArr[0].link}">ÜRÜNE GİT</a>  
                </div>
            </div>
            <div id="secondProduct" class="notificationProducts">
                <div class="notificationIcon"><img style="object-fit:cover;" src="${visitedArr[1].img}"></div>
                <div class="notificationProductInfo">
                    <h1>${visitedArr[1].title}</h1>
                    <h3>${visitedArr[1].info}</h3>
                    <a type="button" href="${visitedArr[1].link}">ÜRÜNE GİT</a>    

                
                </div>
            </div>
            <div id="thirdProduct" class="notificationProducts">
                <div class="notificationIcon" ><img style="object-fit:cover;" src="${visitedArr[2].img}"></div>
                <div class="notificationProductInfo">
                    <h1>${visitedArr[2].title}</h1>
                    <h3>${visitedArr[2].info}</h3>
                    <a type="button" href="${visitedArr[2].link}">ÜRÜNE GİT</a>  
                </div>
            </div>
        </div>
        
    </div>
    
    `;

        $(document).ready(function () {
            $("#cButton").click(function () {
                if ($("#cButton i").attr('class') === 'fa-solid fa-xmark close') {
                    $("#panel").toggle("slow", function () { });
                    $("#cButton i").attr('class', 'fa-solid fa-bell bell');
                } else {
                    $("#panel").toggle("slow", function () { });
                    $("#cButton i").attr('class', 'fa-solid fa-xmark close');
                }
            });
            $("cButton").click(function () {
            })
        });

    }
};


window.onload();


//CSS

document.querySelector('.generalContainer').setAttribute("style", ` display: flex;
align-items: stretch;
justify-content: center;
background-color: #f1f1f1;
flex-direction: column;
position: fixed;
top: 200px;
right: 0;
padding:10px;
margin:30px 0 30px 30px;
border:1px solid gray;
width:600px;
border-radius:1rem 0 0 1rem;
overflow: hidden;`);

const productList = document.querySelectorAll(".notificationProducts");

for (let i = 0; i < productList.length; i++) {
    productList[i].setAttribute("style", ` display: flex;
    justify-content: flex-start;
    background-color:white;
    margin:10px;
    border:1px solid gray;
    border-radius:10px;`);
};

const productInfoListh1 = document.querySelectorAll(".notificationProductInfo h1");

for (let i = 0; i < productInfoListh1.length; i++) {
    productInfoListh1[i].setAttribute("style", ` font-size: 20px;
    font-family: 'Poppins','sans-serif';
    line-height: normal;
    font-weight: 900;
    padding: 0;
    margin: 0;`);
};

const productInfoList = document.querySelectorAll(".notificationProductInfo h3");

for (let i = 0; i < productInfoList.length; i++) {
    productInfoList[i].setAttribute("style", ` font-size: 14px;
    font-family: 'Poppins','sans-serif';
    font-weight: 500;
    line-height: normal;
    margin: 0`);
};

const productInfoButton = document.querySelectorAll(".notificationProductInfo a");

for (let i = 0; i < productInfoButton.length; i++) {
    productInfoButton[i].setAttribute("style", `
    display:flex;
    justify-content:center;
    position:relative;
    font-size:18px;
    font-family:'Poppins',sans-serif;
    width:60%;
    top:10px;
    padding:10px;
    background-color:#193db0;
    color:white;
    border-radius:5px;
    `);
};

const iconList = document.querySelectorAll(".notificationIcon");

for (let i = 0; i < iconList.length; i++) {
    iconList[i].setAttribute("style", ` display: flex;
    width:200px;
    height: 200px;
    margin:10px;
    border:1px solid gray;
    border-radius:10px;`);
};

document.querySelector('.notificationTitle').setAttribute("style", ` position: relative;
display: flex;
align-content: center;
padding: 10px;
margin-left: 10px;
font-family: 'Poppins',sans-serif;
width: 97%;
background-color: #193db0;
border: 1px solid #193db0;
border-radius: 10px;`);

document.querySelector('.notificationTitle h1').setAttribute("style", `;
position: relative;
font-size: 30px;
font-weight: 600;
font-family: 'Poppins' ,sans-serif !important;
line-height: normal;
color:white;
}`);

document.querySelector('.close').setAttribute("style", `position: fixed;
font-size:30px;
top:180px;
right: 10px;
padding: 5px;
cursor: pointer;
opacity: 0.7;
z-index: 3;
color:#193db0;`);