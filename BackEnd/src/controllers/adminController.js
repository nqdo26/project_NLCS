const { createShoesService, getListShoesService, getShoesByIdService, updateShoesService, deleteShoesService, getShoesByTypeService} = require('../services/adminService')

const createShoes = async (req, res) => {
    const { title, type, tag, price, numberOfColors, colors, minSize, maxSize, description } = req.body;

    const images = req.files ? req.files.map(file => file.path) : [];

    const data = await createShoesService(title, type, tag, price, numberOfColors, colors, minSize, maxSize, description, images);
    return res.status(200).json(data);
};


const getListShoes = async(req, res) =>  {
    const data = await getListShoesService();
    return res.status(200).json(data)
}

const getShoesByIdForManage = async (req, res) => {
    const { _id } = req.params;

    const data = await getShoesByIdService(_id);
    return res.status(200).json(data);
};

const getShoesByIdForEdit = async (req, res) => {
    const { _id } = req.params;

    const data = await getShoesByIdService(_id);
    return res.status(200).json(data);
};

const updateShoes = async (req, res) => {
    const { _id } = req.params; 
    const updatedData = req.body; 

    if (req.files && req.files.length > 0) {
        const imageUrls = req.files.map(file => file.path);  
        updatedData.imageUrls = imageUrls;
    }
    
    const data = await updateShoesService(_id, updatedData); 
    return res.status(200).json(data); 
};

const deleteShoes = async (req, res) => {
    const { _id } = req.params; 
    const data = await deleteShoesService(_id); 
    return res.status(200).json(data); 
};

const getShoesByType = async (req, res) => {
    const { type } = req.params;
    const data = await getShoesByTypeService(type);
    return res.status(200).json(data);
};



module.exports = {
    createShoes, getListShoes, getShoesByIdForManage, getShoesByIdForEdit, updateShoes, deleteShoes, getShoesByType
}