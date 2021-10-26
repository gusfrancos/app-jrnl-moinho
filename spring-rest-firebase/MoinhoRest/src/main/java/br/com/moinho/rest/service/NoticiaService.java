package br.com.moinho.rest.service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.stereotype.Service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import br.com.moinho.rest.dominio.Noticia;
import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
public class NoticiaService {
	
	public static final String COL_NAME="noticias";
	
	public String salvarNoticia(Noticia noticia) throws InterruptedException, ExecutionException {
		log.info("NoticiaService: salvarNoticia: Inicio" );
		Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = dbFirestore.collection(COL_NAME).document(noticia.get_id()).set(noticia);
        log.info("NoticiaService: salvarNoticia: FIM" );
        return collectionsApiFuture.get().getUpdateTime().toString();
    }
	
	public List<Noticia> listarTodasNoticias() throws InterruptedException, ExecutionException {
			log.info("NoticiaService: listarTodasNoticias: Inicio" );
			Firestore dbFirestore = FirestoreClient.getFirestore();
			log.info("NoticiaService: listarTodasNoticias: dbFirestore: ok" );
		    ApiFuture<QuerySnapshot> future = dbFirestore.collection(COL_NAME).get();
		    log.info("NoticiaService: listarTodasNoticias: dbFirestore: collection: ok" );
			
		    List<Noticia> noticias = new ArrayList<>();
			List<QueryDocumentSnapshot> documents = future.get().getDocuments();
			log.info("NoticiaService: listarTodasNoticias: dbFirestore: getDocuments: ok" );
			
			for (QueryDocumentSnapshot document : documents) {
				noticias.add(document.toObject(Noticia.class));
			}
		    
			log.info("NoticiaService: listarTodasNoticias: dbFirestore: lista: ok" );
			
			return noticias;
		    
	    }
	}


