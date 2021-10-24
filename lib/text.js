const moment = require('moment-timezone');
const menu = (prefix, pushname) => {
	let p = 0
	return `Hy, ${pushname}, 

┏━━⬣*DOWNLOADER*
✘${prefix}play _query_
✘${prefix}playvid _query_
✘${prefix}youtubedl _query_
✘${prefix}ytmp3 _link_
✘${prefix}ytmp4 _link_
✘${prefix}igstory _username_
✘${prefix}ig _link_
✘${prefix}joox _song_
┗━━⬣

┏━━⬣*EDUCATION*
✘${prefix}brainly _query_
┗━━⬣

┏━━⬣*STICKER*
✘${prefix}stickerwm _pack|author_
✘${prefix}takestick _pack|author_
✘${prefix}toimg _replySticker_
✘${prefix}togif _replySticker_
✘${prefix}semoji _emoji_
✘${prefix}stickerfire
✘${prefix}stickernobg
✘${prefix}stickergif
✘${prefix}sticker
┗━━⬣

┏━━⬣*RANDOM*
✘${prefix}meme
✘${prefix}darkjoke
┗━━⬣
`
}

const ingfo = `Bot ini aktif secara suka2`
const listCode = `Kode bahasa tidak ada\n
Kode      Bahasa\n
Albanian = sq \n
Arabic = ar \n
Armenian = hy \n
Catalan = ca \n
Chinese = zh \n
Croatian = hr \n
Czech = cs \n
Danish = da \n
Dutch = nl \n
English = en \n
Esperanto = eo \n
Finnish = fi \n
French = fr \n
German = de \n
Greek = el \n
Creole = ht = Haitian \n
Hindi = hi \n
Hungarian = hu \n
Icelandic = is \n
Indonesian = id \n
Italian = it \n
Japanese = ja \n
Korean = ko \n
Latin = la \n
Latvian = lv \n
Macedonian = mk \n
Norwegian = no \n
Polish = pl \n
Portuguese = pt \n
Romanian = ro \n
Russian = ru \n
Serbian = sr \n
Slovak = sk \n
Spanish = es \n
Swahili = sw \n
Swedish = sv \n
Tamil = ta \n
Thai = th \n
Turkish = tr \n
Vietnamese = vi \n
Welsh = cy\n
zh-cn = Chinese (China)\n
zh-tw = Chinese (Taiwan)\n
zh-yue = Chinese (Cantonese)\n
en-au = English (Australia)\n
en-uk = English (United Kingdom)\n
en-us = English (United States)\n
pt-br = Portuguese (Brazil)\n
es-es = Spanish (Spain)\n
es-us = Spanish (United States)\n
`

const mess = {
             wait: 'Bentar Yaaa',
			 group: 'this command can only be used in groups!',
			 admin: 'only be used by admin!',
			 botAdmin: 'this command can only be used if the bot is an admin groups',
			 limit: 'Limit penggunaan anda sudah habis,\n_Note: limit akan direset setiap pukul 00.00 WIB_',
			 ownerOnly: 'This command is only for the owner!'
}

module.exports = {
	menu,
	ingfo,
	listCode,
	mess
}
