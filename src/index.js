import { CapitaisService } from './services/CapitaisService.js'


const capitaisService = new CapitaisService();
console.log(capitaisService.get('SBMO').then((capitais) => console.log(capitais)))

document.querySelector('select').onchange = ((e) => console.log(e.target.value))