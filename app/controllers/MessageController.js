import { AppState } from "../AppState.js";
import { messageService } from "../services/MessageService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



function _drawMessage() {
    const quote = AppState.quote
    let content = `<div class="col-8 fs-4">

    <div class="quote"> <p>${AppState.quote?.content}</p>
</div>
    <div class="author"> 
    <p>${AppState.quote?.author}</p>
    </div>`



    setHTML('message', content)
}


export class MessageController {
    constructor() {
        this.getMessage()



        AppState.on('quote', _drawMessage)
    }



    async getMessage() {
        try {
            await messageService.getMessage()
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }
}