let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: "The best way to find yourself is to lose yourself in the service of others. ",
    person:'Mahatma Gandhi'
},
{
    quote:"If you want to live a happy life, tie it to a goal or not to people or things. ",
    person:'Albert Einstein'
},
{
    quote:"your time is limited, so don't waste it living someone else life. ",
    person:'Steve Jobs'
},
{
    quote:"Tell me and I forget. Teach me and I remember. Involve me and I learn.  ",
    person:'Benjamin Franklin'
},
{
    quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life , you'll never have enough.",
    person: 'Oprah Winfrey'
},
{
    quote: "Things work out best for those who make the best of how things work out.",
    person:'John Wooden'
},
{
    quote:"All our dreams can come true if we have the courage to pursue them.",
    person:'Walt Disney'
},
{
    quote:"Don't cry because it's over, smile because it happened.",
    person:'Dr. Seuss'
},
{
    quote:"Once you choose hope, anything's possible.",
    person:' Christopher Reeve'
},
{
    quote:"Try not to become a person of success, but rather try to become a person of value." ,
    person: 'Albert Einstein'
},
{
    quote: "The best and most beautiful things in the world cannot be seen or even touched -- they must be felt with the heart.",
    person:'Helen Keller'
},{
    quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    person:'Eleanor Roosevelt'
},{
    quote:"Live as if you were to die tomorrow. Learn as if you were to live forever.",
    person:'Mahatma Gandhi'
}
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length)
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})