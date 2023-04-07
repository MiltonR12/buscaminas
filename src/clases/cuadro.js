export class Caja {

  #visible = false;
  #positionX;
  #positionY;
  #bandera = false;

  constructor(value, x, y) {
    this.value = value
    this.#positionX = x
    this.#positionY = y
  }

  get visible() {
    return this.#visible
  }

  set visible(comprobante) {
    this.#visible = comprobante
  }

  get positionX() {
    return this.#positionX
  }

  get positionY() {
    return this.#positionY
  }

  get bandera() {
    return this.#bandera
  }

  set bandera(bandera) {
    this.#bandera = bandera
  }

}