
package selenium;

public class Conta {

    private String titular;

    private double saldo;

    public Conta(String titular) {
	this.titular = titular;
    }

    public Conta() {
    }

    public String getTitular() {

	return titular;
    }

    public double getSaldo() {

	return saldo;
    }

    public void depositar(double valor) {

	if (valor < 0) {
	    throw new IllegalArgumentException();
	}
	this.saldo += valor;
    }

}
