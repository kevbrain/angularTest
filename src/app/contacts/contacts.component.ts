import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Contact } from '../contact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    trigger('contactsAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(-100px)', opacity: '0'}),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})

export class ContactsComponent {
  input = {
    'width': '360px',
    'background': '#fff',
    'box-shadow': '0 6px 10px 0 rgba(0, 0, 0, .1)',
    'border': '0',
    'outline': '0',
    'padding': '22px 18px'
  }

  
  model = [new Contact('Manny','Henry','me.me@com','male','Linked')];

  onSubmit(value: any) {
    this.model.unshift(
      new Contact(
        value.first_name,
        value.last_name,
        value.gender,
        value.company,
        value.email
      )
    );
  }

}
