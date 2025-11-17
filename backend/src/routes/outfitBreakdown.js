import express from 'express';
import Outfit from '../models/Outfit.js';
import verifyToken from '../middleware/authenticate.js';

const router = express.Router();

router.get('/:id', verifyToken, async (req, res) => {
  try {
    const outfit = await Outfit.findById(req.params.id)
      .populate('celebrityId', 'name aesthetic')
      .lean();

    if (!outfit) return res.status(404).json({ error: 'Outfit not found' });

    const breakdown = {
      outfit: {
        id: outfit._id,
        celebrity: outfit.celebrityId?.name,
        aesthetic: outfit.celebrityId?.aesthetic,
        occasion: outfit.occasion,
        weather: outfit.weather,
        imageUrl: outfit.imageUrl
      },
      items: outfit.items.map(item => {
        const alts = { budget: [], 'mid-range': []};
        item.alternatives.forEach(alt => {
          alts[alt.tier].push({
            brand: alt.brand,
            price: alt.price,
            url: alt.retailerLink
          });
        });
        return {
          category: item.category,
          brand: item.brand,
          originalPrice: item.price,
          imageUrl: item.imageUrl,
          alternatives: {
            budget: alts.budget,
            mid: alts['mid-range']
          }
        };
      })
    };

    res.status(200).json(breakdown);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;