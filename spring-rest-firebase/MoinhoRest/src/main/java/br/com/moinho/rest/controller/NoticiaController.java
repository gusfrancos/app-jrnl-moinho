package br.com.moinho.rest.controller;

import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.moinho.rest.dominio.Noticia;
import br.com.moinho.rest.service.NoticiaService;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("noticia")
@Log4j2
public class NoticiaController {
	@Autowired
    NoticiaService noticiaService;
	
	@PostMapping("/salvar")
    public String salvarNoticia(@RequestBody Noticia noticia ) throws InterruptedException, ExecutionException {
        return noticiaService.salvarNoticia(noticia);
    }
}
