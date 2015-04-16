/**
 *
 * config.js
 * @Author : Nicolas PRIN
 * @Created : 03/12/2014
 * @Company : Code-IT
 * @Project : API_ROLLERCOPS
 *
 **/

// Global config
exports.CONFIG_PORT = 3000;
exports.CONFIG_DEV	= true;
exports.CONFIG_DB	= 'localhost:27017/api';

// Twillio SMS account
exports.TWILLIO				= true;
exports.SMS_ACCOUNT_SID		= "AC3e5d7ed93c2492600658f45ec45656e3";
exports.SMS_AUTH_TOKEN		= "93e3824677adc0da1025487cd9c5d3cb";
exports.SMS_FROM_NUMBER		= "+46769438837";

// OTHERS DATA
exports.EMAIL_DOMAIN_EXCLUSION	= [
	"@yopmail.com", 
	"@anonymbox.com", 
	"@deadaddress.com",
	"@drdrb.com",
	"@dispostable.com",
	"@you.e4ward.com",
	"@easytrashmail.com",
	"@fakebox.org",
	"@filzmail.com",
	"@get2mail.fr",
	"@advantimo.com",
	"@whatpaas.com",
	"@gishpuppy.com",
	"@guerrillamail.com",
	"@guerrillamailblock.com",
	"@sharklasers.com",
	"@guerrillamail.net",
	"@guerrillamail.org",
	"@guerrillamail.biz",
	"@spam4.me",
	"@grr.la",
	"@guerrillamail.de",
	"@incognitomail.com",
	"@jetable.org",
	"@email-jetable.fr",
	"@mail-temporaire.fr",
	"@mailtemporaire.fr",
	"@mail-temporaire.com",
	"@mailtemporaire.com",
	"@easy-trash-mail.com",
	"@easytrashmail.com",
	"@email-jetable.biz.st",
	"@email-jetable.me",
	"@mailcatch.com",
	"@1800newcareer.co.cc",
	"@b.pythonboard.de",
	"@etsnt.co.uk",
	"@gaudiumetspes.happyforever.com",
	"@harvard.edu.tr.vu",
	"@lowiq.linux-board.com",
	"@mailcatch.legendoftavlon.com",
	"@mailcatch.loveafraid.com.ar",
	"@mailsto.co.cc",
	"@rockuniverze.co.cc",
	"@mailexpire.com",
	"@mailHazard.com",
	"@mailHazard.us",
	"@mailHz.me",
	"@zebins.com",
	"@zebins.eu @amail4.me",
	"@mailinator.com",
	"@reallymymail.com",
	"@mailincubator.com",
	"@mailnull.com",
	"@meltmail",
	"@bx.mintemail.com",
	"@mt2014.com",
	"@mytempemail.com",
	"@spamavert.com",
	"@spambox.us",
	"@spamfree24.org",
	"@spamgourmet.com",
	"@spamobox.com",
	"@sofimail.com",
	"@tempemail.net",
	"@kurzepost.de",
	"@objectmail.com",
	"@proxymail.eu",
	"@rcpt.at",
	"@trash-mail.at",
	"@trashmail.at",
	"@trashmail.me",
	"@trashmail.net",
	"@wegwerfmail.de",
	"@wegwerfmail.net",
	"@wegwerfmail.org",
	"@yopmail.com",
	"@yopmail.fr",
	"@yopmail.net",
	"@cool.fr.nf",
	"@jetable.fr.nf",
	"@nospam.ze.tc",
	"@nomail.xl.cx",
	"@mega.zik.dj",
	"@speed.1s.fr",
	"@courriel.fr.nf",
	"@moncourrier.fr.nf",
	"@monemail.fr.nf",
	"@monmail.fr.nf"];