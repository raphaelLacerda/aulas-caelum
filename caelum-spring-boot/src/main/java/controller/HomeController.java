
package controller;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@EnableAutoConfiguration
public class HomeController {
	
	@RequestMapping("/")
	public String home() {
		
		System.out.println("iniciando");
		return "home/index";
	}
		
}