import { Component, Input, OnInit } from '@angular/core';
import { ClientsService } from '../../../clients/clients.service';
import { Client } from '../../../clients/client';

@Component({
    moduleId: module.id,
    selector: 'plann-user-clients-permission',
    templateUrl: './clients-permission.component.html',
    styleUrls: ['./clients-permission.component.scss']
})
export class ClientsPermissionComponent implements OnInit {

    @Input() showSaveButton = false;
    clients: Client[];
    permissions = [
        {id: 1, text: 'Ver e editar'},
        {id: 2, text: 'Ver'},
        {id: 3, text: 'Nenhuma'}
    ];

    constructor(private _clientsService: ClientsService) {
    }

    async ngOnInit() {

        this.clients = await this._clientsService.getClients();
    }

    saveClientsPermission() {

        console.log('Client permissions changed');
    }
}
