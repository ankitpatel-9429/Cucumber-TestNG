Feature: Flipkart login Test

Scenario Outline:: Flipkart login test

Given User is on login page
When Title is login page is flipkart login
Then user enters "<uname>" and "<psd>"
Then user clicks on login button
Then user redirected to home page
Then close the browser

Examples:

|	uname				  |	psd		    |
|ankitpatel9429@gmail.com| Erpa_1992|

