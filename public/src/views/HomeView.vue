<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <!-- Carousel -->
        <div class="col-lg-8 ">
          <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" style="height: 550px;" >
                <img src="../../public/assets/slide-01.jpg" class="d-block w-100" alt="Your Ideal Retreat">
                <div class="carousel-caption ">
                  <h1 style="font-size: 84px;">Tu refugio Ideal</h1>
                  <h4>¡Disfruta del mundo de la relajación.
                  </h4>
                  <h3>y la tranquilidad!</h3>
                  <a class="btn btn-outline-light" href="about-us.html">Learn More</a>
                </div>
              </div>
              <div class="carousel-item"  style="height: 550px;" >
                <img src="../../public/assets/slide-02.jpg" class="d-block w-100"  alt="Relax & Unwind">
                <div class="carousel-caption">
                  <h1 style="font-size: 84px;">Relájese y descanse</h1>
                  <h4>Experimente el lujo de nuestros</h4>
                  <h3>spas</h3>
                  <a class="btn btn-outline-light" href="about-us.html">Learn More</a>
                </div>
              </div>
              <div class="carousel-item" style="height: 550px;" >
                <img src="../../public/assets/slide-03.jpg" class="d-block w-100" alt="Revitalize & Relax">
                <div class="carousel-caption">
                  <h1 style="font-size: 84px;">Haz de cada momento</h1>
                  <h4>una experienciai</h4>
                  <h3>inolvidable</h3>
                  <a class="btn btn-outline-light" href="about-us.html">Learn More</a>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>

        <!-- Booking Form -->
        <div class="col-lg-4">
          <div class="hotel-booking-form">
            <h3>Reserva Ahora</h3>
            <form>
              <div class="mb-3">
                <label for="name">Tu Nombre</label>
                <input type="text" class="form-control" id="name" required>
              </div>
              <div class="mb-3">
                <label for="date-in">Fecha de Entrada</label>
                <input type="date" class="form-control" id="date-in" required>
              </div>
              <div class="mb-3">
                <label for="date-out">Fecha de Salida</label>
                <input type="date" class="form-control" id="date-out" required>
              </div>
              <div class="row mb-3 ">
                <div class="col-6">
                  <label for="adults">Adultos</label>
                  <select class="form-select" id="adults">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div class="col-6">
                  <label for="children">Niños</label>
                  <select class="form-select" id="children">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>

              <button class="button button-primary button-square button-block button-effect-ujarak"
                type="submit"><span>Buscar Disponibilidad</span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- About us-->
  <section class="section section-md bg-white text-center text-sm-left">
    <div class="shell-wide">
      <div class="range range-50 range-xs-center overflow-hidden">
        <div class="cell-sm-10 cell-md-8 cell-lg-7 wow fadeInUp" data-wow-delay=".1s">
          <div class="post-video post-video-border">
            <div class="post-video__image"><img src="../../public/assets/lobby.jpg" alt="" width="1020" style="height:450px"
                />
            </div>
          </div>
        </div>
        <div class="cell-sm-10 cell-md-8 cell-lg-5 reveal-flex wow fadeInUp" data-wow-delay=".3s">
          <div class="section-wrap-content-var-1">
            <div class="section-wrap-content-var-1-inner">
              <h3 style="color: white; text-align: left;">Sobre Nosotros</h3>
              <p>En Atlantic City Hotel Smart, nos dedicamos a ofrecer experiencias únicas de descanso y bienestar.
              Descubre un espacio diseñado para relajarte, recargar energías y disfrutar momentos inolvidables.
              </p>
              <div>
                <p style="margin: 0px ; margin-top: 10px ;">🕗 Horario de atención:</p>
                <p style="margin: 0px; margin-top: 12px ;">
                  <span>Lunes a Viernes:</span>
                  <span>8:00 - 20:00</span>
                </p>
                <p style="margin: 0px ; margin-top: 12px ;">
                  <span>Sábados y Domingos:</span>
                  <span>9:00 - 18:00</span>
                </p>
              </div>
              <a class="button button-effect-ujarak button-lg button-secondary-outline button-square"
                href="about-us.html"><span style="color: white;">Reserva ahora</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Indoor Pool-->
  <section class="section section-md bg-secondary-4 text-center text-sm-left">
    <div class="shell">
      <div class="range range-50 range-md-justify range-sm-middle">
        <div class="cell-sm-6 cell-md-5">
          <h3>Piscina Atlantic</h3>
          <p>Sumérgete en un espacio de tranquilidad absoluta, donde el lujo y la naturaleza se encuentran para brindarte una experiencia única de relajación.</p>
          <p>La piscina cubierta climatizada cuenta con techos abovedados con vigas de madera. El jacuzzi cuenta con ventanales y vistas al estanque y a la cara norte del paraje natural.</p><a
            class="button button-primary button button-square button-effect-ujarak button-lg" href="#"><span>read
              more</span></a>
        </div>
        <div class="cell-sm-6">
          <div class="box-outline box-outline__mod-1">
            <figure><img src="../../public/assets/spa.jpg" alt="" width="546" height="516" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Home view mounted')
})
</script>
<style></style>