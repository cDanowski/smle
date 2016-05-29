import {Component, Input,ComponentResolver,ViewContainerRef} from '@angular/core';
import {AbstractArrayComponent} from '../AbstractArrayComponent';
import {CardHeaderComponent} from '../CardHeaderComponent';
import {ContactList} from '../../../model/sml';
import {ContactListComponent} from './ContactListComponent';

@Component({
    selector: 'sml-contacts',
    template: require('./ContactsComponent.html'),
    directives: [CardHeaderComponent, ContactListComponent]
})
export class ContactsComponent extends AbstractArrayComponent<ContactList> {
    constructor(componentResolver:ComponentResolver,
                viewContainerRef:ViewContainerRef) {
        super(componentResolver, viewContainerRef);
    }

    protected createModel() {
        return new ContactList()[0];
    }

    protected createEntry() {
        return new ContactList();
    }

    private openNewContactListItem(model:ContactList) {
        this.openNewItem(ContactListComponent, model);
    }
}
