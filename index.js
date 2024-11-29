const { toJsonSchema } = require("json2json-schema"),  // Import the json2json-schema library to convert JSON to JSON Schema
    _ = require('lodash'),                            // Import lodash for utility functions
    JSON5 = require('json5'),                         // Import JSON5 to parse JSON5 formatted strings
    // { js2xml, xml2js } = require('xml-js'),                       // Import xml2js to parse XML strings into JavaScript objects
    jsf = require('apipost-mock-schema'),             // Import apipost-mock-schema to generate mock data from a schema
    jsfObj = new jsf();                               // Create a new instance of the mock schema generator

module.exports = (str, ai = false) => {               // Export a module function that takes a string, and a boolean `ai` as parameters
    return new Promise((resolve, reject) => {         // Return a new Promise
        if (!_.isString(str)) {                       // Check if the input is not a string
            resolve(String(str))                      // Resolve the promise with the string representation of the input
        }

        try {
            const json = JSON5.parse(str);    // Parse the string as JSON5
            try {
                const schema = toJsonSchema(json);           // Convert JSON to JSON Schema
                jsfObj.mock(schema).then(res => {            // Generate mock data from the schema
                    resolve(JSON.stringify(res, null, "\t")); // Resolve the promise with the mock data as a pretty-printed JSON
                }).catch(err => {
                    resolve(str)                              // If mock generation fails, resolve with original input
                })
            } catch (err) {
                resolve(str)                                  // If schema conversion fails, resolve with original input
            }
        } catch (err) {
            resolve(str)                                      // If JSON5 parsing fails, resolve with original input
        }
        // xml2js.parseString(str, (err, result) => {    // Attempt to parse the input as XML
        //     if (err) {                                // If parsing fails, handle as potential JSON
        //         try {
        //             const json = JSON5.parse(str);    // Parse the string as JSON5
        //             try {
        //                 const schema = toJsonSchema(json);           // Convert JSON to JSON Schema
        //                 jsfObj.mock(schema).then(res => {            // Generate mock data from the schema
        //                     resolve(JSON.stringify(res, null, "\t")); // Resolve the promise with the mock data as a pretty-printed JSON
        //                 }).catch(err => {
        //                     resolve(str)                              // If mock generation fails, resolve with original input
        //                 })
        //             } catch (err) {
        //                 resolve(str)                                  // If schema conversion fails, resolve with original input
        //             }
        //         } catch (err) {
        //             resolve(str)                                      // If JSON5 parsing fails, resolve with original input
        //         }
        //     } else { // xml
        //         if (_.isPlainObject(result) && !_.isEmpty(result)) {  // Check if parsed XML result is a non-empty object
        //             try {
        //                 const schema = toJsonSchema(result);          // Convert XML result to JSON Schema
        //                 jsfObj.mock(schema).then(res => {             // Generate mock data from the schema
        //                     const { js2xml } = require('xml-js');     // Import xml-js to convert JavaScript objects to XML
        //                     try {
        //                         const xml = js2xml(res, { compact: true, spaces: 4 });  // Convert mock data back to XML
        //                         resolve(xml);                             // Resolve the promise with the generated XML
        //                     } catch (err) {
        //                         resolve(str)                              // If XML conversion fails, resolve with original input
        //                     }
        //                 }).catch(err => {
        //                     resolve(str)                                  // If mock generation fails, resolve with original input
        //                 })
        //             } catch (err) {
        //                 resolve(str)                                      // If schema conversion fails, resolve with original input
        //             }
        //         }
        //     }
        // });
    })
}
