import { api } from "./AxiosService.js"

class MessageService {
    async getMessage() {

        const res = await api.get('api/quotes')
        console.log('quote', res.data);

    }
}


export const messageService = new MessageService()