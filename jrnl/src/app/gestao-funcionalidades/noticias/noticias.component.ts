import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../models/noticia.model';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})

export class NoticiasComponent implements OnInit {

  //noticias: Noticia[] = [
  //  {_id: '1', categoria: 'teste', titulo: 'Com Dona Flor', descricao_noticia: 'Gravidez não tem nada Grave', texto_noticia: null, destaque: null, imagens: null}
  //];
  //displayedColumns = ['id', 'Categoria', 'Titulo', 'Descricao'];


displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }
}






export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];






//const ELEMENT_DATA: Noticia[] = [
//  {_id: '1', titulo: 'Com Dona Flor', descricao_noticia: 'Gravidez não tem nada Grave', destaque: true},
//];
