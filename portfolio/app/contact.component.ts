import { Component } from '@angular/core';

@Component({
    selector: 'contact-app',
    template: `
    <div class="animated zoomIn">
    <h1>{{title}}</h1>
    <div class="form">
    <h2>{{ subtitle }}</h2>
    <form>
      <div>
        <input type="text" placeholder="Apellido y Nombre" type="text" maxlength="15">
      </div><br>
      <div>
        <input type="text" placeholder="Correo Electronico" type="text" maxlength="30">
      </div><br>
      <div>
        <textarea placeholder="mensaje"></textarea>
      </div><br>
      <button>Enviar</button>
      <div class="redesSociales">
        <h2>Tambien en:</h2>
          <a href="https://ar.linkedin.com/in/emirganimi" class="imgL"></a>
          <a href="https://www.facebook.com/egapepe" class="imgF"></a>
      </div>
    </form>
    </div>
    </div>

    `,
    styleUrls: ['app/css/ContactStyle.css']
})
export class ContactComponent {
    title="Contacto";
    subtitle="Dejame un mensaje con el siguiente formulario:";
}
