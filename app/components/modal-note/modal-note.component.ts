import { RegisterResponse } from './../../interfaces/register-response';
import { Component, OnInit }        from '@angular/core';

import { BsModalRef }               from "ngx-bootstrap";

import { Subject }                  from 'rxjs';

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'modal-content',
  templateUrl: './modal-note.component.html',
  styleUrls: ['./modal-note.component.css']
})

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

export class ModalNoteComponent implements  OnInit  {

  titulo         : string;
  lista          : any[] = [];
  botonCerrar    : string;

  datos_entrada : RegisterResponse;
  datos_salida  : string;

  public onClose: Subject<boolean>;
 
  id: number;
  calibre: string;
  tipusProducte: string;
  periode: number;
  colorCarn: string;
  qualitat: string;
  qVenuda:  number;
  pSortida: number;

  constructor(public bsModalRef: BsModalRef) 
  { }
 
  ngOnInit() {
    // console.log("MODAL MODAL: ");
    // console.log(this.datos_entrada);
    
    this.onClose = new Subject();
  }

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  public onConfirm(form) {
    //console.log("ON CONFIRM");
    //console.log(form);
    
    this.datos_salida = "DATOS SALIDA ON CONFIRM";
    this.onClose.next(true);
    
    this.bsModalRef.hide();
  }

  //////////////////////////////////////////////////////////////////////////////////////

  public onCancel(form) {
    //console.log("ON CANCEL");    
    //console.log(form);
    
    this.datos_salida = "DATOS SALIDA ON CANCEL";
    this.onClose.next(false);

    this.bsModalRef.hide();
  }
}
