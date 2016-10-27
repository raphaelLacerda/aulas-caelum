
package controller;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Contato {
	
	@Id
	@GeneratedValue
	private long	id;
	
	private String	nome;
	
	public Contato(String nome) {
		super();
		this.nome = nome;
	}
	
	public Contato() {
		// TODO Auto-generated constructor stub
	}
	
	public long getId() {
		
		return id;
	}
	
	public String getNome() {
		
		return nome;
	}
	
	@Override
	public String toString() {
		
		return "Contato [id=" + id + ", nome=" + nome + "]";
	}
	
}
