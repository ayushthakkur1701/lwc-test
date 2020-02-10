import { LightningElement,api } from 'lwc';

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
}