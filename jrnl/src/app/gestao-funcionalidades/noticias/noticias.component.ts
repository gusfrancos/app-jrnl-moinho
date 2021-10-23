import { Component, OnInit } from '@angular/core';


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


displayedColumns: string[] = ['id', 'categoria', 'titulo', 'descricao_noticia'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }
}






export interface NoticiaElement {
  _id: string
  categoria: string
  titulo: string
  descricao_noticia: string

}

const ELEMENT_DATA: NoticiaElement[] = [
  {_id: '1', categoria: 'Hydrogen', titulo: 'Com Dona Flor', descricao_noticia: 'descricao_noticia'},

];


