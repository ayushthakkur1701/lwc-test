import { LightningElement, api } from 'lwc';

export default class DashBoard extends LightningElement {
    @api componentHeading;
    tabs = [
        {
            Id: '003171931112854375',
            Title: 'Home',
            Content: 'Home Content'
        },
        {
            Id: '003192301009134555',
            Title: 'Item One',
            Content: 'Item One Content'
        },
        {
            Id: '003848991274589432',
            Title: 'Item Two',
            Content: 'Item Two Content'
        }
    ];

    constructor() {
        super();
        
    }

    renderedCallback(){
        //alert(JSON.stringify(this.template.querySelectorAll('.tabList')));
        console.log(this.template.querySelectorAll('.slds-tabs_default__nav'));
        /*let root = this.template.querySelector('.tabList').createShadowRoot();
        
        let listElement = document.createElement('LI');
        
        //listElement.setAttribute('class','slds-tabs_default__item slds-is-active');
        this.tabs.forEach(element => {
            var textnode = document.createTextNode(element.Title);         // Create a text node
            listElement.appendChild(textnode);
        });
        root.appendChild(listElement);*/

    }
}
