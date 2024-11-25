import React from "react";
import { Link } from "react-router-dom";
import "./Impresoras.css";

export default function Impresoras() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 formato2">
            <div class="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/EPSON-MULTIFUNCION-L8180.jpg"
                class="card-img-top"
                alt="Waterfall"
              />
              <div class="card-body">
                <h5 class="card-title">Impresora Matricial </h5>
                <p class="card-text">Modelo: LQ-590II EPSON</p>
                <a
                  href={`/formulario-compra/${encodeURIComponent(
                    "Impresora Matricial"
                  )}`}
                  data-mdb-ripple-init
                  class="btn btn-primary"
                >
                  Comprar
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 formato2 ">
            <div class="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/EPSON-MULTIFUNCION-L3250.jpg"
                class="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Impresora LaserJet Enterprise</h5>
                <p class="card-text">Modelo: M612dn HP</p>
                <a
                  href={`/formulario-compra/${encodeURIComponent(
                    "Impresora LaserJet Enterprise"
                  )}`}
                  data-mdb-ripple-init
                  class="btn btn-primary"
                >
                  Comprar
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 formato2">
            <div class="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/EPSON-MULTIFUNCION-L14150.jpg"
                class="card-img-top"
                alt="Sunset over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Impresora matricial </h5>
                <p class="card-text">Modelo:Epson LQ590II</p>
                <a
                  href={`/formulario-compra/${encodeURIComponent(
                    "Impresora matricial"
                  )}`}
                  data-mdb-ripple-init
                  class="btn btn-primary"
                >
                  Comprar
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 formato2">
            <div class="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/EPSON-MULTIFUNCION-L14150.jpg"
                class="card-img-top"
                alt="Sunset over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Impresora LaserJet Pro</h5>
                <p class="card-text">Modelo: M404dn HP</p>
                <a
                  href={`/formulario-compra/${encodeURIComponent(
                    "Impresora LaserJet Pro"
                  )}`}
                  data-mdb-ripple-init
                  class="btn btn-primary"
                >
                  Comprar
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 formato2">
            <div class="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/EPSON-MULTIFUNCION-M3170.jpg"
                class="card-img-top"
                alt="Sunset over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Impresora Multifunción 3 </h5>
                <p class="card-text">Modelo: G3550 </p>
                <a
                  href={`/formulario-compra/${encodeURIComponent(
                    "Impresora Multifunción 3"
                  )}`}
                  data-mdb-ripple-init
                  class="btn btn-primary"
                >
                  Comprar
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 formato2">
            <div class="card">
              <img
                src="https://intecsa.com.bo/wp-content/uploads/2024/07/EPSON-MULTIFUNCION-L8160.jpg"
                class="card-img-top"
                alt="Sunset over the Sea"
              />
              <div class="card-body">
                <h5 class="card-title">Impresora Personal </h5>
                <p class="card-text">Modelo:Epson LQ9210II</p>
                <a
                  href={`/formulario-compra/${encodeURIComponent(
                    "Impresora Personal"
                  )}`}
                  data-mdb-ripple-init
                  class="btn btn-primary"
                >
                  Comprar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link to="/">
        <a
          href="/formulario-compra"
          data-mdb-ripple-init
          class="btn btn-warning"
        >
          Volver a la pagina Principal
        </a>
      </Link>
    </div>
  );
}
