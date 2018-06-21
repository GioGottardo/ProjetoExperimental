import { Injectable } from '@angular/core';

@Injectable()
export class ConfigProtudoService {

    private urlService:string;

    constructor(){

        this.urlService = 'http://localhost:8000/';
    }

    getUrlService(): string {

        return this.urlService;
    }

}
