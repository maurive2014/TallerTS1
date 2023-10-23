import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var sumSeasons = 0;
var avgSeasonsElm = document.getElementById("average");
renderSeriesInTable(data);
avgSeasonsElm.innerHTML = "".concat(sumSeasons / data.length);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    sumSeasons = 0;
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.setAttribute("style", "background-color:WhiteSmoke;");
        trElement.innerHTML = "<td><strong>".concat(serie.num, "</strong></td>\n                             <td style=\"color:blue;\">").concat(serie.name, "</td>\n                             <td>").concat(serie.channel, "</td>\n                             <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        sumSeasons += serie.seasons;
    });
}
