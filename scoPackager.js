var scopackager = require('simple-scorm-packager');
var path = require('path');

  const config = {
    version: '1.2',
    organization: 'Familia',
    title: 'Tratamiento de datos Personales',
    language: 'en-ES',
    masteryScore: 100,
    startingPage: 'index.html',
    source: path.join(__dirname, 'build'),
    package: {
      version: process.env.npm_package_version,
      zip: false,
      author: 'IUSH',
      outputFolder: path.join(__dirname, 'scorm_packages'),
      description: 'Curso de acciones correctivas',
      keywords: ['scorm', 'test', 'course'],
      typicalDuration: 'PT0H5M0S',
      rights: `©${new Date().getFullYear()} Zenú.`,
      vcard: {
        author: 'IUSH',
        org: 'IUSH',
        tel: '(000) 000-0000',
        address: 'my address',
        mail: 'my@email.com',
        url: 'https://mydomain.com'
      }
    }
  };

  scopackager(config, function(msg){
    console.log(msg);
    process.exit(0);
  });
