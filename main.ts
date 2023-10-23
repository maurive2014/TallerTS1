import { Serie } from './serie.js';

import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let sumSeasons: number = 0;
const avgSeasonsElm: HTMLElement = document.getElementById("average")!;


renderSeriesInTable(data);
avgSeasonsElm.innerHTML = `${sumSeasons/data.length}`


function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    sumSeasons = 0;
    series.forEach((serie) => {
      let trElement = document.createElement("tr");
      trElement.setAttribute("style", "background-color:WhiteSmoke;");
      trElement.innerHTML = `<td><strong>${serie.num}</strong></td>
                             <td style="color:blue;">${serie.name}</td>
                             <td>${serie.channel}</td>
                             <td>${serie.seasons}</td>`;
      seriesTbody.appendChild(trElement);
      sumSeasons += serie.seasons;
    });

  }

