
import { AtributsComboResponse } from './../../interfaces/atributs-combo-response';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';

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
  
  selectedTipusProducte:  string;
  selectedQualitat:       string;
  selectedKalibre:        string;
  selectedColorCarn:      string;
  

  usuariActual: String;

  // @Input() calibresCombo:    String[];
  // @Input() varietatsCombo:   String[];
  // @Input() qualitatsCombo:   String[];
  // @Input() colorsCarnCombo:  String[];
  

  constructor(private traductorService: TranslateService) {
    
    traductorService.setDefaultLang('cat');
    this.usuariActual = 'Pol Garcia';
  }

  
  
  ngOnInit() {    
  }


  switchLanguage(language: string){
    this.traductorService.use(language);
  }
  onclick($event)
  {
    console.log("CAPTURADO CLICK EN FORMULARIO");
    console.log("EMITIMOS EVENTO eventoRegistreClicked");
    
    // this.filtros = { "referencia": this.referencia, "periode" : this.periode, "eInformant" : this.eInformant, "uInformant" : this.uInformant, "tipusProducte" : this.selectedTipusProducte,  "varietat" : this.varietat, "qualitat" : this.selectedQualitat, "calibre" : this.selectedKalibre, "qVenuda" : this.qVenuda, "pSortida" : this.pSortida, "tancada" : this.tancada};
     this.filtros = {"tipusProducte" : this.selectedTipusProducte,  "colorCarn" : this.selectedColorCarn, "qualitat" : this.selectedQualitat, "calibre" : this.selectedKalibre};
     let params = new HttpParams();
     params = params.set('tipusProducte', this.selectedTipusProducte);
    // params = params.set('tipusProducte', this.selectedTipusProducte).set('colorCarn', this.selectedColorCarn).set('qualitat', this.selectedQualitat).set('calibre', this.selectedKalibre);
     if (this.selectedColorCarn){
       params = params.set('colorCarn', this.selectedColorCarn);
     }
     if (this.selectedQualitat){
     params = params.set('qualitat', this.selectedQualitat);
     }
     if (this.selectedKalibre){
    params = params.set('calibre', this.selectedKalibre);
     }
      //  this.evento_form1.emit(JSON.stringify(this.filtros));
      console.log(params);
    this.evento_form1.emit(params);
  }

  changeSelectedTipusProducte($event)
  {
    console.log("EMITIMOS EVENTO Cambio de tipusPro: " + $event);
    this.evento_tProduct.emit(JSON.stringify(this.selectedTipusProducte));
    this.selectedColorCarn="";
    this.selectedQualitat="";
    this.selectedKalibre="";
  }

  changeSelectedQualitat($event)
  {
    this.selectedQualitat = $event;
    console.log("Canvi de qualitat: "+ $event);
    
  }


}
