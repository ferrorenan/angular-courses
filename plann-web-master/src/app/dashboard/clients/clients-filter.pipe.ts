import { Pipe, PipeTransform } from '@angular/core';
import { Client } from './client';

@Pipe({
    name: 'clientsFilter'
})
export class ClientsFilterPipe implements PipeTransform {

    transform(clients: Client[], searchText?: string): Client[] {

        if (!searchText) {

            return clients;
        }

        searchText.toLocaleLowerCase();

        return clients.filter(client => {

            if (client.text.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) === -1) {

                return;
            }

            return client;
        });
    }
}
