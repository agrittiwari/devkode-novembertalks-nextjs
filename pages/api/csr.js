export default async(req, res) =>
{try {
    const response = await fetch(`https://restcountries.com/v3.1/name/india`)
    console.log(response)
    const data = await response.json()
    console.log(data)
    res.status(200).json( data )

} catch (err) {
    console.error(err)
}
   } 
   