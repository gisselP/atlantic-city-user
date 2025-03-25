<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <!-- Carousel -->
        <div class="col-lg-8 ">
          <div id="carouselExample" class="carousel slide h-100" data-bs-ride="carousel">
            <div class="carousel-inner h-100">
              <div class="carousel-item active h-100">
                <img src="../../public/assets/slide-01.jpg" class="d-block w-100" alt="Your Ideal Retreat">
                <div class="carousel-caption d-none d-md-block">
                  <h1>Your Ideal Retreat</h1>
                  <h4>Enjoy the world of relaxation</h4>
                  <h3>and tranquility!</h3>
                  <a class="btn btn-outline-light" href="about-us.html">Learn More</a>
                </div>
              </div>
              <div class="carousel-item h-100">
                <img src="../../public/assets/slide-02.jpg" class="d-block w-100" alt="Relax & Unwind">
                <div class="carousel-caption d-none d-md-block">
                  <h1>Relax & Unwind</h1>
                  <h4>Experience the luxurious level</h4>
                  <h3>of our spa treatments</h3>
                  <a class="btn btn-outline-light" href="about-us.html">Learn More</a>
                </div>
              </div>
              <div class="carousel-item h-100">
                <img src="../../public/assets/slide-03.jpg" class="d-block w-100" alt="Revitalize & Relax">
                <div class="carousel-caption d-none d-md-block">
                  <h1>Revitalize & Relax</h1>
                  <h4>Indulge in our top-notch</h4>
                  <h3>spa resort</h3>
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
            <h3>Book a Room</h3>
            <form>
              <div class="mb-3">
                <label for="name">Your Name</label>
                <input type="text" class="form-control" id="name" required>
              </div>
              <div class="mb-3">
                <label for="date-in">Check-in Date</label>
                <input type="date" class="form-control" id="date-in" required>
              </div>
              <div class="mb-3">
                <label for="date-out">Check-out Date</label>
                <input type="date" class="form-control" id="date-out" required>
              </div>
              <div class="row mb-3 ">
                <div class="col-6">
                  <label for="adults">Adults</label>
                  <select class="form-select" id="adults">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div class="col-6">
                  <label for="children">Children</label>
                  <select class="form-select" id="children">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                </div>
              </div>

              <button class="button button-primary button-square button-block button-effect-ujarak"
                type="submit"><span>check availability</span></button>
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
            <div class="post-video__image"><img src="../../public/assets/video-bg-1020x525.jpg" alt="" width="1020"
                height="525" />
            </div>
            <div class="post-video__body"><a class="link-control post-video__control" data-lightgallery="item"
                href="https://www.youtube.com/watch?v=I5FlP07kdvM"></a></div>
          </div>
        </div>
        <div class="cell-sm-10 cell-md-8 cell-lg-5 reveal-flex wow fadeInUp" data-wow-delay=".3s">
          <div class="section-wrap-content-var-1">
            <div class="section-wrap-content-var-1-inner">
              <h2>About Us</h2>
              <p>Committed to everyone seeking energy and excitement, we offer endless possibilities to unwind and
                reenergize.</p>
              <div>
                <p>
                  <span>Weekdays:</span>
                  <span>8:00–20:00</span>
                </p>
                <p>
                  <span>Weekdays:</span>
                  <span>9:00–18:00</span>
                </p>
              </div>
              <a class="button button-effect-ujarak button-lg button-secondary-outline button-square"
                href="about-us.html"><span>book now</span></a>
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
          <h3>Indoor Hotel Pool</h3>
          <p>The indoor heated pool has vaulted wood beam ceilings. The whirlpool features bay windows and overlooks
            the pond and the north face of the local beauty spot. For the safety and health reasons, children must be
            accompanied by an adult when visiting the pool.</p>
          <p>The serene pool at Royal Villas spa resort and hotel boasts sleek décor that features striking
            floor-to-ceiling teak columns set against a cool black tile floor. Poolside dining is also available,
            featuring a selection of dishes from any cuisine you desire that are both healthy and delicious. Daily
            aqua aerobics classes help keep guests fit while on the road.</p><a
            class="button button-primary button button-square button-effect-ujarak button-lg" href="#"><span>read
              more</span></a>
        </div>
        <div class="cell-sm-6">
          <div class="box-outline box-outline__mod-1">
            <figure><img src="../../public/assets/services-05-546x516.jpg" alt="" width="546" height="516" />
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