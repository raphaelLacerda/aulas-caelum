package principal;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Run {

    public static void main(String[] args) {

	EntityManagerFactory emf = Persistence.createEntityManagerFactory("default");
	EntityManager em = emf.createEntityManager();
	
	System.out.println(em);
    }
}
