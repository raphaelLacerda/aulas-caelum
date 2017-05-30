
package selenium;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

public class Banco {

    // @Inject
    // private BancoDAO dao;

    // @Inject
    // private EnviadorDeMensagem enviadorDeMensagem;

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
}
