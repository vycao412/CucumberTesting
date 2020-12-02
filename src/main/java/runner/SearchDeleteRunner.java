package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/main/Feature/searchDelete.feature"
        , glue = {"stepDefinition"}
        ,plugin = {"pretty", "html:target/htmlreports"}
)
public class SearchDeleteRunner {
}
