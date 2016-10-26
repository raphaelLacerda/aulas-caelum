
package controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import modelo.Contato;

@Controller
@EnableAutoConfiguration
public class ContatoController {
	
	@RequestMapping("/listaContatos")
	public String listarContatos(Model model) {
		
		List<Contato> contatos = new ArrayList<>();
		
		contatos.add(new Contato("Raphael"));
		contatos.add(new Contato("Raphael2"));
		contatos.add(new Contato("Raphael3"));
		
		model.addAttribute("contatos", contatos);
		return "contato/lista";
	}
	
}