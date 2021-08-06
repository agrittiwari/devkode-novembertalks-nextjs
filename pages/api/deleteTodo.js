import {table,minifyRecords} from './utils/Airtable'


export default  async(req, res) =>
{const{id} = req.body
    try {
        const deletedRecords = await table.destroy([ id ])
        const remainingRecords = minifyRecords(deletedRecords)
    res.status(200).json(remainingRecords)
    } catch (error) {
        
    res.status(500).json({msg:error.message})
    }
    
}