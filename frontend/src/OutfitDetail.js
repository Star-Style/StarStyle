import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./OutfitDetail.css";

function OutfitDetail() {
  const { id } = useParams();
  const [outfit, setOutfit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOutfit() {
      const response = await fetch(`https://starstyle-tiffany-development.up.railway.app/api/outfits/${id}`);
      const data = await response.json();
      setOutfit(data.data);
      setLoading(false);
    }
    fetchOutfit();
  }, [id]);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!outfit) {
    return <div>Outfit not found.</div>;
  }

  return (
    <div className="outfit-detail-page">
      <div className="outfit-detail-image">
        <img src={outfit.imageUrl} alt={outfit.celebrityId?.name} />
      </div>
      <div className="outfit-detail-items">
        <h2>{outfit.celebrityId?.name}'s Look</h2>
        {outfit.items?.map((item) => (
          <div key={item._id} className="detail-item-card">
            <img src={item.imageUrl} alt={item.brand} />
            <div>
              <h3>{item.brand}</h3>
              <p>${item.price}</p>
              <a href={item.retailerLink} target="_blank" rel="noreferrer">
                Buy Original
              </a>
              <h4>Alternatives:</h4>
              {item.alternatives?.map((alt) => (
                <div key={alt._id}>
                  <p>
                    {alt.brand} (${alt.price}) — {alt.tier}
                  </p>
                  <a href={alt.retailerLink} target="_blank" rel="noreferrer">
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OutfitDetail;
