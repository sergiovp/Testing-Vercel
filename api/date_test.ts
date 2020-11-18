import { NowRequest, NowResponse } from '@vercel/node'

export default (request: NowRequest, response: NowResponse) => {
    let { hoy = new Date().toLocaleString() } = request.query
    response.status(200).send(`La fecha actual es: ${hoy}`)
}
