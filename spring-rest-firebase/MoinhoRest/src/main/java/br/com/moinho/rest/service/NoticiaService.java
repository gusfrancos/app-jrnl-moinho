package br.com.moinho.rest.service;

import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;

import br.com.moinho.rest.dominio.Noticia;
import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class NoticiaService {
	
	public String salvarNoticia(Noticia noticia) throws InterruptedException, ExecutionException {
		log.info("NoticiaService: salvarNoticia: Inicio" );
		Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection("noticias").document(noticia._id).set(noticia);
        log.info("NoticiaService: salvarNoticia: FIM" );
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

}
