var playing = false;

function playAudio(src) {
    if (window.audio) {
        audio.pause();
    }
    window.audio = new Audio(src);
    window.audio.play();
    playing = true;
    resetPauseBtn();
    
    window.audio.addEventListener("ended", function () {
        audio.currentTime = 0;
        console.log("ended");
        playing = false;
    });
}

function pauseAudio() {
    if (playing) {
        window.audio.pause();
        var element = document.getElementById("btn-pause");
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
        playing = false;
    } else {
        audio.play();
        var element = document.getElementById("btn-pause");
        element.classList.remove("fa-play");
        element.classList.add("fa-pause");
        playing = true;
    }
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
    playing = false;
}

function resetPauseBtn() {
    var element = document.getElementById("btn-pause");
    if (element.classList.contains("fa-play")) {
        element.classList.remove("fa-play");
        element.classList.add("fa-pause");
    }
}

