import { Component, OnInit } from '@angular/core';

import { HomeService } from '../services/home.services'
import { Noticia } from '../shared/noticia.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  public lerNoticias: Noticia[];
  constructor(private homeService: HomeService) { };

  public loading = true;

  public async ngOnInit() {
    await this.homeService.getNoticias()
      .then((noticias: Noticia[]) => {
        console.log(noticias);
        this.lerNoticias = noticias;
        this.loading = false;
      })
      .catch((param: any) => {
        console.log(param);
      })
  }

  public tratarDescNoticia(descNoticia : string): string {
       return descNoticia.length <= 300 ? descNoticia.padEnd(300, ' ') : descNoticia.substring(0, 297) + '...';
  }

}
