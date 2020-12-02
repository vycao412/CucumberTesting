$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/Feature/searchDelete.feature");
formatter.feature({
  "line": 1,
  "name": "Search and Delete Function",
  "description": "",
  "id": "search-and-delete-function",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#  Scenario: Search a hotel and delete this from list of hotel a specific name"
    },
    {
      "line": 3,
      "value": "#    Given Open a certain browser and navigate to Login page of administrator back-end"
    },
    {
      "line": 4,
      "value": "#    When User enters valid account at front site"
    },
    {
      "line": 5,
      "value": "#    And User enters valid password at front site"
    },
    {
      "line": 6,
      "value": "#    And User clicks on Login button at front site"
    },
    {
      "line": 7,
      "value": "#    And navigate to edit hotel https://www.phptravels.net/admin/hotels/"
    },
    {
      "line": 8,
      "value": "#    And Click Search on the bottom"
    },
    {
      "line": 9,
      "value": "#    And Type name of hotel in search textbox"
    },
    {
      "line": 10,
      "value": "#    And Click button Go on the bottom"
    },
    {
      "line": 11,
      "value": "#    And Check into first checkbox in the result list"
    },
    {
      "line": 12,
      "value": "#    And Click on Delete selected button above result table"
    },
    {
      "line": 13,
      "value": "#    And Click Search on the bottom"
    },
    {
      "line": 14,
      "value": "#    And Type name of hotel in search textbox"
    },
    {
      "line": 15,
      "value": "#    And Click button Go on the bottom"
    },
    {
      "line": 16,
      "value": "#    Then Page reloads and return text Entries not found."
    }
  ],
  "line": 18,
  "name": "Search a hotel and delete this from list of hotel with dynamic name",
  "description": "",
  "id": "search-and-delete-function;search-a-hotel-and-delete-this-from-list-of-hotel-with-dynamic-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "Open a certain browser and navigate to Login page of administrator back-end",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User enters valid account at front site",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enters valid password at front site",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Login button at front site",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "navigate to edit hotel https://www.phptravels.net/admin/hotels/",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click Search on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Type name of hotel in search textbox with \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click button Go on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Check into first checkbox in the result list",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on Delete selected button above result table",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click Search on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Type name of hotel in search textbox with \"\u003cname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click button Go on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Page reloads and return text Entries not found.",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "search-and-delete-function;search-a-hotel-and-delete-this-from-list-of-hotel-with-dynamic-name;",
  "rows": [
    {
      "cells": [
        "name"
      ],
      "line": 34,
      "id": "search-and-delete-function;search-a-hotel-and-delete-this-from-list-of-hotel-with-dynamic-name;;1"
    },
    {
      "cells": [
        "Tria Hotel Istanbul Special"
      ],
      "line": 35,
      "id": "search-and-delete-function;search-a-hotel-and-delete-this-from-list-of-hotel-with-dynamic-name;;2"
    },
    {
      "cells": [
        "Rose Rayhaan Rotana"
      ],
      "line": 36,
      "id": "search-and-delete-function;search-a-hotel-and-delete-this-from-list-of-hotel-with-dynamic-name;;3"
    },
    {
      "cells": [
        "Oasis Beach Tower"
      ],
      "line": 37,
      "id": "search-and-delete-function;search-a-hotel-and-delete-this-from-list-of-hotel-with-dynamic-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "Search a hotel and delete this from list of hotel with dynamic name",
  "description": "",
  "id": "search-and-delete-function;search-a-hotel-and-delete-this-from-list-of-hotel-with-dynamic-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "Open a certain browser and navigate to Login page of administrator back-end",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User enters valid account at front site",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enters valid password at front site",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Login button at front site",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "navigate to edit hotel https://www.phptravels.net/admin/hotels/",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click Search on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Type name of hotel in search textbox with \"Tria Hotel Istanbul Special\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click button Go on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Check into first checkbox in the result list",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on Delete selected button above result table",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click Search on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Type name of hotel in search textbox with \"Tria Hotel Istanbul Special\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click button Go on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Page reloads and return text Entries not found.",
  "keyword": "Then "
});
formatter.match({
  "location": "searchDeleteSteps.openACertainBrowserAndNavigateToLoginPageOfAdministratorBackEnd()"
});
formatter.result({
  "duration": 9147431100,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.userEntersValidAccountAtFrontSite()"
});
formatter.result({
  "duration": 78325500,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.userEntersValidPasswordAtFrontSite()"
});
formatter.result({
  "duration": 75650200,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.userClicksOnLoginButtonAtFrontSite()"
});
formatter.result({
  "duration": 55158800,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.navigateToEditHotelHttpsWwwPhptravelsNetAdminHotels()"
});
formatter.result({
  "duration": 7267099100,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.clickSearchOnTheBottom()"
});
formatter.result({
  "duration": 1087179600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tria Hotel Istanbul Special",
      "offset": 43
    }
  ],
  "location": "searchDeleteSteps.typeNameOfHotelInSearchTextboxWith(String)"
});
formatter.result({
  "duration": 1131959700,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.clickButtonGoOnTheBottom()"
});
formatter.result({
  "duration": 1054220800,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.checkIntoFirstCheckboxInTheResultList()"
});
formatter.result({
  "duration": 1025655600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/table/tbody/tr/td[1]/input\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027SE140996\u0027, ip: \u002710.1.75.93\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\ASUS\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:7602}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: bdc092e5702c0a4d5c18eba467ef198d\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/table/tbody/tr/td[1]/input}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat stepDefinition.searchDeleteSteps.checkIntoFirstCheckboxInTheResultList(searchDeleteSteps.java:94)\r\n\tat ✽.And Check into first checkbox in the result list(src/main/Feature/searchDelete.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "searchDeleteSteps.clickOnDeleteSelectedButtonAboveResultTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchDeleteSteps.clickSearchOnTheBottom()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tria Hotel Istanbul Special",
      "offset": 43
    }
  ],
  "location": "searchDeleteSteps.typeNameOfHotelInSearchTextboxWith(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchDeleteSteps.clickButtonGoOnTheBottom()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchDeleteSteps.pageReloadsAndReturnTextEntriesNotFound()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 36,
  "name": "Search a hotel and delete this from list of hotel with dynamic name",
  "description": "",
  "id": "search-and-delete-function;search-a-hotel-and-delete-this-from-list-of-hotel-with-dynamic-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "Open a certain browser and navigate to Login page of administrator back-end",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User enters valid account at front site",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enters valid password at front site",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Login button at front site",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "navigate to edit hotel https://www.phptravels.net/admin/hotels/",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click Search on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Type name of hotel in search textbox with \"Rose Rayhaan Rotana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click button Go on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Check into first checkbox in the result list",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on Delete selected button above result table",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click Search on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Type name of hotel in search textbox with \"Rose Rayhaan Rotana\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click button Go on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Page reloads and return text Entries not found.",
  "keyword": "Then "
});
formatter.match({
  "location": "searchDeleteSteps.openACertainBrowserAndNavigateToLoginPageOfAdministratorBackEnd()"
});
formatter.result({
  "duration": 8379679200,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.userEntersValidAccountAtFrontSite()"
});
formatter.result({
  "duration": 80527700,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.userEntersValidPasswordAtFrontSite()"
});
formatter.result({
  "duration": 74663700,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.userClicksOnLoginButtonAtFrontSite()"
});
formatter.result({
  "duration": 52460000,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.navigateToEditHotelHttpsWwwPhptravelsNetAdminHotels()"
});
formatter.result({
  "duration": 6825350500,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.clickSearchOnTheBottom()"
});
formatter.result({
  "duration": 1064938900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rose Rayhaan Rotana",
      "offset": 43
    }
  ],
  "location": "searchDeleteSteps.typeNameOfHotelInSearchTextboxWith(String)"
});
formatter.result({
  "duration": 1111958000,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.clickButtonGoOnTheBottom()"
});
formatter.result({
  "duration": 1070398200,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.checkIntoFirstCheckboxInTheResultList()"
});
formatter.result({
  "duration": 1029895700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/table/tbody/tr/td[1]/input\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027SE140996\u0027, ip: \u002710.1.75.93\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\ASUS\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:7644}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 899f89c807f6cf6dea309cd176c5a5d9\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/table/tbody/tr/td[1]/input}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat stepDefinition.searchDeleteSteps.checkIntoFirstCheckboxInTheResultList(searchDeleteSteps.java:94)\r\n\tat ✽.And Check into first checkbox in the result list(src/main/Feature/searchDelete.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "searchDeleteSteps.clickOnDeleteSelectedButtonAboveResultTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchDeleteSteps.clickSearchOnTheBottom()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rose Rayhaan Rotana",
      "offset": 43
    }
  ],
  "location": "searchDeleteSteps.typeNameOfHotelInSearchTextboxWith(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchDeleteSteps.clickButtonGoOnTheBottom()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchDeleteSteps.pageReloadsAndReturnTextEntriesNotFound()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 37,
  "name": "Search a hotel and delete this from list of hotel with dynamic name",
  "description": "",
  "id": "search-and-delete-function;search-a-hotel-and-delete-this-from-list-of-hotel-with-dynamic-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "Open a certain browser and navigate to Login page of administrator back-end",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User enters valid account at front site",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User enters valid password at front site",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Login button at front site",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "navigate to edit hotel https://www.phptravels.net/admin/hotels/",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click Search on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Type name of hotel in search textbox with \"Oasis Beach Tower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click button Go on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Check into first checkbox in the result list",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Click on Delete selected button above result table",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click Search on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Type name of hotel in search textbox with \"Oasis Beach Tower\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Click button Go on the bottom",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Page reloads and return text Entries not found.",
  "keyword": "Then "
});
formatter.match({
  "location": "searchDeleteSteps.openACertainBrowserAndNavigateToLoginPageOfAdministratorBackEnd()"
});
formatter.result({
  "duration": 8360607900,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.userEntersValidAccountAtFrontSite()"
});
formatter.result({
  "duration": 70716300,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.userEntersValidPasswordAtFrontSite()"
});
formatter.result({
  "duration": 78156500,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.userClicksOnLoginButtonAtFrontSite()"
});
formatter.result({
  "duration": 71448700,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.navigateToEditHotelHttpsWwwPhptravelsNetAdminHotels()"
});
formatter.result({
  "duration": 6958869800,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.clickSearchOnTheBottom()"
});
formatter.result({
  "duration": 1064703800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Oasis Beach Tower",
      "offset": 43
    }
  ],
  "location": "searchDeleteSteps.typeNameOfHotelInSearchTextboxWith(String)"
});
formatter.result({
  "duration": 1105711600,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.clickButtonGoOnTheBottom()"
});
formatter.result({
  "duration": 1068642300,
  "status": "passed"
});
formatter.match({
  "location": "searchDeleteSteps.checkIntoFirstCheckboxInTheResultList()"
});
formatter.result({
  "duration": 1038477600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/table/tbody/tr/td[1]/input\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027SE140996\u0027, ip: \u002710.1.75.93\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\ASUS\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:7693}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5a348c45b39629920a49514d99e005c0\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[3]/div/div[2]/div[2]/div/div/div[1]/div[2]/table/tbody/tr/td[1]/input}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat stepDefinition.searchDeleteSteps.checkIntoFirstCheckboxInTheResultList(searchDeleteSteps.java:94)\r\n\tat ✽.And Check into first checkbox in the result list(src/main/Feature/searchDelete.feature:27)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "searchDeleteSteps.clickOnDeleteSelectedButtonAboveResultTable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchDeleteSteps.clickSearchOnTheBottom()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Oasis Beach Tower",
      "offset": 43
    }
  ],
  "location": "searchDeleteSteps.typeNameOfHotelInSearchTextboxWith(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchDeleteSteps.clickButtonGoOnTheBottom()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "searchDeleteSteps.pageReloadsAndReturnTextEntriesNotFound()"
});
formatter.result({
  "status": "skipped"
});
});