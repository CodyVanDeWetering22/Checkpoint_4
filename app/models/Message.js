export class Quote {
    constructor(data) {
        this.content = this.content
        this.author = this.author
    }


    get messageTemplate() {
        return ` <div class="col-8 fs-3 m-3">
    <p>${this.content}</p>
    <div class=""> 
    <p>${this.author}</p>
    </div>`
    }
}


const data = [{
    "_id": "RfsD8oOMcu7",
    "content": "Courage is going from failure to failure without losing enthusiasm.",
    "author": "Winston Churchill",
    "tags": [
        "Famous Quotes"
    ],
    "authorSlug": "winston-churchill",
    "length": 67,
    "dateAdded": "2019-12-14",
    "dateModified": "2023-04-14"
}]