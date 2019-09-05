import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Contato } from '../models/contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private localStotage: LocalStorageService) { }

  delete(contato: Contato){
    this.localStotage.remove(contato.id)
  }

  save(contato : Contato){
    this.localStotage.set(contato.id, contato);
  }

  getContato(id:string): Contato{
    return this.localStotage.get(id);
  }

  getAll(): Contato[]{
    return this.localStotage.keys().map(id => this.getContato(id));
  }


}

