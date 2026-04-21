## BUG REPORT: Login button unresponsive when valid credentials are entered

**Bug ID:** BUG001 
**Bug Title:** Login button unresponsive when valid credentials are entered- no action
**Module:** Login/ AUTHENTICATION
**Severity:** 
**Priority:**
**Environment:**
**Reported By**
**Date:**

## Description
When a user enters invalid username and password then clicks login button nothng happens. The system does not respond, no loading indicator, no API is triggered and no error message is dsplayed. THe user remains on the login page.

## Precondition
1.use has registered account with verified email.
2.application is deployed in QA-UAT environment
3. cache/cookes are cleared


## Steps to reproduce
navigate to login page
Enter valid email and passwaord
click login
observe the behavior


## Actual Results
nothing happens
no redirect
no ui feedback(loading spinner,disabled state, error)
console shows no error
no network request is visible

## Expected Results
login request should be sent to backend API
LOADING INDICATOR SHOULD APPEAR ( on success redirect to dashboard and on failure a message should)

## Possible root causes
On click handler not bound
form submit prevented but API call
Front end validation blocking
API endpoint unreachable



## Additional Testing done
invalid credentials shows "invalid password"
empty fields shows validation
Enter key- no response


## Workaround 
Roll back to the previous version

## Recommendation
Fix event handler
Add front end unit test
implement loading state