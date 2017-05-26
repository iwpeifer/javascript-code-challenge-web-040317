class CommentList {

  constructor(){
    this.list = []
    this.render = () => {
      let renderedList = this.list.map((comment) => comment.render()).join("")
      return `<ul>${renderedList}</ul>`
    }
    this.addComment = (text) => {
      let comment = new Comment(text)
      this.list.push(comment)
    }
    this.deleteAll = () => {
      return this.list = []
    }
  }
}
