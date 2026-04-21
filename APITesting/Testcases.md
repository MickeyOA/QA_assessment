 ## TEST CASES

 |TEST CASES| TITLE | TYPE STEPS| TEST DATA| EXPECTED STATUS| vALIDATION OINS

 |TC01| Valid request-positive | send GET /api/| none| 200| results exist
 |TC02| Multiple results-positive | send GET /api/?results=6| results=6| 200| results=5 

 |TC03| Invalid parameter value-negative | send GET /api/?results=abc/| api/?results=abc| 200| defaults
 |TC04| Invalid endpoint-negative | send GET /invalid/| none| 404| not found
 |TC05| Invalid datatype-negative | send GET /api/| none| 200| results exist
 |TC06| Empty parameter-edge | send GET /api/| none| 200| results exist
 |TC07| large data request-edge | send GET /api/| none| 200| results exist
 |TC08| Data integrity-edge | send GET /api/| none| 200| results exist


                                                                                                    