import { Resolve } from '@angular/router';
import { Client } from './client';
import { ClientsService } from './clients.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ClientsResolverService implements Resolve<Client[]> {

    constructor(private _clientsService: ClientsService) {
    }

    async resolve(): Promise<Client[]> {

        return await this._clientsService.getClients();
    }
}
