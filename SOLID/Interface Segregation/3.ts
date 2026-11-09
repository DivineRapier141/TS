// Інтерфейс MediaPlayer містить playAudio(), playVideo(), recordAudio().

/*
interface MediaPlayerBad {
  playAudio(): void;
  playVideo(): void;
  recordAudio(): void;
}
class AudioPlayerBad implements MediaPlayerBad {
  playAudio() { console.log("Playing audio"); }
  playVideo() { throw new Error("Audio player can't play video"); } // ❌
  recordAudio() { throw new Error("Audio player can't record"); } // ❌
}
*/



interface AudioPlayer {
  playAudio(): void;
}

interface VideoPlayer {
  playVideo(): void;
}

interface AudioRecorder {
  recordAudio(): void;
}

class AudioPlayer implements AudioPlayer {
  playAudio(): void {
    console.log("Playing audio");
  }
}