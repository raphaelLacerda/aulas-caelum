
package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/contatos")
public class ContatoResource {
	
	@Autowired
	private TodosContatos todosContatos;
	
	@RequestMapping(method = RequestMethod.GET)
	public List<Contato> getContatos() {
		
		return todosContatos.listar();
		
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public Contato salvar(@RequestBody Contato contato) {
		
		return todosContatos.salvar(new Contato("Raphael3"));
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/{id}")
	public Contato buscarPorId(@PathVariable long id) {
		
		return todosContatos.buscarPorId(id);
	}
	
	@RequestMapping(method = RequestMethod.PUT, value = "/{id}")
	public Contato atualizar(@RequestBody  Contato contato) {
		
		System.out.println("contato recebido" + contato);
		return todosContatos.salvar(contato);
	}
}
