import { NumberSymbol } from "@angular/common";

export class Noticia {
    public _id: string
    public categoria: string
    public titulo: string
    public descricao_noticia: string
    public texto_noticia: string
    public destaque: boolean
    public imagens: Array<object>
}
