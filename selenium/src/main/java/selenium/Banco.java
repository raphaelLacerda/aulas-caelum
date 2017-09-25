
package selenium;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.function.BinaryOperator;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Banco {

    // @Inject
    // private BancoDAO dao;

    // @Inject
    // private EnviadorDeMensagem enviadorDeMensagem;
    
   private String nome;
   
   

    public Banco(String nome) {
	super();
	this.nome = nome;
    }

    private List<Conta> contas = new ArrayList<>();

    public List<Conta> getContas() {

	return contas;
    }

    public int adicionarConta(Conta conta) {

	this.contas.add(conta);

	enviarMensagemParaConta(conta);

	// return DAOFactory.getDAO().adicionar(conta);
	return 10;
    }

    void enviarMensagemParaConta(Conta conta) {

	EnviadorDeMensagem.enviar("bem vindo " + conta.getTitular());
    }

    
    
    public String getNome() {

	return nome;
    }
    
    public static void main(String[] args) {

	
	List<Banco> bancos = new ArrayList<>();
	
	bancos.add(new Banco("bb"));
	bancos.add(new Banco("caixa"));
	bancos.add(new Banco("bradesco"));
	
	Stream<String> nomes = bancos.stream().map(banco -> banco.getNome());
	
//	System.out.println(nomes.collect(Collectors.toList()));

	Optional<String> max = nomes.max( (n1,n2) -> n1.length() - n2.length());
	System.out.println(max);
	
    }

}
