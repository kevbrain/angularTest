import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact, contacts } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Observable<Contact[]> {
    return of(contacts).pipe();
  }

  addContact(contact: Contact) {
    const newContacts = contacts.unshift(contact);
    return of(newContacts).pipe();
  }
}

