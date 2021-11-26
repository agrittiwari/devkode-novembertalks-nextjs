export default async(req, res) =>
{try {
    const response = await fetch(`https://restcountries.com/v3.1/name/india`)
    console.log(response)
    const [data] = await response.json()
    // console.log(`this is backend log${data}`)
    return res.send(data)

} catch (err) {
    console.error(err)
}
   } 
   