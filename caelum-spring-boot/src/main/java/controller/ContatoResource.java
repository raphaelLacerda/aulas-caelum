
package controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/contatos")
public class ContatoResource {

    @Autowired
    private TodosContatos todosContatos;

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Contato> getContatos() {

	return todosContatos.listar();

    }

    @RequestMapping(method = RequestMethod.GET, value = "/teste")
    @ResponseBody
    public Contato salvar() {

	return todosContatos.salvar(new Contato("Raphael3"));
    }

}
