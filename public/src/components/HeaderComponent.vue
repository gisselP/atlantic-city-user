<template>
    <header>
    <div class="container-fluid d-none d-lg-block py-2 border-bottom">
        <div class="row align-items-center">
            <!-- Left Side - Follow Us -->
            <div class="col-md-4 text-left">
 </div>
            
            <!-- Center - Logo -->
            <div class="col-md-4 text-center">
                <a class="navbar-brand" href="index.html">
                    <img src="../../public/assets/logo-atlantic.png" alt="Logo" class="img-fluid" style="max-height: 72px;">
                </a>
            </div>
            
            <!-- Right Side - Phone -->
            <div class="col-md-4 text-end">
                
            </div>
        </div>
    </div>
    <nav id="home" class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div class="container-fluid justify-content-center">
        <div class="w-100 d-lg-none ">
          <button class="navbar-toggler position-absolute start-0 ms-4 mt-3" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="d-flex w-100 justify-content-center pb-3">
            <a href="index.html">
              <img src="../../public/assets/logo-atlantic.png" alt="Logo" class="img-fluid" style="max-height: 70px;">
            </a>
          </div>
        </div>

        <div class="collapse navbar-collapse d-lg-flex " id="navbarNav">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'home' }" active-class="active">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'about' }" active-class="active">Sobre Nostros</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'contacts' }" active-class="active">Contáctanos</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup> 
</script>

<style scoped>
</style>
