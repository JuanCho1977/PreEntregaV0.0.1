const multer =  require('multer')
const storage = multer.diskStorage ({

    destination: (req, file, callback )=>{
        callback(null,__dirname+'/public/imag')
        

    },
    filename:    (req, file, callback)=>{
        callback(null, `${Date.now()}-${file.originalname}`)
    }

})

const uploader = multer ({ storage })

module.exports = {uploader}
