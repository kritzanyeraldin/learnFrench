import { useState } from "react";

let voiceInterface: SpeechSynthesisUtterance | undefined;

if ("SpeechSynthesisUtterance" in window) {
    voiceInterface = new SpeechSynthesisUtterance();
    voiceInterface.lang = "fr-FR"
}

// const msg = new SpeechSynthesisUtterance();


const useSpeechHandler = () => {
    // const isSpeaking = window.speechSynthesis.speaking
    const readText = (text: string) => {
        if (!voiceInterface) return
        voiceInterface.text = text;
        // console.log(voiceInterface.text)
        window.speechSynthesis.speak(voiceInterface)
        console.log(Boolean(window.speechSynthesis.speaking))
    }

    const isSpeaking = () => {
        if (!voiceInterface) return false
        // console.log("no",window.speechSynthesis.speaking)
        return window.speechSynthesis.speaking
    }

    return { readText, isSpeaking}
}    

export default useSpeechHandler;