


export class Jungle {
  constructor(data) {
    this.content = data.content
    this.name = data.name
    this.duration = data.duration
  }

  get jungleHTMLString() {
    return `
    <div class="container">
    <section class="row pt-5">
        <div id="currentJumble" class="col-5">
            <section class="row card shadow">
                <div class="col-12">
                    <b class="fs-3">${this.name} Jumble</b>
                    <b class="fs-3"> ${this.duration}</b>
                </div>
                <div class="col-12">
                    <p>${this.content}</p>
                </div>
            </section>


     
        </div>
    </section>
</div>
    `
  }


}

