const RoomModel = require('../models/roomModel');

exports.createRoom = async (req, res) => {
    const {
        title,
        description,
        roomId,
        cover,
        createdById,
        createdByUsername,
        createdByName,
    } = req.body;
    try {
        const result = await RoomModel.create({
            title,
            description,
            roomId,
            cover,
            createdById,
            createdByUsername,
            createdByName,
        });
        res.status(201).json({
            success: true,
            result,
            message: 'Room created successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message,
        });
        console.log(error);
    }
};

exports.getRooms = async (req, res) => {
    try {
        const result = await RoomModel.find().sort({ createdAt: -1 }).limit(20);
        res.status(200).json({
            success: true,
            result,
            message: '20 Rooms fetched successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message,
        });
        console.log(error);
    }
};

exports.deleteRoom = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await RoomModel.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            result,
            message: 'Room deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error.message,
        });
        console.log(error);
    }
};
