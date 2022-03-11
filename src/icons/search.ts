import Component from '../core/Component';

export default class Search extends Component {
    constructor($target: HTMLElement) {
        super($target);
    }

    getInnerHTML() {
        return `
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                class='css-1emtzzi'
            >
                <path
                    fill='white'
                    fill-rule='evenodd'
                    d='M16.173 16.43a7.5 7.5 0 11.257-.257.749.749 0 00-.257.257zm.639 1.442a9 9 0 111.06-1.06l3.88 3.88a.75.75 0 11-1.06 1.06l-3.88-3.88z'
                    clip-rule='evenodd'
                ></path>
            </svg>
      `;
    }
}