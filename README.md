# HTML courriel signature
Responsive canevas pour les signatures courriel. <br/>

Inspiré de [ce repositoire github](https://github.com/fadeit/responsive-html-email-signature).

## Exemples

![desktop](https://raw.githubusercontent.com/lperozzi/HTML_sign/master/src/signature/assets/example_desktop.png)

<img src="https://raw.githubusercontent.com/lperozzi/HTML_sign/master/src/signature/assets/example_mobile.png" alt="alt text" width="250" height="whatever">

## Pourquoi?
- [x] transforme (`<link>`) CSS en 'inline styles'
- [x] intègre les images locales (`img[src]`) dans le canevas (base64).*
- [x] minifies le canevas
- [x] automatise les changements faits dans les fichiers HTML/CSS et [conf.js](https://raw.githubusercontent.com/lperozzi/HTML_sign/master/src/signature/conf.js)

## Comment ça fonctionne

Cloner ce repositoire et exécuter la commande (necessite [node.js](https://nodejs.org/en/) ) au niveau du [gulpfile.js](https://raw.githubusercontent.com/lperozzi/HTML_sign/master/gulpfile.js)
```
$ npm install
$ gulp
```

## Usage with different e-mail clients (tiré de https://github.com/fadeit/responsive-html-email-signature)

### Thunderbird
There are several Thunderbird plugins which can automatically insert signatures when composing e-mails. We recommend [SmartTemplate4](https://addons.mozilla.org/en-us/thunderbird/addon/smarttemplate4) as one of the options. It can use different templates for new e-mails, replies and forwarded e-mails.


### Apple Mail / OS X

#### Solution 1
- Open Mail.app and go to `Mail` -> `Preferences` -> `Signatures`
- Create a new signature and write some placeholder text (doesn't matter what it is, but you have to identify it later).
- Close Mail.app.
- Open terminal, then open the signature files using TextEdit (might be different for iCloud drive check the article below).
```
$ open -a TextEdit ~/Library/Mobile\ Documents/com~apple~mail/Data/V3/MailData/Signatures/ubiquitous_*.mailsignature
```
- Keep the file with the placeholder open, close the other ones.
- Replace the `<body>...</body>` and it's contents with the template of your choice. *Don't remove the meta information at the top!*
- Open Mail.app and compose a new mail. Select the signature from the list to test it out.

**NB**: Images won't appear in the signature preview, but will work fine when you compose a message.


####Solution 2
You can also open the HTML files in `/dist` in a browser, CMD + A, CMD + C and then paste into the signature box. This won't copy the `<html>` part or the `<style>` part that includes media queries. Follow the guide if you want it.


#### Troubleshooting

If solution #1 doesn't work, you can repeat the steps and lock the signature files before you open Mail.app again.
Lock Files:
```
$ chflags uchg ~/Library/Mail/V3/MailData/Signatures/*.mailsignature
```

If you want to do changes later, you have to unlock the files:
```
$ chflags nouchg ~/Library/Mail/V3/MailData/Signatures/*.mailsignature
```

If you are using iCloud drive or having problems with it, you might also want to check [this article](http://matt.coneybeare.me/how-to-make-an-html-signature-in-apple-mail-for-el-capitan-os-x-10-dot-11/).

### Outlook 2010 Client for Windows 7

#### Solution 1
- Open Outlook 2010 and go to `File > Option > Mail > Signature`
- Create new signature (with a placeholder for your convenience)
- Open signature folder using CMD

> As the AppData folder is hidden, I'd recommend you to opne it via CMD.

```
cd AppData\Roamin\Microsoft
start Signatures
```

- Within this folder, find a file named with your placeholder then right click this file and select edit.
- Replace it with your HTML and save
- Open Outlook again and check your signature

#### Solution 2
Unfortnately, Outlook 2010 client dosen't support HTML file import features for your email template. But you can add your own signatures by simple Copy and paste like **Solution 2** above.

- Open built html file on `/dist` folder and Ctrl A + C
- Open Outlook 2010 and go to `File > Option > Mail > Signature`
- Create new signature and paste copyed one

> **NB**: base 64 will not be shown on Outlook 2010 client. So, I recommend to use external url if you want to use images.
