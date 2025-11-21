import "./Carousel.css"
import tenisCarousel from "../../assets/tenis.png";
import ornament from "../../assets/Ornament.png"

function Carousel() {
  return (
    <>
<div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

    <div id="carousel">
      <div id="carousel_Txt">
        <p id="textPersonal">Melhores ofertas personalizadas</p>
        <h1 id="textEstoque">Queima de estoque Nike 🔥</h1>
        <p>Conseguir culpa exercitation mollit nisi excepteur do do tempo laboris elusmod irure consectetur.</p>
        <button id="oferta">Ver Ofertas</button>
      </div>
      <div id="carouselImg">
        <img src={tenisCarousel} alt="" />
        <div id="img2">
          <img src={ornament} alt=""  />
        </div>
      </div>
    </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
   
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}

export default Carousel;
