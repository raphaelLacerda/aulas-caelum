
package selenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class PaginaInicial {

    private WebDriver driver;

    public PaginaInicial(WebDriver driver) {
	super();
	this.driver = driver;
    }

    public PaginaInicial navegar() {

	driver.navigate().to("http://192.168.10.54/estatico");
	return this;
    }

    public String getConteudoRodape() {

	WebElement findElement = driver.findElement(By.className("footer"));

	return findElement.getText();
    }

}
