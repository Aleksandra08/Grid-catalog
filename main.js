
const SELECT_CLASS_NAME = 'select';
const SELECT_EXPAND_CLASS_NAME = `${SELECT_CLASS_NAME}_expand`;
const SELECT_TITLE_CLASS_NAME = `${SELECT_CLASS_NAME}__title`;
const SELECT_OPTIONS_CLASS_NAME = `${SELECT_CLASS_NAME}__options`;
const SELECT_OPTION_CLASS_NAME = `${SELECT_CLASS_NAME}__option`;
const SELECT_CONTROL_CLASS_NAME = `${SELECT_CLASS_NAME}__control`;

 class Select {
    constructor(target, options) {
        this.targetElement = target;
        this.options = options;
        this.render();
        this.renderList();
    }

    render() {
        this.titleElement = document.createElement('button');
        this.listElement = document.createElement('ul');

        this.titleElement.classList.add(SELECT_TITLE_CLASS_NAME);
        this.listElement.classList.add(SELECT_OPTIONS_CLASS_NAME);

        this.titleElement.innerHTML = '<img class="world" src="img/world.png">' + 'ENGLISH' +
            '<img class="arrow" src="img/Shape.png">';
        this.targetElement.appendChild(this.titleElement);
        this.targetElement.appendChild(this.listElement);
        this.targetElement.classList.add(SELECT_CLASS_NAME);

        this.titleElement.addEventListener('click', () => this.toggle())
    }

    toggle() {
        this.targetElement.classList.toggle(SELECT_EXPAND_CLASS_NAME);
    }

    select(option) {
        this.titleElement.innerHTML='<img class="world" src="img/world.png">' + option +
            '<img class="arrow" src="img/Shape.png">';
        this.targetElement.classList.remove(SELECT_EXPAND_CLASS_NAME);
    }

    renderList() {
        this.options.forEach((option) => {
            const li = document.createElement('li');
            const button = document.createElement('button');

            li.classList.add(SELECT_OPTION_CLASS_NAME);
            button.classList.add(SELECT_CONTROL_CLASS_NAME);

            button.textContent = option;

            button.addEventListener('click', () => this.select(option));

            li.appendChild(button);
            this.listElement.appendChild(li);
        });
    }
}

const language = ['ENGLISH', 'UKRAINIAN', 'RUSSIAN'];
const languagesList = new Select(document.querySelector('#languagesList'), language);
