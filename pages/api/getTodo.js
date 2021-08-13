import {table, minifyRecords} from './utils/Airtable'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'

export default withApiAuthRequired(async (req, res) =>
{
    const {user} = await getSession()
    try {
        const records = await table.select({
            filterByFormula: `userId = '${user.sub}'`
        }).firstPage()
    const minifiedRecords = minifyRecords(records)
    res.status(200).json(minifiedRecords)
    } catch (error) {
        
    res.status(500).json({msg:error.message})
    }
    
})