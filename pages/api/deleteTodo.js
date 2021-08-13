import {table,minifyRecords} from './utils/Airtable'
import { getSession } from '@auth0/nextjs-auth0'
import checkAuth from './middleware/checkAuth';

export default checkAuth(async(req, res) =>
{
    const { id } = req.body
    const {user} = await getSession(req, res);
    try {
        const deletedRecords = await table.destroy([ id ])
        const remainingRecords = minifyRecords(deletedRecords)
    res.status(200).json(remainingRecords)
    } catch (error) {
        
    res.status(500).json({msg:error.message})
    }
    
})