import React from 'react';
import {
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsWifi,
} from 'react-icons/bs';

import Logo from '../Logo';
import Link from '../Link';

import googleIcon from '../../assets/googleIcon.jpg';
import googleStore from '../../assets/googleStore.jpg';
import gda from '../../assets/gda.jpg';
import afip from '../../assets/afip.jpg';

import './footer.css';

function Footer() {
  return (
    <footer className="container__footer">
      <div style={{ maxWidth: 1258, margin: 'auto' }}>
        <div className="container__item__footer">
          <div className="item__footer">
            <div className="item__footer__logo">
              <Logo
                width={218}
                height={23}
                objectFit="cover"
              />
            </div>
            <hr className="item__footer__separator__mobile" />
            <div className="item__footer__social__network">
              <a href="https://www.facebook.com/lanacion" target="_BLANK" rel="noreferrer">
                <BsFacebook size={26} />
              </a>
              <a href="https://twitter.com/LANACION" target="_BLANK" rel="noreferrer">
                <BsTwitter size={26} />
              </a>
              <a href="https://www.instagram.com/lanacioncom/" target="_BLANK" rel="noreferrer">
                <BsInstagram size={26} />
              </a>
              <a href="https://servicios.lanacion.com.ar/herramientas/rss/ayuda" target="_BLANK" rel="noreferrer">
                <BsWifi size={26} />
              </a>
            </div>
          </div>
          <div className="item__footer__platform">
            <a rel="noreferrer" href="https://play.google.com/store/apps/details?id=app.lanacion.activity&hl=es_419" target="_BLANK">
              <img
                src={googleIcon}
                alt="imagen google"
              />
            </a>
            <a rel="noreferrer" href="https://apps.apple.com/ar/app/la-nacion/id410689702" target="_BLANK">
              <img
                src={googleStore}
                alt="imagen google"
              />
            </a>
          </div>
        </div>
        <hr className="item__footer__separator__desktop" />
        <div className="item__footer__links">
          <div>
            <Link
              href="https://www.lanacion.com.ar/mapa-del-sitio/"
              label="Mapa del sitio"
            />
            <Link
              href="https://www.contacto.lanacion.com.ar/ayuda"
              label="Ayuda"
            />
            <Link
              href="https://www.contacto.lanacion.com.ar/tyc"
              label="Términos y condiciones"
            />
            <Link
              href="https://www.lanacion.in/#/"
              label="¿Cómo anunciar?"
            />
            <Link
              href="https://www.lanacion.in/#/"
              label="Suscribirse al diario impreso"
            />
          </div>
          <div>
            <p> Protegido por re CAPTCHA:  </p>
            <Link
              label="Condiciones"
              href="https://policies.google.com/terms?hl=es-419"
            />
            <Link
              label="Privacidad"
              href="https://policies.google.com/privacy?hl=es-419"
            />
          </div>
        </div>
        <div className="item__footer__copyright">
          <div>
            <img src={gda} alt="gda icon" />
            <p> Miembro de GDA. Grupo de Diarios América </p>
            <img src={afip} alt="afip icon" />
          </div>
          <div>
            <p> Copyright 2019 SA LA NACION | Todos los derechos reservados </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
