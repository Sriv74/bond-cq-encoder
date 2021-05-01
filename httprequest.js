// I did not create this code from scratch and do not intend to take credit for it!
// I found it online but unfortunately did not make note of the source.  I made some
// minor modifications as appropriate for the application.

class HTTPRequest {

   isEmpty(obj) {
      return Object.keys(obj).length === 0;
   }

   build_headers(base_headers, addl_headers) {
      if (HTTPRequest.prototype.isEmpty(addl_headers))
         return base_headers;

      return { ...base_headers, ...addl_headers };
   }

   // Make an HTTP GET Request
   async get(url, headers = {}) {
      var response;
      if (HTTPRequest.prototype.isEmpty(headers))
         response = await fetch(url);
      else
         response = await fetch(url, { headers: headers });

      return response;
   }

   async get_json(url, headers = {}) {
      var response = await HTTPRequest.prototype.get(url, headers);
      return response.json();
   }

   // Make an HTTP PUT Request
   async put(url, data, addl_headers = {}) {
      var headers = HTTPRequest.prototype.build_headers({ 'Content-type': 'application/json' }, addl_headers);
      const response = await fetch(url, { method: 'PUT', headers: headers, body: JSON.stringify(data) });
      return response;
   }

   async put_json(url, data, addl_headers = {}) {
      var response = await HTTPRequest.prototype.put(url, data, addl_headers);
      return response.json();
   }

   // Make an HTTP POST Request
   async post(url, data, addl_headers = {}) {
      var headers = HTTPRequest.prototype.build_headers({ 'Content-type': 'application/json' }, addl_headers);
      const response = await fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(data) });
      return response;
   }

   async post_json(url, data, addl_headers = {}) {
      var response = await HTTPRequest.prototype.post(url, data, addl_headers);
      return response.json();
   }

   // Make an HTTP DELETE Request
   async delete(url, headers = {}) {
      var response;
      if (HTTPRequest.prototype.isEmpty(headers))
         response = await fetch(url, { method: 'DELETE' });
      else
         response = await fetch(url, { method: 'DELETE', headers: headers });

      return response;
   }

   async delete_json(url, headers = {}) {
      var response = await HTTPRequest.prototype.get(url, headers);
      return response.json();
   }
}
