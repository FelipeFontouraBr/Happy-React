import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'), //volto duas pastas e entro na pasta upload
        filename: (request, file, cb) => {
            
        }
    })
}