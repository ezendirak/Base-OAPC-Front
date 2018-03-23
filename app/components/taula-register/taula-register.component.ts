import { RegisterResponse } from './../../interfaces/register-response';
import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LiteralsRegistre } from './../../literals-registre.enum';
import { ModalNoteComponent } from '../modal-note/modal-note.component';
import { BsModalService, BsModalRef }                     from 'ngx-bootstrap';

@Component({
  selector: 'app-taula-register',
  templateUrl: './taula-register.component.html',
  styleUrls: ['./taula-register.component.css']
})
export class TaulaRegisterComponent implements OnInit {

 
  @Input() items;
  @Input() productes;

  @Output() evento_list_put:    EventEmitter<any> = new EventEmitter();
  @Output() evento_list_delete: EventEmitter<any> = new EventEmitter();

  bsModalRef: BsModalRef;
  registreToEdit: RegisterResponse;
  private literals = LiteralsRegistre;

  constructor(private traductorService: TranslateService,
              private modalService : BsModalService) {

    traductorService.setDefaultLang('cat');
   }

  ngOnInit() {
    console.log("LIST-COMPONENT");
  }

  // actionPut(item)
  // {
  //   console.log(item);
  //   this.evento_list_put.emit(item);
  // }

  openModalToEdit(item) {
    
    // Pass in data directly before show method
    const initialState = {
      titulo: 'Modificació del registre',
      lista: [],
      botonCerrar: "Tancar"  
    };

    this.bsModalRef = this.modalService.show(ModalNoteComponent, {initialState});

    // Pass in data directly content atribute after show
    console.log("xavi");
    console.log(item);
    this.bsModalRef.content.datos_entrada = item;    

    console.log(this.bsModalRef.content.datos_entrada);
    // this.bsModalRef.content.datos_entrada = JSON.parse(this.bsModalRef.content.datos_entrada);
    // this.registreToEdit = this.bsModalRef.content.datos_entrada;

    console.log(this.bsModalRef.content.datos_entrada);
    
    console.log("/////////////////////////////");
    console.log(this.registreToEdit);
    // Get out
    this.bsModalRef.content.onClose
      .subscribe( result => { if (result == true)
                                this.actionPutYES();                                
                              else  
                                this.actionPutNO();                                
      })
  }

  actionPutYES(){
    console.log("ACTION PUT YES")
    console.log(this.bsModalRef.content.datos_salida);
  }

  ////////////////////////////////////////////////////////////////////////////////////////

  actionPutNO(){
    console.log("ACTION NO PUT")
    console.log(this.bsModalRef.content.datos_salida);
  }

  actionDelete(item)
  {
    console.log("///////////////////////////////////////");
    console.log(item);
    
    this.evento_list_delete.emit(item);
  }

}
