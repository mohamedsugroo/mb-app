const app =  document.getElementById('status');

window.addEventListener('online',  online);
window.addEventListener('offline', online);

online()

function online () {
    if(navigator.onLine) {
        app.innerText = "onLine"
    } else {
        app.innerText = "offline"

    }
};