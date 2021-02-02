import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { ClientsService } from '../clients.service';

@Component({
    moduleId: module.id,
    selector: 'plann-client-modal',
    templateUrl: './client-modal.component.html',
    styleUrls: ['./client-modal.component.scss']
})
export class ClientModalComponent implements OnInit {

    addClientForm: FormGroup;
    addClientModalRef: BsModalRef;

    constructor(private _formBuilder: FormBuilder,
                private _clientsService: ClientsService) {
    }

    ngOnInit() {

        const controlsConfig = {
            name: ['', Validators.required]
        };

        this.addClientForm = this._formBuilder.group(controlsConfig);
    }

    async registerClient() {

        if (this.addClientForm.invalid) {

            return;
        }

        try {

            await this._clientsService.createClient(this.addClientForm.value);

            // TODO what we'll do with the success besides close modal?

            this.closeClientRegisterModal();

        } catch (error) {

            // TODO check what to do with login errors and if it's necessary get error.json();
        }
    }

    closeClientRegisterModal() {

        this.addClientModalRef.hide();
    }
}
