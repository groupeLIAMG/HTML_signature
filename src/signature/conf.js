/*
 * NB: for images, if you pass in a relative path ('assets/logo.png'), they will be automatically embedded (base64). If you pass in a URL, it will stay as it is.
 */

module.exports = [
  {
    id: 'JohnDoe', // Will be appended to the built templates.
    signature_fr: 'Cordialement,',
    signature_en: 'Cheers,',
    name: 'John Doe',
    title: 'Professor',
    linkedin: '<a href=""><img border="0" alt="linkedin" src="https://politicalfails.files.wordpress.com/2014/07/li-logo.png" width="25" height="25"></a>', // Wrap phone numbers like this to prevent iOS mail from making them blue.
    github: '<a href=""><img border="0" alt="linkedin" src="http://cdn.flaticon.com/png/256/25231.png" width="25" height="25"></a>', // Wrap phone numbers like this to prevent iOS mail from making them blue.
    twitter: '<a href=""><img border="0" alt="linkedin" src="https://g.twimg.com/about/feature-corporate/image/twitterbird_RGB.png" width="22" height="22"></a>', // Wrap phone numbers like this to prevent iOS mail from making them blue.
    contactMail: 'john.doe@gmail.com',
    logoUrl: 'https://raw.githubusercontent.com/groupeLIAMG/HTML_signature/master/src/signature/assets/liamg_logo.png',
    logoAlt: 'liamg logo',
    website: 'http://www.liamg.ca'
  }
]
