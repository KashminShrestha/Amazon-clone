const Category = require('../model/CategoryModel')


exports.addtocategory = async (req, res) => {
    let category = await Category.findOne({ category_name: req.body.category_name })
    if (!category) {
        let categoryadd = new Category({
            category_name: req.body.category_name
        })
        categoryadd = await categoryadd.save()
        if (!categoryadd) {
            return res.status(400).json({ error: "Couldnt add category" })
        }
        return res.send(categoryadd)

    }
    res.status(400).json({ error: "Category exits" })
}
exports.getalldetails = async (req, res) => {
    let category = await Category.find()
    if (!category) {
        return res.status(400).json({ err: "something is wrong" })

    }
    return res.send(category)
}

exports.updatecategory = async (req, res) => {
    let category = await Category.findByIdAndUpdate(req.params.id, {
        category_name: req.body.category_name
    })
    if (!category) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    return res.send(category)
}
exports.deletecategory = async (req, res) => {
    let deletecategory = await Category.findByIdAndDelete(req.params.id)
    if (!deletecategory) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    res.json({ success: "Deleted succesfully" })
}
exports.getcategorydetail = async (req, res) => {
    let category = await Category.findById(req.params.id)
    if (!category) {
        return res.status(400).json({ error: "something went wrong" })
    }
    res.send(category)
}

//req.body
//req.params
//req.query