# bfhl-be-api
Bajaj Finserv Health Dev Challenge Qualifier 1
Build and deploy a REST API with one endpoint that accepts requests with both GET and POST methods.
POST method endpoint takes in the request (JSON) and returns the following:
1. Status
2. User ID
3. College Email ID
4. College Roll Number
5. Array for numbers
6. Array for alphabets
7. Array with the highest lowercase alphabet (refer to logic explanation below)
8. File
a. Boolean that indicates the validity of the file
b. MIME type of the file
c. File size in KB
GET method endpoint doesn’t take any user input, it just returns an operation_code
API Route: /bfhl

POST
Request
{
"data": [“M”,”1”,”334”,”4”,”B”,”Z”,”a”],
“file_b64”:”BASE_64_STRING”
}
Response
{
"is_success": true,
"user_id": "john_doe_17091999",
“email” : “john@xyz.com”,
“roll_number”:”ABCD123”,
"numbers": [“1”,”334”,”4”],
"alphabets": [“M”,”B”,”Z”,”a”],
“highest_lowercase_alphabet”:[“ a”],
“file_valid”:true,
“file_mime_type”:”image/png”,
“file_size_kb”:”400”
}

GET
{
 “operation_code”:1
}