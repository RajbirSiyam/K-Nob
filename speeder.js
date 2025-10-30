// ==UserScript==
// @name         YouTube Knob Speed Controller
// @match        *://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    let mode = 0; // 0 = Volume, 1 = Speed

    function showOverlay(text) {
        let div = document.createElement("div");
        div.style.position = "fixed";
        div.style.top = "500px";
        div.style.right = "1000px";
        div.style.padding = "50px 705px";
        div.style.background = "rgba(255, 165, 0, 1)";
        div.style.color = "white";
        div.style.fontSize = "30px";
        div.style.borderRadius = "100px";
        div.style.zIndex = 999999;
        div.innerText = text;
        document.body.appendChild(div);
        setTimeout(() => div.remove(), 600);
    }

    document.addEventListener('keydown', (e) => {
        let video = document.querySelector("video");
        if (!video) return;

        // --- PRESS KNOB = SWITCH MODES ---
        if (e.code === 'F15') {
            mode = !mode;
            showOverlay(mode ? "Mode: SPEED" : "Mode: VOLUME");
            return;
        }

        // --- KNOB RIGHT (F13) ---
        if (e.code === 'F13') {
            if (mode === 0) {
                document.dispatchEvent(new KeyboardEvent("keydown", {code: "AudioVolumeUp"}));
                showOverlay("Volume ↑");
            } else {
                video.playbackRate = Math.min(video.playbackRate + 0.10, 16);
                showOverlay("Speed: x" + video.playbackRate.toFixed(2));
            }
            return;
        }

        // --- KNOB LEFT (F14) ---
        if (e.code === 'F14') {
            if (mode === 0) {
                document.dispatchEvent(new KeyboardEvent("keydown", {code: "AudioVolumeDown"}));
                showOverlay("Volume ↓");
            } else {
                video.playbackRate = Math.max(video.playbackRate - 0.10, 0.05);
                showOverlay("Speed: x" + video.playbackRate.toFixed(2));
            }
            return;
        }
    });
})();
