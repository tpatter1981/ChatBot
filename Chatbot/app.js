const bn = document.querySelector('#speech')
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechrecognition

const recognition = new SpeechRecognition;

let greetings = [
    'Hello. How are you sweetie?',
    'Hey, hot chicken, what your favorite sauce?',
    'Hello sweetness,  What is your favorite taco seasons?',
]

let weather = [
    'If you were a season what season would be?'
]
let weatheraArr = []

recognition.onresult = functin(Event) {
    console.log(Event)
    const current = Event.resultIndex;
    const transcript = Event.results[current][0].transcript;
    content.textContent = transcript;
    output.textContent = transcript;
    readOutLoud(transcript)
}

btn.addEventListener('click', () => {
    recognition.start();
})

function checkWeather(cityName) {
    let key = PRIVATE_KEY;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + `${cityName}, us` + '&appid=' + key
        .then(res => res.json())
        .then(res => {
            let k = Math.round((res.main.temp) * 100 / 100)
            let f = 9 / 5 * (k - 273) + 32
            let description = res.weather[0].description
            temp = f.toString()
            weatheraArr.push('The weather is currently ${temp} degrees with ${description} and a humidty of ${res.main.humidity}percent')
            console.log(weatherArr);
        }))
}