import {table,getMinifiedRecord} from './utils/Airtable'
import { getSession } from '@auth0/nextjs-auth0'
import checkAuth from './middleware/checkAuth';

export default checkAuth(async(req, res) =>
{
    const { id, fields } = req.body
    const {user} = await getSession(req, res);
    try {
        const updatedRecords = await table.update([{ id, fields}])
        
    res.status(200).json(getMinifiedRecord(updatedRecords[0]))
    } catch (error) {
        
    res.status(500).json({msg:error.message})
    }
    
})