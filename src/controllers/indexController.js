const dataParser = require('../data/dataParser');
const products = dataParser.get("products");

module.exports = {
    index : (req, res) =>
    {
        return res.render('index', { products });
    },
    detail : (req, res) =>
    {
        const { id } = req.params;
        const product = products.find((p) => p.id === id);

        return res.render('detalleMenu', { product });
    }
}