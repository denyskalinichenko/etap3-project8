const chars = 'ABCDEFGIJKLMNOPRSTCZWQ1234567890';

const btn = document.querySelector('button');
const section = document.querySelector('section');

// ilość kodów jakie będę generować
const codesNumber = 1000;

// liczba znaków jak ma być w kodzie 
const charNumbers = 10;

const codesGenerator = () => {
    for (let i = 0; i < codesNumber; i++) {
        let code = i+"."+" " + "";
        for (let i = 0; i < charNumbers; i++) {
            // losuję od 0 do długości "chars"
            const index = Math.floor(Math.random() * chars.length);

            // za każdym razem dodaję losowe znaczenia - tylko 10 znaków i tak robi 1000 razy
            code +=chars[index];
        }
        const div = document.createElement('div')
        div.textContent = code;
        section.appendChild(div);
    }
}

btn.addEventListener("click", codesGenerator);