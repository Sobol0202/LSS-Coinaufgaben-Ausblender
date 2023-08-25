// ==UserScript==
// @name         LSS-Coinaufgaben-Ausblender
// @namespace    leitstellenspiel.de
// @version      1.4r
// @description  Blendet Aufgaben aus, die etwas mit Coins ausgeben zu tun haben.
// @author       MissSobol
// @match        https://www.leitstellenspiel.de/tasks/index
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Suche nach Panels mit der Klasse "panel panel-default mission_panel_green task_panel"
    const panels = document.querySelectorAll('.panel.panel-default.mission_panel_green.task_panel');

    // Iteriere über die gefundenen Panels
    for (let i = 0; i < panels.length; i++) {
        const panel = panels[i];
        const form = panel.querySelector('.task_name');

        // Überprüfe, ob das Formular das Wort "Coin" oder "Coins" enthält
        if (form && (form.textContent.includes('Coin') || form.textContent.includes('Coins') || form.textContent.includes('sofort fertig'))) {
        // Verstecke das Panel
        panel.style.display = 'none';
        // Gib den Tasknamen in der Konsole aus (wenn nicht gewünscht, die folgende Zeile einfach auskommentieren)
        console.log('Ausgeblendeter Taskname:', form.textContent.trim());
        }
    }
})();
