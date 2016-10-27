package br.com.caelum.controller;

import java.io.IOException;

import javax.servlet.http.Part;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class HomeController {

    @RequestMapping("/")
    public String home() {
        
        return "home/index";
    }

    @RequestMapping(value="/arquivo", method = RequestMethod.POST)
    public String upload(MultipartFile summary) {
        
    	System.out.println("arquivo recebido");
    	System.out.println("arquivo recebido "+ summary);
    	System.out.println("arquivo recebido "+ summary.getName());
    	System.out.println("arquivo recebido "+ summary.getOriginalFilename());
    	try {
			System.out.println("arquivo recebido "+ summary.getInputStream());
		} catch (IOException e) {
			e.printStackTrace();
		}
    	
        return "home/index";
    }

}