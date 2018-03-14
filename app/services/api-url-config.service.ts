
import { Injectable } from '@angular/core';

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class ApiUrlConfigService {

  public _loginURL           = '/api/login';
  public _whoamiURL          = '/api/whoami';
  public _refreshURL         = '/api/refresh';
  public _change_passwordURL = '/api/change-password';

  public _userallURL         = '/api/user/all';

  public _getNotesURL        = '/api/v1/notes/';
  public _getNotesPageURL    = '/api/v1/notes_page/';
  public _getNotesCountURL   = '/api/v1/notes_count/';
  public _getNoteURL         = '/api/v1/notes/';
  public _postNoteURL        = '/api/v1/notes/';
  public _putNoteURL         = '/api/v1/notes/';
  public _deleteNoteURL      = '/api/v1/notes/';

  public _getRegistresURL        = '/api/v4/registres/';
  public _getRegistresPageURL     = '/api/v4/registres_page/';
  public _getRegistresCountURL   = '/api/v4/registres_count/';
  public _getRegistreURL         = '/api/v4/registres/';
  public _postRegistreURL        = '/api/v4/registres/';
  public _putRegistreURL         = '/api/v4/registres/';
  public _deleteRegistreURL      = '/api/v4/registres/';

  public _getProductesURL        = '/api/v3/pdu/productes/';

  constructor() 
  { }

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

}
