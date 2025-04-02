import ocarinas from "./database.js";


window.addEventListener("load", () => {

    // Get HTML elements, assign to variables

    const ocarinaRiver = document.getElementById("ocarina-river");

    const makeSelector = document.getElementById("makes");
    const dateSelector = document.getElementById("dates");
    const countrySelector = document.getElementById("countries");
    const materialSelector = document.getElementById("materials");

    const ocarinaModal = document.getElementById("ocarina-modal");
    const details = document.getElementById("details");
    const closeButton = document.getElementById("close-button");


    /**
     * Renders all or some ocarina cards, based on current filters.
     * 
     * - Reads current dropdown selections
     * - Clears the river
     * - For each ocarina that meets the filter conditions, inserts a card into the HTML
     * - Calls enableModal function
    */
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

                let imgOne = ocarina.images ?
                    `style="background-image: url('${ocarina.images[0]}'); background-size: contain;"`
                    : null;

                ocarinaCard.innerHTML = `
                    <div class="img-space" ${imgOne}></div>
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

        enableModal();
    }


    /**
     * ---
    */
    function enableModal() {

        const moreButtons = document.getElementsByClassName("read-more");

        for (let moreButton of moreButtons) {
            moreButton.addEventListener("click", (event) => {
                let ocarina = ocarinas[event.target.dataset.index];

                let imgOne = ocarina.images ?
                    `style="background-image: url('${ocarina.images[0]}'); background-size: contain;"`
                    : null;
                let imgTwo = ocarina.images[1] ?
                    `style="background-image: url('${ocarina.images[1]}'); background-size: contain;"`
                    : null;
                let slider = imgTwo ? `<i class="far" style="font-size: 2em;"> &#xf35a; </i>` : "";

                details.innerHTML = `
                    <div class="img-lg" ${imgOne}></div>
                    <div class="img-lg" ${imgTwo} hidden></div>
                    ${slider}
                    <br><br>
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
                    <p>${ocarina.description}</p>
                `;

                ocarinaModal.style.display = "block";
            });
        }

        closeButton.addEventListener("click", () => { ocarinaModal.style.display = "none"; });
    }


    // `renderOcarinas()` called upon page load and after any dropdown selections

    renderOcarinas();

    makeSelector.addEventListener("change", renderOcarinas);
    dateSelector.addEventListener("change", renderOcarinas);
    countrySelector.addEventListener("change", renderOcarinas);
    materialSelector.addEventListener("change", renderOcarinas);

});
