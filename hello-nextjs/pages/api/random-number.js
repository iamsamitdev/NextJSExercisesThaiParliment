export default function randomNumber(req, res) {

    // ตัวอย่างการรับ request จากผู้ใช้
    console.log("Request body: ", req.body);
    
    res.json({ 
        num: Math.floor(Math.random()*10)
    })
}