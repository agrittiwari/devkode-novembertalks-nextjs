import { getDomainLocale } from "next/dist/shared/lib/router/router"

export default (req, res) => {
    
    /**
     * Middlewares included to parse the incoming 'req'
     * req.cookies
     * req.query
     * req.body
     */
/**
 * Express like helper functions for the 'res'
 * res.status(200)
 * res.json()
 * res.send('HTTP response')
 */
    return res.status(200).json([{
        email: 'agrit1408@gmail.com',
        id: 1,
        name:'Agrit Tiwari'
    }, {
        email: 'hey@devkodeio',
        id: 2,
        name:'DEVkode'
        },
        {
            email: 'sunnypuri@devkodeio',
            id: 3,
            name: 'Sanam Puri'
    }])
}