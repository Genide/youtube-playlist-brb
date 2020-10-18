
export default class Beeper {
    private _context: AudioContext
    private _oscillator: OscillatorNode
    private _gain: GainNode
    private _beepVolume: number;

    /**
     * 
     * @param beepVolume A value from 0 - 1. Sets the volume of the beep. By default, this is .1.
     */
    constructor(beepVolume: number = .1) {
        this._beepVolume = beepVolume;
        this._context = new AudioContext();
        this._oscillator = this._context.createOscillator();
        this._oscillator.frequency.value = 1000;
        this._gain = this._context.createGain();
        this._oscillator.connect(this._gain);
        this._gain.connect(this._context.destination);
        this._gain.gain.value = 0;
        this._oscillator.start(0);
    }

    public Beep(duration: number = 500){
        this.StartBeep()
        setTimeout(() => {
            this.StopBeep();
        }, (duration));
    }

    public StartBeep() {
        this._gain.gain.value = this._beepVolume; // Sets the volume of the beep
    }

    public StopBeep() {
        this._gain.gain.value = 0;
    }
}