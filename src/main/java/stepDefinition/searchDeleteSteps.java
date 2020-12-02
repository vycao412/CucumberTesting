package stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class searchDeleteSteps {
    public static WebDriver myBrowser;
    @Given("^Open a certain browser and navigate to Login page of administrator back-end$")
    public void openACertainBrowserAndNavigateToLoginPageOfAdministratorBackEnd() {
        String driverPath = "chromedriver.exe";
        System.setProperty("webdriver.chrome.driver", driverPath);
        myBrowser = new ChromeDriver();
        myBrowser.manage().window().maximize();
        myBrowser.get("https://www.phptravels.net/admin");
    }

    @When("^User enters valid account at front site$")
    public void userEntersValidAccountAtFrontSite() {
        WebElement element = myBrowser.findElement(By.xpath("/html/body/div[2]/form[1]/div[1]/label[1]/input"));
        element.sendKeys("admin@phptravels.com");
    }

    @And("^User enters valid password at front site$")
    public void userEntersValidPasswordAtFrontSite() {
        WebElement element = myBrowser.findElement(By.xpath("/html/body/div[2]/form[1]/div[1]/label[2]/input"));
        element.sendKeys("demoadmin");
    }

    @And("^User clicks on Login button at front site$")
    public void userClicksOnLoginButtonAtFrontSite() {
        WebElement element = myBrowser.findElement(By.xpath("/html/body/div[2]/form[1]/button"));
        element.click();
    }

    @And("^navigate to edit hotel https://www\\.phptravels\\.net/admin/hotels/$")
    public void navigateToEditHotelHttpsWwwPhptravelsNetAdminHotels() {
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        myBrowser.get("https://www.phptravels.net/admin/hotels/");
    }

    @And("^Click Search on the bottom$")
    public void clickSearchOnTheBottom() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = myBrowser.findElement(By.xpath("/html/body/div[3]/div/div[2]/div[2]/div/div/div[1]/div[3]/a"));
        element.click();
    }

    @And("^Type name of hotel in search textbox$")
    public void typeNameOfHotelInSearchTextbox() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = myBrowser.findElement(By.xpath("/html/body/div[3]/div/div[2]/div[2]/div/div/div[1]/div[3]/span[1]/input"));
        element.sendKeys("Alzer Hotel Istanbuls");
    }

    @And("^Click button Go on the bottom$")
    public void clickButtonGoOnTheBottom() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = myBrowser.findElement(By.xpath("/html/body/div[3]/div/div[2]/div[2]/div/div/div[1]/div[3]/span[1]/span/a"));
        element.click();
    }

    @And("^Check into first checkbox in the result list$")
    public void checkIntoFirstCheckboxInTheResultList() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = myBrowser.findElement(By.xpath("/html/body/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/table/tbody/tr/td[1]/input"));
        element.click();
    }

    @And("^Click on Delete selected button above result table$")
    public void clickOnDeleteSelectedButtonAboveResultTable() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = myBrowser.findElement(By.xpath("/html/body/div[3]/div/div[2]/div[2]/div/div/div[1]/div[1]/div[1]/button"));
        element.click();
        Alert alert = myBrowser.switchTo().alert();
        alert.accept();
    }

    @Then("^Page reloads and return text Entries not found\\.$")
    public void pageReloadsAndReturnTextEntriesNotFound() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = myBrowser.findElement(By.xpath("/html/body/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/table/tbody/tr/td"));
        Assert.assertEquals("Compare","Entries not found." , element.getAttribute("innerHTML"));
    }

    @And("^Type name of hotel in search textbox with \"([^\"]*)\"$")
    public void typeNameOfHotelInSearchTextboxWith(String name) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        WebElement element = myBrowser.findElement(By.xpath("/html/body/div[3]/div/div[2]/div[2]/div/div/div[1]/div[3]/span[1]/input"));
        element.sendKeys(name);
    }
}
