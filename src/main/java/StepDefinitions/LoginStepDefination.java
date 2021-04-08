package StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {
	
	WebDriver driver;
	@Given("^User is on login page$")
	public void user_is_on_login_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "E:\\Java\\SeleniumJars\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.flipkart.com/account/login");
	}

	@When("^Title is login page is flipkart login$")
	public void title_is_login_page_is_flipkart_login() throws Throwable {
		String title = driver.getTitle();
		Assert.assertEquals("Here's the amazing journey that you've had with Flipkart", title);
	   
	}

	@Then("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_username_and_password(String uname, String psd) throws Throwable {
		driver.findElement(By.xpath("//div[@class='IiD88i _351hSN']/input[1]")).sendKeys(uname);
		driver.findElement(By.xpath("(//div[@class='IiD88i _351hSN']/input)[2]")).sendKeys(psd);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
		driver.findElement(By.xpath("//button[@class='_2KpZ6l _2HKlqd _3AWRsL']")).click();
	}

	@Then("^user redirected to home page$")
	public void user_redirected_to_home_page() throws Throwable {
		Thread.sleep(3000);
		String title = driver.getTitle();
		Assert.assertEquals("Here's the amazing journey that you've had with Flipkart", title);
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	  driver.quit();
	}

}
