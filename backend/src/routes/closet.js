// import express from 'express';
// import multer from 'multer';
// import Item from '../models/Item.js';
// import verifyToken from '../middleware/authenticate.js';
// import { uploadImage } from '../services/firebase.js';

// const router = express.Router();
// const upload = multer({ storage: multer.memoryStorage() });

// router.post('/upload', verifyToken, upload.single('image'), async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ error: 'No image' });
//     const imageUrl = await uploadImage(req.file);
//     const item = await Item.create({ userId: req.user.uid, imageUrl });
//     res.json({ data: { id: item._id, imageUrl }, status: 201 });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.get('/', verifyToken, async (req, res) => {
//   const items = await Item.find({ userId: req.user.uid });
//   res.json({ data: items });
// });

// export default router;