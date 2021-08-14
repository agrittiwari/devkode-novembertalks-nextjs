import { table } from '../utils/Airtable'
import {withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'


const checkAuth = (handler) => withApiAuthRequired( async (req, res) =>
{
    const { user } = await getSession(req)
    
    const { id } = req.body
    try {
        
        const existingTodo = await table.find({ id })
        console.log(existingTodo + 'here')
        if (!existingTodo ||  user.sub !== existingTodo.fields.userId) {
            res.statusCode = 404
            return res.json({msg:'todo not found'})
        }
        req.record = existingTodo
        return handler(req,res)
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:'something went wrong!'})
    }
})

export default checkAuth;