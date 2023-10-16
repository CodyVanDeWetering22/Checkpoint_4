export class Image {
    constructor(data) {
        this.largeImgUrl = data.largeImgUrl
        this.author = data.author

    }

    get imageCardTemplate() {
        return `<div class="col-2 m-5 p-2 random-image bg-dark text-light">
    <p> image by: ${this.author} </p>
    </div>`
    }
}



const data = [{
    "url": "https://pixabay.com/get/gef86bc1d890579767ed919d4879485abde36167eaba1f7de86b4aa718247edf0ff2439dc7742b2cb842baed84f51ff89d5e96b92d8e5f0ae27817ffc24da1f54_640.jpg",
    "imgUrl": "https://pixabay.com/get/gef86bc1d890579767ed919d4879485abde36167eaba1f7de86b4aa718247edf0ff2439dc7742b2cb842baed84f51ff89d5e96b92d8e5f0ae27817ffc24da1f54_640.jpg",
    "largeImgUrl": "https://pixabay.com/get/g904262f8117bf4b7fe6ff5bb9cddea8f0340b3470fd52ca06d5335b9a645054419b9e26d3abdbac374250d1f5364c90f8abcd2b05ed809c60651d16209275ded_1280.jpg",
    "tags": "mountain landscape, steps, stones",
    "author": "kinkate",
    "query": "fog"
}]