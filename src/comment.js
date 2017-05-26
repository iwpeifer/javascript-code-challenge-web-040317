class Comment {

  constructor(text){
    this.text = text
    this.render = () => {
      return `<li>${this.text}</li>`
    }
  }
}
