
/**
 * Basic Template Select
 * @param {String} selector The selector to create template
*/
const TemplateBasicJselect = (selector : string)=>{
    const createDiv : HTMLElement = document.createElement('div');
    createDiv.classList.add('Jselect');
    const template : string = `
                                <div class="Jselect__dinamic-value" data-selector="${selector}">
                                    <span>Selecciona una opción</span>
                                </div>
                                <div class="Jselect__options">

                                </div>
                            `;
    createDiv.innerHTML = template;

    const getSelector = document.querySelector<HTMLElement>(selector);
    getSelector?.parentNode?.insertBefore(createDiv, getSelector.nextElementSibling);

    return createDiv;
}

/*Export functions*/
export { TemplateBasicJselect }

