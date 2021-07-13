import SectionSchema from '../models/section.js'

const addSection = async (req, res) => {
    try {
        const data = new SectionSchema(req.body)
        const result = await data.save();

        result && res.status(200).json({
            message: "Data add successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Bad credential"
        })
    }
}