export function TTS(data) {
    this.text = data.text;
    this.lang = data?.lang;
    this.voice = data?.voice;
    this.voices = () => speechSynthesis.getVoices();

    const synth = window.SpeechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    this.lang ? utterance.lang = lang : null;
    this.voice ? utterance.voice = this.voice : null;

    synth.speak(utterance);
}