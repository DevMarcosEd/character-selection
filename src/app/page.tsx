"use client";

import React from "react";
import CharacterSelection from "./components/CharacterSelection";
import Background from "@/components/background";
import AudioPlayer from "./components/AudioPlayer";

export default function Home() {
  return (
    <>
      <Background />
      <div className="container mx-auto py-8">
        <CharacterSelection />
      </div>
      <AudioPlayer />
    </>
  );
}
