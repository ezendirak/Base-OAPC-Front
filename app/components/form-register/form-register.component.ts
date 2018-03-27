import { RegisterResponse } from './../../interfaces/register-response';
import { LiteralsRegistre } from './../../literals-registre.enum';

import { AtributsComboResponse } from './../../interfaces/atributs-combo-response';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';
import { AtributsComboMap } from '../../interfaces/atributs-combo-map';

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
  @Input()  item: RegisterResponse;
  @Input()  comboGeneral: AtributsComboMap;

  @Output() evento_form1: EventEmitter<any> = new EventEmitter();
  @Output() evento_tProduct: EventEmitter<any> = new EventEmitter();
  @Output() evento_form_afegir: EventEmitter<any> = new EventEmitter();

  
  filtros: any;
  referencia: number;
  periode: string;
  eInformant: string;
  uInformant: string;
  tipusProducte: string;
  varietat: string;
  qualitat: string;
  calibre: string;
  qVenuda: number;
  pSortida: number;
  tancada: string;
  
  selectedTipusProducte:  string;
  selectedQualitat:       string;
  selectedKalibre:        string;
  selectedColorCarn:      string;
  
  

  usuariActual: String;

  // @Input() calibresCombo:    String[];
  // @Input() varietatsCombo:   String[];
  // @Input() qualitatsCombo:   String[];
  // @Input() colorsCarnCombo:  String[];

 private literals = LiteralsRegistre;
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
     if(this.selectedTipusProducte){
      params = params.set('tipusProducte', this.selectedTipusProducte);
     }
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

  afegirProd($event){
    console.log("Test event: "+ $event);

    this.filtros = {"tipusProducte" : this.selectedTipusProducte,  "colorCarn" : this.selectedColorCarn, "qualitat" : this.selectedQualitat, "calibre" : this.selectedKalibre, "periode" : this.periode, "quantitatVenuda" : this.qVenuda, "preuSortida" : this.pSortida};
    console.log(this.filtros);
    

    //  console.log("Afegir prod: " + params);
    //  console.log("Afegir OBJECTE " + this.item);
    this.evento_form_afegir.emit(this.filtros);
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
