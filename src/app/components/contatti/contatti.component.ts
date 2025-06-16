import { Component } from '@angular/core';
import { Contact } from '../../models/contacts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contatti',
  imports: [CommonModule, FormsModule],
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.css'
})
export class ContattiComponent {
  contact: Contact = new Contact();

  sendMessage() {
    // Qui potrei chiamare un servizio per inviare il messaggio
    console.log('Messaggio inviato:', this.contact);
    location.reload(); // Ricarica la pagina per resettare il form
  }
}
