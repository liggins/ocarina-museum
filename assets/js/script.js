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

                ocarinaCard.innerHTML = `
                    <div class="img-space" style="background-image: url('${ocarina.images[0]}'); background-size: contain;"></div>
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

                let gallery = "";
                for (let image of ocarina.images) {
                    gallery += `<div style="background-image: url('${image}'); background-size: contain;"></div>`;
                }

                details.innerHTML = `
                    <div class="carousel-container">
                        <button class="nav-button left">&lt;</button>
                        <div class="slider">${gallery}</div>
                        <button class="nav-button right">&gt;</button>
                    </div>

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

                const slider = document.querySelector(".slider");

                document.querySelector(".left").addEventListener("click", () => {
                    slider.scrollBy({ left: -slider.clientWidth, behavior: "smooth" });
                });
                document.querySelector(".right").addEventListener("click", () => {
                    slider.scrollBy({ left: slider.clientWidth, behavior: "smooth" });
                });

                ocarinaModal.style.display = "block";

                const leftButton = document.querySelector(".left");
                const rightButton = document.querySelector(".right");
                function updateButtons() {
                    leftButton.style.visibility = slider.scrollLeft === 0 ? "hidden" : "visible";
                    rightButton.style.visibility =
                        slider.scrollLeft + slider.clientWidth >= slider.scrollWidth ? "hidden" : "visible";
                }

                // Initialize button visibility on page load
                updateButtons();

                // Check position after scrolling
                slider.addEventListener("scroll", updateButtons);
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
