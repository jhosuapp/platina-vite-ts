//Import estilos
import "../sass/main.scss";

/*Components*/
import { TemplateBasicJselect } from './components/Template';

(function (root:any, factory:any) {
    /*Export module only frontend*/
	root.Jselect = factory(root);
})(typeof window !== 'undefined' ? window : this, (function (window : object) {

    /**
	 * The plugin constructor
	 * @param {String} selector The selector to use for selects personalities
	 * @param {Object} options  User settings [optional]
	*/
    const contructor = function(selector:string, options:object){

        const getSelector = document.querySelector<HTMLElement>(selector);
        const getOptionsSelect = document.querySelectorAll<HTMLElement>(`${selector} option`);
        const createTemplateBasic = TemplateBasicJselect(selector);
        const getParentOptionsTemplateBasic = createTemplateBasic.querySelector('.Jselect__options');

        getOptionsSelect.forEach((option:any)=>{
            const createOption: HTMLElement = document.createElement('p');
            createOption.textContent = option?.textContent;
            createOption.dataset.value = option?.value;
            getParentOptionsTemplateBasic?.append(createOption);
        });


    }

    return contructor;

}));

window.addEventListener('load',()=>{

    const createSelect:any = new Jselect('#jselect-personality');
    const createSelectTest:any = new Jselect('#jselect-personality-test');
});

