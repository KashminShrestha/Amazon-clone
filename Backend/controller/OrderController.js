let Order = require('../model/OrderModel')
let OrderItems = require('../model/OrderItems')

//placeorder
exports.placeOrder = async (req, res) => {
    let orderItemsIds = await Promise.all(req.body.orderItems.map(async orderItem => {
        let orderItemtosave = new OrderItems({
            product: orderItem.product,
            quantity: orderItem.quantity
        })
        orderItemtosave = await orderItemtosave.save()
        if (!orderItemtosave) {
            return res.status(400).json({ error: "Failed to place order" })

        }
        return orderItemtosave._id


    }))

    let indivisualTotal = await Promise.all(orderItemsIds.map(async item => {
        let OrderItem = await OrderItems.findById(item).populate('product', 'product_price')
        return OrderItem.quantity * OrderItem.product.product_price
    }))
    let total = indivisualTotal.reduce((acc, cur) => {
        return acc + cur
    })
    let ordertoplace = new Order({
        orderItems: orderItemsIds,
        user: req.body.user,
        total: total,
        shipping_address: req.body.shipping_address,
        alternative_shipping_address: req.body.alternative_shipping_address,
        city: req.body.city,
        zipcode: req.body.zipcode,
        country: req.body.country,
        phone: req.body.phone,
        status: req.body.status
    })
    ordertoplace = await ordertoplace.save()
    if (!ordertoplace) {
        return res.status(400).json({ error: "Failed to plcec order" })

    }
    res.send(ordertoplace)
}

// to view all orders
exports.getAllDetails = async (req, res) => {
    let order = await Order.find()
        .populate({ path: 'orderItems', populate: ({ path: 'product', populate: 'category' }) })
        .populate('user', 'username')
    if (!order) {
        return res.status(400).json({ err: "Orders not found" })
    }
    res.send(order)
}

//to view single order

exports.getsingleorderdetail = async (req, res) => {
    let order = await Order.findById(req.params.id)
        .populate({ path: 'orderItems', populate: ({ path: 'product', populate: 'category' }) })
        .populate('user', 'username')
    if (!order) {
        return res.status(400).json({ err: "Invalid id or couldn't be found" })
    }
    res.send(order)

}
exports.getuserorders = async (req, res) => {
    let order = await Order.find({ user: req.params.id })
        .populate({ path: 'orderItems', populate: ({ path: 'product', populate: 'category' }) })
        .populate('user', 'username')
    if (!order) {
        return res.status(400).json({ err: "Invalid id or couldn't be found" })
    }
    res.send(order)

}

exports.updateorder = async (req, res) => {
    let order = await Order.findByIdAndUpdate(req.params.id, {
        status: req.body.status
    }, { new: true })
        .populate('orderItems', 'product')
    if (!order) {
        return res.status(400).json({ err: "Order not updated" })
    }
    res.send(order)
}

// exports.deleteorder=async(req,res)=>{
//     Order.findByIdAndDelete(req.params.id)
//     .then(order=>{
//         order.orderItems.map(async orderitem=>{
//             await OrderItems.findByIdAndDelete(orderitem._id)    
//         })
//     res.status(200).json({status:true,msg:"delete succesfully"})

//     })
//     .catch(err=>res.status(400).json({err:"error"}))
// }

exports.deleteorder = async (req, res) => {
    let order = await Order.findByIdAndDelete(req.params.id)
    if (order) {
        order.orderItems.map(async orderitem => {
            await OrderItems.findByIdAndDelete(orderitem)

        })
        return res.status(200).json({ msg: "Deleted successfully" })
    }
    else {
        return res.status(400).json({ err: "err" })
    }
}