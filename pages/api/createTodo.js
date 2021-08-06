import {table, minifyRecords} from './utils/Airtable'


export default  async(req, res) =>
{const{description} = req.body
    try {
        const createRecords = await table.create([{ fields:{description}}])
        const createdRecord = {
            id: createRecords[0].id,
            fields: createRecords[0].description
        }
    res.status(200).json(createdRecord)
    } catch (error) {
        
    res.status(500).json({msg:error.message})
    }
    
}