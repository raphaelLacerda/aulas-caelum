
package controller;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class TodosContatos {
	
	@PersistenceContext
	private EntityManager entityManager;
	
	@Transactional
	public Contato salvar(Contato contato) {
		
		entityManager.persist(contato);
		return contato;
	}
	
	@SuppressWarnings("unchecked")
	public List<Contato> listar() {
		
		return entityManager.createQuery("select c from Contato c").getResultList();
	}
	
	public Contato buscarPorId(long id) {
		
		return entityManager.find(Contato.class, id);
	}
	
}
