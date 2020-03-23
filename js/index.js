document.addEventListener("DOMContentLoaded", function(event) {
    const btnWrp = document.querySelector('.btn-wrp');
    const dataStart = document.querySelector('.start-data');
    const dataProgress = document.querySelector('.data-progress');
    const progressBar = document.querySelector('.progress-bar');
    let valueWidth = Number(progressBar.style.width[0]);
    let ariaValuenow = Number(progressBar.getAttribute('aria-valuenow'));
    let ariaValuemax = Number(progressBar.getAttribute('aria-valuemax'));
    let blockChange = false;

    btnWrp.addEventListener("click", function(event) {
        const dataTarget = event.target;
        dataTarget.classList.contains('btn-plus-1') ? plusOnePercent() : false;
        dataTarget.classList.contains('btn-plus-3') ? plusThreePercent() : false;
        dataTarget.classList.contains('btn-plus-7') ? plusSevenPercent() : false;
    })

    function plusOnePercent() {
        const itemOne = 1;
        changeVisibility();
        if (ariaValuenow < ariaValuemax) {
            calculatingProgressBar(itemOne);
        } else {
            return false;
        }
    };

    function plusThreePercent() {
        const itemOne = 3;
        changeVisibility();
        if (ariaValuenow < ariaValuemax) {
            calculatingProgressBar(itemOne);
        } else {
            return false;
        }
    };

    function plusSevenPercent() {
        const itemOne = 7;
        changeVisibility();
        if (ariaValuenow < ariaValuemax) {
            calculatingProgressBar(itemOne);
        } else {
            return false;
        }

    };

    function changeVisibility() {
        if (!blockChange) {
            dataStart.classList.toggle('d-none');
            dataProgress.classList.toggle('d-none');
        }
        return blockChange = true;
    };

    function calculatingProgressBar(item) {
        valueWidth += item;
        ariaValuenow += item;
        progressBar.style.width = `${valueWidth}%`;
        progressBar.getAttribute('aria-valuemax', `${ariaValuenow}`);
        if (ariaValuenow > ariaValuemax) {
            ariaValuenow = ariaValuemax;
        }
        dataProgress.textContent = `${ariaValuenow} %`;
    }
});