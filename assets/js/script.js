import ocarinas from "./database.js";


window.addEventListener("load", () => {

    const ocarinaRiver = document.getElementById("ocarina-river");

    const makeSelector = document.getElementById("makes");
    const dateSelector = document.getElementById("dates");
    const countrySelector = document.getElementById("countries");
    const materialSelector = document.getElementById("materials");

    const ocarinaModal = document.getElementById("ocarina-modal");
    const info = document.getElementById("info");
    const closeButton = document.getElementById("close-button");


    function renderOcarinas() {

        const selectedMake = makeSelector.value;
        const selectedDate = dateSelector.value;
        const selectedCountry = countrySelector.value;
        const selectedMaterial = materialSelector.value;

        ocarinaRiver.innerHTML = "";

        ocarinas.forEach((ocarina, index) => {
            const matchesMake = selectedMake === "all" || ocarina.make === selectedMake;
            const matchesDate = selectedDate === "all" || ocarina.date === selectedDate;
            const matchesCountry = selectedCountry === "all" || ocarina.country === selectedCountry;
            const matchesMaterial = selectedMaterial === "all" || ocarina.material === selectedMaterial;

            if (matchesMake && matchesDate && matchesCountry && matchesMaterial) {
                const ocarinaCard = document.createElement("div");
                ocarinaCard.classList.add("ocarina-card");
                ocarinaCard.innerHTML = `
                    <div class="img-space"></div>
                    <br>
                    <p>
                        <i class="fa-solid fa-hand" title="Make or Origin"></i>
                        ${ocarina.make}
                    </p>
                    <p>
                        <i class="fa-solid fa-timeline" title="Date"></i>
                        ${ocarina.date}
                    </p>
                    <p>
                        <i class="fa-solid fa-earth-americas" title="Country"></i>
                        ${ocarina.country}
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
                info.textContent = JSON.stringify(ocarina);
                ocarinaModal.style.display = "block";
            });
        }
    }

    renderOcarinas();

    makeSelector.addEventListener("change", renderOcarinas);
    dateSelector.addEventListener("change", renderOcarinas);
    countrySelector.addEventListener("change", renderOcarinas);
    materialSelector.addEventListener("change", renderOcarinas);

    closeButton.addEventListener("click", () => { ocarinaModal.style.display = "none"; });

});
