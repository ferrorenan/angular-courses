import { Component, OnInit } from '@angular/core';
import { PlannModalsService } from '../../helpers/plann-modals.service';
import { Router } from '@angular/router';
import { ClientsService } from '../clients.service';
import { Client } from '../client';

@Component({
    moduleId: module.id,
    selector: 'plann-clients-panel',
    templateUrl: './clients-panel.component.html',
    styleUrls: ['./clients-panel.component.scss']
})
export class ClientsPanelComponent implements OnInit {

    // TODO add the service to retrieve clients
    clients: Client[] = [];
    filters = {overdue: false, archived: false};
    listTitle: string;

    constructor(public modalsService: PlannModalsService,
                private router: Router,
                public clientsService: ClientsService) {
    }

    async ngOnInit() {

        this.clients = await this.clientsService.getClients();
    }

    toggleOverdueFilter() {

        if (this.filters.archived) {

            this.filters.archived = false;
        }

        this.filters.overdue = !this.filters.overdue;
        this.changeListTitle();
    }

    toggleArchivedFilter() {

        if (this.filters.overdue) {

            this.filters.overdue = false;
        }

        this.filters.archived = !this.filters.archived;
        this.changeListTitle();
    }

    changeListTitle() {

        if (this.filters.archived) {

            this.listTitle = 'clientes arquivados';
            return;
        }

        this.listTitle = 'clientes atrasados';
    }

    goToClientDetail(client: Client) {

        this.clientsService.setSelected(client);

        this.router.navigate(['dashboard/projetos']);
    }

}
