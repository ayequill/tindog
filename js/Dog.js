class Dog {
    constructor (data){
        Object.assign(this, data)
    }
    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }
    setFeedHtml () {
        const {name, avatar,age,bio,} = this

        return `
        <img class="avatar" src="${avatar}" alt="avatar">
        <h3 class="name">${name}, ${age}</h3>
        <p class="bio">${bio}</p>
        `
    }

}


export default Dog