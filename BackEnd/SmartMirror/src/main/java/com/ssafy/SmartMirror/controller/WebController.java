package com.ssafy.SmartMirror.controller;

import com.google.firebase.auth.FirebaseAuthException;
import com.ssafy.SmartMirror.config.FireBaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/web")

public class WebController {

    @Autowired
    private FireBaseService fireBaseService;

    @PostMapping("/files")
    public String uploadFile(@RequestParam("file") MultipartFile file,@RequestParam("name") String name) throws IOException, FirebaseAuthException {
        if(file.isEmpty()){
            return "is empty";
        }

        return fireBaseService.uploadFiles(file, name);
    }
}