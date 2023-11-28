input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.stringPlayable("G G G G G G G G ", 120), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 120), music.PlaybackMode.UntilDone)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
