import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js"

class MessageService {
    async getMessage() {

        const res = await api.get('api/quotes')
        console.log('quote', res.data);
        AppState.quote = res.data
        console.log('appstate quote', AppState.quote);

    }
}


export const messageService = new MessageService()