export default (req, res) =>
{
    const { query: id } = req;
    res.status(200).json(
        {
            id,
            name: 'Agrit Tiwari',
            task:"November Talks at Devkode"
            
        }
    )
}