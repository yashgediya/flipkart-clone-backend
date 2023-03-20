import Product from "../model/product-schema.js";

export const getProducts = async (req, res) => {
  try {
    const prodcuts = await Product.find({});

    return res.status(200).json(prodcuts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
