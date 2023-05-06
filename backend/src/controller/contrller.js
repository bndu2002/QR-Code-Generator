const qrcode = require('qrcode');
const jsqr = require('jsqr');


const generateCode = async (req, res) => {
    try {
        console.log('called')
        const codeText = req.query.codeText // Change this to the message you want to encode in the QR code

        const url = await qrcode.toDataURL(codeText, {
            errorCorrectionLevel: 'M', // Change this to the error correction level you want to use
            margin: 1 // Change this to the margin width in modules (pixels)
        });
        return res.status(200).send({ status: true, message: "Success", data: url })
        //return res.redirect(url)
    } catch (error){
        return res.status(500).send({ status: false, message: error.message })
    }
}

// const readCode = async (req, res) => {
//     try {
//         console.log("readCode called")


//         const qrCode = JSON.parse(req.query.qrcode);

//         console.log(req.query)
        
//         // const code = jsqr(imageData.data, imageData.width, imageData.height);
//         // console.log("after jsqr code")
//         // if (code) {
//         //     res.json({ status: true, data: code.data });
//         // } else {
//         //     res.json({ status: false, message: 'QR code not detected' });
//         // }
//         if(qrCode) return res.status(200).send({status:true , message : "Scuccess"})
//         else return res.status(404).send({status:false , message : "Scuccess"})

//     } catch (error) {
//         return res.status(500).send({ status: false, message: error.message })
//     }
// }

module.exports = { generateCode}