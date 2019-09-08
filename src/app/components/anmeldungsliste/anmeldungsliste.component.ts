import { Component, OnInit } from '@angular/core';
import {AnmeldungenService} from '../../anmeldungen.service';

@Component({
  selector: 'app-anmeldungsliste',
  templateUrl: './anmeldungsliste.component.html',
  styleUrls: ['./anmeldungsliste.component.scss']
})
export class AnmeldungslisteComponent implements OnInit {

  public anmeldungen = [];
  console = console;

  constructor(private anmeldungenService: AnmeldungenService) { }

  ngOnInit() {

    this.anmeldungen = this.anmeldungenService.getAnmeldungen();
    console.log(this.anmeldungen);

  }

}

/*ngOnInit() {
  this.getAnmeldungen();
}

getAnmeldungen() {
  this.anmeldungenService.getAnmeldungen().subscribe(anmeldungen => (this.anmeldungen = anmeldungen));

}*/
