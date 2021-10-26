package br.com.moinho.rest.controller;

import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.moinho.rest.dominio.Noticia;
import br.com.moinho.rest.service.NoticiaService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("noticia")
@Log4j2

@RequiredArgsConstructor
public class NoticiaController {
	@Autowired
    NoticiaService noticiaService;
	
	@PostMapping
    public String salvarNoticia(@RequestBody Noticia noticia ) throws InterruptedException, ExecutionException {
		log.info("NoticiaController: salvarNoticia: INIT" );
		return noticiaService.salvarNoticia(noticia);
    }
	
	@GetMapping
	public ResponseEntity<List<Noticia>> listarTodasNoticias() throws InterruptedException, ExecutionException{
		log.info("NoticiaController: listarTodasNoticias: INIT" );
		return ResponseEntity.ok(noticiaService.listarTodasNoticias());
	}
}
