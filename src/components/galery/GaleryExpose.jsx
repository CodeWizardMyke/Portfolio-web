import { useState } from "react";

import './GaleryExpose.css'
import images from '../../data/figmaProjects.json'
export default function GaleryExpose() {

const [selectedImage, setSelectedImage] = useState(null);

return (
  <div className="galery_content">
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
      {
        selectedImage && (
          <div className="modal" onClick={() => setSelectedImage(null)}>
            <span className="close">&times;</span>
            <img className="modal-content" src={selectedImage} alt="Imagem ampliada" />
          </div>
        )
      }
  </div>
);
}