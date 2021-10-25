package br.com.moinho.rest.dominio;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Noticia {
	public String _id;
    public String categoria;
    public String titulo;
    public String descricao_noticia;
    public String texto_noticia;
    public boolean destaque;
    public Object[] imagens;
}
