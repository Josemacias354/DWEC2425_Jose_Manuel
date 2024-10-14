const dia = prompt('Cual dia de la semana es hoy?');

switch(dia) {
    case "dl":
        console.log("Hoy abrimos a las 8.00h");
        break;
    case "dm":
        console.log("Hoy abrimos a las 8.30h");
        break;
    case "dx":
        console.log("Hoy abrimos a las 9.00h");
        break;
    case "dj":  
        console.log("Hoy abrimos a las 9.30h");
        break;
    case "dv":
        console.log("Hoy abrimos a las 10.00h");
        break;
    case "ds":
        console.log("Hoy abrimos a las 10.30h");
        break;
    case "dg":
        console.log("Hoy abrimos a las 11.00h");
        break;
    default:
        console.log("Dia no valido");
        break;
   
  }