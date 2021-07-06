const maltaTime = document.getElementById('mt-hr');
const swissTime = document.getElementById('ch-hr');
const belgianTime = document.getElementById('be-hr');
const brazilTime = document.getElementById('br-hr');

function calcTime(offset){
    // called as a constructor, it returns a new Date object (acc to local machine)
    let d = new Date();
    console.log(d);
    // getTime() method returns the number of ms since the Unix epoch (e.g. 1625583448306)
    // getTimezoneOffset() method returns the difference between a date evaluated in the UTC time zone and the same date as evaluated in the local time zone.
    let utc = d.getTime() + (d.getTimezoneOffset() * 1000);
    console.log(utc);
    let nd= new Date(utc + (3600000*offset));
    let hours = nd.getHours();
    let minutes = nd.getMinutes();
    return `${hours} : ${minutes}`;  
}

maltaTime.textContent = `${calcTime('+5')}`;
swissTime.textContent = `${calcTime('+5')}`;
belgianTime.textContent = `${calcTime('+5')}`;
brazilTime.textContent = `${calcTime('0')}`;

