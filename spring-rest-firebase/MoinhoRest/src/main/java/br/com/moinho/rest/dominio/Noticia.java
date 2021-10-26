package br.com.moinho.rest.dominio;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Noticia {
	private String _id;
    private String categoria;
    private String titulo;
    private String descricao_noticia;
    private String texto_noticia;
    private boolean destaque;
    private String urlImg1;
    private String urlImg2;
    private String urlImg3;
    private String urlImg4;
    private String urlImg5;
	
    public Noticia() {
		super();
	}
 
    
}
