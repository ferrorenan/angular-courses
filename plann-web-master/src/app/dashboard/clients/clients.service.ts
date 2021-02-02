import { Injectable } from '@angular/core';
import { Client } from './client';
import { RequestConfig } from '../../services/request-config';
import { ApiTokenService } from '../../services/api-token.service';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';
import * as moment from 'moment';

@Injectable()
export class ClientsService {

    private _clientsUrl = environment.apiUrl + '/customers';

    private _selected: Client;

    private _clients: Client[] = [];

    static polishClient(client: Client) {

        client.text = client.name;
        client.created_at = client.created_at ? moment(client.created_at) : client.created_at;
        client.updated_at = client.updated_at ? moment(client.updated_at) : client.updated_at;
        client.deleted_at = client.deleted_at ? moment(client.deleted_at) : client.deleted_at;

        return client;
    }

    constructor(private _apiService: ApiService,
                private _apiTokenService: ApiTokenService) {
    }

    setSelected(client: Client) {

        this._selected = client;
    }

    getSelected(): Client {

        return this._selected;
    }

    async getClients(): Promise<Client[]> {

        // TODO request always at least for now
        // if (this._clients.length) {
        //
        //     return this._clients;
        // }

        try {

            const requestConfig = new RequestConfig(this._clientsUrl, null, this._apiTokenService.getUserToken());

            const response = await this._apiService.get(requestConfig);

            return this._clients = response.data.map(ClientsService.polishClient);

        } catch (error) {

            ApiService.handleError('GOT_CLIENTS_ERROR', error);
        }
    }

    async createClient(clientPayload) {

        try {

            const requestConfig = new RequestConfig(
                this._clientsUrl, clientPayload, this._apiTokenService.getUserToken());

            const response = await this._apiService.post(requestConfig);

            // Polished client is the created client with the properties used in Plann like .text for the selects
            const polishedClient = ClientsService.polishClient(response.data);

            this._clients.push(polishedClient);

            return this._clients;

        } catch (error) {

            ApiService.handleError('CREATE_CLIENT_ERROR', error);
        }
    }
}
