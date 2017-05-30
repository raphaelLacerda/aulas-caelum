
package selenium;

public class DAOFactory {

    public static BancoDAO getDAO() {

	return new BancoDAO();
    }
}
