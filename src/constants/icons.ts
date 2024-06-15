import {ChatCircleDots,StopCircle,Check,PencilLine,Sparkle,MicrophoneSlash,Microphone,XCircle, Eraser,SpeakerHigh, SpeakerSlash, Coffee,Books, SignOut ,BookOpenText, ListBullets ,UserSound, GearSix, ChartLine } from "@phosphor-icons/react";

export const icons = {
    coffee: Coffee,
    book: Books,
    grammar: BookOpenText,
    vocabulary: UserSound, 
    statistic: ChartLine,
    settings: GearSix,
    signOut: SignOut ,
    listLevels: ListBullets,
    speaker: SpeakerHigh,
    speakeSlash: SpeakerSlash,
    eraser:Eraser,
    XCircle: XCircle,
    microphone:Microphone,
    microphonoSlash:MicrophoneSlash,
    start:Sparkle,
    pencil: PencilLine,
    check: Check,
    stopMicrophone: StopCircle,
    voiceToText : ChatCircleDots,


} as const

// export default icons