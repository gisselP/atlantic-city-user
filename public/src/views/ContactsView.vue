<template>
    <section class="section section-md bg-white text-center">
        <div class="shell">
        <div class="range range-50 range-md-center">
            <div class="cell-sm-8">
            <div class="contact-box">
                <h3>Ponte en contacto
                </h3>
                <p>Estamos disponibles 24/7 por correo electrónico o teléfono. También puede utilizar nuestro formulario de contacto rápido para hacernos una pregunta sobre nuestros servicios. Estaremos encantados de responder a sus preguntas.</p>
                <form class="rd-mailform" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
                <div class="range range-sm-bottom spacing-20">
                    <div class="cell-sm-6">
                    <div class="form-wrap">
                        <input class="form-input" id="contact-first-name" type="text" name="name" data-constraints="@Required">
                        <label class="form-label" for="contact-first-name">Nombre completo</label>
                    </div>
                    </div>
                    <div class="cell-sm-6">
                    <div class="form-wrap">
                        <input class="form-input" id="contact-last-name" type="text" name="phone" data-constraints="@Numeric">
                        <label class="form-label" for="contact-last-name">Número</label>
                    </div>
                    </div>
                    <div class="cell-xs-12">
                    <div class="form-wrap">
                        <textarea class="form-input" id="contact-message" name="message" data-constraints="@Required"></textarea>
                        <label class="form-label" for="contact-message">Mensaje</label>
                    </div>
                    </div>
                    <div class="cell-sm-6">
                    <div class="form-wrap">
                        <input class="form-input" id="contact-email" type="email" name="email" data-constraints="@Email @Required">
                        <label class="form-label" for="contact-email">E-mail</label>
                    </div>
                    </div>
                    <div class="cell-sm-6">
                    <button class="button button-primary button-square button-block button-effect-ujarak" type="submit"><span>Enviar</span></button>
                    </div>
                </div>
                </form>
            </div>
            </div>
            <div class="cell-sm-4">
            <aside class="contact-box-aside text-left">
                <div class="range range-50">
                <div class="cell-xs-6 cell-sm-12">
                    <p class="aside-title"> Nuestras redes sociales</p>
                    <hr class="divider divider-left divider-custom">
                    <ul class="list-inline">
                    <li><a class="icon icon-sm icon-gray-3 fa fa-instagram" href="#"></a></li>
                    <li><a class="icon icon-sm icon-gray-3 fa fa-facebook" href="#"></a></li>
                    <li><a class="icon icon-sm icon-gray-3 fa fa-twitter" href="#"></a></li>
                    <li><a class="icon icon-sm icon-gray-3 fa fa-youtube" href="#"></a></li>
                    </ul>
                </div>
                <div class="cell-xs-6 cell-sm-12">
                    <p class="aside-title"> Número</p>
                    <hr class="divider divider-left divider-custom">
                    <div class="unit unit-middle unit-horizontal unit-spacing-xs unit-xs-top">
                    <div class="unit__left"><span class="text-middle icon icon-sm mdi mdi-phone icon-primary"></span></div>
                    <div class="unit__body"><a class="text-middle link link-gray-dark" href="tel:#">1-800-1234-567</a></div>
                    </div>
                </div>
                <div class="cell-xs-6 cell-sm-12">
                    <p class="aside-title"> Dirección</p>
                    <hr class="divider divider-left divider-custom">
                    <div class="unit unit-middle unit-horizontal unit-spacing-xs unit-xs-top">
                    <div class="unit__left"><span class="text-middle icon icon-sm mdi mdi-map-marker icon-primary"></span></div>
                    <div class="unit__body"><a class="text-middle link link-gray-dark" href="contacts.html">📍 6036 Richmond Hwy, Alexandria, VA, 2230</a></div>
                    </div>
                </div>
                <div class="cell-xs-6 cell-sm-12">
                    <p class="aside-title"> Horario de Atención</p>
                    <hr class="divider divider-left divider-custom">
                    <div class="unit unit-middle unit-horizontal unit-spacing-xs unit-xs-top">
                    <div class="unit__left"><span class="text-middle icon icon-sm mdi mdi-clock icon-primary"></span></div>
                    <div class="unit__body text-gray-darker">
                        <p>Días laborables: 8:00–20:00</p>
                    </div>
                    </div>
                </div>
                </div>
            </aside>
            </div>
        </div>
        </div>
    </section>
</template>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Contac view mounted')
})
</script>
<style></style>