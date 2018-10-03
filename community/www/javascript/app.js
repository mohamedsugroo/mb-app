const app =  document.getElementById('status');
const google = document.getElementById('google')
window.addEventListener('online',  online);
window.addEventListener('offline', online);

google.addEventListener('click', googleLog, false);

online()

function online () {
    if(navigator.onLine) {
        app.innerText = "onLine"
    } else {
        app.innerText = "offline"
    }
};

function googleLog () {
    console.log("login with google")
}