// middleware/upload.js
const multer = require('multer');
const path = require('path');

// Configurações do storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads'); // Pasta onde os arquivos serão salvos
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Renomeia o arquivo
  }
});

// Filtra apenas arquivos de imagem
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/; // Tipos de arquivo permitidos
  const mimetype = filetypes.test(file.mimetype);
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Erro: Tipo de arquivo não suportado!');
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter
});

module.exports = upload;

