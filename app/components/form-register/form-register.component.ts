import { AtributsComboResponse } from './../../interfaces/atributs-combo-response';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  @Input()  titulo_form:  string;
  @Input()  productes:     string[];
  @Input()  comboInfo:    AtributsComboResponse;
  @Input()  comboLleno:   Boolean;
  @Output() evento_form1: EventEmitter<any> = new EventEmitter();
  @Output() evento_tProduct: EventEmitter<any> = new EventEmitter();

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
  
  selectedTipusProducte:  String;
  selectedQualitat:       String;
  selectedKalibre:        String;

  comboInfo2: AtributsComboResponse;

  
  // @Input() calibresCombo:    String[];
  // @Input() varietatsCombo:   String[];
  // @Input() qualitatsCombo:   String[];
  // @Input() colorsCarnCombo:  String[];
  

  constructor() { }

  ngOnInit() {
    console.log("Primer log: " + this.comboInfo);
    if(this.comboLleno == true){
      this.comboInfo2.ColorsCarn = ['troll','Test2','Test3'];
      this.comboInfo2.Qualitats = ['Crem', 'de', 'la', 'crem'];
      this.comboInfo2.Calibres = ['molto', 'canelo'];
      this.comboInfo2.Varietats = ['de', 'todo', 'un', 'poco'];
      console.log("Segon log: " + this.comboInfo2);
    }
    
    // if (this.comboInfo){
    //   this.calibresCombo = this.comboInfo.Calibres;
    //   this.varietatsCombo = this.comboInfo.Varietats;
    //   this.qualitatsCombo = this.comboInfo.Qualitats;
    //   this.colorsCarnCombo = this.comboInfo.ColorsCarn;
    //   console.log("Calibres: "+this.calibresCombo);
    //   console.log("Varietats: "+this.varietatsCombo);
    //   console.log("Qualitats: "+this.qualitatsCombo);
    //   console.log("ColorsCarn: "+this.colorsCarnCombo);
    // }
  }

  onclick($event)
  {
    console.log("CAPTURADO CLICK EN FORMULARIO");
    console.log("EMITIMOS EVENTO eventoRegistreClicked");
    
    this.filtros = { "referencia": this.referencia, "periode" : this.periode, "eInformant" : this.eInformant, "uInformant" : this.uInformant, "tipusProducte" : this.tipusProducte,  "varietat" : this.varietat, "qualitat" : this.qualitat, "calibre" : this.calibre, "qVenuda" : this.qVenuda, "pSortida" : this.pSortida, "tancada" : this.tancada};
    this.evento_form1.emit(JSON.stringify(this.filtros));
  }

  changeSelectedTipusProducte($event)
  {
    console.log("EMITIMOS EVENTO Cambio de tipusPro: " + $event);
    this.evento_tProduct.emit(JSON.stringify(this.selectedTipusProducte));
  
  }

}
