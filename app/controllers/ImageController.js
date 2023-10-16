import { AppState } from "../AppState.js";
import { imageService } from "../services/ImageService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawImage() {
    const randomPicture = AppState.image

    document.body.style.backgroundImage = `url(${randomPicture?.largeImgUrl})`

    setHTML('image', randomPicture?.imageCardTemplate)

}



export class ImageController {
    constructor() {
        this.getImage()



        AppState.on('image', _drawImage)
    }



    async getImage() {
        try {
            await imageService.getImage()
        } catch (error) {
            Pop.error(error)
        } console.error();
    }

}