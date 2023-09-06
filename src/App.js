import Catalog from "./comnonents/catalog";
import "./style.css";
import Cart from "./comnonents/cart";
function App() {


  const services = () => {
    let servicesBlock = document.getElementById('services')
    servicesBlock.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  const actions = () => {
    let actions = document.getElementById('actions')
    actions.scrollIntoView({ block: "center", behavior: "smooth" });
  }

  const composition = () => {
    let composition = document.getElementById('composition')
    composition.scrollIntoView({ block: "end", behavior: "smooth" });
  }

  const cart = () => {
    let cart = document.getElementById('cart')
    cart.scrollIntoView({ block: "end", behavior: "smooth" });
  }
  
  const partners = () => {
    let partners = document.getElementById('partners')
    partners.scrollIntoView({ block: "end", behavior: "smooth" });
  }


  const burgerMenu = () => {
    let screen =  window.innerWidth
    if (screen <= 920) {
      if (document.querySelector('#navList').style.opacity  === '1') {
        document.querySelector('#navList').style.opacity = '0' 
      } else {
        document.querySelector('#navList').style.opacity = '1' 
      }
    } else {
      return
    }
  }
 return (
  <div className="App">
   <header>
    <nav className="navigation">
     <div className="logo">
      <img src="./image/logo.svg" alt="" />
     </div>
     <nav onClick={burgerMenu} className="nav_menu">
      <ul id="navList" className="nav-list">
       <li onClick={services} className="nav__item">
        <p>УСЛУГИ</p>
       </li>
       <li onClick={actions} className="nav__item">
        <p>АКЦИИ</p>
       </li>
       <li onClick={composition} className="nav__item">
        <p>КОМПОЗИЦИИ</p>
       </li>
       <li onClick={cart} className="nav__item">
        <p>ПОДАРОЧНЫЕ КАРТЫ</p>
       </li>
       <li onClick={partners} className="nav__item">
        <p>НАШИ ПАРТНЁРЫ</p>
       </li>
      </ul>
     </nav>
     <div className="number">
      <p>+7 (916) 392 17 77</p>
     </div>
    </nav>
    <h1>ФЛОРИСТИКА С ДУШОЙ</h1>
    <button onClick={services} className="check-jobs">СМОТРЕТЬ РАБОТЫ</button>
    <div className="check-main">
     <ul className="social">
      <li>
       {" "}
       <a href="#">
        {" "}
        <img src="./image/inst.svg" alt="" />{" "}
       </a>{" "}
      </li>
      <li>
       {" "}
       <a href="#">
        {" "}
        <img src="./image/fb.svg" alt="" />{" "}
       </a>{" "}
      </li>
      <li>
       {" "}
       <a href="#">
        {" "}
        <img src="./image/whatsapp.svg" alt="" />{" "}
       </a>{" "}
      </li>
      <li>
       {" "}
       <a href="#">
        {" "}
        <img src="./image/vk.svg" alt="" />{" "}
       </a>{" "}
      </li>
     </ul>

     <img className="mouse" src="./image/mouse.svg" alt="" />
     <div onClick={services} className="check-catalog">
      {" "}
      смотреть каталог <img
       className="arrow"
       src="./image/arrow.png"
       alt=""
      />{" "}
     </div>
    </div>
    <div className="blur"></div>
   </header>

   <main>
    <h1>
     {" "}
     Каталог услуг <div className="border"></div>{" "}
    </h1>
    <Catalog />

    <div id="actions" className="actions">
     <div className="actions__title">
      <h2>АКЦИОННЫЕ ПРЕДЛОЖЕНИЯ</h2>
      <div className="action-line"></div>
      <p>
       При заказе свадебного предоставляется скидка на букет невесты и
       бутоньерку в размере 30%
      </p>
      <button className="action-button">ЗАКАЗАТЬ ОФОРМЛЕНИЕ</button>
     </div>
     <div className="action-img__block">
      <img src="./image/action-image.svg" alt="" />
      <div className="action-img__border"></div>
     </div>
    </div>

    <div id='composition' className="composition">
     <div className="composition-img__block">
      <img
       className="composition-img"
       src="./image/composition-image.jpg"
       alt=""
      />
      <div className="composition-img__border"></div>
     </div>
     <div className="composition__title">
      <h2>КОМПОЗИЦИИ И ШЛЯПНЫЕ КОРОБКИ</h2>
      <div className="composition-line"></div>
      <p>
       Композиции могут собираться в любой таре: корзинке, шляпной коробке,
       вазочке или декоративных ящиках. Их нет необходимости ставить в вазу, как
       букеты, потому что цветы питаются при помощи специальной флористической
       губки под названием оазис. Композиции очень удобные для подарка, или
       оформления мероприятия.
      </p>
      <button className="composition-button">ЗАКАЗАТЬ </button>
      <div className="composition-box">
       <img
        className="composition-box__img"
        src="./image/composition-item1.svg"
        alt=""
       />
       <img
        className="composition-box__img"
        src="./image/composition-item2.svg"
        alt=""
       />
       <img
        className="composition-box__img"
        src="./image/composition-item3.svg"
        alt=""
       />
       <img
        className="composition-box__img"
        src="./image/composition-item4.jpg"
        alt=""
       />
      </div>
     </div>
    </div>

    <div id="cart" className="cart">
     <h2>
      ПОДАРОЧНЫЕ КАРТЫ <div className="border"></div>
     </h2>
     <div className="cart-box">
      <Cart
       id="328572915"
       price="3 000"
       className="cart-title"
       ID="cart__one"
      />
      <Cart
       id="368236061"
       price="10 000"
       className="cart-title "
       ID="cart__two"
      />
      <Cart
       id="374678982"
       price="6 000"
       className="cart-title"
       ID="cart__three"
      />
     </div>
    </div>
    <div id="partners" className="partners">
              <div className="partners-header">
                <h1> НАШИ ПОСТАВЩИКИ </h1>
                <div className="border"></div>
              </div>
              <div className="partners__one-slot">
                <img src="./image/item-suppliers-1.svg" alt="" />
              <img src="./image/item-suppliers-2.jpg" alt="" />
              <img src="./image/item-suppliers-3.jpg" alt="" />
              </div>
              <div className="partners__two-slot">
                <img src="./image/item-suppliers-4.jpg" alt="" />
              <img src="./image/item-suppliers-5.jpg" alt="" />
              </div>
              <div className="partners__three-slot">
                <img src="./image/item-suppliers-6.jpg" alt="" />
              <img src="./image/item-suppliers-7.jpg" alt="" />
              <img src="./image/item-suppliers-8.jpg" alt="" />
              <img src="./image/item-suppliers-9.jpg" alt="" />
              </div>
            </div>
   </main>
   {/* <footer>
      <ul>
        <li>Cвадебная флористика</li>
        <li>Букеты на любые мероприятия</li>
        <li>Букеты невесты</li>
        <li>Композиции</li>
        <li>Оформление мероприятий</li>
          <li> Heu </li>
      </ul>
    </footer> */}
  </div>
 );
}

export default App;
