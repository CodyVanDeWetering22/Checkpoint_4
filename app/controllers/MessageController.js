import { messageService } from "../services/MessageService.js";
import { Pop } from "../utils/Pop.js";






export class MessageController {
    constructor() {
        this.getMessage()

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