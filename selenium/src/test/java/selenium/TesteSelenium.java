
package selenium;

import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteSelenium {

    //download do chrome driver
//    https://chromedriver.storage.googleapis.com/index.html?path=2.29/
    
    @Test
    public void inicial() {

	System.setProperty("webdriver.chrome.driver", "/Users/lacerdaph/JAVA/chromedriver");
	WebDriver driver = new ChromeDriver();

	driver.navigate().to("http://www.google.com");

    }
}
