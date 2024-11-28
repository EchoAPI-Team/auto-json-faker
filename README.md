# auto-json-faker

[English](https://github.com/EchoAPI-Team/auto-json-faker/blob/main/README.md)｜[日本語](https://github.com/EchoAPI-Team/auto-json-faker/blob/main/README_ja.md)

**auto-json-faker** is a powerful library for transforming JSON and XML data into mock data, using schema generation to automate the process. Ideal for testing and development.

## Features

- Automatically parses JSON5 and XML inputs.
- Generates realistic mock data.
- Easy integration into development workflows.

## Installation

Install the library using npm:

```bash
npm install auto-json-faker
```

## Usage

Here’s how to use **auto-json-faker** in your project:

```javascript
const autoJsonFaker = require('auto-json-faker');

// Example JSON input
const jsonString = `
{
    "name": "John Doe",
    "age": 30,
    "email": "john.doe@example.com"
}
`;

// Example XML input
const xmlString = `
<person>
    <name>John Doe</name>
    <age>30</age>
    <email>john.doe@example.com</email>
</person>
`;

// Generate mock data from JSON
autoJsonFaker(jsonString).then(mockData => {
    console.log('Generated Mock JSON:', mockData);
}).catch(error => {
    console.error('Error:', error);
});

// Generate mock data from XML
autoJsonFaker(xmlString).then(mockData => {
    console.log('Generated Mock XML:', mockData);
}).catch(error => {
    console.error('Error:', error);
});
```

## API

### autoJsonFaker(input, ai = false)

- `input` (String): The JSON5 or XML string to be transformed into mock data.
- `ai` (Boolean): Optional. Reserved for future use with AI capabilities.

Returns a Promise that resolves to the generated mock data, either as a JSON or XML string, depending on the input format.

## License

This project is licensed under the MIT License.

## Contributing

We welcome contributions! Please open an issue or submit a pull request on GitHub.

## Support

For any questions or issues, please contact our team at support@example.com.

## Acknowledgements

- [json2json-schema](https://www.npmjs.com/package/json2json-schema) for schema conversion.
- [xml2js](https://www.npmjs.com/package/xml2js) and [xml-js](https://www.npmjs.com/package/xml-js) for XML parsing and conversion.

---

Happy coding with **auto-json-faker**! Mock data generation has never been this easy.
