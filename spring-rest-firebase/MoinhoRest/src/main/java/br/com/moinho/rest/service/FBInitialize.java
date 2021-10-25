package br.com.moinho.rest.service;

import java.io.FileInputStream;

import javax.annotation.PostConstruct;


import org.springframework.stereotype.Service;

import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.auth.oauth2.GoogleCredentials;


import lombok.extern.log4j.Log4j2;

@Log4j2

@Service
public class FBInitialize {

    @PostConstruct
    public void initialize() {
        try {
        	 log.info(this.getClass().getResource(".").getPath() );
            FileInputStream serviceAccount =
                    new FileInputStream(this.getClass().getResource(".").getPath() + "rep-app-moinho-firebase-admin.json");
            
            log.info("FBInitialize: Abriu o Json com chave de acesso." );
            
            
            FirebaseOptions options = new FirebaseOptions.Builder()
                    .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                    .setDatabaseUrl("https://rep-app-moinho-default-rtdb.asia-southeast1.firebasedatabase.app")
                    .build();
            log.info("FBInitialize: Abriu opções de inicialização");

            FirebaseApp.initializeApp(options);
            log.info("FBInitialize: Inicializou");
            
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
