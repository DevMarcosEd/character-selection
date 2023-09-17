"use client";

import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

const characters = [
    { id: 1, name: 'Personagem 1', imageSrc: '/characterImage/Ippo.png', imageRender: '/characterImage/ippoRender.png' },
    { id: 2, name: 'Personagem 2', imageSrc: '/characterImage/Miyata.png', imageRender: '/characterImage/miyataRender.png' },
    { id: 3, name: 'Personagem 2', imageSrc: '/characterImage/Takamura.png', imageRender: '/characterImage/takamuraRender.png' },
    { id: 4, name: 'Personagem 2', imageSrc: '/characterImage/Volg.png', imageRender: '/characterImage/volgRender.png' },
    { id: 5, name: 'Personagem 2', imageSrc: '/characterImage/Mashiba.png', imageRender: '/characterImage/mashibaRender.png' },
    { id: 6, name: 'Personagem 2', imageSrc: '/characterImage/TakeshiSendo.png', imageRender: '/characterImage/sendoRender.png' },
    { id: 7, name: 'Personagem 2', imageSrc: '/characterImage/Date.png', imageRender: '/characterImage/dateRender.png' },
    // { id: 8, name: 'Personagem 2', imageSrc: '/characterImage/Eagle.png' },
    // { id: 9, name: 'Personagem 2', imageSrc: '/characterImage/RicardoMartinez.jpg' },
    // Adicione mais personagens conforme necessário
];

const CharacterSelection = () => {
    const [selectedCharacter, setSelectedCharacter] = useState<number | null>(1);

    // Adicione um novo estado para rastrear o índice do personagem selecionado
    const [selectedCharacterIndex, setSelectedCharacterIndex] = useState<number | null>(0);

    const handleCharacterSelect = (characterId: number) => {
        setSelectedCharacter(characterId);
    };

    // Função para atualizar o personagem selecionado com base na tecla de seta pressionada
    const handleArrowKeyPress = (event: KeyboardEvent) => {
        if (event.key === "ArrowLeft") {
            setSelectedCharacterIndex((prevIndex) => {
                const newIndex = prevIndex !== null && prevIndex > 0 ? prevIndex - 1 : characters.length - 1;
                if (newIndex !== null) {
                    setSelectedCharacter(characters[newIndex].id);
                }
                return newIndex;
            });
        } else if (event.key === "ArrowRight") {
            setSelectedCharacterIndex((prevIndex) => {
                const newIndex = prevIndex !== null && prevIndex < characters.length - 1 ? prevIndex + 1 : 0;
                if (newIndex !== null) {
                    setSelectedCharacter(characters[newIndex].id);
                }
                return newIndex;
            });
        }
    };

    // Adicione um evento de escuta para capturar as teclas de seta pressionadas
    useEffect(() => {
        window.addEventListener("keydown", handleArrowKeyPress);
        return () => {
            window.removeEventListener("keydown", handleArrowKeyPress);
        };
    }, []);

    return (
        <div className="flex h-[550px]">
            <div className="w-1/2">
                <h1 className="text-3xl font-extrabold mb-4 text-white">Select Character</h1>
                <div className="grid grid-cols-7 gap-2">
                    {characters.map((character) => (
                        <CharacterCard
                            key={character.id}
                            name={character.name}
                            imageSrc={character.imageSrc}
                            isSelected={character.id === selectedCharacter}
                            onClick={() => handleCharacterSelect(character.id)}
                        />
                    ))}
                </div>
            </div>
            <div className="w-1/2 justify-center flex">
                {selectedCharacter !== null && (
                    <div className="mt-14">
                        <CharacterCard
                            name={characters[selectedCharacter - 1].name}
                            imageSrc={characters[selectedCharacter - 1].imageSrc}
                            imageRender={characters[selectedCharacter - 1].imageRender} // Passa a propriedade imageRender quando necessário
                            isSelected={true}
                            onClick={() => { }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default CharacterSelection;