import { RequestConfig } from '../../services/request-config';

export function setAuthorizationHeader() {

    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {

        const originalMethod = descriptor.value;

        descriptor.value = function (...args: RequestConfig[]) {

            if (!args[0].authToken) {

                return originalMethod.apply(this, args);
            }

            this._headers.append('Authorization', `Bearer ${args[0].authToken}`);

            // 'this' is where the decorated function is being executed

            const executedRequest = originalMethod.apply(this, args);

            this._headers.delete('Authorization');

            return executedRequest;
        };
    };
}
