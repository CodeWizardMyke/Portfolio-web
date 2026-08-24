import { useState } from "react";
import './GaleryExpose.css';
import images from '../../data/figmaProjects.json';

import PanZoom from "react-easy-panzoom";
import { FiArrowLeft, FiMaximize2, FiX } from "react-icons/fi";

export default function GaleryExpose() {

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <main className="galleryPage">

            <div className="galleryContainer">

                <header className="galleryHeader">

                    <button
                        className="galleryBack"
                        onClick={() => window.history.back()}
                    >
                        <FiArrowLeft />
                        Voltar
                    </button>

                    <div className="galleryIntro">

                        <span className="galleryLabel">
                            UI / UX Design
                        </span>

                        <h1>
                            Interfaces criadas no Figma
                        </h1>

                        <p>
                            Uma seleção de layouts e conceitos de interface
                            desenvolvidos durante meus estudos e projetos.
                        </p>

                    </div>

                    <div className="galleryCount">
                        <strong>{images.length}</strong>
                        <span>interfaces</span>
                    </div>

                </header>

                <section className="projectImages">

                    {images.map((image, index) => (

                        <article
                            className="galleryCard"
                            key={`imagemF_${index}`}
                            onClick={() => setSelectedImage(image)}
                        >

                            <div className="galleryImage">

                                <img
                                    src={image}
                                    alt={`Interface desenvolvida no Figma ${index + 1}`}
                                />

                                <div className="galleryOverlay">

                                    <span>
                                        Visualizar
                                    </span>

                                    <FiMaximize2 />

                                </div>

                            </div>

                            <div className="galleryCardFooter">

                                <div>
                                    <span className="galleryCardNumber">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h2>
                                        Interface Concept
                                    </h2>
                                </div>

                                <FiMaximize2 />

                            </div>

                        </article>

                    ))}

                </section>

            </div>


            {selectedImage && (

                <div
                    className="galleryModal"
                    onClick={() => setSelectedImage(null)}
                >

                    <div className="modalToolbar">

                        <span>
                            Scroll para zoom • arraste para navegar
                        </span>

                        <button
                            onClick={() => setSelectedImage(null)}
                            aria-label="Fechar"
                        >
                            <FiX />
                        </button>

                    </div>

                    <div
                        className="modalViewer"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <PanZoom
                            minZoom={1}
                            maxZoom={4}
                            enablePan={true}
                            autoCenter
                            boundaryRatioVertical={0.8}
                            boundaryRatioHorizontal={0.8}
                        >

                            <img
                                className="modalContent"
                                src={selectedImage}
                                alt="Interface ampliada"
                            />

                        </PanZoom>

                    </div>

                </div>

            )}

        </main>
    );
}