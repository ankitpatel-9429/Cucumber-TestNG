$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:/Java/Selenium_WorkSpace/CucumberTestNG/src/main/java/Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Flipkart login Test",
  "description": "",
  "id": "flipkart-login-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": ": Flipkart login test",
  "description": "",
  "id": "flipkart-login-test;:-flipkart-login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title is login page is flipkart login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cuname\u003e\" and \"\u003cpsd\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user redirected to home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "flipkart-login-test;:-flipkart-login-test;",
  "rows": [
    {
      "cells": [
        "uname",
        "psd"
      ],
      "line": 14,
      "id": "flipkart-login-test;:-flipkart-login-test;;1"
    },
    {
      "cells": [
        "ankitpatel9429@gmail.com",
        "Erpa_1992"
      ],
      "line": 15,
      "id": "flipkart-login-test;:-flipkart-login-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": ": Flipkart login test",
  "description": "",
  "id": "flipkart-login-test;:-flipkart-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title is login page is flipkart login",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"ankitpatel9429@gmail.com\" and \"Erpa_1992\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user redirected to home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_login_page()"
});
formatter.result({
  "duration": 11210775600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.title_is_login_page_is_flipkart_login()"
});
formatter.result({
  "duration": 10525400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ankitpatel9429@gmail.com",
      "offset": 13
    },
    {
      "val": "Erpa_1992",
      "offset": 44
    }
  ],
  "location": "LoginStepDefination.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 262025700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 94064700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_redirected_to_home_page()"
});
formatter.result({
  "duration": 3017448100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 772131800,
  "status": "passed"
});
});