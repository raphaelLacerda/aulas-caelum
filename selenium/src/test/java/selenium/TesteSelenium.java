
package selenium;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteSelenium {

    private WebDriver driver;

    // download do chrome driver
    // https://chromedriver.storage.googleapis.com/index.html?path=2.29/
    @Before
    public void setUp() {

	System.setProperty("webdriver.chrome.driver", "/Users/lacerdaph/JAVA/chromedriver");
	driver = new ChromeDriver();
    }

    @After
    public void tearDown() {

	driver.quit();
    }

    @Test
    public void inicial() {

	Assert.assertTrue(new PaginaInicial(driver)
		.navegar().getConteudoRodape().contains("Raphael Lacerda"));

    }
}
