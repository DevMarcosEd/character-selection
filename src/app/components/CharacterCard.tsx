import React from "react";
import Image from "next/image";

interface CharacterCardProps {
    name: string;
    imageSrc?: string;
    imageRender?: string;
    isSelected: boolean;
    onClick: () => void;
}

const CharacterCard = ({ name, imageSrc, imageRender, isSelected, onClick }: CharacterCardProps) => {
    const imageToShow = imageSrc || "/fallback-image.png"; // Use uma imagem de fallback ou um valor padrão
    const isRenderedImage = !!imageRender; // Verifique se imageRender está definida

    return (
        <div
            className={`rounded-md relative ${isRenderedImage ? 'h-[420px] w-[400px]' : 'h-[80px] w-[80px]'}`}
            onClick={onClick}
        >
            {/* Aplica uma sobreposição mais escura quando não estiver selecionado */}
            {!isSelected && (
                <div className="absolute inset-0 bg-black rounded-md"></div>
            )}

            {/* Renderiza a imagem da localização usando o componente Image do Next.js */}
            <Image
                src={isSelected ? (imageRender || imageToShow) : imageToShow} // Alterna entre imageRender e imageSrc com base na seleção
                alt={name}
                fill
                style={{
                    objectFit: "cover"
                }}
                className={`rounded-md ${isSelected ? '' : 'opacity-40'}`}
            />
        </div>
    );
}

export default CharacterCard;