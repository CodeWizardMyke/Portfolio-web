import { useState } from "react";

import './GaleryExpose.css'
import images from '../../data/figmaProjects.json'

import PanZoom from "react-easy-panzoom";

export default function GaleryExpose() {
const [selectedImage, setSelectedImage] = useState(null);

return (
  
  <div className="galery_content">
    <div className="top_header">
      <button
        onClick={() => window.history.back()}
      >Voltar</button>
    </div>
    <div className="label_galery">
      <h2>Demonstração das principais interfaces criadas no Figma</h2>
    </div>
    <div className="project_images">
      {
        images.map((image,key) => (
          <img 
            key={`imagemF_${key}`}
            src={image} alt={`Layout de projetos no Figma ${image}`} 
            onClick={() => setSelectedImage(image)}
          />
        ))
      }
    </div>
    {selectedImage && (
      <div className="modal" onClick={() => setSelectedImage(null)}>
        <span className="close">&times;</span>
        <PanZoom
          minZoom={1}
          maxZoom={4}
          enablePan={true}
          autoCenter
          boundaryRatioVertical={0.8}
          boundaryRatioHorizontal={0.8}
        >
          <img
            className="modal-content"
            src={selectedImage}
            alt="Imagem ampliada"
          />
        </PanZoom>
      </div>
    )}
  </div>
);
}