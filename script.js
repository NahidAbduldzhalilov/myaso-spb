let aside = document.querySelector(`aside`);
let asideButton = document.querySelectorAll(`.asidebutton`);
let mouseclick = 0;
let cardholder = document.querySelector(`.cardholder`);
let main = document.querySelector(`main`);
let img = document.querySelectorAll(`.firstimage`);
let contacts = document.querySelector(`#contacts`);
let about = document.querySelector(`#about`);
let terms = document.querySelector(`#terms`);

//получить данные из бд
import { data as art } from "/data.js";
let arr = [];
let LS = window.localStorage;
//рендер карточки
renderCard(art);

//Присвоить переменные
function renderCard(data) {
  data.forEach((el) => {
    createCard(el);
  });
}

//отобразить карточку на странице
function createCard(obj) {
  const container = document.querySelector(`.cardholder`);
  //создать карточку
  const card = document.createElement(`article`);
  card.className = `card`;

  //создаем картинку

  let article = document.createElement(`article`);
  article.className = `card`;
  let x = 0;

  article.innerHTML = `
  <div class="cardimg">
    <img class ="firstimage"
    src= ${obj.image[x]}>
  <div class="cardname">
    <h2 class="name">${obj.title}</h2>
    <p class="priceNumber">
      Цена : <span class="priceNumber">${obj.price}</span> руб/кг
    </p>
    <p class="description">
     ${obj.description}
    </p>
    <a
      href="https://wa.me/79112595097?text=Здравствуйте%2C+хочу+заказать+${obj.title.toLowerCase()}!"
      class="obl"
      >Заказать</a
    >
  </div>
</article>`;

  container.appendChild(card);

  card.appendChild(article);
}

asideButton.forEach((el) =>
  el.addEventListener(`click`, function () {
    cardholder.classList.add(`cardholder`);
    let x = el.textContent;
    let found = art.filter((el) => el.type == x);
    cardholder.innerHTML = ``;
    found.forEach((el) => createCard(el));
  })
);

// function changeImage() {
//   img.addEventListener(`click`, function () {
//     alert(`okттт`);
//   });
// }
// changeImage();
contacts.addEventListener(`click`, function () {
  console.log(`ok`);
  //  cardholder.classList.toggle(`cardholder`)
  cardholder.innerHTML = `
  <h2>Заказать мясо на дом по телефону<h2>
  <h2>+79112595097</h2>
  `;
  cardholder.classList.remove(`cardholder`);
});

about.addEventListener(`click`, function () {
  console.log(`ok`);
  //  cardholder.classList.toggle(`cardholder`)
  cardholder.innerHTML = `
  <div class="aboutus">
  <h2>О нашем магазине "МЯСО-СПБ.РФ"</h2>
  <p>Добро пожаловать в магазин доставки мяса в Санкт-Петербурге! Мы предлагаем свежие и качественные продукты от лучших поставщиков региона.
  Почему выбирают нас:</p><ul>
  <li> Низкие цены: наша цель - обеспечить доступность мясных продуктов для каждого клиента. Мы постоянно работаем над оптимизацией расходов, чтобы предложить вам лучшее соотношение цены и качества.</li>
  <li> Широкий ассортимент: мы предлагаем большой выбор мяса от разных производителей, что позволяет удовлетворить предпочтения каждого клиента.</li>
  <li> Свежие продукты: все мясо поставляется напрямую от производителей, что гарантирует свежесть и качество продукции.</li>
  <li> Доставка по Санкт-Петербургу: мы осуществляем доставку заказов по всему городу, что делает процесс покупки еще более удобным и доступным.</li>
  <li>Работа оптом: наш магазин также предлагает сотрудничество для оптовых покупателей, обеспечивая выгодные условия и скидки на крупные партии.</ul></li>
 
 
 
 
  
 <p > Выберите нас, и вы сможете наслаждаться свежими мясными продуктами, не выходя из дома!</p></div>
  `;
  cardholder.classList.remove(`cardholder`);
});


terms.addEventListener(`click`, function () {
  console.log(`ok`);
  //  cardholder.classList.toggle(`cardholder`)
  cardholder.innerHTML = `
  <div class="aboutus">
  <h2>Условия доставки "МЯСО-СПБ.РФ"</h2>
  <p>Если заказ был оформлен до 15:00 доставка осуществится на следующий день,если позже указанного времени мы доставим ваш заказ через день либо в любой другой день выбранный вами!

  Наш курьер доставит ваш заказ прямо до квартиры!
  
  Стоимость услуги составляет :
  
 <ul>
 <li>Бесплатно в пределах КАД</li>
 <li>За пределами КАД бесплатно при сумме заказа от 20000 рублей , либо от 350 рублей до 700 рублей</li>
 </ul></p>
 
 
 
 
  
 <p > Выберите нас, и вы сможете наслаждаться свежими мясными продуктами, не выходя из дома!</p></div>
  `;
  cardholder.classList.remove(`cardholder`);
});
