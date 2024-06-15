import { useEffect, useState } from "react";

let recognition: SpeechRecognition | undefined ;// const recognition = new webkitSpeechRecognition();

if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true
    recognition.lang = "en-US"
    recognition.interimResults=true
    
}

const useSpeechRecognition = () => {
    const [text, setText] = useState("")
    const [isListening, setIsListening] = useState(false)

    useEffect(() => {
        if (recognition) {
            console.log("hola")
            recognition.onresult = (event: SpeechRecognitionEvent) => {
                console.log("onresult: ", event)
                recognition.stop()
                setIsListening(false)
            }
        }
    }, [])
    
    const startListening = () => {
        if (!recognition) return
        setText("")
        setIsListening(true)
        recognition.start()
    }

    const stopListening = () => {
        if (!recognition) return
        setIsListening(false)
        recognition.stop()
    }

    return {
        text,
        isListening,
        startListening,
        stopListening,
        hasRecognitionSupport: Boolean(recognition),

    }
 };




export default useSpeechRecognition;


