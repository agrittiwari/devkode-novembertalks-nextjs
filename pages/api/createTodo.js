import {table, minifyRecords} from './utils/Airtable'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'



export default withApiAuthRequired(
 async(req, res) =>
    {
        const { description } = req.body
        const {user} = await getSession(req, res);
    try {
        const createRecords = await table.create([{
            fields: { description, userId:user.sub }
        }])
        const createdRecord = {
            id: createRecords[0].id,
            fields: createRecords[0].fields
        }
    res.status(200).json(createdRecord)
    } catch (error) {
        
    res.status(500).json({msg:error.message})
    }
    
}   
) 