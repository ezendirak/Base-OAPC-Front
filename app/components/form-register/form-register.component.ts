import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  @Input()  titulo_form:  string;
  @Input()  productes:     string[];
  @Output() evento_form1: EventEmitter<any> = new EventEmitter();

  filtros: any;

  referencia: number;
  periode: String;
  eInformant: String;
  uInformant: String;
  tipusProducte: String;
  varietat: String;
  qualitat: String;
  calibre: String;
  qVenuda: number;
  pSortida: number;
  tancada: String;

  selectedTipusProducte: String;

  constructor() { }

  ngOnInit() {
  }

  onclick($event)
  {
    console.log("CAPTURADO CLICK EN FORMULARIO");
    console.log("EMITIMOS EVENTO eventoRegistreClicked");
    
    this.filtros = { "referencia": this.referencia, "periode" : this.periode, "eInformant" : this.eInformant, "uInformant" : this.uInformant, "tipusProducte" : this.tipusProducte,  "varietat" : this.varietat, "qualitat" : this.qualitat, "calibre" : this.calibre, "qVenuda" : this.qVenuda, "pSortida" : this.pSortida, "tancada" : this.tancada};
    this.evento_form1.emit(JSON.stringify(this.filtros));
  }

}
