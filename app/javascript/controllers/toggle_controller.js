import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["toggableElement"]

  connect() {
    console.log("toggle controller connected")
  }

  fire() {
    this.toggableElementTarget.classList.toggle("d-none");
  }
}
