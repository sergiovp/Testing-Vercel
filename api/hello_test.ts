import { NowRequest, NowResponse } from '@vercel/node'

export default (request: NowRequest, response: NowResponse) => {
    response.status(200).send(`Hola mi gente, ¿cómo estamos?`)
}
