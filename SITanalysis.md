## SIT Analysis-Reconciliation mismatch

## APPROACH
I will use three steps structured approach to isentify the root cause:

initial triage to understand the scale and mismatch of the error
end to end transaction tracing acrosss systems
rootcause hypothesis testing using SQL and log analysis

## Initial Triage

- compare total transaction counts betwen:
 - mobile app
 - core banking
 - reconcilliation report

-compare total transaction amounts
 - identify mismatch type ie
 -missing transaction
 - amounnt discrepancies
 - timing or date issues


## End to End Data Flow
mobile app ->API layer ->Core banking -> batch job -> reconcilliation report

## Transaction Trace
trace one mismatched transaction:
- capture a transction from mobile app( ammount, id, timestamp).
- Verify API logs (request and response)
- qquery core banking dtabase
- check batch job output
- verify inclusion in reconcilliation report

## count comparison
select count(*) from mobile_transactions where date="today2026042021"
select count(*) from corebanking where date="today2026042021"
select count(*) from reconciliation report where date="today2026042021"

I will also check for missing transaction using LEFT JOIN, amount differences using JOIN then check on timezone /cutoff


## Possible rootcause analysis
cutoff time mismatch
timezone inconsitency
status filtering
batch jobfailuure
decimal  precisioon differences
SQL join issue eg inner join excluding issue

I would identify the exact point wher data diverges across all systems and fix root caause.