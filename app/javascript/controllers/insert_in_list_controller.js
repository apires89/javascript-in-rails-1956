import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="insert-in-list"
export default class extends Controller {
  static targets = ["items","form"]
  connect() {
  }

  send (event) {
    event.preventDefault()
    console.log("form was sent!")

    fetch(this.formTarget.action, {
      method: "POST", // Could be dynamic with Stimulus values
      headers: { "Accept": "application/json" },
      body: new FormData(this.formTarget)
    })
      .then(response => response.json())
      .then((data) => {
        if (data.inserted_item) {
          this.itemsTarget.insertAdjacentHTML("beforeend", data.inserted_item)

        }
        console.log(data.form)
        this.formTarget.outerHTML = data.form
        this.formTarget.parentElement.classList.toggle("d-none")
      })
    }
}
