import { downloadContentFromMessage } from '@whiskeysockets/baileys'

import fs from 'fs'


// exemplo de mensagem de audio
// {
//     "audioMessage": {
//         "url": "https://mmg.whatsapp.net/v/t62.7117-24/25074018_1206695276984702_64121129678818118_n.enc?ccb=11-4&oh=01_AdRnT00dVixNGcFmK2vUjtlHfvvfH5J9aAIR77K29P8Ttg&oe=662059C6&_nc_sid=5e03e0&mms3=true",
//         "mimetype": "audio/ogg; codecs=opus",
//         "fileSha256": "RQA7yz6TR0ANeSDYDQxLj2M3yeTybgWOhPSopiHTVmQ=",
//         "fileLength": "12767",
//         "seconds": 5,
//         "ptt": true,
//         "mediaKey": "WXu4ay0jS6xXVT9zt99eE46jBfhacbLFMJ31Yp4/YtY=",
//         "fileEncSha256": "wvsQBeUFXrf21tCJf/JXqVebxgSQGwC8PvZPZIzuZ8w=",
//         "directPath": "/v/t62.7117-24/25074018_1206695276984702_64121129678818118_n.enc?ccb=11-4&oh=01_AdRnT00dVixNGcFmK2vUjtlHfvvfH5J9aAIR77K29P8Ttg&oe=662059C6&_nc_sid=5e03e0",
//         "mediaKeyTimestamp": "1710805020",
//         "waveform": "AAAPEwsKAQcUEwAAAAAAAAAEEwgABQIAAAAAAAAAABMOHhMPBgQJAAAPDgAAAA4CAQAAAAABAAAAAAAAAAAKAA=="
//     }
// }

async function downloadAudio() {
    const download = await downloadContentFromMessage(
        {
            directPath: '/v/t62.7117-24/25074018_1206695276984702_64121129678818118_n.enc?ccb=11-4&oh=01_AdRnT00dVixNGcFmK2vUjtlHfvvfH5J9aAIR77K29P8Ttg&oe=662059C6&_nc_sid=5e03e0',
            mediaKey: 'WXu4ay0jS6xXVT9zt99eE46jBfhacbLFMJ31Yp4/YtY=',
            url: 'https://mmg.whatsapp.net/v/t62.7117-24/25074018_1206695276984702_64121129678818118_n.enc?ccb=11-4&oh=01_AdRnT00dVixNGcFmK2vUjtlHfvvfH5J9aAIR77K29P8Ttg&oe=662059C6&_nc_sid=5e03e0&mms3=true'
        },
        'audio');
    const filestream = fs.createWriteStream(`./audio.ogg`);
    download.pipe(filestream);

    return new Promise((resolve, reject) => {
        download.on('finish', () => {
            resolve(`audio.ogg`);
        });
    });
}

downloadAudio()