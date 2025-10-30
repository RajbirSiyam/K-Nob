#Requires AutoHotkey v2.0
#SingleInstance Force
; --- Knob Rotation ---
; When the knob triggers Volume Up, send F13
Volume_Up::Send "{F13}"

; When the knob triggers Volume Down, send F14
Volume_Down::Send "{F14}"

; --- Knob Press (Middle Mouse Button) ---
Volume_Mute::Send "{F15}"

Esc::ExitApp
