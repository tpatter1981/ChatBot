const bn = document.querySelector('#speech')
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechrecognition

const recognition = new SpeechRecognition;