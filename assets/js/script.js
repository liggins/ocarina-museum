import ocarinas from "./database.js";


window.addEventListener("load", () => {

    const ocarinaRiver = document.getElementById("ocarina-river");

    const countrySelector = document.getElementById("countries");
    const dateSelector = document.getElementById("dates");
    const makerSelector = document.getElementById("makers");
    const materialSelector = document.getElementById("materials");


    function renderOcarinas() {

        const selectedCountry = countrySelector.value;
        const selectedDate = dateSelector.value;
        const selectedMaker = makerSelector.value;
        const selectedMaterial = materialSelector.value;

        ocarinaRiver.innerHTML = "";

        ocarinas.forEach((ocarina, index) => {
            const matchesCountry = selectedCountry === "all" || ocarina.country === selectedCountry;
            const matchesDate = selectedDate === "all" || ocarina.date === selectedDate;
            const matchesMaker = selectedMaker === "all" || ocarina.maker === selectedMaker;
            const matchesMaterial = selectedMaterial === "all" || ocarina.material === selectedMaterial;

            if (matchesCountry && matchesDate && matchesMaker && matchesMaterial) {
                const ocarinaCard = document.createElement("div");
                ocarinaCard.classList.add("ocarina-card");
                ocarinaCard.innerHTML = `
                    <div class="img-space"></div>
                    <br>
                    <p>
                        <i class="fa-solid fa-earth-americas" title="Country"></i>
                        ${ocarina.country}
                    </p>
                    <p>
                        <i class="fa-solid fa-timeline" title="Date"></i>
                        ${ocarina.date}
                    </p>
                    <p>
                        <i class="fa-solid fa-hand" title="Maker or Origin"></i>
                        ${ocarina.maker}
                    </p>
                    <p>
                        <i class="fa-solid fa-cube" title="Material"></i>
                        ${ocarina.material}
                    </p>
                    <br>
                    <p class="read-more" data-index="${index}"> Read more >> </p>
                `;
                ocarinaRiver.appendChild(ocarinaCard);
            }
        });

        const moreButtons = document.getElementsByClassName("read-more");
        for (let moreButton of moreButtons) {
            moreButton.addEventListener("click", (event) => {
                let ocarina = ocarinas[event.target.dataset.index];
                console.log(ocarina);
            });
        }
    }

    renderOcarinas();

    countrySelector.addEventListener("change", renderOcarinas);
    dateSelector.addEventListener("change", renderOcarinas);
    makerSelector.addEventListener("change", renderOcarinas);
    materialSelector.addEventListener("change", renderOcarinas);

});
