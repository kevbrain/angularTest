import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators }from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ContactService }from '../contact.service';
import { Contact } from '../contact';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-react-contact',
  templateUrl: './react-contact.component.html',
  styleUrls: ['./react-contact.component.css'],
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
export class ReactContactComponent implements OnInit {

  companies = [ 'Linked', 'Manny design', 'Apple', 'Other'];
  public contacts;
  reactForm : FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService ) { 
    this.createForm();
  }

  createForm() {
    this.reactForm = this.fb.group( {
        first_name:  ['',Validators.compose([Validators.required,Validators.minLength(5)])],
        last_name: ['',Validators.compose([Validators.required,Validators.minLength(5)])],
        email: ['',Validators.compose([Validators.required,Validators.minLength(5)])],
        gender: ['',Validators.required],
        company: ''
    })
  }

  onSubmit() {
    let contactForm = this.reactForm.value;
    const contact: Contact = {
        firstName: contactForm.first_name,
        lastName: contactForm.last_name,
        email: contactForm.email,
        gender: contactForm.gender,
        company: contactForm.company
    }

    this.contactService.addContact(contact)
    .subscribe (
      data =>  {
        this.getContacts;
        return true;
      }, 
      err => {
        console.log("Sauvegarde le contact");
        return Observable.throw(err);
        
      }
    );
    this.reBuildForm();
  }
  
  reBuildForm() {
    this.reactForm.reset({
      first_name:'',
      last_name:'',
      email:'',
      gender:'',
      company:''
    });
  }

  getContacts() {
    this.contactService.getContacts()
    .subscribe (
      data =>  {this.contacts = data}, 
      err => console.log(err)
    )
  }
  ngOnInit() {
    this.getContacts()
  }

}
